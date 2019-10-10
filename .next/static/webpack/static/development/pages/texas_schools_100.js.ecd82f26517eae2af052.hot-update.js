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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var IndividualDetails = function IndividualDetails(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showText = _useState[0],
      setShowText = _useState[1];

  return __jsx("div", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    onClick: function onClick() {
      return setShowText(!showText);
    },
    className: "jsx-925535652" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.name), showText && __jsx("div", {
    className: "jsx-925535652" + " " + "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "GENERAL INFORMATION"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    to: true,
    href: props.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "SCHOOL NAME:"), " ", props.name, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, " WEBSITE:"), props.url, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "PUBLIC OR PRIVATE:"), " ", props["private"], __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "SIZE OF SCHOOL:"), " ", props.size, "(total undergraduate size)", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "SETTING:"), " ", props.setting, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "LOCATION:"), " ", props.location)), __jsx("div", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("iframe", {
    src: props.iframe,
    width: "250",
    height: "250",
    frameborder: "0",
    allowfullscreen: "",
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "ACADEMIC INFORMATION"), __jsx("p", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "LEVEL OF SELECTIVITY:"), " ", props.selectivity, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "MEDIAN ACT SCORE:"), " ", props.act, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "MEDIAN SAT CRITICAL READING SCORE:"), " ", props.reading, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "MEDIAN SAT MATH SCORE:"), " ", props.math, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:"), " ", props.rate, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "MOST POPULAR MAJORS: "), " ", props.majors), __jsx("h2", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "FINANCIAL INFORMATION"), __jsx("p", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "AVERAGE NET PRICE FOR LOW INCOME STUDENTS:"), " ", props.price), __jsx("h2", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "SOCIAL INFORMATION"), __jsx("p", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "RACIAL DEMOGRAPHIC DATA:"), " ", props.demographic, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "PERCENT OF STUDENTS AWARDED PELL GRANTS:"), " ", props.grants, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "PERCENT OF STUDENTS WHO LIVE ON CAMPUS:"), " ", props.lives, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: "), props.programs, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "BREAKTHROUGH ALUMNI:"), " ", props.alumni)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "925535652",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');.h1.jsx-925535652{color:#82B441;font-size:4vh;font-family:'Oswald',sans-serif;cursor:pointer;margin:5vw;}.one.jsx-925535652{background-color:#E2E2E2;margin:20px;}h2.jsx-925535652{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;padding:10px;font-size:4vh;}span.jsx-925535652{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-925535652{font-family:'Roboto Condensed',sans-serif;font-size:2.7vh;padding:20px;}iframe.jsx-925535652{margin:0 20px;background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRW1ILEFBS3pGLEFBU1csQUFLbUIsQUFPOUIsQUFPOEIsQUFPOUIsY0FsQ0EsQUFxQjhCLEFBYzNCLFdBMUJMLEdBUnNCLEVBbUNyQyxPQTFCQSxLQUlrQixBQWNDLGNBYkYsQUFPakIsRUFPZ0IsRUEzQkcsU0FjRCxFQWVsQixJQTVCYyxRQWNWLEdBYkoiLCJmaWxlIjoiQzpcXFVzZXJzXFxKb2hubmllR1xcRGVza3RvcFxcY29sbGVnZS1maXQtZ3VpZGVcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGl2aWR1YWxEZXRhaWxzID0ocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgIFtzaG93VGV4dCxzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIiBvbkNsaWNrID17KCk9PiBzZXRTaG93VGV4dCghc2hvd1RleHQpfT57cHJvcHMubmFtZX08L2gxPlxyXG5cclxuICAgICAgICAgICAge3Nob3dUZXh0ICYmIDxkaXYgY2xhc3NOYW1lID0gXCJvbmVcIiA+XHJcblxyXG4gICAgICAgICAgICA8aDI+R0VORVJBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvIGhyZWYgPSB7cHJvcHMudXJsfT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TQ0hPT0wgTkFNRTo8L3NwYW4+IHtwcm9wcy5uYW1lfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBXRUJTSVRFOjwvc3Bhbj57cHJvcHMudXJsfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UFVCTElDIE9SIFBSSVZBVEU6PC9zcGFuPiB7cHJvcHMucHJpdmF0ZX08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNJWkUgT0YgU0NIT09MOjwvc3Bhbj4ge3Byb3BzLnNpemV9KHRvdGFsIHVuZGVyZ3JhZHVhdGUgc2l6ZSk8YnI+PC9icj4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TRVRUSU5HOjwvc3Bhbj4ge3Byb3BzLnNldHRpbmd9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TE9DQVRJT046PC9zcGFuPiB7cHJvcHMubG9jYXRpb259IFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdj48aWZyYW1lIHNyYz0ge3Byb3BzLmlmcmFtZX0gXHJcbiAgICAgICAgICAgd2lkdGg9XCIyNTBcIiBoZWlnaHQ9XCIyNTBcIiBmcmFtZWJvcmRlcj1cIjBcIiAgYWxsb3dmdWxsc2NyZWVuPVwiXCI+PC9pZnJhbWU+PC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPGgyPkFDQURFTUlDIElORk9STUFUSU9OPC9oMj5cclxuICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgPHNwYW4+TEVWRUwgT0YgU0VMRUNUSVZJVFk6PC9zcGFuPiB7cHJvcHMuc2VsZWN0aXZpdHl9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NRURJQU4gQUNUIFNDT1JFOjwvc3Bhbj4ge3Byb3BzLmFjdH08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIFNBVCBDUklUSUNBTCBSRUFESU5HIFNDT1JFOjwvc3Bhbj4ge3Byb3BzLnJlYWRpbmd9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NRURJQU4gU0FUIE1BVEggU0NPUkU6PC9zcGFuPiB7cHJvcHMubWF0aH0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkdSQURVQVRJT04gUkFURSBGT1IgU1RVREVOVFMgUkVDRUlWSU5HIFBFTEwgR1JBTlRTOjwvc3Bhbj4ge3Byb3BzLnJhdGV9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NT1NUIFBPUFVMQVIgTUFKT1JTOiA8L3NwYW4+IHtwcm9wcy5tYWpvcnN9XHJcbiAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8aDI+RklOQU5DSUFMIElORk9STUFUSU9OPC9oMj5cclxuICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFWRVJBR0UgTkVUIFBSSUNFIEZPUiBMT1cgSU5DT01FIFNUVURFTlRTOjwvc3Bhbj4ge3Byb3BzLnByaWNlfVxyXG4gICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGgyPlNPQ0lBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgIDxwPiAgIFxyXG4gICAgICAgICAgICAgICA8c3Bhbj5SQUNJQUwgREVNT0dSQVBISUMgREFUQTo8L3NwYW4+IHtwcm9wcy5kZW1vZ3JhcGhpY308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UEVSQ0VOVCBPRiBTVFVERU5UUyBBV0FSREVEIFBFTEwgR1JBTlRTOjwvc3Bhbj4ge3Byb3BzLmdyYW50c308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UEVSQ0VOVCBPRiBTVFVERU5UUyBXSE8gTElWRSBPTiBDQU1QVVM6PC9zcGFuPiB7cHJvcHMubGl2ZXN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBST0dSQU1TIFRIQVQgU1VQUE9SVCBGSVJTVC1HRU4gU1RVREVOVFMgT04gQ0FNUFVTOiA8L3NwYW4+e3Byb3BzLnByb2dyYW1zfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5CUkVBS1RIUk9VR0ggQUxVTU5JOjwvc3Bhbj4ge3Byb3BzLmFsdW1uaX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG98T3N3YWxkfFJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAgIC5oMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiM4MkI0NDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0dmg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46NXZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLm9uZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0UyRTJFMjtcclxuICAgICAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgIGNvbG9yOiNGQTlEMUM7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6NHZoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjojMDA3NEM4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyLjd2aDtcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmcmFtZXtcclxuICAgICAgICAgICAgbWFyZ2luOjAgMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiBcclxuXHJcbiAgICBcclxuICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRpdmlkdWFsRGV0YWlsczsiXX0= */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndividualDetails);

/***/ })

})
//# sourceMappingURL=texas_schools_100.js.ecd82f26517eae2af052.hot-update.js.map