# tinix

## A Tiny Ajax Library for JavaScript

tinix is a tiny ajax library written as a node module. You can `require` it into your code using `browserify`. Works in all modern browser (>= IE9).

### Install
    $ npm install tinix

### Usage
    var $ = require("tinix")
        
    $(selector)                             // same as document.querySelector
    
    $.all(selector)                         // same as document.querySelectorAll
    
    $.ready(callback)
    
    $.get(url, success, failure [,overrideMimeType])  // success is called with responseText or JSON object
                                            // if JSON response. Failure is called with the request object.
                                            // This is applicable to post requests also. 
    
    $.post(url, body, contenttype, success, failure)
    
    $.postJSON(url, body, success, failure) // body is json object
    
    $.getR(success, failure)                // returns the request object with onload set. Set request
                                            // parameters and call `request.send`. Use if the request
                                            // types provided above are not enough.
    
    // cookie functions
    $.cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
    $.cookies.getItem(name)
    $.cookies.removeItem(name[, path])
    $.cookies.hasItem(name)
    $.cookies.keys() 
    
    <Element>.on                            // same as <Element>.addEventListener 
