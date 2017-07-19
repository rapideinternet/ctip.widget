// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

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
				propertyName: "value"
			};


		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;

			// jQuery has an extend method which merges the contents of two or
			// more objects, storing the result in the first object. The first object
			// is generally empty as we don't want to alter the default options for
			// future instances of the plugin
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;

			// holds the leaflet map object
			this._map = null;

			// holds the layer data
			this._layerData = [];

			// holds the layer groups
			this._mapLayers = L.layerGroup();

			//holds the jquery layers object
			this._$layers = $(this.element).find(this.settings.layersSelector);

			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {
				this.initMap();
				this.initLayers();
				this.bindLayers();
			},
			initMap: function( ) {
				
				// init and center map
				var mapElem = $(this.element).find(this.settings.mapSelector)[0];
				this._map = L.map(mapElem).setView([this.settings.center.lat, this.settings.center.lng], this.settings.center.zoom);
  
				/*
				L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: "CTIP",
					maxZoom: 18,
					id: "ctip"
				}).addTo(this._map);
				*/

				// vector tiles layer
				L.mapboxGL({
					accessToken: "no-token",
					style: this.settings.vectorStyleUrl
				}).addTo(this._map);

				// geo search control
				new L.Control.GeoSearch({
					provider: new L.GeoSearch.Provider.OpenStreetMap(),
					position: "topcenter",
					showMarker: false
				}).addTo(this._map);

				// layer that holds tye layergroups
				this._mapLayers.addTo(this._map);
			},
			initLayers: function() {
				var _this = this;
				setTimeout(function() { // replace this with the actual ajax call

					// load this from ajax response data
					var layerData = [
						{ 
							"name": "steigers",
							"objects": [
								{"name": "foobar", "type": "point", "geo": [53.219383, 6.566502]},
								{"name": "foobar", "type": "point", "geo": [53.218383, 6.565502]}
							]
						}
					];

					// assign to global scope
					_this._layerData = layerData;
					
					$(_this._layerData).each(function() {
						var layer = this;
						_this.addLayerToPanel(layer);
					});
				}, 1000);
				
			},
			bindLayers: function() {
				var _this = this;
				$(document).on("click", ".layer [type=checkbox]", function() {
					var name = $(this).parents(".layer").data("name");
					if($(this).prop("checked")) {
						console.log("adding layer " + name + " to map");
						_this.addLayerToMap(name);
					} else {
						console.log("removing layer " + name + " from map");
						_this.removeLayerFromMap(name);
					}
				});
			},
			addLayerToPanel: function(layerData) {
				var $layer = $($(this.element).find(this.settings.layerTemplateSelector).html());
				
				$layer.attr("data-name", layerData.name);
				$layer.find("label").html(layerData.name);
				this._$layers.append($layer);
			},
			layerByName: function(name) {
				var layer;
				$(this._layerData).each(function() {
					if(this.name === name) {
						layer = this;
					}
				});
			
				return layer;
			},
			addLayerToMap: function(name) {
				var _this = this;
				var layer = _this.layerByName(name);
				var layerGroup = L.layerGroup();
				
				$(layer.objects).each(function() {
					var object = this;
					switch(object.type) {
						case "point":	
							var marker = L.marker([object.geo[0], object.geo[1]], {
								icon: L.divIcon({
									className: "ctip-icon ctip-icon-" + layer.name
								})
							});
							marker.bindPopup(object.name);
							layerGroup.addLayer(marker);
						break;
					}
				});

				layerGroup.name = name;
				layerGroup.addTo(_this._mapLayers);
			},
			removeLayerFromMap: function(name) {
				var _this = this;
				$(this._mapLayers.getLayers()).each(function() {
					var layerGroup = this;
					
					if(layerGroup.name === name) {
						_this._mapLayers.removeLayer(layerGroup);
					}
				});
			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
