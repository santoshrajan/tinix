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
    
    $.get(url, success, failure)            // success is called with responseText or
                                            // JSON object if JSON response for all types of request
    
    $.post(url, body, contenttype, success, failure)
    
    $.postJSON(url, body, success, failure) // body is json object
    
    // cookie functions
    $.cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
    $.cookies.getItem(name)
    $.cookies.removeItem(name[, path])
    $.cookies.hasItem(name)
    $.cookies.keys() 
    
    <Element>.on                            // same as <Element>.addEventListener 
