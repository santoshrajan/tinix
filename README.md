# tinix

## Shortcuts for Vanilla JavaScript DOM

tinix is a tiny library of shortcuts for vanilla JavaScript DOM. It is a node module you can `require` it into your code using `browserify`. Works in all modern browser (>= IE9). If all your app needs is a lightweight ajax library then tinix is for you. Only 2k minified.

### Install
    $ npm install tinix        
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
    
    