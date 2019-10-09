webpackHotUpdate("static\\development\\pages\\texas_schools_100.js",{

/***/ "./components/IndividualDetails.js":
/*!*****************************************!*\
  !*** ./components/IndividualDetails.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var IndividualDetails = function IndividualDetails(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showText = _useState[0],
      setShowText = _useState[1];

  return __jsx("div", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    onClick: function onClick() {
      return setShowText(!showText);
    },
    className: "jsx-2041606186" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.name), showText && __jsx("div", {
    className: "jsx-2041606186" + " " + "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "GENERAL INFORMATION"), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "SCHOOL NAME:"), " ", props.name, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " WEBSITE:"), " ", props.url, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "PUBLIC OR PRIVATE:"), " ", props["private"], __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "SIZE OF SCHOOL:"), " ", props.size, "(total undergraduate size)", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "SETTING:"), " ", props.setting, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "LOCATION:"), " ", props.location), __jsx("div", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("iframe", {
    src: props.iframe,
    width: "300",
    height: "300",
    frameborder: "0",
    allowfullscreen: "",
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "ACADEMIC INFORMATION"), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "LEVEL OF SELECTIVITY:"), " ", props.selectivity, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "MEDIAN ACT SCORE:"), " ", props.act, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "MEDIAN SAT CRITICAL READING SCORE:"), " ", props.reading, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "MEDIAN SAT MATH SCORE:"), " ", props.math, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:"), " ", props.rate, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "MOST POPULAR MAJORS: "), " ", props.majors, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "FINANCIAL INFORMATION"), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "AVERAGE NET PRICE FOR LOW INCOME STUDENTS:"), " ", props.price, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "SOCIAL INFORMATION"), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "RACIAL DEMOGRAPHIC DATA:"), " ", props.damographic, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "PERCENT OF STUDENTS AWARDED PELL GRANTS:"), " ", props.grants, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "PERCENT OF STUDENTS WHO LIVE ON CAMPUS:"), " ", props.lives, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: "), props.programs, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "BREAKTHROUGH ALUMNI:"), " ", props.alumni)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2041606186",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');.h1.jsx-2041606186{color:#82B441;font-size:4vh;font-family:'Oswald',sans-serif;cursor:pointer;margin:5vw;}.one.jsx-2041606186{background-color:#E2E2E2;margin:20px;}h2.jsx-2041606186{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;padding:10px;}span.jsx-2041606186{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-2041606186{font-family:'Roboto Condensed',sans-serif;font-size:1.3em;padding:20px;}iframe.jsx-2041606186{margin:0 20px;background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRG9CLEFBRW1ILEFBS3pGLEFBU1csQUFLbUIsQUFNOUIsQUFPOEIsQUFPOUIsY0FqQ0EsQUFvQjhCLEFBYzNCLFdBekJMLEdBUnNCLEVBa0NyQyxPQXpCQSxLQUlrQixBQWFDLGNBWkYsQUFNakIsRUFPZ0IsRUExQkcsU0FjZixFQWNKLElBM0JjLFdBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxKb2hubmllR1xcRGVza3RvcFxcY29sbGVnZS1maXQtZ3VpZGVcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5cclxuY29uc3QgSW5kaXZpZHVhbERldGFpbHMgPShwcm9wcyk9PiB7XHJcbiAgICBjb25zdCAgW3Nob3dUZXh0LHNldFNob3dUZXh0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMVwiIG9uQ2xpY2sgPXsoKT0+IHNldFNob3dUZXh0KCFzaG93VGV4dCl9Pntwcm9wcy5uYW1lfTwvaDE+XHJcblxyXG4gICAgICAgICAgICB7c2hvd1RleHQgJiYgPGRpdiBjbGFzc05hbWUgPSBcIm9uZVwiID5cclxuICAgICAgICAgICAgPGgyPkdFTkVSQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNDSE9PTCBOQU1FOjwvc3Bhbj4ge3Byb3BzLm5hbWV9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IFdFQlNJVEU6PC9zcGFuPiB7cHJvcHMudXJsfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UFVCTElDIE9SIFBSSVZBVEU6PC9zcGFuPiB7cHJvcHMucHJpdmF0ZX08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNJWkUgT0YgU0NIT09MOjwvc3Bhbj4ge3Byb3BzLnNpemV9KHRvdGFsIHVuZGVyZ3JhZHVhdGUgc2l6ZSk8YnI+PC9icj4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TRVRUSU5HOjwvc3Bhbj4ge3Byb3BzLnNldHRpbmd9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TE9DQVRJT046PC9zcGFuPiB7cHJvcHMubG9jYXRpb259IFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+PGlmcmFtZSBzcmM9IHtwcm9wcy5pZnJhbWV9IFxyXG4gICAgICAgICAgIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiMzAwXCIgZnJhbWVib3JkZXI9XCIwXCIgIGFsbG93ZnVsbHNjcmVlbj1cIlwiPjwvaWZyYW1lPjwvZGl2PlxyXG4gICAgICAgICAgIDxoMj5BQ0FERU1JQyBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgPHNwYW4+TEVWRUwgT0YgU0VMRUNUSVZJVFk6PC9zcGFuPiB7cHJvcHMuc2VsZWN0aXZpdHl9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NRURJQU4gQUNUIFNDT1JFOjwvc3Bhbj4ge3Byb3BzLmFjdH08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIFNBVCBDUklUSUNBTCBSRUFESU5HIFNDT1JFOjwvc3Bhbj4ge3Byb3BzLnJlYWRpbmd9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NRURJQU4gU0FUIE1BVEggU0NPUkU6PC9zcGFuPiB7cHJvcHMubWF0aH0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkdSQURVQVRJT04gUkFURSBGT1IgU1RVREVOVFMgUkVDRUlWSU5HIFBFTEwgR1JBTlRTOjwvc3Bhbj4ge3Byb3BzLnJhdGV9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NT1NUIFBPUFVMQVIgTUFKT1JTOiA8L3NwYW4+IHtwcm9wcy5tYWpvcnN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgPGgyPkZJTkFOQ0lBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkFWRVJBR0UgTkVUIFBSSUNFIEZPUiBMT1cgSU5DT01FIFNUVURFTlRTOjwvc3Bhbj4ge3Byb3BzLnByaWNlfTxicj48L2JyPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPiAgIFxyXG4gICAgICAgICAgICAgICA8aDI+U09DSUFMIElORk9STUFUSU9OPC9oMj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UkFDSUFMIERFTU9HUkFQSElDIERBVEE6PC9zcGFuPiB7cHJvcHMuZGFtb2dyYXBoaWN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBFUkNFTlQgT0YgU1RVREVOVFMgQVdBUkRFRCBQRUxMIEdSQU5UUzo8L3NwYW4+IHtwcm9wcy5ncmFudHN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBFUkNFTlQgT0YgU1RVREVOVFMgV0hPIExJVkUgT04gQ0FNUFVTOjwvc3Bhbj4ge3Byb3BzLmxpdmVzfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QUk9HUkFNUyBUSEFUIFNVUFBPUlQgRklSU1QtR0VOIFNUVURFTlRTIE9OIENBTVBVUzogPC9zcGFuPntwcm9wcy5wcm9ncmFtc308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+QlJFQUtUSFJPVUdIIEFMVU1OSTo8L3NwYW4+IHtwcm9wcy5hbHVtbml9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvfE9zd2FsZHxSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgICAuaDEge1xyXG4gICAgICAgICAgICBjb2xvcjojODJCNDQxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6NHZoO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOjV2dztcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIC5vbmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFMkUyRTI7XHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICBjb2xvcjojRkE5RDFDO1xyXG4gICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjojMDA3NEM4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjNlbTtcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmcmFtZXtcclxuICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiBcclxuXHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRpdmlkdWFsRGV0YWlsczsiXX0= */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndividualDetails);

/***/ })

})
//# sourceMappingURL=texas_schools_100.js.7dc09c225b0a366ce046.hot-update.js.map