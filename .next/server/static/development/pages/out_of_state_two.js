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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
  title: "Home page",
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
  title: "Texas Schools",
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
  title: "Out of State Schools",
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
  title: "Historically Black Colleges & Universities",
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
}, "@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');a.jsx-1210170743{-webkit-text-decoration:none;text-decoration:none;font-family:'Ubuntu',sans-serif;color:white;}a.jsx-1210170743{font-size:1em;}div.jsx-1210170743{background:#004464;height:20vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQixBQUUrRSxBQUVuRCxBQVNMLEFBS0ssY0FIcEIsS0FJYSxZQUNiLG1CQWZpQyxnQ0FDdEIsWUFJWiIsImZpbGUiOiJDOlxcVXNlcnNcXEpvaG5uaWVHXFxEZXNrdG9wXFxjb2xsZWdlLWZpdC1ndWlkZVxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGxpbmtTdHlsZSA9IHtcclxuICBtYXJnaW5SaWdodDogMTVcclxufTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIiB0aXRsZSA9IFwiSG9tZSBwYWdlXCI+XHJcbiAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XHJcbiAgICA8L0xpbms+XHJcblxyXG4gICAgPExpbmsgaHJlZj1cIi90ZXhhc19zY2hvb2xzXCIgdGl0bGUgPSBcIlRleGFzIFNjaG9vbHNcIj5cclxuICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+VGV4YXMgU2Nob29sczwvYT5cclxuICAgIDwvTGluaz5cclxuXHJcbiAgICA8TGluayBocmVmID1cIi9vdXRzaWRlX3RleGFzXCIgdGl0bGUgPSBcIk91dCBvZiBTdGF0ZSBTY2hvb2xzXCI+XHJcbiAgICA8YSBzdHlsZT17bGlua1N0eWxlfT5TY2hvb2xzIG91dHNpZGUgb2YgVGV4YXM8L2E+XHJcbiAgICA8L0xpbms+XHJcblxyXG4gICAgPExpbmsgaHJlZiA9XCIvaGJjdVwiIHRpdGxlID0gXCJIaXN0b3JpY2FsbHkgQmxhY2sgQ29sbGVnZXMgJiBVbml2ZXJzaXRpZXNcIj5cclxuICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9Pkhpc3RvcmljYWxseSBCbGFjayBDb2xsZWdlcyAmIFVuaXZlcnNpdGllczwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VWJ1bnR1JmRpc3BsYXk9c3dhcCcpO1xyXG4gICAgICBhe1xyXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgIFxyXG5cclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgYSB7XHJcbiAgICAgICAgIGZvbnQtc2l6ZToxZW07XHJcblxyXG4gICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBkaXYge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kOiMwMDQ0NjQ7XHJcbiAgICAgICAgIGhlaWdodDoyMHZoO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICBcclxuICA8L2Rpdj5cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\Header.js */"));

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const IndividualDetails = props => {
  const {
    0: showText,
    1: setShowText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx("div", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h1", {
    onClick: () => setShowText(!showText),
    className: "jsx-4043928333" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.name), showText && __jsx("div", {
    className: "jsx-4043928333" + " " + "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "GENERAL INFORMATION"), __jsx("p", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "SCHOOL NAME:"), " ", props.name, " ", __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, " WEBSITE:"), __jsx("a", {
    target: "_blank",
    href: props.url,
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, " ", props.url, " "), __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "PUBLIC OR PRIVATE:"), " ", props.private, __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "SIZE OF SCHOOL:"), " ", props.size, "(total undergraduate size)", __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "SETTING:"), " ", props.setting, " ", __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "LOCATION:"), " ", props.location), __jsx("div", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("iframe", {
    src: props.iframe,
    width: "250",
    height: "250",
    frameborder: "0",
    allowfullscreen: "",
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })), __jsx("h2", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "ACADEMIC INFORMATION"), __jsx("p", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "LEVEL OF SELECTIVITY:"), " ", props.selectivity, " ", __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "MEDIAN ACT SCORE:"), " ", props.act, __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "MEDIAN SAT CRITICAL READING SCORE:"), " ", props.reading, " ", __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "MEDIAN SAT MATH SCORE:"), " ", props.math, " ", __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:"), " ", props.rate, " ", __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "MOST POPULAR MAJORS: "), " ", props.majors), __jsx("h2", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "FINANCIAL INFORMATION"), __jsx("p", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "AVERAGE NET PRICE FOR LOW INCOME STUDENTS:"), " ", props.price), __jsx("h2", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "SOCIAL INFORMATION"), __jsx("p", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "RACIAL DEMOGRAPHIC DATA:"), " ", props.demographic, __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "PERCENT OF STUDENTS AWARDED PELL GRANTS:"), " ", props.grants, __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "PERCENT OF STUDENTS WHO LIVE ON CAMPUS:"), " ", props.lives, __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: "), props.programs, __jsx("br", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-4043928333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "BREAKTHROUGH ALUMNI:"), " ", props.alumni)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4043928333",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');a.jsx-4043928333{color:#82B441;}.h1.jsx-4043928333{color:#82B441;font-size:4vh;font-family:'Oswald',sans-serif;cursor:pointer;margin:5vw;}.one.jsx-4043928333{background-color:#E2E2E2;margin:20px;}h2.jsx-4043928333{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;padding:10px;font-size:4vh;}span.jsx-4043928333{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-4043928333{font-family:'Roboto Condensed',sans-serif;font-size:2.7vh;padding:20px;}iframe.jsx-4043928333{margin:0 20px;background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RG9CLEFBRW1ILEFBR3pGLEFBSUEsQUFTVyxBQUttQixBQU85QixBQU84QixBQU85QixjQXRDakIsQUFJaUIsQUFxQjhCLEFBYzNCLFdBMUJMLEdBUnNCLEVBbUNyQyxPQTFCQSxLQUlrQixBQWNDLGNBYkYsQUFPakIsRUFPZ0IsRUEzQkcsU0FjRCxFQWVsQixJQTVCYyxRQWNWLEdBYkoiLCJmaWxlIjoiQzpcXFVzZXJzXFxKb2hubmllR1xcRGVza3RvcFxcY29sbGVnZS1maXQtZ3VpZGVcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGl2aWR1YWxEZXRhaWxzID0ocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgIFtzaG93VGV4dCxzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIiBvbkNsaWNrID17KCk9PiBzZXRTaG93VGV4dCghc2hvd1RleHQpfT57cHJvcHMubmFtZX08L2gxPlxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHtzaG93VGV4dCAmJiA8ZGl2IGNsYXNzTmFtZSA9IFwib25lXCIgPlxyXG5cclxuICAgICAgICAgICAgPGgyPkdFTkVSQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TQ0hPT0wgTkFNRTo8L3NwYW4+IHtwcm9wcy5uYW1lfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBXRUJTSVRFOjwvc3Bhbj48YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmID17cHJvcHMudXJsfT4ge3Byb3BzLnVybH0gPC9hPjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UFVCTElDIE9SIFBSSVZBVEU6PC9zcGFuPiB7cHJvcHMucHJpdmF0ZX08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNJWkUgT0YgU0NIT09MOjwvc3Bhbj4ge3Byb3BzLnNpemV9KHRvdGFsIHVuZGVyZ3JhZHVhdGUgc2l6ZSk8YnI+PC9icj4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TRVRUSU5HOjwvc3Bhbj4ge3Byb3BzLnNldHRpbmd9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TE9DQVRJT046PC9zcGFuPiB7cHJvcHMubG9jYXRpb259IFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+PGlmcmFtZSBzcmM9IHtwcm9wcy5pZnJhbWV9IFxyXG4gICAgICAgICAgIHdpZHRoPVwiMjUwXCIgaGVpZ2h0PVwiMjUwXCIgZnJhbWVib3JkZXI9XCIwXCIgIGFsbG93ZnVsbHNjcmVlbj1cIlwiPjwvaWZyYW1lPjwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxoMj5BQ0FERU1JQyBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkxFVkVMIE9GIFNFTEVDVElWSVRZOjwvc3Bhbj4ge3Byb3BzLnNlbGVjdGl2aXR5fSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIEFDVCBTQ09SRTo8L3NwYW4+IHtwcm9wcy5hY3R9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBTQVQgQ1JJVElDQUwgUkVBRElORyBTQ09SRTo8L3NwYW4+IHtwcm9wcy5yZWFkaW5nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIFNBVCBNQVRIIFNDT1JFOjwvc3Bhbj4ge3Byb3BzLm1hdGh9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5HUkFEVUFUSU9OIFJBVEUgRk9SIFNUVURFTlRTIFJFQ0VJVklORyBQRUxMIEdSQU5UUzo8L3NwYW4+IHtwcm9wcy5yYXRlfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TU9TVCBQT1BVTEFSIE1BSk9SUzogPC9zcGFuPiB7cHJvcHMubWFqb3JzfVxyXG4gICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGgyPkZJTkFOQ0lBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BVkVSQUdFIE5FVCBQUklDRSBGT1IgTE9XIElOQ09NRSBTVFVERU5UUzo8L3NwYW4+IHtwcm9wcy5wcmljZX1cclxuICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxoMj5TT0NJQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICA8cD4gICBcclxuICAgICAgICAgICAgICAgPHNwYW4+UkFDSUFMIERFTU9HUkFQSElDIERBVEE6PC9zcGFuPiB7cHJvcHMuZGVtb2dyYXBoaWN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBFUkNFTlQgT0YgU1RVREVOVFMgQVdBUkRFRCBQRUxMIEdSQU5UUzo8L3NwYW4+IHtwcm9wcy5ncmFudHN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBFUkNFTlQgT0YgU1RVREVOVFMgV0hPIExJVkUgT04gQ0FNUFVTOjwvc3Bhbj4ge3Byb3BzLmxpdmVzfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QUk9HUkFNUyBUSEFUIFNVUFBPUlQgRklSU1QtR0VOIFNUVURFTlRTIE9OIENBTVBVUzogPC9zcGFuPntwcm9wcy5wcm9ncmFtc308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+QlJFQUtUSFJPVUdIIEFMVU1OSTo8L3NwYW4+IHtwcm9wcy5hbHVtbml9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvfE9zd2FsZHxSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IzgyQjQ0MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiM4MkI0NDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0dmg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46NXZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLm9uZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0UyRTJFMjtcclxuICAgICAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgIGNvbG9yOiNGQTlEMUM7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6NHZoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjojMDA3NEM4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyLjd2aDtcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmcmFtZXtcclxuICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiBcclxuXHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRpdmlkdWFsRGV0YWlsczsiXX0= */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
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
  className: "jsx-2686967078",
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
  id: "2686967078",
  __self: undefined
}, "div.jsx-2686967078{border:1px solid #DDD;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxNeUxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTb0IsQUFLaUMsc0JBRXhCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxNeUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgSGVhZGVyVGFpbHdpbmRzIGZyb20gJy4vSGVhZGVyVGFpbHdpbmRzJ1xyXG5cclxuXHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgICA8SGVhZGVyVGFpbHdpbmRzIC8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgLy8gbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG48L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\MyLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./data/outside_schools/outside_two.js":
/*!*********************************************!*\
  !*** ./data/outside_schools/outside_two.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const outside_two = [{
  id: 38,
  name: "California State University-Monterey Bay",
  gpa: 201,
  url: 'https://www.csumb.edu',
  public: 'Public',
  size: "6,758",
  setting: "Midsize Suburb",
  location: "Seaside, CA",
  selectivity: 'Less Selective',
  act: 20,
  reading: null,
  math: null,
  rate: '54%',
  majors: "Marine Science - Recording Technology - Nonprofits - Television/Radio/Media - Watershed Science - Cinematic Arts and Technology - Collaborative Health and Human Services - Interactive Design",
  netPrice: null,
  demographic: "45% Latino, 5% African American, 27% white",
  grants: "49%",
  livesOnCampus: null,
  programs: "TRiO -- Summer Bridge Program  -- First in My Family - Wellness Workshop Series",
  alumni: null
}, {
  id: 39,
  name: "California State University-Stanislaus",
  gpa: 201,
  url: 'https://www.csustan.edu',
  public: 'Public',
  size: "8,620",
  setting: "Small Suburb",
  location: "Turlock, CA",
  selectivity: 'Less Selective',
  act: "Test Optional",
  reading: "Test Optional",
  math: "Test Optional ",
  rate: '57%',
  majors: "Health Science - Marketing - Sociology - Business Administration - Computer Science - General Business - Physics and Physical Sciences - Nursing",
  netPrice: null,
  demographic: "51% Latino, 2% African American, 23% white",
  grants: "61%",
  livesOnCampus: "8%",
  programs: "Student Support Services (TRiO)",
  alumni: null
}, {
  id: 40,
  name: "College of Mount Saint Vincent",
  gpa: 201,
  url: 'https://www.mountsaintvincent.edu',
  public: 'Private',
  size: "1,702",
  setting: "Large City",
  location: "Bronx, NY",
  selectivity: 'Less Selective',
  act: 20,
  reading: 445,
  math: 445,
  rate: '52%',
  majors: "Nursing -- Business -- Computation and Coding -- ROTC - Army/Air Force -- Library and Information Studies -- Sports Management -- Interdisciplinary Studies -- Sociology",
  netPrice: "$13,060",
  demographic: "40% Latino, 15% African American, 25% white",
  grants: "64%",
  livesOnCampus: "49%",
  programs: null,
  alumni: null
}, {
  id: 41,
  name: "CUNY Queens College",
  gpa: 201,
  url: 'https://qc.cuny.edu',
  public: 'Public',
  size: "16,326",
  setting: "Large City",
  location: "Queens, NY",
  selectivity: 'Less Selective',
  act: 21,
  reading: 525,
  math: 525,
  rate: '58%',
  majors: "Psychology - Health Professions - Graphic Design - Labor Studies - Student Services and Counseling - Medicine Journalism - Business and Liberal Arts",
  netPrice: null,
  demographic: "28% Latino, 9% African American, 27% white",
  grants: "51%",
  livesOnCampus: "2%",
  programs: null,
  alumni: null
}, {
  id: 42,
  name: "Eastern Illinois University",
  gpa: 201,
  url: 'https://www.eiu.edu',
  public: 'Public',
  size: "5,957",
  setting: "Town: Distant",
  location: "Charleston, IL",
  selectivity: 'Less Selective',
  act: 21,
  reading: null,
  math: null,
  rate: '56%',
  majors: "Digital Media - Early Childhood Education - Family and Consumer Sciences - Health Administration - Health Communication - Kinesiology and Sports Studies - Journalism - Biological Sciences",
  netPrice: null,
  demographic: "7% Latino, 19% African American, 67% white",
  grants: "49%",
  livesOnCampus: "38%",
  programs: "TRiO - Access Granted Program",
  alumni: null
}, {
  id: 43,
  name: "Fitchburg State Colleg",
  gpa: 201,
  url: 'https://www.fitchburgstate.edu',
  public: 'Public',
  size: "4,162",
  setting: "Midsize Suburb",
  location: "Fitchburg, MA",
  selectivity: 'Less Selective',
  act: 21,
  reading: 495,
  math: 495,
  rate: '52%',
  majors: "Game Design - Communications Media - Human Services - Geographic Science and Technology Program - Criminal Justice - Special Education - Middle School Education - Nursing",
  netPrice: null,
  demographic: "11% Latino, 9% African American, 71% white",
  grants: "38%",
  livesOnCampus: "65%",
  programs: "Expanding Horizons Program (TRiO)",
  alumni: null
}, {
  id: 44,
  name: "Fresno Pacific University",
  gpa: 201,
  url: 'https://www.fresno.edu',
  public: 'Private',
  size: "2,431",
  setting: "Large City",
  location: "Fresno, CA",
  selectivity: 'Less Selective',
  act: 21,
  reading: 480,
  math: 480,
  rate: '56%',
  majors: "Software Engineering - Criminal Justice - Pre-Law - Pre-Health Sciences - Kinesiology - Intercultural Studies",
  netPrice: "$10,811",
  demographic: "48% Latino, 5% African American, 32% white",
  grants: "48%",
  livesOnCampus: "45%",
  programs: "ALAS",
  alumni: null
}, {
  id: 45,
  name: "Keene State College",
  gpa: 201,
  url: 'https://www.keene.edu',
  public: 'Public',
  size: "4,165",
  setting: "Town: Distant",
  location: "Keene, NH",
  selectivity: 'Less Selective',
  act: 21,
  reading: 490,
  math: 490,
  rate: '59%',
  majors: "Safety and Occupational Health Applied Sciences - Sustainable Product Design and Innovation - Journalism, Multimedia, Public Relations - Holocaust and Genocide Studies - Film Studies - Public Health - Art and Design - Communication and Philosophy",
  netPrice: null,
  demographic: "3% Latino, 1% African American, 85% white",
  grants: "26%",
  livesOnCampus: "53%",
  programs: "\"I'm First\" Program - Common Ground Multicultural Club ",
  alumni: null
}, {
  id: 46,
  name: "Longwood University",
  gpa: 201,
  url: 'https://www.longwood.edu ',
  public: 'Public',
  size: "4,520",
  setting: "Town: Remote",
  location: "Farmville, VA",
  selectivity: 'Less Selective',
  act: 21,
  reading: 490,
  math: 490,
  rate: '63%',
  majors: "Anthropology and Archaeology - Graphic and Animation Design - Global Politics - Media - Design and Technology - Management - Therapeutic Recreation - Marketing",
  netPrice: null,
  demographic: "5% Latino, 9% African American, 75% white",
  grants: "27%",
  livesOnCampus: "78%",
  programs: "Longwood College Transition Seminar (LSEM)",
  alumni: null
}, {
  id: 47,
  name: "Louisiana College",
  gpa: 201,
  url: 'https://www.lacollege.edu',
  public: 'Private',
  size: "909",
  setting: "Small Suburb",
  location: "Pineville, LA",
  selectivity: 'Less Selective',
  act: 21,
  reading: 495,
  math: 495,
  rate: '58%',
  majors: "Nursing -- Business Administration -- Pre-Pharmacy -- Pre-Law -- Graphic Design -- Web Design -- Convergence Media -- Computer Science",
  netPrice: "$13,355",
  demographic: "2% Latino, 28% African American, 65% white",
  grants: "57%",
  livesOnCampus: "55%",
  programs: null,
  alumni: null
}, {
  id: 48,
  name: "Madonna University ",
  gpa: 201,
  url: 'https://www.lacollege.edu',
  public: 'Private',
  size: "2,629",
  setting: "Small City",
  location: "Livonia, MI",
  selectivity: 'Less Selective',
  act: 21,
  reading: null,
  math: null,
  rate: '57%',
  majors: "Journalism and Public Relations - Nursing - Community Leadership - Forensic Science - Paralegal Studies - Social Work - Sign Language Interpreting Studies - Gerontology",
  netPrice: "$10,118",
  demographic: "4% Latino, 12% African American, 59% white",
  grants: "31%",
  livesOnCampus: "11%",
  programs: null,
  alumni: null
}, {
  id: 49,
  name: "Marywood University",
  gpa: 201,
  url: 'https://www.marywood.edu',
  public: 'Private',
  size: "1,931",
  setting: "Small City",
  location: "Scranton, PA",
  selectivity: 'Less Selective',
  act: 20,
  reading: 510,
  math: 510,
  rate: '62%',
  majors: "Speech Language Pathology - Architecture - Aviation - Criminal Justice - Nutrition and Dietetics - Biotechnology - Hospitality - Communication Sciences and Disorders",
  netPrice: "$18,257",
  demographic: "6% Latino, 2% African American, 75% white",
  grants: "29%",
  livesOnCampus: "37%",
  programs: "Endowed Scholarships",
  alumni: null
}, {
  id: 50,
  name: "Mount Olive College",
  gpa: 201,
  url: 'https://www.umo.edu',
  public: 'Private',
  size: "3,250",
  setting: "Town: Fringe",
  location: "Mount Olive, NC",
  selectivity: 'Less Selective',
  act: 20,
  reading: 530,
  math: 530,
  rate: '56%',
  majors: "Business Administration - Graphic Design - Photography - Leadership - Agribusiness - Religion - Early Childhood Education - Banking and Finance",
  netPrice: "$12,380 ",
  demographic: "3% Latino, 29% African American, 50% white",
  grants: "49%",
  livesOnCampus: "11%",
  programs: null,
  alumni: null
}, {
  id: 51,
  name: "Mount St Mary's College",
  gpa: 201,
  url: 'https://www.msmu.edu',
  public: 'Private',
  size: "2,831",
  setting: "Large City",
  location: "Los Angeles, CA",
  selectivity: 'Less Selective',
  act: 20,
  reading: 460,
  math: 460,
  rate: '68%',
  majors: "Nursing - Sociology - Business Adminsitration - Geospatial Criminology - Child Development - Spanish/Latin American Studies - Biochemistry - Film, Media, and Communication",
  netPrice: "$24,412",
  demographic: "62% Latino, 6% African American, 9% white",
  grants: "67%",
  livesOnCampus: "24%",
  programs: "Title V Grant - ISAE - NEG Grant Experience",
  alumni: null
}, {
  id: 52,
  name: "Saint Peters College",
  gpa: 201,
  url: 'https://www.saintpeters.edu',
  public: 'Private',
  size: "2,672",
  setting: "Large City",
  location: "Jersey City, NJ",
  selectivity: 'Less Selective',
  act: 20,
  reading: 460,
  math: 460,
  rate: '54%',
  majors: "Nursing -- Sports Management -- Pre-Proffesional Health-Related -- Graphic Arts -- Forensic Science - Biology/Chemistry -- Cytotechnology -- Business Administration -- Computer and Information Sciences",
  netPrice: "$10,472",
  demographic: "40% Latino, 22% African American, 16% white",
  grants: "66%",
  livesOnCampus: "31%",
  programs: null,
  alumni: null
}, {
  id: 53,
  name: "Slippery Rock University of Pennsylvania",
  gpa: 201,
  url: 'https://www.sru.edu',
  public: 'Public',
  size: "7,637",
  setting: "Town: Distant",
  location: "Slippery Rock, PA",
  selectivity: 'Less Selective',
  act: 21,
  reading: 495,
  math: 495,
  rate: '61%',
  majors: "Health and Medicine - Biological Sciences - Management - Physical Sciences - Wellness and Fitness - Business - Communication - Education",
  netPrice: null,
  demographic: "2% Latino, 5% African American, 85% white",
  grants: "31%",
  livesOnCampus: "36%",
  programs: "Diane Breidenstein Scholarship - Jan and Larry Sargert Endowed Scholarship",
  alumni: null
}, {
  id: 54,
  name: "Southwest Minnesota State University",
  gpa: 201,
  url: 'https://www.smsu.edu',
  public: 'Public',
  size: "7,007",
  setting: "Town: Remote",
  location: "Marshall, MN",
  selectivity: 'Less Selective',
  act: 21,
  reading: 410,
  math: 410,
  rate: '49%',
  majors: "Hospitality Management - Indigenous Nations and Dakota Studies - Nursing - Justice Administration - Social Work - Communication Studies - Agricultural Communications and Leadership - Agricultural Solutions",
  netPrice: null,
  demographic: "4% Latino, 2% African American, 84% white",
  grants: "36%",
  livesOnCampus: "40%",
  programs: "Access, Opportunity & Success (TRiO)",
  alumni: null
}, {
  id: 55,
  name: "St. Francis College",
  gpa: 201,
  url: 'https://www.sfc.edu',
  public: 'Private',
  size: "2,563",
  setting: "Large City",
  location: "Brooklyn Heights, NY",
  selectivity: 'Less Selective',
  act: 21,
  reading: 465,
  math: 465,
  rate: '53%',
  majors: "Accounting and Business Law - Health Care Management - Sports Management - International Cultural Studies - Management and Informational Technology - Sociology and Criminal Justice - Pre-Heath Proffesions - Communication Arts",
  netPrice: "$11,540",
  demographic: "21% Latino, 19% African American, 40% white",
  grants: "47%",
  livesOnCampus: "88%",
  programs: null,
  alumni: null
}, {
  id: 56,
  name: "The University of Montana-Western",
  gpa: 201,
  url: 'https://www.umwestern.edu',
  public: 'Public',
  size: "1,505",
  setting: "Town: Remote",
  location: "Dillon, MT",
  selectivity: 'Less Selective',
  act: 20,
  reading: null,
  math: null,
  rate: '57%',
  majors: "Equine Studies - Natural Horsemanship - Education Studies - Modern History and Secondary Education - Anthropology and Sociology - Environmental Interpretation - Mathematics - Applied Science",
  netPrice: null,
  demographic: "4% Latino, 1% African American, 86% white",
  grants: "44%",
  livesOnCampus: "27%",
  programs: null,
  alumni: null
}, {
  id: 57,
  name: "Wheeling Jesuit University ",
  gpa: 201,
  url: 'https://www.wju.edu',
  public: 'Private ',
  size: "945",
  setting: "Small City",
  location: "Wheeling, WV",
  selectivity: 'Less Selective',
  act: 21,
  reading: 480,
  math: 480,
  rate: '56%',
  majors: "Simulation Technology and Game Design - Nursing - Criminal Justice - Pastoral Studies - Environment and Sustainability - Education - Business Administration - Fine Arts",
  netPrice: "$14,319",
  demographic: "3% Latino, 8% African American, 75% white",
  grants: "30%",
  livesOnCampus: "68%",
  programs: null,
  alumni: null
}, {
  id: 58,
  name: "York College",
  gpa: 201,
  url: 'https://www.york.edu',
  public: 'Private ',
  size: "405",
  setting: "Town: Remote",
  location: "York, NE",
  selectivity: 'Less Selective',
  act: 20,
  reading: 455,
  math: 455,
  rate: '66%',
  majors: "Communication: Business, Theater, Speech - Agribusiness - Vocal Music Performance - Biblical Studies - Education - Business Administration - Communication: Business, Theater, Speech - Sports Management",
  netPrice: "$14,040",
  demographic: "17% Latino, 18% African American, 56% white",
  grants: "55%",
  livesOnCampus: "80%",
  programs: null,
  alumni: null
}];
/* harmony default export */ __webpack_exports__["default"] = (outside_two);

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

/***/ "./pages/out_of_state_two.js":
/*!***********************************!*\
  !*** ./pages/out_of_state_two.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndividualDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/IndividualDetails */ "./components/IndividualDetails.js");
/* harmony import */ var _data_outside_schools_outside_two__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/outside_schools/outside_two */ "./data/outside_schools/outside_two.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\pages\\out_of_state_two.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const OutsideTwo = () => {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, _data_outside_schools_outside_two__WEBPACK_IMPORTED_MODULE_2__["default"].map(name => __jsx(_components_IndividualDetails__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      lineNumber: 12
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OutsideTwo);

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./pages/out_of_state_two.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JohnnieG\Desktop\college-fit-guide\pages\out_of_state_two.js */"./pages/out_of_state_two.js");


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
//# sourceMappingURL=out_of_state_two.js.map