webpackJsonp([37],{

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Main = __webpack_require__(8);
var Storage = __webpack_require__(10);
__webpack_require__(78);
function init() {
    Main.init();
    if (!Storage.hasAuth()) {
        $('#agent-faq-button').hide();
    }
}
exports.init = init;
init();


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = numeral;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ES6Promise;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[196]);
//# sourceMappingURL=faq.bundle.js.map