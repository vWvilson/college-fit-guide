module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("div", {
  className: "jsx-1210170743",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-1210170743",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/texas_schools",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-1210170743",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Texas Schools")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/outside_texas",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-1210170743",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Schools outside of Texas")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/hbcu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  className: "jsx-1210170743",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "Historically Black Colleges & Universities")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1210170743",
  __self: undefined
}, "@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');a.jsx-1210170743{-webkit-text-decoration:none;text-decoration:none;font-family:'Ubuntu',sans-serif;color:white;}a.jsx-1210170743{font-size:1em;}div.jsx-1210170743{background:#004464;height:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQixBQUUrRSxBQUVuRCxBQVNMLEFBS0ssY0FIcEIsS0FJYSxZQUNiLG1CQWZpQyxnQ0FDdEIsWUFJWiIsImZpbGUiOiJDOlxcVXNlcnNcXEpvaG5uaWVHXFxEZXNrdG9wXFxjb2xsZWdlLWZpdC1ndWlkZVxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTVcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cclxuICAgIDwvTGluaz5cclxuXHJcbiAgICA8TGluayBocmVmPVwiL3RleGFzX3NjaG9vbHNcIj5cclxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+VGV4YXMgU2Nob29sczwvYT5cclxuICAgIDwvTGluaz5cclxuXHJcbiAgICA8TGluayBocmVmID1cIi9vdXRzaWRlX3RleGFzXCI+XHJcbiAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5TY2hvb2xzIG91dHNpZGUgb2YgVGV4YXM8L2E+XHJcbiAgICA8L0xpbms+XHJcblxyXG4gICAgPExpbmsgaHJlZiA9XCIvaGJjdVwiPlxyXG4gICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SGlzdG9yaWNhbGx5IEJsYWNrIENvbGxlZ2VzICYgVW5pdmVyc2l0aWVzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwJyk7XHJcbiAgICAgIGF7XHJcbiAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICBhIHtcclxuICAgICAgICAgZm9udC1zaXplOjFlbTtcclxuXHJcbiAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIGRpdiB7XHJcbiAgICAgICAgIGJhY2tncm91bmQ6IzAwNDQ2NDtcclxuICAgICAgICAgaGVpZ2h0OjIwdmg7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIFxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderTailwinds.js":
/*!***************************************!*\
  !*** ./components/HeaderTailwinds.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\HeaderTailwinds.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HeaderTailwinds() {
  const {
    0: isExpanded,
    1: toggleExpansion
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
    onClick: () => toggleExpansion(!isExpanded),
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
    className: `${isExpanded ? `block` : `hidden`} md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`,
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
  }].map(navigationItem => __jsx("li", {
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
    className: "block text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, navigationItem.title)))))));
}

/* harmony default export */ __webpack_exports__["default"] = (HeaderTailwinds);

/***/ }),

/***/ "./components/IndividualDetails.js":
/*!*****************************************!*\
  !*** ./components/IndividualDetails.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const IndividualDetails = props => {
  const {
    0: showText,
    1: setShowText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h1", {
    onClick: () => setShowText(!showText),
    className: "jsx-2076548677" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.name), showText && __jsx("div", {
    className: "jsx-2076548677" + " " + "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "GENERAL INFORMATION"), __jsx("p", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "SCHOOL NAME:"), " ", props.name, " ", __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, " WEBSITE:"), " ", props.url, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "PUBLIC OR PRIVATE:"), " ", props.private, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "SIZE OF SCHOOL:"), " ", props.size, "(total undergraduate size)", __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "SETTING:"), " ", props.setting, " ", __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "LOCATION:"), " ", props.location), __jsx("div", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("iframe", {
    src: props.iframe,
    width: "300",
    height: "300",
    frameborder: "0",
    allowfullscreen: "",
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx("h2", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "ACADEMIC INFORMATION"), __jsx("p", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "LEVEL OF SELECTIVITY:"), " ", props.selectivity, " ", __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "MEDIAN ACT SCORE:"), " ", props.act, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "MEDIAN SAT CRITICAL READING SCORE:"), " ", props.reading, " ", __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "MEDIAN SAT MATH SCORE:"), " ", props.math, " ", __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:"), " ", props.rate, " ", __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "MOST POPULAR MAJORS: "), " ", props.majors, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("h2", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "FINANCIAL INFORMATION"), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "AVERAGE NET PRICE FOR LOW INCOME STUDENTS:"), " ", props.price, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("h2", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "SOCIAL INFORMATION"), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "RACIAL DEMOGRAPHIC DATA:"), " ", props.damographic, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "PERCENT OF STUDENTS AWARDED PELL GRANTS:"), " ", props.grants, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "PERCENT OF STUDENTS WHO LIVE ON CAMPUS:"), " ", props.lives, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: "), props.programs, __jsx("br", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2076548677",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "BREAKTHROUGH ALUMNI:"), " ", props.alumni)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2076548677",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');.h1.jsx-2076548677{color:#82B441;font-size:2em;font-family:'Oswald',sans-serif;cursor:pointer;}.one.jsx-2076548677{background-color:#E2E2E2;margin:20px;}h2.jsx-2076548677{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;font-size:1.5em;padding:10px;}span.jsx-2076548677{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-2076548677{font-family:'Roboto Condensed',sans-serif;font-size:1.3em;padding:20px;}iframe.jsx-2076548677{margin:0 20px;background:grey;}h3.jsx-2076548677{font-size:1.3em;font-family:'Oswald',sans-serif;color:#0074C8;margin:10px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q29CLEFBRW1ILEFBS3pGLEFBUVcsQUFJbUIsQUFNOUIsQUFPOEIsQUFPOUIsQUFLRCxjQXBDQyxBQWtCOEIsQUFjM0IsRUFLYyxTQTdCbkIsR0FQc0IsRUFnQ3JDLE9BeEJBLEtBR2tCLEFBYUMsTUFhSixRQXpCSyxBQVFwQixFQUtnQixFQXhCRyxFQXFDRixTQVhqQixDQWRpQixHQVhqQixJQXNDSCxNQTFCTyIsImZpbGUiOiJDOlxcVXNlcnNcXEpvaG5uaWVHXFxEZXNrdG9wXFxjb2xsZWdlLWZpdC1ndWlkZVxcY29tcG9uZW50c1xcSW5kaXZpZHVhbERldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5jb25zdCBJbmRpdmlkdWFsRGV0YWlscyA9KHByb3BzKT0+IHtcclxuICAgIGNvbnN0ICBbc2hvd1RleHQsc2V0U2hvd1RleHRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCIgb25DbGljayA9eygpPT4gc2V0U2hvd1RleHQoIXNob3dUZXh0KX0+e3Byb3BzLm5hbWV9PC9oMT5cclxuXHJcbiAgICAgICAgICAgIHtzaG93VGV4dCAmJiA8ZGl2IGNsYXNzTmFtZSA9IFwib25lXCIgPlxyXG4gICAgICAgICAgICA8aDI+R0VORVJBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U0NIT09MIE5BTUU6PC9zcGFuPiB7cHJvcHMubmFtZX0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4gV0VCU0lURTo8L3NwYW4+IHtwcm9wcy51cmx9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5QVUJMSUMgT1IgUFJJVkFURTo8L3NwYW4+IHtwcm9wcy5wcml2YXRlfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U0laRSBPRiBTQ0hPT0w6PC9zcGFuPiB7cHJvcHMuc2l6ZX0odG90YWwgdW5kZXJncmFkdWF0ZSBzaXplKTxicj48L2JyPiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPlNFVFRJTkc6PC9zcGFuPiB7cHJvcHMuc2V0dGluZ30gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5MT0NBVElPTjo8L3NwYW4+IHtwcm9wcy5sb2NhdGlvbn0gXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdj48aWZyYW1lIHNyYz0ge3Byb3BzLmlmcmFtZX0gXHJcbiAgICAgICAgICAgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiBmcmFtZWJvcmRlcj1cIjBcIiAgYWxsb3dmdWxsc2NyZWVuPVwiXCI+PC9pZnJhbWU+PC9kaXY+XHJcbiAgICAgICAgICAgPGgyPkFDQURFTUlDIElORk9STUFUSU9OPC9oMj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5MRVZFTCBPRiBTRUxFQ1RJVklUWTo8L3NwYW4+IHtwcm9wcy5zZWxlY3Rpdml0eX0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBBQ1QgU0NPUkU6PC9zcGFuPiB7cHJvcHMuYWN0fTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NRURJQU4gU0FUIENSSVRJQ0FMIFJFQURJTkcgU0NPUkU6PC9zcGFuPiB7cHJvcHMucmVhZGluZ30gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBTQVQgTUFUSCBTQ09SRTo8L3NwYW4+IHtwcm9wcy5tYXRofSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxzcGFuPkdSQURVQVRJT04gUkFURSBGT1IgU1RVREVOVFMgUkVDRUlWSU5HIFBFTEwgR1JBTlRTOjwvc3Bhbj4ge3Byb3BzLnJhdGV9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NT1NUIFBPUFVMQVIgTUFKT1JTOiA8L3NwYW4+IHtwcm9wcy5tYWpvcnN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxoMj5GSU5BTkNJQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5BVkVSQUdFIE5FVCBQUklDRSBGT1IgTE9XIElOQ09NRSBTVFVERU5UUzo8L3NwYW4+IHtwcm9wcy5wcmljZX08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPGgyPlNPQ0lBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlJBQ0lBTCBERU1PR1JBUEhJQyBEQVRBOjwvc3Bhbj4ge3Byb3BzLmRhbW9ncmFwaGljfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QRVJDRU5UIE9GIFNUVURFTlRTIEFXQVJERUQgUEVMTCBHUkFOVFM6PC9zcGFuPiB7cHJvcHMuZ3JhbnRzfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QRVJDRU5UIE9GIFNUVURFTlRTIFdITyBMSVZFIE9OIENBTVBVUzo8L3NwYW4+IHtwcm9wcy5saXZlc308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UFJPR1JBTVMgVEhBVCBTVVBQT1JUIEZJUlNULUdFTiBTVFVERU5UUyBPTiBDQU1QVVM6IDwvc3Bhbj57cHJvcHMucHJvZ3JhbXN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkJSRUFLVEhST1VHSCBBTFVNTkk6PC9zcGFuPiB7cHJvcHMuYWx1bW5pfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0b3xPc3dhbGR8Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgLmgxIHtcclxuICAgICAgICAgICAgY29sb3I6IzgyQjQ0MTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAub25lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRTJFMkUyO1xyXG4gICAgICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICBjb2xvcjojRkE5RDFDO1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOjEuNWVtO1xyXG4gICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDc0Qzg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuM2VtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWZyYW1le1xyXG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICBoM3tcclxuICAgICAgICAgZm9udC1zaXplOjEuM2VtO1xyXG4gICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgIGNvbG9yOiAjMDA3NEM4O1xyXG4gICAgICAgICBtYXJnaW46MTBweCAyMHB4O1xyXG5cclxuICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kaXZpZHVhbERldGFpbHM7Il19 */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndividualDetails);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _HeaderTailwinds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderTailwinds */ "./components/HeaderTailwinds.js");
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => __jsx("div", {
  className: "jsx-3060885451",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_HeaderTailwinds__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3060885451",
  __self: undefined
}, "div.jsx-3060885451{margin:20px;border:1px solid #DDD;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTb0IsQUFHc0IsWUFFVyxzQkFFeEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxKb2hubmllR1xcRGVza3RvcFxcY29sbGVnZS1maXQtZ3VpZGVcXGNvbXBvbmVudHNcXE15TGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBIZWFkZXJUYWlsd2luZHMgZnJvbSAnLi9IZWFkZXJUYWlsd2luZHMnXHJcblxyXG5cclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICAgIDxkaXYgPlxyXG4gICAgICAgIDxIZWFkZXJUYWlsd2luZHMgLz5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\MyLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./data/texas_schools/texas_schools_one.js":
/*!*************************************************!*\
  !*** ./data/texas_schools/texas_schools_one.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const texas_schools_one = [{
  id: 1,
  name: "Dallas Christian College",
  gpa: 200,
  url: 'www.dallas.edu',
  public: 'Private',
  size: "240",
  setting: "Large Suburb",
  location: "Dallas,TX",
  selectivity: 'Least Selective',
  act: 19,
  reading: 424,
  math: 424,
  rate: '36%',
  majors: 'Interdisiplinary studies - Practical Ministries - Worship Arts - Humanities - Business - Psychology - Teacher Education - Biblical Ministry',
  netPrice: "$22,929",
  demographic: "16% Latino, 24% African American, 46% white",
  grants: "53%",
  livesOnCampus: "46%",
  programs: null,
  alumni: null
}, {
  id: 2,
  name: "Prairie View A&M University",
  gpa: 200,
  url: 'www.pvamu.edu',
  public: 'Public',
  size: "7,417",
  setting: "Town: Distant",
  location: "Prairie View, TX",
  selectivity: 'Least Selective',
  act: 17,
  reading: 420,
  math: 420,
  rate: '31%',
  majors: 'Juvenile Justice and Psychology - Agriculture - Architecture - Agriculture - Army/Navy ROTC - Construction Science - Executive MBA - Civil and Environmental Engineering',
  netPrice: "$7,447",
  demographic: "7% Latino, 85% African American, 2% white",
  grants: "70%",
  livesOnCampus: "51%",
  programs: null,
  alumni: "Felicia Monroe, Criminal Justice"
}, {
  id: 3,
  name: "Texas A&M International University",
  gpa: 200,
  url: 'www.tamiu.edu',
  public: 'Public',
  size: "6,591",
  setting: "Large City",
  location: "Laredo, TX",
  selectivity: 'Least Selective',
  act: 19,
  reading: 450,
  math: 450,
  rate: '41%',
  majors: 'International Economics - Elementary Education with EC-6 Certification and a Bilingual Emphasis - Multidisiplinary Studies in Health Administration - Systems Engineering - Communication Disorders',
  netPrice: "$5,617 ",
  demographic: "95% Latino, 0% African American, 2% white",
  grants: "55%",
  livesOnCampus: "8%",
  programs: null,
  alumni: "Mario Palomo, Criminal Justice"
}, {
  id: 4,
  name: "University of the Incarnate Word",
  gpa: 200,
  url: 'www.uiw.edu ',
  public: 'Private',
  size: "6,423",
  setting: "Large City",
  location: "San Antonio, TX  ",
  selectivity: 'Least Selective',
  act: 19,
  reading: 445,
  math: 445,
  rate: '51%',
  majors: '3-D Animation and Game Design - Asian Studies - Bilingual Communication Arts - Fashion Design - Professional Golf Management - Nuclear Medicine - Vision Studies',
  netPrice: "$17,912",
  demographic: "57% Latino, 7% African American, 19% white",
  grants: "46%",
  livesOnCampus: "17%",
  programs: "TRiO",
  alumni: null
}];
/* harmony default export */ __webpack_exports__["default"] = (texas_schools_one);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/texas_schools_100.js":
/*!************************************!*\
  !*** ./pages/texas_schools_100.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_IndividualDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/IndividualDetails */ "./components/IndividualDetails.js");
/* harmony import */ var _data_texas_schools_texas_schools_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/texas_schools/texas_schools_one */ "./data/texas_schools/texas_schools_one.js");
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\pages\\texas_schools_100.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const texas_schools_100 = () => {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, _data_texas_schools_texas_schools_one__WEBPACK_IMPORTED_MODULE_3__["default"].map(name => __jsx(_components_IndividualDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: name.id,
    name: name.name,
    url: name.url,
    private: name.public,
    size: name.size,
    setting: name.setting,
    location: name.location,
    iframe: null,
    selectivity: name.selectivity,
    act: name.act,
    reading: name.reading,
    math: name.math,
    majors: name.majors,
    rate: name.rate,
    price: name.netPrice,
    demographic: name.demographic,
    grants: name.grants,
    lives: name.livesOnCampus,
    programs: name.programs,
    alumni: name.alumni,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (texas_schools_100);

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!******************************************!*\
  !*** multi ./pages/texas_schools_100.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JohnnieG\Desktop\college-fit-guide\pages\texas_schools_100.js */"./pages/texas_schools_100.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=texas_schools_100.js.map