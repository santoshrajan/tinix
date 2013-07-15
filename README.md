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
#### $.forEach(selector, callback)
`callback` is called with each `Element` of the `NodeList` matching `selector`.
#### $.map(selector, callback)
`callback` is called with each `Element` of the `NodeList` matching `selector`. Returns `Array`.  
#### $.style(selector, property, value)
Changes the selector(s) style.property to value.
#### $.display(selector, value)
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
#### Cookie functions
    $.cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
    $.cookies.getItem(name)
    $.cookies.removeItem(name[, path])
    $.cookies.hasItem(name)
    $.cookies.keys()
#### $.curry(fn [, numArgs])
Will curry a given function. The curried function can be called with less arguments than `fn`. `fn` is called after all its arguments are in, from calls to the curried function. If `fn` expects an arbitrary no of arguments, then you can call curry with an optional `numArgs`.
#### $.compose(fnn, ... , fn2, fn1, fn0)
Compose the given functions. The composed function evaluates the given function from right to left. The value returned is the return value of `fnn`.
    
    