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

			//holds the jquery layers object
			this._$layers = $(this.element).find(this.settings.layersSelector);

			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {

				// Place initialization logic here
				// You already have access to the DOM element and
				// the options via the instance, e.g. this.element
				// and this.settings
				// you can add more functions like the one below and
				// call them like the example below
				this.initMap();
				this.initLayers();
				this.bindLayers();
			},
			initMap: function( ) {
				
				var mapElem = $(this.element).find(this.settings.mapSelector)[0];
				this._map = L.map(mapElem).setView([this.settings.center.lat, this.settings.center.lng], this.settings.center.zoom);

				L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
					attribution: "CTIP",
					maxZoom: 18,
					id: "ctip"
				}).addTo(this._map);
			},
			initLayers: function() {
				var $layer;

				$layer = $($(this.element).find(this.settings.layerTemplateSelector).html());
				$layer.find("label").html("First layer");
				this._$layers.append($layer);

				$layer = $($(this.element).find(this.settings.layerTemplateSelector).html());
				$layer.find("label").html("Second layer");
				this._$layers.append($layer);
			},
			bindLayers: function() {
				console.log("binder");
				$(document).on("click", ".layer [type=checkbox]", function() {
					if($(this).prop("checked")) {
						console.log("adding layer to map");
					} else {
						console.log("removing layer from map");
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
