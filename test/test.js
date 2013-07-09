var test = require("tape")
    $    = require("../tinix")

test("Compatibility Test", function(t) {
    t.plan(1)
    t.equal($.isSupported, true)
})
