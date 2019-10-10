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
  }, "GENERAL INFORMATION"), __jsx("p", {
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
  }, " WEBSITE:"), __jsx("a", {
    blank: "#",
    href: props.url,
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "website"), __jsx("br", {
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
  }, "LOCATION:"), " ", props.location), __jsx("div", {
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
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');.h1.jsx-925535652{color:#82B441;font-size:4vh;font-family:'Oswald',sans-serif;cursor:pointer;margin:5vw;}.one.jsx-925535652{background-color:#E2E2E2;margin:20px;}h2.jsx-925535652{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;padding:10px;font-size:4vh;}span.jsx-925535652{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-925535652{font-family:'Roboto Condensed',sans-serif;font-size:2.7vh;padding:20px;}iframe.jsx-925535652{margin:0 20px;background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRW1ILEFBS3pGLEFBU1csQUFLbUIsQUFPOUIsQUFPOEIsQUFPOUIsY0FsQ0EsQUFxQjhCLEFBYzNCLFdBMUJMLEdBUnNCLEVBbUNyQyxPQTFCQSxLQUlrQixBQWNDLGNBYkYsQUFPakIsRUFPZ0IsRUEzQkcsU0FjRCxFQWVsQixJQTVCYyxRQWNWLEdBYkoiLCJmaWxlIjoiQzpcXFVzZXJzXFxKb2hubmllR1xcRGVza3RvcFxcY29sbGVnZS1maXQtZ3VpZGVcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGl2aWR1YWxEZXRhaWxzID0ocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgIFtzaG93VGV4dCxzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIiBvbkNsaWNrID17KCk9PiBzZXRTaG93VGV4dCghc2hvd1RleHQpfT57cHJvcHMubmFtZX08L2gxPlxyXG5cclxuICAgICAgICAgICAge3Nob3dUZXh0ICYmIDxkaXYgY2xhc3NOYW1lID0gXCJvbmVcIiA+XHJcblxyXG4gICAgICAgICAgICA8aDI+R0VORVJBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNDSE9PTCBOQU1FOjwvc3Bhbj4ge3Byb3BzLm5hbWV9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+IFdFQlNJVEU6PC9zcGFuPjxhIGJsYW5rID1cIiNcImhyZWY9e3Byb3BzLnVybH0+d2Vic2l0ZTwvYT48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlBVQkxJQyBPUiBQUklWQVRFOjwvc3Bhbj4ge3Byb3BzLnByaXZhdGV9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TSVpFIE9GIFNDSE9PTDo8L3NwYW4+IHtwcm9wcy5zaXplfSh0b3RhbCB1bmRlcmdyYWR1YXRlIHNpemUpPGJyPjwvYnI+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U0VUVElORzo8L3NwYW4+IHtwcm9wcy5zZXR0aW5nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkxPQ0FUSU9OOjwvc3Bhbj4ge3Byb3BzLmxvY2F0aW9ufSBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2PjxpZnJhbWUgc3JjPSB7cHJvcHMuaWZyYW1lfSBcclxuICAgICAgICAgICB3aWR0aD1cIjI1MFwiIGhlaWdodD1cIjI1MFwiIGZyYW1lYm9yZGVyPVwiMFwiICBhbGxvd2Z1bGxzY3JlZW49XCJcIj48L2lmcmFtZT48L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8aDI+QUNBREVNSUMgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5MRVZFTCBPRiBTRUxFQ1RJVklUWTo8L3NwYW4+IHtwcm9wcy5zZWxlY3Rpdml0eX0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBBQ1QgU0NPUkU6PC9zcGFuPiB7cHJvcHMuYWN0fTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5NRURJQU4gU0FUIENSSVRJQ0FMIFJFQURJTkcgU0NPUkU6PC9zcGFuPiB7cHJvcHMucmVhZGluZ30gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBTQVQgTUFUSCBTQ09SRTo8L3NwYW4+IHtwcm9wcy5tYXRofSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+R1JBRFVBVElPTiBSQVRFIEZPUiBTVFVERU5UUyBSRUNFSVZJTkcgUEVMTCBHUkFOVFM6PC9zcGFuPiB7cHJvcHMucmF0ZX0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1PU1QgUE9QVUxBUiBNQUpPUlM6IDwvc3Bhbj4ge3Byb3BzLm1ham9yc31cclxuICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxoMj5GSU5BTkNJQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+QVZFUkFHRSBORVQgUFJJQ0UgRk9SIExPVyBJTkNPTUUgU1RVREVOVFM6PC9zcGFuPiB7cHJvcHMucHJpY2V9XHJcbiAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8aDI+U09DSUFMIElORk9STUFUSU9OPC9oMj5cclxuICAgICAgICAgICAgPHA+ICAgXHJcbiAgICAgICAgICAgICAgIDxzcGFuPlJBQ0lBTCBERU1PR1JBUEhJQyBEQVRBOjwvc3Bhbj4ge3Byb3BzLmRlbW9ncmFwaGljfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QRVJDRU5UIE9GIFNUVURFTlRTIEFXQVJERUQgUEVMTCBHUkFOVFM6PC9zcGFuPiB7cHJvcHMuZ3JhbnRzfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QRVJDRU5UIE9GIFNUVURFTlRTIFdITyBMSVZFIE9OIENBTVBVUzo8L3NwYW4+IHtwcm9wcy5saXZlc308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UFJPR1JBTVMgVEhBVCBTVVBQT1JUIEZJUlNULUdFTiBTVFVERU5UUyBPTiBDQU1QVVM6IDwvc3Bhbj57cHJvcHMucHJvZ3JhbXN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkJSRUFLVEhST1VHSCBBTFVNTkk6PC9zcGFuPiB7cHJvcHMuYWx1bW5pfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0b3xPc3dhbGR8Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgLmgxIHtcclxuICAgICAgICAgICAgY29sb3I6IzgyQjQ0MTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjR2aDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAub25lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRTJFMkUyO1xyXG4gICAgICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgY29sb3I6I0ZBOUQxQztcclxuICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTo0dmg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDc0Qzg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOjIuN3ZoO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjIwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWZyYW1le1xyXG4gICAgICAgICAgICBtYXJnaW46MCAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuIFxyXG5cclxuICAgIFxyXG4gICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGl2aWR1YWxEZXRhaWxzOyJdfQ== */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndividualDetails);

/***/ })

})
//# sourceMappingURL=texas_schools_100.js.c83c24c1a9321303c176.hot-update.js.map