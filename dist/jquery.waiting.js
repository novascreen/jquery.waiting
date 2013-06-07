/*! Flexible loading indication - v0.1.0 - 2013-06-06
* https://github.com/Novascreen/waiting
* Copyright (c) 2013 Thomas Hermann; Licensed MIT */
(function ($, window, document, undefined) {

  // undefined is used here as the undefined global
  // variable in ECMAScript 3 and is mutable (i.e. it can
  // be changed by someone else). undefined isn't really
  // being passed in so we can ensure that its value is
  // truly undefined. In ES5, undefined can no longer be
  // modified.

  // window and document are passed through as local
  // variables rather than as globals, because this (slightly)
  // quickens the resolution process and can be more
  // efficiently minified (especially when both are
  // regularly referenced in your plugin).

  // Create the defaults once
  var waiting = 'waiting',
    defaults = {
      empty: false,
      position: "center",
      modal: true,
      fillWindow: false
    };

  // The actual plugin constructor

  function Plugin(element, options) {
    this.element = element;

    this.options = $.extend({}, defaults, options);

    this._defaults = defaults;
    this._name = waiting;

    this.init();
  }

  Plugin.prototype = {

    init: function () {
      this.$indicator = $('<div class="waiting-indicator" />');
      this.$indicator = $('<div class="waiting-indicator" />');
      // Place initialization logic here
      // You already have access to the DOM element and
      // the options via the instance, e.g. this.element
      // and this.options
      // you can add more functions like the one below and 
      // call them like so: this.yourOtherFunction(this.element, this.options).
    },

    show: function () {
      
      
    },

    hide: function () {

    },

    over: function () {
      this.hide();
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[waiting] = function (options) {
    return this.each(function () {
      var plugin;
      if (!$.data(this, 'plugin_' + waiting)) {
        $.data(this, 'plugin_' + waiting, new Plugin(this, options));
      }
      else {
        plugin = $.data(this, 'plugin_' + waiting);

        if (typeof options === 'string' && options in plugin) {
          plugin[options].call(plugin);
        }
        else {
          plugin.show.call(plugin);
        }
      }
    });
  };

})(jQuery, window, document);