// tinix.js
//
// Copyright 2013 - Santosh Rajan - santoshrajan.com
//


Element.prototype.on = Element.prototype.addEventListener

var tinix = function(id) {
    return document.querySelector(id)
}

tinix.version = "0.0.3"

tinix.all = function(id) {
    return document.querySelectorAll(id)
}

tinix.ready = function(f) {
    if (document.readyState == "loading") {
        document.onreadystatechange = function() {
            if (document.readyState == "interactive") f()
        }
    } else {
        f()
    }
}

tinix.getR = function(s, f) {
    var r = new XMLHttpRequest()
    r.onload = function() {
        if (r.status == 200) {
            if (r.getResponseHeader("Content-Type") == "application/json") {
                s(JSON.parse(r.responseText))
            } else {
                s(r.responseText)
            }
        } else {
            f(r)
        }
    }
    return r
}

// get(url, success, failure [,overrideMimeType])
tinix.get = function(u, s, f, o) {
    var r = this.getR(s, f)
    r.open("GET", u)
    if (o) {
      r.overrideMimeType(o)
    }
    r.send()
}

// post(url, body, contenttype, success, failure)
tinix.post = function(u, b, c, s, f) {
    var r = this.getR(s, f)
    r.open("POST", u)
    r.setRequestHeader("Content-Type", c)
    r.send(b)
}

// postJSON(url, body, success, failure)
tinix.postJSON = function(u, b, s, f) {
    this.post(u, JSON.stringify(b), "application/json", s, f)
}

/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/document.cookie
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/
 
tinix.cookies = {
  getItem: function (sKey) {
    return unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*)|.*"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toGMTString();
          break;
      }
    }
    document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath) {
    if (!sKey || !this.hasItem(sKey)) { return false; }
    document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  }
};

module.exports = tinix

