webpackHotUpdate("static\\development\\pages\\texas_schools_four.js",{

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
      lineNumber: 14
    },
    __self: this
  }, "GENERAL INFORMATION"), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "SCHOOL NAME:"), " ", props.name, " ", __jsx("br", {
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
  }, " WEBSITE:"), " ", props.url, __jsx("br", {
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
  }, "PUBLIC OR PRIVATE:"), " ", props["private"], __jsx("br", {
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
  }, "SIZE OF SCHOOL:"), " ", props.size, "(total undergraduate size)", __jsx("br", {
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
  }, "SETTING:"), " ", props.setting, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "LOCATION:"), " ", props.location), __jsx("div", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
      lineNumber: 23
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "ACADEMIC INFORMATION"), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "LEVEL OF SELECTIVITY:"), " ", props.selectivity, " ", __jsx("br", {
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
  }, "MEDIAN ACT SCORE:"), " ", props.act, __jsx("br", {
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
  }, "MEDIAN SAT CRITICAL READING SCORE:"), " ", props.reading, " ", __jsx("br", {
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
  }, "MEDIAN SAT MATH SCORE:"), " ", props.math, " ", __jsx("br", {
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
  }, "GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:"), " ", props.rate, " ", __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "MOST POPULAR MAJORS: "), " ", props.majors), __jsx("h2", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "FINANCIAL INFORMATION"), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "AVERAGE NET PRICE FOR LOW INCOME STUDENTS:"), " ", props.price, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "SOCIAL INFORMATION"), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "RACIAL DEMOGRAPHIC DATA:"), " ", props.damographic, __jsx("br", {
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
  }, "PERCENT OF STUDENTS AWARDED PELL GRANTS:"), " ", props.grants, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "PERCENT OF STUDENTS WHO LIVE ON CAMPUS:"), " ", props.lives, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: "), props.programs, __jsx("br", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-2041606186",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "BREAKTHROUGH ALUMNI:"), " ", props.alumni)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2041606186",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');.h1.jsx-2041606186{color:#82B441;font-size:4vh;font-family:'Oswald',sans-serif;cursor:pointer;margin:5vw;}.one.jsx-2041606186{background-color:#E2E2E2;margin:20px;}h2.jsx-2041606186{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;padding:10px;}span.jsx-2041606186{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-2041606186{font-family:'Roboto Condensed',sans-serif;font-size:1.3em;padding:20px;}iframe.jsx-2041606186{margin:0 20px;background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRG9CLEFBRW1ILEFBS3pGLEFBU1csQUFLbUIsQUFNOUIsQUFPOEIsQUFPOUIsY0FqQ0EsQUFvQjhCLEFBYzNCLFdBekJMLEdBUnNCLEVBa0NyQyxPQXpCQSxLQUlrQixBQWFDLGNBWkYsQUFNakIsRUFPZ0IsRUExQkcsU0FjZixFQWNKLElBM0JjLFdBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxKb2hubmllR1xcRGVza3RvcFxcY29sbGVnZS1maXQtZ3VpZGVcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5cclxuY29uc3QgSW5kaXZpZHVhbERldGFpbHMgPShwcm9wcyk9PiB7XHJcbiAgICBjb25zdCAgW3Nob3dUZXh0LHNldFNob3dUZXh0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMVwiIG9uQ2xpY2sgPXsoKT0+IHNldFNob3dUZXh0KCFzaG93VGV4dCl9Pntwcm9wcy5uYW1lfTwvaDE+XHJcblxyXG4gICAgICAgICAgICB7c2hvd1RleHQgJiYgPGRpdiBjbGFzc05hbWUgPSBcIm9uZVwiID5cclxuXHJcbiAgICAgICAgICAgIDxoMj5HRU5FUkFMIElORk9STUFUSU9OPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TQ0hPT0wgTkFNRTo8L3NwYW4+IHtwcm9wcy5uYW1lfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBXRUJTSVRFOjwvc3Bhbj4ge3Byb3BzLnVybH08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlBVQkxJQyBPUiBQUklWQVRFOjwvc3Bhbj4ge3Byb3BzLnByaXZhdGV9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TSVpFIE9GIFNDSE9PTDo8L3NwYW4+IHtwcm9wcy5zaXplfSh0b3RhbCB1bmRlcmdyYWR1YXRlIHNpemUpPGJyPjwvYnI+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U0VUVElORzo8L3NwYW4+IHtwcm9wcy5zZXR0aW5nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkxPQ0FUSU9OOjwvc3Bhbj4ge3Byb3BzLmxvY2F0aW9ufSBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PjxpZnJhbWUgc3JjPSB7cHJvcHMuaWZyYW1lfSBcclxuICAgICAgICAgICB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiIGZyYW1lYm9yZGVyPVwiMFwiICBhbGxvd2Z1bGxzY3JlZW49XCJcIj48L2lmcmFtZT48L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8aDI+QUNBREVNSUMgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5MRVZFTCBPRiBTRUxFQ1RJVklUWTo8L3NwYW4+IHtwcm9wcy5zZWxlY3Rpdml0eX0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBBQ1QgU0NPUkU6PC9zcGFuPiB7cHJvcHMuYWN0fTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NRURJQU4gU0FUIENSSVRJQ0FMIFJFQURJTkcgU0NPUkU6PC9zcGFuPiB7cHJvcHMucmVhZGluZ30gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBTQVQgTUFUSCBTQ09SRTo8L3NwYW4+IHtwcm9wcy5tYXRofSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+R1JBRFVBVElPTiBSQVRFIEZPUiBTVFVERU5UUyBSRUNFSVZJTkcgUEVMTCBHUkFOVFM6PC9zcGFuPiB7cHJvcHMucmF0ZX0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1PU1QgUE9QVUxBUiBNQUpPUlM6IDwvc3Bhbj4ge3Byb3BzLm1ham9yc31cclxuICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxoMj5GSU5BTkNJQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgPHNwYW4+QVZFUkFHRSBORVQgUFJJQ0UgRk9SIExPVyBJTkNPTUUgU1RVREVOVFM6PC9zcGFuPiB7cHJvcHMucHJpY2V9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+ICAgXHJcbiAgICAgICAgICAgICAgIDxoMj5TT0NJQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5SQUNJQUwgREVNT0dSQVBISUMgREFUQTo8L3NwYW4+IHtwcm9wcy5kYW1vZ3JhcGhpY308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UEVSQ0VOVCBPRiBTVFVERU5UUyBBV0FSREVEIFBFTEwgR1JBTlRTOjwvc3Bhbj4ge3Byb3BzLmdyYW50c308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UEVSQ0VOVCBPRiBTVFVERU5UUyBXSE8gTElWRSBPTiBDQU1QVVM6PC9zcGFuPiB7cHJvcHMubGl2ZXN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBST0dSQU1TIFRIQVQgU1VQUE9SVCBGSVJTVC1HRU4gU1RVREVOVFMgT04gQ0FNUFVTOiA8L3NwYW4+e3Byb3BzLnByb2dyYW1zfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5CUkVBS1RIUk9VR0ggQUxVTU5JOjwvc3Bhbj4ge3Byb3BzLmFsdW1uaX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG98T3N3YWxkfFJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgICAgIC5oMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiM4MkI0NDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0dmg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46NXZ3O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLm9uZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0UyRTJFMjtcclxuICAgICAgICAgICAgbWFyZ2luOjIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgIGNvbG9yOiNGQTlEMUM7XHJcbiAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDc0Qzg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuM2VtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWZyYW1le1xyXG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuIFxyXG5cclxuICAgIFxyXG4gICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGl2aWR1YWxEZXRhaWxzOyJdfQ== */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndividualDetails);

/***/ })

})
//# sourceMappingURL=texas_schools_four.js.104284ed4c70d0ec16f9.hot-update.js.map