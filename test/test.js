var test = require("tape")
    $    = require("../tinix")

test("Compatibility Test", function(t) {
    t.plan(8)
    t.ok(typeof XMLHttpRequest, 'function')
    t.equal(typeof JSON, 'object')
    t.equal(typeof document.readyState, 'string')
    t.equal(typeof document.addEventListener, 'function')
    t.equal(typeof document.querySelector, 'function')
    t.equal(typeof document.querySelectorAll, 'function')
    t.equal(typeof Array.prototype.forEach, 'function')
    t.equal(typeof Array.prototype.map, 'function')
})