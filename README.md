image_hiduken.js
============

Image hiduken is a simple jQuery plugin for responsive images in dynamic websites and applications.


## Usage

Basic usage is simple. Just call image_hiduken on a selector:

```
$(selector).image_hiduken();
```

There are some custom attributes that you can pass to the plugin, including sizes for each of the various image thresholds:

```
$(selector).image_hiduken({
  small_size : 300,
  medium_size : 640,
  large_size : 980,  
});
```

Lastly, add the image source as data attributes to your images:
```
<img src="/path/to/image.jpg" data-small-src="/path/to/small/image.jpg" data-medium-src="/path/to/small/medium.jpg" data-large-src="/path/to/large/image.jpg" />
```
You can also use div's with background images:
```
<div style="background: url('/path/to/image.jpg)" data-small-src="/path/to/small/image.jpg" data-medium-src="/path/to/small/medium.jpg" data-large-src="/path/to/large/image.jpg">
  Hello world!
</div>
```

**WARNING**
This is brand new, haven't really tested it much. I'll have more updates over the next few weeks.