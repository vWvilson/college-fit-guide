webpackHotUpdate("static\\development\\pages\\texas_schools_100.js",{

/***/ "./components/HeaderTailwinds.js":
/*!***************************************!*\
  !*** ./components/HeaderTailwinds.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\HeaderTailwinds.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HeaderTailwinds() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isExpanded = _useState[0],
      toggleExpansion = _useState[1];

  return __jsx("header", {
    className: "bg-blue-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "flex flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("a", {
    className: "font-bold text-white text-xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Breakthrough College Fit Guide"))), __jsx("button", {
    className: "block md:hidden border-green-500 bg-green-500 flex items-center px-3 py-2 rounded text-white",
    onClick: function onClick() {
      return toggleExpansion(!isExpanded);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("svg", {
    className: "fill-current h-3 w-3",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Texas Schools"), __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx("ul", {
    className: "".concat(isExpanded ? "block" : "hidden", " md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, [{
    title: "Home",
    route: "/"
  }, {
    title: "Texas Schools",
    route: "/texas_schools"
  }, {
    title: "HBCUs",
    route: "/hbcu"
  }, {
    title: "Out Of State Schools",
    route: "/outside_texas"
  }].map(function (navigationItem) {
    return __jsx("li", {
      className: "mt-3 md:mt-0 md:ml-6",
      key: navigationItem.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: navigationItem.route,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      className: "block text-blue-700",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, navigationItem.title)));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderTailwinds);

/***/ })

})
//# sourceMappingURL=texas_schools_100.js.48d4fb2a589e6d6edd3f.hot-update.js.map