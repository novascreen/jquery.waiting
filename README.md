# jQuery Waiting

jQuery Waiting provides a way to add and remove a loading indication (e.g. an AJAX spinner gif) with some useful options like positioning and adding it as an overlay inside the element or over the entire page.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/Novascreen/jquery.waiting/master/dist/jquery.waiting.min.js
[max]: https://raw.github.com/Novascreen/jquery.waiting/master/dist/jquery.waiting.js

In your web page:

```html
<link rel="stylesheet" type="text/css" href="dist/waiting.css">
<script src="jquery.js"></script>
<script src="dist/jquery.waiting.min.js"></script>
<script>
jQuery(function($) {
  $('#content').waiting();

  // and when done:
  $('#content').waiting('done');
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
