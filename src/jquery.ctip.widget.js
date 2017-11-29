// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {

    "use strict";

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variables rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "ctipWidget",
        defaults = {
            popup: function (object) {
                return object.name;
            },
            proxyUrl: "https://ctip-proxy.app",
            layers: [],
            propertyName: "value"
        };


    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        // holds the leaflet map object
        this._map = null;

        // holds the layer data
        this._layerData = [];

        // holds the type data from meta
        this._types = [];

        // holds the layer groups
        this._mapLayers = L.layerGroup();
        this._searchLayer = L.layerGroup();

        //holds the jquery layers object
        this._$layers = $(this.element).find(this.settings.layersSelector);

        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
            this.initMap();
            this.initLayers();
            this.bindLayers();
        },
        initMap: function () {

            // init and center map
            var mapElem = $(this.element).find(this.settings.mapSelector)[0];
            this._map = L.map(mapElem).setView([this.settings.center.lat, this.settings.center.lng], this.settings.center.zoom);

            // vector tiles layer
            L.mapboxGL({
                accessToken: "no-token",
                style: this.settings.vectorStyleUrl
            }).addTo(this._map);

            // layer that holds the layergroups
            this._map.addControl(new L.Control.Search({layer: this._searchLayer}));
            this._map.addControl(L.control.locate());
            this._mapLayers.addTo(this._map);
        },
        initLayers: function () {
            var _this = this;
            $.each(_this.settings.layers, function (index, elem) {
                $.ajax({
                    "url": _this.settings.proxyUrl + elem.url,
                    "method": "GET"
                }).done(function (data) {
                    var objects = [];
                    $.each(data.data, function (key, mapObject) {
                        var newMarker = {
                            "name": mapObject.name,
                            "type": mapObject.geoObject.data.geometry.type.toLowerCase(),
                            "geo": _this.reverseCoordinates(mapObject.geoObject.data.geometry.coordinates),
                            "type_id": mapObject.map_object_type_id
                        };
                        if (mapObject.attribute.data.length > 0 &&
                            $.isArray(mapObject.attribute.data)) {
                            var attributes = [];
                            $.each(mapObject.attribute.data, function (index, attribute) {
                                    attributes.push({
                                    id: attribute.id,
                                    name: attribute.name,
                                    type: attribute.type,
                                    value: attribute.value
                                });
                            });
                            newMarker.attribute = attributes;
                        }

                        objects.push(newMarker);
                    });
                    $.each(data.meta, function (key, type) {
                        _this._types.push({
                            id:  parseInt(key),
                            name: type
                        });
                    });

                    var newLayer = {
                        "name": elem.name,
                        "objects": objects
                    };

                    _this._layerData.push(newLayer);
                    _this.addLayerToPanel(newLayer);
                }).fail(function() {
                    window.alert( "Cannot get data for " + elem.name );
                });
            });


        },
        bindLayers: function () {
            var _this = this;
            $(document).on("click", ".layer [type=checkbox]", function () {
                var name = $(this).parents(".layer").data("name");
                if ($(this).prop("checked")) {
                    _this.addLayerToMap(name);
                } else {
                    _this.removeLayerFromMap(name);
                }
            });
        },
        addLayerToPanel: function (layerData) {
            var $layer = $($(this.element).find(this.settings.layerTemplateSelector).html());

            $layer.attr("data-name", layerData.name);
            $layer.find("label").html(layerData.name);
            this._$layers.append($layer);
        },
        layerByName: function (name) {
            var layer;
            $(this._layerData).each(function () {
                if (this.name === name) {
                    layer = this;
                }
            });

            return layer;
        },
        addLayerToMap: function (name) {
            var _this = this;
            var layer = _this.layerByName(name);
            var layerGroup = L.layerGroup();
            $(layer.objects).each(function () {
                var object = this;
                var prefix = "";
                switch (object.type) {
                    case "point":
                        prefix = "ctip-icon ctip-icon-" + layer.name + " " + _this.getTypeNameById(object.type_id);
                        var marker = L.marker(object.geo, {
                            icon: L.divIcon({
                                className: _this.setClassNames(prefix, object.attribute)
                            }),
                            title: object.name
                        });
                        marker.bindPopup(_this.showPopUp(object));
                        layerGroup.addLayer(marker);
                        _this._searchLayer.addLayer(marker);
                        break;
                    case "linestring":
                        prefix = "ctip-line ctip-line-" + layer.name + " " + _this.getTypeNameById(object.type_id);
                        var polyline = L.polyline(object.geo, {
                            className: _this.setClassNames(prefix, object.attribute),
                            title: object.name
                        });
                        polyline.bindPopup(_this.showPopUp(object));
                        layerGroup.addLayer(polyline);
                        _this._searchLayer.addLayer(polyline);
                        break;
                    case "polygon":
                        prefix = "ctip-polygon ctip-polygon-" + layer.name + " " + _this.getTypeNameById(object.type_id);
                        var polygon = L.polygon(object.geo, {
                            className: _this.setClassNames(prefix, object.attribute),
                            title: object.name
                        });
                        polygon.bindPopup(_this.showPopUp(object));
                        layerGroup.addLayer(polygon);
                        _this._searchLayer.addLayer(polygon);
                        break;
                }
            });

            layerGroup.name = name;

            layerGroup.addTo(_this._mapLayers);
        },
        removeLayerFromMap: function (name) {
            var _this = this;
            $(this._mapLayers.getLayers()).each(function () {
                var layerGroup = this;

                if (layerGroup.name === name) {
                    _this._mapLayers.removeLayer(layerGroup);
                }
            });
        },
        setClassNames: function (prefix, attributes) {
            var classNames = prefix;
            if ($.isArray(attributes)) {
                $.each(attributes, function (i, attribute) {
                    switch (attribute.type) {
                        case "integer" :
                        case "double" :
                        case "lookup" :
                        case "string" :
                            classNames += " " + attribute.name +
                                " " + attribute.name + "-" + attribute.value;
                            break;
                        case "boolean":
                            if(attribute.value === true){
                                classNames += " " + attribute.name;
                            }
                            break;
                    }
                });
            }
            return classNames;
        },
        reverseCoordinates: function (coordinates) {
            var _this = this;
            if ($.isArray(coordinates)) {
                var coords = [];
                $.each(coordinates.reverse(), function (index, elem) {
                    if ($.isArray(elem)) {
                        coords.push(_this.reverseCoordinates(elem));
                    } else {
                        coords.push(elem);
                    }
                });
                return coords;
            } else {
                return coordinates;
            }
        },
        getTypeNameById: function (type_id) {
            var object = $.grep(this._types, function (e) {
                return e.id === type_id;
            });
            return typeof object[0] !== "undefined" ? object[0].name : null;
        },
        showPopUp: function (object) {
            var _this = this;
            var popUpContent = "";
            popUpContent += "<b>ID: " + object.name + "</b><br />";
            popUpContent += "<b>Type: " +  _this.getTypeNameById(object.type_id) + "</b><br />";
            $.each(object.attribute, function (index, attribute) {
                popUpContent += attribute.name + ": " + _this.transformValueToReadableDutch(attribute.type, attribute.value) + "<br />";
            });
            return popUpContent;
        },
        transformValueToReadableDutch: function (type, value) {
            if(type === "boolean") {
                return (value === true ? "ja" : "nee");
            } else if (value === null) {
                return "-";
            } else {
                return value;
            }
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
