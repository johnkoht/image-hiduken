/**
 *
 *    image_hiduken.0.1.0.js
 *
 *    image hiduken is a simple plugin for responsive images in dynamic
 *    websites and applications.
 *
 *    copyright 2012 John Koht
 *    Released under the MIT and GPL Licenses.
 *
 *    ----------------------------------------------------- 
 *
 *    author:   John Koht
 *    version:  0.1.0
 *    source:      http://github.com/johnkoht/image-hiduken
 *
 */

(function($) {
  
  /*
  ---------------------------------------------------------------
    Image Hiduken Plugin. This just instantiates the plugin
    and sets up some variables and defaults
  */
  $.fn.image_hiduken = function(options) {
    // Setup the settings
    var settings = $.extend({}, $.fn.image_hiduken.defaults, options);
    $.fn.image_hiduken.vars.elements = this;
    // Initiate the plugin
    image_hiduken.init();
  };
  
  // Defaults, these are configurable by the user
  $.fn.image_hiduken.defaults = {
    default_to_small : true,
    small_size : 300,
    medium_size : 640,
    large_size : 980,
  };
  
  // Standard variables
  $.fn.image_hiduken.vars = {
    elements : null,
    screen_width : 0,
    screen_height : 0,
    current_size : $.fn.image_hiduken.defaults.default_to_small ? $.fn.image_hiduken.defaults.small_size : 0,
  }
  
  
  
  
  /*
  ---------------------------------------------------------------
    image_hiduken object. Most of the methods for resize and
    image updates
  */
  var image_hiduken = {
    
    // init functions  
    init: function() {
      image_hiduken.bind_to_resize();
      image_hiduken.resize_handler();
    },
    
    
    // Bind to window resize event to trigger our resize handler
    bind_to_resize: function() {
      $(window).resize(function() {
        $.fn.image_hiduken.vars.screen_width = $(window).width();
        $.fn.image_hiduken.vars.screen_height = $(window).height();
        image_hiduken.resize_handler();
      });
    },
    
    
    resize_handler: function() {      
      // Let's make sure the screen width and height are NOT set to 0. If so, let's set them
      // to the screen resolution
      if ($.fn.image_hiduken.vars.screen_width == 0 && $.fn.image_hiduken.vars.screen_height == 0) {
        $.fn.image_hiduken.vars.screen_width = $(window).width();
        $.fn.image_hiduken.vars.screen_height = $(window).height();        
      }      
      // Set up our array of sizes and the closest match as null
      var size = null;
      var size_key = null;
      var sizes = {
        small_size : $.fn.image_hiduken.defaults.small_size,
        medium_size : $.fn.image_hiduken.defaults.medium_size,
        large_size : $.fn.image_hiduken.defaults.large_size,
      };
      // Loop over our size array to figure out which size is the closest to our screen size
      $.each(sizes, function(key, value) {
        if (size == null || Math.abs(value - $.fn.image_hiduken.vars.screen_width) < Math.abs(size - $.fn.image_hiduken.vars.screen_width)) {
          size = value;
          size_key = key;
        }
      });
      image_hiduken.update_images(size_key, size);      
    },
    
    
    // Update the actual images
    update_images: function(key, size) {
      // Set up our data attribute
      var data_attribute = "data-" + key.replace("_", "-").replace('size', 'src');      
      // Iterate over all the images and make the appropriate updates
      $.fn.image_hiduken.vars.elements.each(function(index, item) {        
        // Let's make sure the data attribute exists
        if ( $(item).attr(data_attribute) != null ) {        
          // If the item is a div, let's set the background image
          if ( $(item).is('div') ) {
            $(item).css({
              "background-image" : 'url("' + $(item).attr(data_attribute) + '")',
              "background-size" : "100%",
            });
          }
          // If it's an image, let's just replace the source
          else if ( $(item).is('img') ) {
            $(item).attr('src', $(item).attr(data_attribute));
          };
        };
      });
    },

    
  };
  
  
})(jQuery);