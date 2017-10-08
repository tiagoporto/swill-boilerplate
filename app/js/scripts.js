/*!
*   Swill Boilerplate
*   http://swillboilerplate.rocks
*   Copyright (c) 2014-2017 Tiago Porto (http://www.tiagoporto.com)
*   Released under the MIT license
*/

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});

},{}],2:[function(require,module,exports){
'use strict';

/* eslint-disable */

if ("development" === 'production') {
  // Google Analytics: change UA-XXXXX-X to be your site's ID.
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-32351360-4', 'auto');
  ga('send', 'pageview', 'swillboilerplate.rocks' + location.pathname);
}

},{}],3:[function(require,module,exports){
'use strict';

var _domready = require('domready');

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _domready2.default)(function () {
  outdatedBrowser({
    bgColor: '#f25648',
    color: '#fff',
    lowerThan: 'transform',
    languagePath: 'lang/outdated_browser/en.html'
  });

  $('#logo').downloadTip({
    'position': 'right'
  });
}); /* global outdatedBrowser */

},{"domready":1}],4:[function(require,module,exports){
'use strict';

require('./imports/javascript');

require('./imports/google_analytics.js');

},{"./imports/google_analytics.js":2,"./imports/javascript":3}]},{},[4]);
