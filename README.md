# tinix

## Shortcuts for Vanilla JavaScript DOM

tinix is a tiny library of shortcuts for vanilla JavaScript DOM. It is a node module you can `require` it into your code using `browserify`. Works in all modern browser (>= IE9). If all your app needs is a lightweight ajax library then tinix is for you. Only 2k minified.

### Install
    $ npm install tinix        
#### $(selector)
Same as document.querySelector
#### $.all(selector)
Same as document.querySelectorAll
#### $.forEach(selector, callback)
`callback` is called with each `Element` of the `NodeList` returned by `querySelectorAll(selector)`.
#### $.map(selector, callback)
`callback` is called with each `Element` of the `NodeList` returned by `querySelectorAll(selector)`. Returns `Array`.  
#### $.display(selector, displayValue)
Changes the selector(s) style.display to displayValue. eg. "none", "block" etc
#### $.ready(callback)
#### XHR functions
Success is called with responseText, or JSON object if JSON response. Failure is called with the request object.
#### $.get(url, success, failure [,overrideMimeType])  
#### $.post(url, body, contenttype, success, failure)
#### $.postJSON(url, body, success, failure)
`body` is json object
#### $.getR(success, failure)
Returns the request object with onload set. Set request parameters and call `request.send`. Use if the request types provided above are not enough.
#### &lt;Element&gt;.on
Same as &lt;Element&gt;.addEventListener 
#### Cookie functions
    $.cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
    $.cookies.getItem(name)
    $.cookies.removeItem(name[, path])
    $.cookies.hasItem(name)
    $.cookies.keys() 
    
    