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
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h1", {
    onClick: function onClick() {
      return setShowText(!showText);
    },
    className: "jsx-1687105071" + " " + "h1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.name), showText && __jsx("div", {
    className: "jsx-1687105071" + " " + "one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "GENERAL INFORMATION"), __jsx("p", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "SCHOOL NAME:"), " ", props.name, " ", __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " WEBSITE:"), " ", props.url, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "PUBLIC OR PRIVATE:"), " ", props["private"], __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "SIZE OF SCHOOL:"), " ", props.size, "(total undergraduate size)", __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "SETTING:"), " ", props.setting, " ", __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "LOCATION:"), " ", props.location), __jsx("div", {
    className: "jsx-1687105071",
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
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "ACADEMIC INFORMATION"), __jsx("p", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "LEVEL OF SELECTIVITY:"), " ", props.selectivity, " ", __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "MEDIAN ACT SCORE:"), " ", props.act, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "MEDIAN SAT CRITICAL READING SCORE:"), " ", props.reading, " ", __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "MEDIAN SAT MATH SCORE:"), " ", props.math, " ", __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:"), " ", props.rate, " ", __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "MOST POPULAR MAJORS: "), " ", props.majors, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "FINANCIAL INFORMATION"), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "AVERAGE NET PRICE FOR LOW INCOME STUDENTS:"), " ", props.price, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "SOCIAL INFORMATION"), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "RACIAL DEMOGRAPHIC DATA:"), " ", props.damographic, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "PERCENT OF STUDENTS AWARDED PELL GRANTS:"), " ", props.grants, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "PERCENT OF STUDENTS WHO LIVE ON CAMPUS:"), " ", props.lives, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: "), props.programs, __jsx("br", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1687105071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "BREAKTHROUGH ALUMNI:"), " ", props.alumni)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1687105071",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');.h1.jsx-1687105071{color:#82B441;font-size:4vh;font-family:'Oswald',sans-serif;cursor:pointer;margin:5vw;}.one.jsx-1687105071{background-color:#E2E2E2;margin:20px;}h2.jsx-1687105071{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;font-size:1.5em;padding:10px;}span.jsx-1687105071{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-1687105071{font-family:'Roboto Condensed',sans-serif;font-size:1.3em;padding:20px;}iframe.jsx-1687105071{margin:0 20px;background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRG9CLEFBRW1ILEFBS3pGLEFBU1csQUFLbUIsQUFPOUIsQUFPOEIsQUFPOUIsY0FsQ0EsQUFxQjhCLEFBYzNCLFdBMUJMLEdBUnNCLEVBbUNyQyxPQTFCQSxLQUlrQixBQWNDLGNBYkMsQUFPcEIsRUFPZ0IsRUEzQkcsV0E2Qm5CLENBZmlCLEdBYkgsVUFjVixDQWJKIiwiZmlsZSI6IkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGl2aWR1YWxEZXRhaWxzID0ocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgIFtzaG93VGV4dCxzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIiBvbkNsaWNrID17KCk9PiBzZXRTaG93VGV4dCghc2hvd1RleHQpfT57cHJvcHMubmFtZX08L2gxPlxyXG5cclxuICAgICAgICAgICAge3Nob3dUZXh0ICYmIDxkaXYgY2xhc3NOYW1lID0gXCJvbmVcIiA+XHJcbiAgICAgICAgICAgIDxoMj5HRU5FUkFMIElORk9STUFUSU9OPC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TQ0hPT0wgTkFNRTo8L3NwYW4+IHtwcm9wcy5uYW1lfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBXRUJTSVRFOjwvc3Bhbj4ge3Byb3BzLnVybH08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlBVQkxJQyBPUiBQUklWQVRFOjwvc3Bhbj4ge3Byb3BzLnByaXZhdGV9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TSVpFIE9GIFNDSE9PTDo8L3NwYW4+IHtwcm9wcy5zaXplfSh0b3RhbCB1bmRlcmdyYWR1YXRlIHNpemUpPGJyPjwvYnI+IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U0VUVElORzo8L3NwYW4+IHtwcm9wcy5zZXR0aW5nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkxPQ0FUSU9OOjwvc3Bhbj4ge3Byb3BzLmxvY2F0aW9ufSBcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PjxpZnJhbWUgc3JjPSB7cHJvcHMuaWZyYW1lfSBcclxuICAgICAgICAgICB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiIGZyYW1lYm9yZGVyPVwiMFwiICBhbGxvd2Z1bGxzY3JlZW49XCJcIj48L2lmcmFtZT48L2Rpdj5cclxuICAgICAgICAgICA8aDI+QUNBREVNSUMgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkxFVkVMIE9GIFNFTEVDVElWSVRZOjwvc3Bhbj4ge3Byb3BzLnNlbGVjdGl2aXR5fSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIEFDVCBTQ09SRTo8L3NwYW4+IHtwcm9wcy5hY3R9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBTQVQgQ1JJVElDQUwgUkVBRElORyBTQ09SRTo8L3NwYW4+IHtwcm9wcy5yZWFkaW5nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIFNBVCBNQVRIIFNDT1JFOjwvc3Bhbj4ge3Byb3BzLm1hdGh9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5HUkFEVUFUSU9OIFJBVEUgRk9SIFNUVURFTlRTIFJFQ0VJVklORyBQRUxMIEdSQU5UUzo8L3NwYW4+IHtwcm9wcy5yYXRlfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TU9TVCBQT1BVTEFSIE1BSk9SUzogPC9zcGFuPiB7cHJvcHMubWFqb3JzfTxicj48L2JyPlxyXG4gICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgIDxoMj5GSU5BTkNJQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5BVkVSQUdFIE5FVCBQUklDRSBGT1IgTE9XIElOQ09NRSBTVFVERU5UUzo8L3NwYW4+IHtwcm9wcy5wcmljZX08YnI+PC9icj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD4gICBcclxuICAgICAgICAgICAgICAgPGgyPlNPQ0lBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlJBQ0lBTCBERU1PR1JBUEhJQyBEQVRBOjwvc3Bhbj4ge3Byb3BzLmRhbW9ncmFwaGljfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QRVJDRU5UIE9GIFNUVURFTlRTIEFXQVJERUQgUEVMTCBHUkFOVFM6PC9zcGFuPiB7cHJvcHMuZ3JhbnRzfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QRVJDRU5UIE9GIFNUVURFTlRTIFdITyBMSVZFIE9OIENBTVBVUzo8L3NwYW4+IHtwcm9wcy5saXZlc308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+UFJPR1JBTVMgVEhBVCBTVVBQT1JUIEZJUlNULUdFTiBTVFVERU5UUyBPTiBDQU1QVVM6IDwvc3Bhbj57cHJvcHMucHJvZ3JhbXN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkJSRUFLVEhST1VHSCBBTFVNTkk6PC9zcGFuPiB7cHJvcHMuYWx1bW5pfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0b3xPc3dhbGR8Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgLmgxIHtcclxuICAgICAgICAgICAgY29sb3I6IzgyQjQ0MTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjR2aDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAub25lIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojRTJFMkUyO1xyXG4gICAgICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgY29sb3I6I0ZBOUQxQztcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVlbTtcclxuICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IzAwNzRDODtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS4zZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZnJhbWV7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gXHJcblxyXG4gICAgXHJcbiAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kaXZpZHVhbERldGFpbHM7Il19 */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndividualDetails);

/***/ })

})
//# sourceMappingURL=texas_schools_100.js.4e00656a74b1b240b5d0.hot-update.js.map