# tinix

## Shortcuts for Vanilla JavaScript DOM

tinix is a tiny library of shortcuts for vanilla JavaScript DOM. If all your app needs is a lightweight ajax library then tinix is for you. Only 2k minified. Supports IE9 and above.

### Install
    $ npm install tinix
    $ browserify -r tinix -o tinix.js
    // And include tinix.js
    <script type="text/javascript" src="tinix.js"></script>
### Or use directly in browser from browserify-cdn
    <script type="text/javascript" src="http://wzrd.in.nyud.net/bundle/tinix"></script>
#### And in your javascript
    var $ = require("tinix")

#### $(selector)
Same as `document.querySelector`
#### $.all(selector)
Same as `document.querySelectorAll`
#### $.style(selector,rootElem or null, property, value)
Changes the selector(s) style.property to value.
#### $.display(selector, rootElem or null, value)
Changes the selector(s) style.display to value. eg. "none", "block" etc
#### $.ready(callback)
Callback is called when `document.readyState` is `complete` or `interactive`, depending on the browser and how your scripts are loaded.
#### XHR functions
Callback is called with `error` as first argument. Second argument is responseText, or JSON object if JSON response. `error` will be `null` for success, or the `XMLHttpRequest` object for failure.
#### $.get(url, callback [,overrideMimeType])  
#### $.post(url, body, contenttype, callback)
#### $.postJSON(url, body, callback)
`body` is json object
#### $.getR(callback)
Returns the request object with onload set. Set request parameters and call `request.send`. Use if the request types provided above are not enough.
#### &lt;Element&gt;.on
Same as &lt;Element&gt;.addEventListener
#### NodeList.forEach
Iterates over a NodeList, callback is called with every element of the NodeList. 
