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
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "SCHOOL NAME:"), " ", props.name, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, " WEBSITE:"), __jsx("div", {
    href: props.url,
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.url), __jsx("br", {
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
  }, "PUBLIC OR PRIVATE:"), " ", props["private"], __jsx("br", {
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
  }, "SIZE OF SCHOOL:"), " ", props.size, "(total undergraduate size)", __jsx("br", {
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
  }, "SETTING:"), " ", props.setting, " ", __jsx("br", {
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
  }, "LOCATION:"), " ", props.location), __jsx("div", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      lineNumber: 25
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "ACADEMIC INFORMATION"), __jsx("p", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "LEVEL OF SELECTIVITY:"), " ", props.selectivity, " ", __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "MEDIAN ACT SCORE:"), " ", props.act, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "MEDIAN SAT CRITICAL READING SCORE:"), " ", props.reading, " ", __jsx("br", {
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
  }, "MEDIAN SAT MATH SCORE:"), " ", props.math, " ", __jsx("br", {
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
  }, "GRADUATION RATE FOR STUDENTS RECEIVING PELL GRANTS:"), " ", props.rate, " ", __jsx("br", {
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
  }, "MOST POPULAR MAJORS: "), " ", props.majors), __jsx("h2", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "FINANCIAL INFORMATION"), __jsx("p", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "AVERAGE NET PRICE FOR LOW INCOME STUDENTS:"), " ", props.price), __jsx("h2", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "SOCIAL INFORMATION"), __jsx("p", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "RACIAL DEMOGRAPHIC DATA:"), " ", props.demographic, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "PERCENT OF STUDENTS AWARDED PELL GRANTS:"), " ", props.grants, __jsx("br", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-925535652",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "PERCENT OF STUDENTS WHO LIVE ON CAMPUS:"), " ", props.lives, __jsx("br", {
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
  }, "PROGRAMS THAT SUPPORT FIRST-GEN STUDENTS ON CAMPUS: "), props.programs, __jsx("br", {
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
  }, "BREAKTHROUGH ALUMNI:"), " ", props.alumni)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "925535652",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Lato|Oswald|Roboto+Condensed&display=swap');.h1.jsx-925535652{color:#82B441;font-size:4vh;font-family:'Oswald',sans-serif;cursor:pointer;margin:5vw;}.one.jsx-925535652{background-color:#E2E2E2;margin:20px;}h2.jsx-925535652{font-family:'Roboto Condensed',sans-serif;color:#FA9D1C;padding:10px;font-size:4vh;}span.jsx-925535652{color:#0074C8;font-family:'Roboto Condensed',sans-serif;}p.jsx-925535652{font-family:'Roboto Condensed',sans-serif;font-size:2.7vh;padding:20px;}iframe.jsx-925535652{margin:0 20px;background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSm9obm5pZUdcXERlc2t0b3BcXGNvbGxlZ2UtZml0LWd1aWRlXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRGV0YWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBRW1ILEFBS3pGLEFBU1csQUFLbUIsQUFPOUIsQUFPOEIsQUFPOUIsY0FsQ0EsQUFxQjhCLEFBYzNCLFdBMUJMLEdBUnNCLEVBbUNyQyxPQTFCQSxLQUlrQixBQWNDLGNBYkYsQUFPakIsRUFPZ0IsRUEzQkcsU0FjRCxFQWVsQixJQTVCYyxRQWNWLEdBYkoiLCJmaWxlIjoiQzpcXFVzZXJzXFxKb2hubmllR1xcRGVza3RvcFxcY29sbGVnZS1maXQtZ3VpZGVcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEluZGl2aWR1YWxEZXRhaWxzID0ocHJvcHMpPT4ge1xyXG4gICAgY29uc3QgIFtzaG93VGV4dCxzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIiBvbkNsaWNrID17KCk9PiBzZXRTaG93VGV4dCghc2hvd1RleHQpfT57cHJvcHMubmFtZX08L2gxPlxyXG5cclxuICAgICAgICAgICAge3Nob3dUZXh0ICYmIDxkaXYgY2xhc3NOYW1lID0gXCJvbmVcIiA+XHJcblxyXG4gICAgICAgICAgICA8aDI+R0VORVJBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+U0NIT09MIE5BTUU6PC9zcGFuPiB7cHJvcHMubmFtZX0gPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4gV0VCU0lURTo8L3NwYW4+PGRpdiBocmVmID17cHJvcHMudXJsfT57cHJvcHMudXJsfTwvZGl2Pjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UFVCTElDIE9SIFBSSVZBVEU6PC9zcGFuPiB7cHJvcHMucHJpdmF0ZX08YnI+PC9icj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlNJWkUgT0YgU0NIT09MOjwvc3Bhbj4ge3Byb3BzLnNpemV9KHRvdGFsIHVuZGVyZ3JhZHVhdGUgc2l6ZSk8YnI+PC9icj4gXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5TRVRUSU5HOjwvc3Bhbj4ge3Byb3BzLnNldHRpbmd9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TE9DQVRJT046PC9zcGFuPiB7cHJvcHMubG9jYXRpb259IFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+PGlmcmFtZSBzcmM9IHtwcm9wcy5pZnJhbWV9IFxyXG4gICAgICAgICAgIHdpZHRoPVwiMjUwXCIgaGVpZ2h0PVwiMjUwXCIgZnJhbWVib3JkZXI9XCIwXCIgIGFsbG93ZnVsbHNjcmVlbj1cIlwiPjwvaWZyYW1lPjwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxoMj5BQ0FERU1JQyBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPkxFVkVMIE9GIFNFTEVDVElWSVRZOjwvc3Bhbj4ge3Byb3BzLnNlbGVjdGl2aXR5fSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIEFDVCBTQ09SRTo8L3NwYW4+IHtwcm9wcy5hY3R9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPk1FRElBTiBTQVQgQ1JJVElDQUwgUkVBRElORyBTQ09SRTo8L3NwYW4+IHtwcm9wcy5yZWFkaW5nfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TUVESUFOIFNBVCBNQVRIIFNDT1JFOjwvc3Bhbj4ge3Byb3BzLm1hdGh9IDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5HUkFEVUFUSU9OIFJBVEUgRk9SIFNUVURFTlRTIFJFQ0VJVklORyBQRUxMIEdSQU5UUzo8L3NwYW4+IHtwcm9wcy5yYXRlfSA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+TU9TVCBQT1BVTEFSIE1BSk9SUzogPC9zcGFuPiB7cHJvcHMubWFqb3JzfVxyXG4gICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGgyPkZJTkFOQ0lBTCBJTkZPUk1BVElPTjwvaDI+XHJcbiAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BVkVSQUdFIE5FVCBQUklDRSBGT1IgTE9XIElOQ09NRSBTVFVERU5UUzo8L3NwYW4+IHtwcm9wcy5wcmljZX1cclxuICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxoMj5TT0NJQUwgSU5GT1JNQVRJT048L2gyPlxyXG4gICAgICAgICAgICA8cD4gICBcclxuICAgICAgICAgICAgICAgPHNwYW4+UkFDSUFMIERFTU9HUkFQSElDIERBVEE6PC9zcGFuPiB7cHJvcHMuZGVtb2dyYXBoaWN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBFUkNFTlQgT0YgU1RVREVOVFMgQVdBUkRFRCBQRUxMIEdSQU5UUzo8L3NwYW4+IHtwcm9wcy5ncmFudHN9PGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgIDxzcGFuPlBFUkNFTlQgT0YgU1RVREVOVFMgV0hPIExJVkUgT04gQ0FNUFVTOjwvc3Bhbj4ge3Byb3BzLmxpdmVzfTxicj48L2JyPlxyXG4gICAgICAgICAgICAgICA8c3Bhbj5QUk9HUkFNUyBUSEFUIFNVUFBPUlQgRklSU1QtR0VOIFNUVURFTlRTIE9OIENBTVBVUzogPC9zcGFuPntwcm9wcy5wcm9ncmFtc308YnI+PC9icj5cclxuICAgICAgICAgICAgICAgPHNwYW4+QlJFQUtUSFJPVUdIIEFMVU1OSTo8L3NwYW4+IHtwcm9wcy5hbHVtbml9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvfE9zd2FsZHxSb2JvdG8rQ29uZGVuc2VkJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgICAuaDEge1xyXG4gICAgICAgICAgICBjb2xvcjojODJCNDQxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6NHZoO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOjV2dztcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIC5vbmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFMkUyRTI7XHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICBjb2xvcjojRkE5RDFDO1xyXG4gICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgICAgICAgZm9udC1zaXplOjR2aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IzAwNzRDODtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6Mi43dmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZnJhbWV7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gXHJcblxyXG4gICAgXHJcbiAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kaXZpZHVhbERldGFpbHM7Il19 */\n/*@ sourceURL=C:\\Users\\JohnnieG\\Desktop\\college-fit-guide\\components\\IndividualDetails.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndividualDetails);

/***/ })

})
//# sourceMappingURL=texas_schools_100.js.a7744f6b6970c11c57f3.hot-update.js.map