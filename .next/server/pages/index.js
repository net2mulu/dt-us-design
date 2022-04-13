(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./component/blogSlider.js":
/*!*********************************!*\
  !*** ./component/blogSlider.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\component\\blogSlider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function BlogSlider() {
  const {
    0: asd,
    1: setAsd
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const settings = {
    dots: false,
    arrows: false,
    centerMode: false,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  };

  const renderArrows = () => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "owl-nav",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "owl-prev",
        onClick: () => asd.slickPrev(),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-arrow-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "owl-next",
        onClick: () => asd.slickNext(),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-arrow-right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary",
      style: {
        "position": "relative"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({
        ref: c => setAsd(c)
      }, settings), {}, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.2s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-media",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/blog/blog-grid-1/pic1.jpg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "blog-details-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Praesent ut lobortis purus hasellus libero orci, accumsan."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 61
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-clock m-r10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 45
                    }, this), "7 March, 2020"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "flaticon-speech-bubble"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-share"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 99,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.4s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-media",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "blog-details-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "images/blog/blog-grid-1/pic2.jpg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 57
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "blog-details-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Donec feugiat mollis nisi in dignissim. Morbi lectus."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 65
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-clock m-r10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 45
                    }, this), "7 March, 2020"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "flaticon-speech-bubble"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 156,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-share"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 164,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 170,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 169,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 176,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-media",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "blog-details-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "images/blog/blog-grid-1/pic3.jpg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 57
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "blog-details-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 61
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-clock m-r10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 45
                    }, this), "7 March, 2020"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "flaticon-speech-bubble"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 221,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-share"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 229,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 228,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 234,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 241,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 240,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "item wow fadeInUp",
          "data-wow-duration": "2s",
          "data-wow-delay": "0.6s",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dlab-blog style-1 bg-white text-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-media",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "blog-details-1",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "images/blog/blog-grid-1/pic3.jpg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 261,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 57
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 260,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-info",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                className: "dlab-title",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "blog-details-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: "Quisque sem tortor, convallis in arcu eu, accumsan finibus."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 61
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "m-b0",
                children: "Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum pulvinar."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 274,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "dlab-meta meta-bottom",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-date",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-clock m-r10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 281,
                      columnNumber: 45
                    }, this), "7 March, 2020"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-comment",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "javascript:void(0);",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        className: "flaticon-speech-bubble"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 286,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                        children: "15"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 287,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    className: "post-share",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-share"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-facebook",
                          href: "https://en-gb.facebook.com/"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 294,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 293,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-twitter",
                          href: "https://twitter.com/login?lang=en"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 300,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          className: "fa fa-linkedin",
                          href: "https://www.linkedin.com/login"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 306,
                          columnNumber: 53
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 305,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 292,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 290,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), renderArrows()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (BlogSlider);

/***/ }),

/***/ "./component/clientSlider.js":
/*!***********************************!*\
  !*** ./component/clientSlider.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\component\\clientSlider.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ClientSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_slick__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-main",
            src: "images/logo/logo-purple1.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-hover",
            src: "images/logo/logo-light1.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-main",
            src: "images/logo/logo-purple2.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-hover",
            src: "images/logo/logo-light2.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-main",
            src: "images/logo/logo-purple3.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-hover",
            src: "images/logo/logo-light3.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-main",
            src: "images/logo/logo-purple4.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-hover",
            src: "images/logo/logo-light4.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-main",
            src: "images/logo/logo-purple5.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-hover",
            src: "images/logo/logo-light5.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-main",
            src: "images/logo/logo-purple6.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-hover",
            src: "images/logo/logo-light6.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-logo",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-main",
            src: "images/logo/logo-purple6.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "logo-hover",
            src: "images/logo/logo-light6.png",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 6
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 5
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (ClientSlider);

/***/ }),

/***/ "./component/counterup.js":
/*!********************************!*\
  !*** ./component/counterup.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\component\\counterup.js";



function Counterup({
  count
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_countup__WEBPACK_IMPORTED_MODULE_1___default()), {
      end: count,
      redraw: true,
      children: ({
        countUpRef,
        start
      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_2___default()), {
        onChange: start,
        delayedCall: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          ref: countUpRef,
          children: "count"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Counterup);

/***/ }),

/***/ "./component/portfolio.js":
/*!********************************!*\
  !*** ./component/portfolio.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-react-lightbox */ "simple-react-lightbox");
/* harmony import */ var simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\component\\portfolio.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Image1 from "images/projects/grid/pic1";





function Portfolio() {
  const portfolio = [{
    title: "Software Landing Page Design",
    category: ["all", "web_design", "branding"],
    imageSrc: "/images/projects/pic4.jpg",
    img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/images/projects/pic1.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, this),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "web_development", "branding"],
    imageSrc: "/images/projects/pic4.jpg",
    img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/images/projects/pic2.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "web_design", "seo"],
    imageSrc: "/images/projects/pic4.jpg",
    img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/images/projects/pic3.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "web_design", "branding"],
    imageSrc: "/images/projects/pic4.jpg",
    img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/images/projects/pic4.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "mobile_app", "seo"],
    imageSrc: "/images/projects/pic4.jpg",
    img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/images/projects/pic5.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this),
    author: "Jhone Doe"
  }, {
    title: "Software Landing Page Design",
    category: ["all", "branding", "seo"],
    imageSrc: "/images/projects/pic4.jpg",
    img: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/images/projects/pic6.jpg",
      layout: "responsive",
      width: 370,
      height: 370
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, this),
    author: "Jhone Doe"
  }];
  const {
    0: filter,
    1: setFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("all");
  const {
    0: projects,
    1: setProjects
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    openLightbox
  } = (0,simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__.useLightbox)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setProjects(portfolio);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setProjects([]);
    const filtered = portfolio.map(p => _objectSpread(_objectSpread({}, p), {}, {
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "site-filters style-1 clearfix center m-b40",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "filters",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `btn ${filter === "all" ? "active" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            active: filter === "all",
            onClick: () => setFilter("all"),
            children: "All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `btn ${filter === "web_design" ? "active" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            active: filter === "web_design",
            onClick: () => setFilter("web_design"),
            children: "Web Design"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 19
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `btn ${filter === "web_development" ? "active" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            active: filter === "web_development",
            onClick: () => setFilter("web_development"),
            children: "Web Development"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 19
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `btn ${filter === "branding" ? "active" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            active: filter === "branding",
            onClick: () => setFilter("branding"),
            children: "Branding"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 19
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `btn ${filter === "mobile_app" ? "active" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            active: filter === "mobile_app",
            onClick: () => setFilter("mobile_app"),
            children: "Mobile App"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 19
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: `btn ${filter === "seo" ? "active" : ""}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            active: filter === "seo",
            onClick: () => setFilter("seo"),
            children: "SEO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(simple_react_lightbox__WEBPACK_IMPORTED_MODULE_3__.SRLWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clearfix",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            id: "masonry",
            className: "row",
            "data-column-width": "3",
            children: projects.map(item => item.filtered === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                className: "card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp",
                "data-wow-duration": "2s",
                "data-wow-delay": "0.1s",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "dlab-box style-1 m-b30",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "dlab-media",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      href: "",
                      children: [" ", item.img]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 33
              }, this)
            }, void 0, false) : "")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./element/aboutUs.js":
/*!****************************!*\
  !*** ./element/aboutUs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\aboutUs.js";


function AboutUs() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-6 m-b30 wow fadeInLeft",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dz-media",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/about/img4.png",
                className: "move-1",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 31
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 23
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-6 m-b30 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "section-head style-1 mb-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                className: "sub-title bgl-primary m-b20 text-primary",
                children: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 31
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "title",
                children: "How We Can Help You Achieve Your Business Goal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 31
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 27
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 27
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "m-b30",
              children: "Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 27
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "images/sign.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 27
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              className: "m-b30",
              children: "CEO Jhone Doe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 27
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "about-us-1",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-link d-inline-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fa fa-angle-right m-r10"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 112
                }, this), "Learn More"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 26
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (AboutUs);

/***/ }),

/***/ "./element/blog.js":
/*!*************************!*\
  !*** ./element/blog.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_blogSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/blogSlider */ "./component/blogSlider.js");


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\blog.js";


function Blog() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner-2",
      style: {
        "backgroundImage": "url(images/background/bg1.png)"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "Blog"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "title",
            children: "Latest Blog & News"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_blogSlider__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./element/clients.js":
/*!****************************!*\
  !*** ./element/clients.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_clientSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../component/clientSlider */ "./component/clientSlider.js");


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\clients.js";


function Clients() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "content-inner-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "clients-carousel owl-none owl-carousel owl-loaded owl-drag",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_clientSlider__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ }),

/***/ "./element/counter.js":
/*!****************************!*\
  !*** ./element/counter.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_counterup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/counterup */ "./component/counterup.js");


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\counter.js";


function Counter() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner bg-primary",
      style: {
        "backgroundImage": "url(images/background/bg3.png)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "icon-bx-wraper style-4 text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-sm radius bg-green shadow-green m-b20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "flaticon-smile"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "title",
                  children: "Satisfied Clients"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "counter m-b0 text-primary",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_counterup__WEBPACK_IMPORTED_MODULE_1__.default, {
                    count: 9875
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 51
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "icon-bx-wraper style-4 text-center m-tb30",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-sm radius bg-yellow shadow-yellow m-b20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "flaticon-line-graph"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "title",
                  children: "Project Completed"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "counter m-b0 text-primary",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_counterup__WEBPACK_IMPORTED_MODULE_1__.default, {
                    count: 8765
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 51
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.6s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "icon-bx-wraper style-4 text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-sm radius bg-blue shadow-blue m-b20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "flaticon-startup"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "title",
                  children: "Project Lunched"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "counter m-b0 text-primary",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_counterup__WEBPACK_IMPORTED_MODULE_1__.default, {
                    count: 7894
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 51
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-3 col-sm-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.8s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "icon-bx-wraper style-4 text-center m-tb30",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-sm radius bg-red shadow-red m-b20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "flaticon-confetti"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 9
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  className: "title",
                  children: "Years Completed"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "counter m-b0 text-primary",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_counterup__WEBPACK_IMPORTED_MODULE_1__.default, {
                    count: 65
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 51
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./element/cta.js":
/*!************************!*\
  !*** ./element/cta.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\cta.js";


function Cta() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      style: {
        "backgroundImage": "url(images/background/bg5.jpg)",
        "backgroundSize": "cover"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row action-box style-1 align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-7 col-lg-8 col-md-8 wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "section-head style-1",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                className: "sub-title bgl-primary m-b20 text-primary",
                children: "More With Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "title",
                children: "You Want To Showcase Your Website In Top Join With Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "contact-us-1",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "btn btn-link d-inline-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "fa fa-angle-right m-r10"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 95
                }, this), "Join Now"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Cta);

/***/ }),

/***/ "./element/newsletter.js":
/*!*******************************!*\
  !*** ./element/newsletter.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\newsletter.js";

function Newsletter() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner-3 bg-primary",
      style: {
        "backgroundImage": "url(images/background/bg13.png)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-4 col-md-5 wow fadeInLeft",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-media m-b30",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/about/img9.png",
                className: "move-2",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-8 col-md-7 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "section-head style-1 text-white",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                className: "sub-title bgl-light m-b20",
                children: "Newsletter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "title m-b15",
                children: "Subscribe To Our Newsletter For Latest Update Of Finanical Services "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-subscribe style-2 max-w500",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                className: "dzSubscribe",
                action: "script/mailchamp.php",
                method: "post",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "dzSubscribeMsg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "input-group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      name: "dzEmail",
                      required: "required",
                      type: "email",
                      className: "form-control",
                      placeholder: "Email Address"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "input-group-addon",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                        name: "submit",
                        value: "Submit",
                        type: "submit",
                        className: "btn rounded-xl shadow btn-primary",
                        children: "Subscribe Now"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 27,
                        columnNumber: 12
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Newsletter);

/***/ }),

/***/ "./element/our-features.js":
/*!*********************************!*\
  !*** ./element/our-features.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\our-features.js";

function Features() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-6 col-lg-7 wow fadeInLeft",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "section-head style-1",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                className: "sub-title bgl-primary m-b20 text-primary",
                children: "Fetures"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "title",
                children: "Our Working Process To Help Your Boost Your Business"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "section-wraper-one",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-wraper style-2 left m-b30",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "icon-bx-md radius bg-white text-red",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "javascript:void(0);",
                    className: "icon-cell",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-idea"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "icon-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                    className: "dlab-title",
                    children: "Idea & Analysis Gathering"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-wraper style-2 left m-b30",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "icon-bx-md radius bg-white text-yellow",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "javascript:void(0);",
                    className: "icon-cell",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-line-graph"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "icon-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                    className: "dlab-title",
                    children: "Designing & Developing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-wraper style-2 left m-b30",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "icon-bx-md radius bg-white text-green",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "javascript:void(0);",
                    className: "icon-cell",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "flaticon-rocket"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 11
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "icon-content",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                    className: "dlab-title",
                    children: "Testing & Lunching"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 10
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 10
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-xl-6 col-lg-5 wow fadeInRight",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "dlab-media",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "images/about/img5.png",
                className: "move-2",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./element/pricing.js":
/*!****************************!*\
  !*** ./element/pricing.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\pricing.js";


function Pricing() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("p2");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner",
      style: {
        backgroundImage: "url(images/background/bg20.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundPosition: "center"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "sub-title",
            children: "PRICING"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "title",
            children: "CHOOSE PLAN"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row pricingtable-wraper-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${open === "p1" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`,
              onMouseOver: () => setOpen("p1"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "pricingtable-inner",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    className: "title",
                    children: "Basic Plan"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-price",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "pricingtable-bx",
                    children: ["$99", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      children: "/Month"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 72
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text",
                  children: "Aliquam dui lacus, lobortis quis sapien non."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "pricingtable-features",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Graphic Design "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Web Design"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "UI/UX"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "HTML/CSS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "SEO Marketing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Business Analysis"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-footer",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/pricing-table-1",
                    className: "btn btn-primary rounded-md",
                    children: ["Start Now ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-angle-right m-l10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 113
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-4  col-md-6",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${open === "p2" ? "pricingtable-wrapper style-1 active m-b30" : "pricingtable-wrapper style-1 center m-b30"}`,
              onMouseOver: () => setOpen("p2"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "pricingtable-inner",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    className: "title",
                    children: "Standart Plan"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-price",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "pricingtable-bx",
                    children: ["$199", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      children: "/Month"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 73
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text",
                  children: "Aliquam dui lacus, lobortis quis sapien non."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "pricingtable-features",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Graphic Design "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Web Design"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "UI/UX"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "HTML/CSS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "SEO Marketing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Business Analysis"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-footer",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/pricing-table-1",
                    className: "btn btn-primary rounded-md",
                    children: ["Start Now ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-angle-right m-l10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 113
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-4  col-md-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${open === "p3" ? "pricingtable-wrapper active style-1 m-b30" : "pricingtable-wrapper style-1 center m-b30"}`,
              onMouseOver: () => setOpen("p3"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "pricingtable-inner",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-title",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                    className: "title",
                    children: "Premium Plan"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-price",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                    className: "pricingtable-bx",
                    children: ["$149", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
                      children: "/Month"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 73
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: "text",
                  children: "Aliquam dui lacus, lobortis quis sapien non."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  className: "pricingtable-features",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Graphic Design "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Web Design"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "UI/UX"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "HTML/CSS"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "SEO Marketing"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: "Business Analysis"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "pricingtable-footer",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    href: "/pricing-table-1",
                    className: "btn btn-primary rounded-md",
                    children: ["Start Now ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-angle-right m-l10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 113
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Pricing);

/***/ }),

/***/ "./element/projects.js":
/*!*****************************!*\
  !*** ./element/projects.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/portfolio */ "./component/portfolio.js");


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\projects.js";


function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "title",
            children: "Take A Look At Our Latest Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_portfolio__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./element/service.js":
/*!****************************!*\
  !*** ./element/service.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\service.js";
 // import { WOW } from "wowjs";

function Service() {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("p2"); // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 100,
  //     mobile: false,
  //     live: true,
  //   });
  //   wow.init();
  // }, []);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "content-inner-2 wow fadeInUp",
      style: {
        backgroundImage: "url(images/background/bg1.png)"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "section-head style-1 text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "sub-title bgl-primary m-b20 text-primary",
            children: "Services"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "title",
            children: "Provide Awesome Service To You"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-4 col-md-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.2s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${open === "p1" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`,
              onMouseOver: () => setOpen("p1"),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-md radius bg-yellow shadow-yellow",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "flaticon-office"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  className: "dlab-title",
                  children: "Strategy & Research"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-4 col-md-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.4s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${open === "p2" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`,
              onMouseOver: () => setOpen("p2"),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-md radius bg-red shadow-red",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "flaticon-website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  className: "dlab-title",
                  children: "Web Development"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-lg-4 col-md-6 wow fadeInUp",
            "data-wow-duration": "2s",
            "data-wow-delay": "0.6s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `${open === "p3" ? "icon-bx-wraper style-1 box-hover text-center m-b30 active" : "icon-bx-wraper style-1 box-hover text-center m-b30"}`,
              onMouseOver: () => setOpen("p3"),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-bx-md radius bg-green shadow-green",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  href: "javascript:void(0);",
                  className: "icon-cell",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "flaticon-pie-charts"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "icon-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                  className: "dlab-title",
                  children: "Web Solution"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Service);

/***/ }),

/***/ "./element/slider-1.js":
/*!*****************************!*\
  !*** ./element/slider-1.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\element\\slider-1.js";



function Slider1() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "banner-one",
      style: {
        "backgroundImage": "url(images/main-slider/slider1/pic2.png)"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "banner-inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "img1",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "images/main-slider/slider1/pic3.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 28
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "img2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "images/main-slider/slider1/pic4.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 28
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 6
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "banner-content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  "data-wow-duration": "1s",
                  "data-wow-delay": "0.5s",
                  className: "wow fadeInUp sub-title text-primary",
                  children: "We Create Ideas"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                  "data-wow-duration": "1.2s",
                  "data-wow-delay": "1s",
                  className: "wow fadeInUp ",
                  children: ["Build Stunning ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "text-primary",
                    children: "Website"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 99
                  }, this), " With Slack Agency"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  "data-wow-duration": "1.4s",
                  "data-wow-delay": "1.5s",
                  className: "wow fadeInUp m-b30",
                  children: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "about-us-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    "data-wow-duration": "1.6s",
                    "data-wow-delay": "2s",
                    className: "wow fadeInUp btn btn-link d-inline-flex align-items-center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-angle-right m-r10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 19,
                      columnNumber: 155
                    }, this), "Learn More"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 34
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 7
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "dz-media move-box wow fadeIn",
                "data-wow-duration": "1.6s",
                "data-wow-delay": "0.8s",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  className: "move-1",
                  src: "images/move/pic1.png",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 9
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  className: "move-2",
                  src: "images/move/pic2.png",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 6
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 5
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Slider1);

/***/ }),

/***/ "./layout/header.js":
/*!**************************!*\
  !*** ./layout/header.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\layout\\header.js";



function Header() {
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("home");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "site-header header-transparent text-black mo-left",
      id: "fix-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "sticky-header main-bar-wraper navbar-expand-lg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "main-bar clearfix ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container clearfix",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "logo-header mostion logo-dark",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "images/logo.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 17,
                    columnNumber: 46
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 43
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: `navbar-toggler collapsed navicon justify-content-end ${show ? "open" : ""}`,
              onClick: () => setShow(!show),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "extra-nav",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "extra-cell",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "contact-us-1",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: "btn btn-link d-inline-flex align-items-center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-angle-right m-r10"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 120
                    }, this), "Get A Quote"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 59
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: `header-nav navbar-collapse collapse justify-content-end ${show ? "show" : ""}`,
              id: "navbarNavDropdown",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "logo-header",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                      src: "images/logo.png",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 51
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 48
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                className: "nav navbar-nav navbar",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "Home"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 52
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 37
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: `${open === "about" ? "open" : ""}`,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    onClick: () => setOpen("about"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "Pages"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 122
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-chevron-down"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 140
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 85
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    className: "sub-menu",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/about-us-1",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "About Us"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 70
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/faq-1",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Faq"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 35
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 40,
                        columnNumber: 15
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/pricing-table-1",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Pricing Table"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 41,
                          columnNumber: 75
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/team-1",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Team"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 42,
                          columnNumber: 36
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 15
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 42,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/coming-soon",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Coming Soon"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 71
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 43,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/error-404",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Error 404"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 44,
                          columnNumber: 69
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 44,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/sitedown",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Site Down"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 45,
                          columnNumber: 68
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 45,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 45,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: `${open === "services" ? "open" : ""}`,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    onClick: () => setOpen("services"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "Services"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 127
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-chevron-down"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 148
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 88
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    className: "sub-menu",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/services-1",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Services"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 51,
                          columnNumber: 40
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 15
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 11
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/services-details-1",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Services Details"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 48
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 15
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  className: `${open === "blog" ? "open" : ""}`,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    onClick: () => setOpen("blog"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      children: "Blog"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 119
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                      className: "fa fa-chevron-down"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 136
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 84
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                    className: "sub-menu",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/blog-large-right-sidebar",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Large Right Sidebar"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 57,
                          columnNumber: 84
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 41
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/blog-details-1",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                          children: "Blog Details"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 58,
                          columnNumber: 44
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 15
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 11
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/contact-us-1",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      children: "Contact Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 40
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 9
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "dlab-social-icon",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "https://en-gb.facebook.com/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "fa fa-facebook"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 78
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "https://twitter.com/login?lang=en",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "fa fa-twitter"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 84
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "https://www.linkedin.com/login",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "fa fa-linkedin"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 81
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 37
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "https://www.instagram.com/",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                      className: "fa fa-instagram"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 77
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_aboutUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element/aboutUs */ "./element/aboutUs.js");
/* harmony import */ var _element_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element/blog */ "./element/blog.js");
/* harmony import */ var _element_clients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element/clients */ "./element/clients.js");
/* harmony import */ var _element_counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../element/counter */ "./element/counter.js");
/* harmony import */ var _element_cta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../element/cta */ "./element/cta.js");
/* harmony import */ var _element_newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../element/newsletter */ "./element/newsletter.js");
/* harmony import */ var _element_our_features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../element/our-features */ "./element/our-features.js");
/* harmony import */ var _element_pricing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../element/pricing */ "./element/pricing.js");
/* harmony import */ var _element_projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../element/projects */ "./element/projects.js");
/* harmony import */ var _element_quote__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../element/quote */ "./element/quote.js");
/* harmony import */ var _element_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../element/service */ "./element/service.js");
/* harmony import */ var _element_slider_1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../element/slider-1 */ "./element/slider-1.js");
/* harmony import */ var _element_team__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../element/team */ "./element/team.js");
/* harmony import */ var _element_testimonial__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../element/testimonial */ "./element/testimonial.js");
/* harmony import */ var _layout_footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../layout/footer */ "./layout/footer.js");
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../layout/header */ "./layout/header.js");


var _jsxFileName = "C:\\Users\\libe\\Desktop\\nati\\datatech-us-design\\pages\\index.js";


















function Home() {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_header__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "page-content bg-white",
      id: "top",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_slider_1__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_clients__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_service__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_aboutUs__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_counter__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_our_features__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_projects__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_newsletter__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_team__WEBPACK_IMPORTED_MODULE_14__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_pricing__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_testimonial__WEBPACK_IMPORTED_MODULE_15__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_blog__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_quote__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_element_cta__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_footer__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-countup");;

/***/ }),

/***/ "react-google-recaptcha":
/*!*****************************************!*\
  !*** external "react-google-recaptcha" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-google-recaptcha");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-slick");;

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-visibility-sensor");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "simple-react-lightbox":
/*!****************************************!*\
  !*** external "simple-react-lightbox" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("simple-react-lightbox");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js","element_quote_js-element_team_js-element_testimonial_js-layout_footer_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1hci8uL2NvbXBvbmVudC9ibG9nU2xpZGVyLmpzIiwid2VicGFjazovL3NhbWFyLy4vY29tcG9uZW50L2NsaWVudFNsaWRlci5qcyIsIndlYnBhY2s6Ly9zYW1hci8uL2NvbXBvbmVudC9jb3VudGVydXAuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9jb21wb25lbnQvcG9ydGZvbGlvLmpzIiwid2VicGFjazovL3NhbWFyLy4vZWxlbWVudC9hYm91dFVzLmpzIiwid2VicGFjazovL3NhbWFyLy4vZWxlbWVudC9ibG9nLmpzIiwid2VicGFjazovL3NhbWFyLy4vZWxlbWVudC9jbGllbnRzLmpzIiwid2VicGFjazovL3NhbWFyLy4vZWxlbWVudC9jb3VudGVyLmpzIiwid2VicGFjazovL3NhbWFyLy4vZWxlbWVudC9jdGEuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9lbGVtZW50L25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9lbGVtZW50L291ci1mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly9zYW1hci8uL2VsZW1lbnQvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly9zYW1hci8uL2VsZW1lbnQvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9lbGVtZW50L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc2FtYXIvLi9lbGVtZW50L3NsaWRlci0xLmpzIiwid2VicGFjazovL3NhbWFyLy4vbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly9zYW1hci8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QtY291bnR1cFwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYVwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9zYW1hci9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiIiwid2VicGFjazovL3NhbWFyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vc2FtYXIvZXh0ZXJuYWwgXCJzaW1wbGUtcmVhY3QtbGlnaHRib3hcIiJdLCJuYW1lcyI6WyJCbG9nU2xpZGVyIiwiYXNkIiwic2V0QXNkIiwidXNlU3RhdGUiLCJzZXR0aW5ncyIsImRvdHMiLCJhcnJvd3MiLCJjZW50ZXJNb2RlIiwic2xpZGVzVG9TaG93IiwiZHJhZ2dhYmxlIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5Iiwic3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInJlbmRlckFycm93cyIsInNsaWNrUHJldiIsInNsaWNrTmV4dCIsImMiLCJDbGllbnRTbGlkZXIiLCJDb3VudGVydXAiLCJjb3VudCIsImNvdW50VXBSZWYiLCJzdGFydCIsIlBvcnRmb2xpbyIsInBvcnRmb2xpbyIsInRpdGxlIiwiY2F0ZWdvcnkiLCJpbWFnZVNyYyIsImltZyIsImF1dGhvciIsImZpbHRlciIsInNldEZpbHRlciIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJvcGVuTGlnaHRib3giLCJ1c2VMaWdodGJveCIsInVzZUVmZmVjdCIsImZpbHRlcmVkIiwibWFwIiwicCIsImluY2x1ZGVzIiwiaXRlbSIsIkFib3V0VXMiLCJCbG9nIiwiQ2xpZW50cyIsIkNvdW50ZXIiLCJDdGEiLCJOZXdzbGV0dGVyIiwiRmVhdHVyZXMiLCJQcmljaW5nIiwib3BlbiIsInNldE9wZW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJQcm9qZWN0cyIsIlNlcnZpY2UiLCJTbGlkZXIxIiwiSGVhZGVyIiwic2hvdyIsInNldFNob3ciLCJIb21lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQ2xCLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsK0NBQVEsRUFBOUI7QUFDQSxRQUFNQyxRQUFRLEdBQUc7QUFDYkMsUUFBSSxFQUFFLEtBRE87QUFFYkMsVUFBTSxFQUFFLEtBRks7QUFHYkMsY0FBVSxFQUFFLEtBSEM7QUFJYkMsZ0JBQVksRUFBRSxDQUpEO0FBS2JDLGFBQVMsRUFBRSxJQUxFO0FBTWJDLFlBQVEsRUFBRSxJQU5HO0FBT2JDLGtCQUFjLEVBQUUsQ0FQSDtBQVFiQyxZQUFRLEVBQUUsSUFSRztBQVNiQyxTQUFLLEVBQUMsSUFUTztBQVVuQkMsY0FBVSxFQUFFLENBQ1g7QUFDRUMsZ0JBQVUsRUFBRSxJQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNYSSxvQkFBWSxFQUFFLENBREg7QUFFWEcsc0JBQWMsRUFBRSxDQUZMO0FBR1hELGdCQUFRLEVBQUUsSUFIQztBQUlYTCxZQUFJLEVBQUUsS0FKSztBQUtYRSxrQkFBVSxFQUFDO0FBTEE7QUFGWixLQURXLEVBV1g7QUFDRVEsZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNYSSxvQkFBWSxFQUFFLENBREg7QUFFWEcsc0JBQWMsRUFBRSxDQUZMO0FBR1hELGdCQUFRLEVBQUU7QUFIQztBQUZaLEtBWFc7QUFWTyxHQUFqQjs7QUFnQ0EsUUFBTU0sWUFBWSxHQUFHLE1BQU07QUFDdkIsd0JBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNJO0FBQ0ksaUJBQVMsRUFBQyxVQURkO0FBRUksZUFBTyxFQUFFLE1BQU1mLEdBQUcsQ0FBQ2dCLFNBQUosRUFGbkI7QUFBQSwrQkFJSTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBT0k7QUFDSSxpQkFBUyxFQUFDLFVBRGQ7QUFFSSxlQUFPLEVBQUUsTUFBTWhCLEdBQUcsQ0FBQ2lCLFNBQUosRUFGbkI7QUFBQSwrQkFJSTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZ0JILEdBakJEOztBQWtCQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLDZEQUFmO0FBQTZFLFdBQUssRUFBRTtBQUFDLG9CQUFXO0FBQVosT0FBcEY7QUFBQSw4QkFDSSw4REFBQyxvREFBRDtBQUFRLFdBQUcsRUFBRUMsQ0FBQyxJQUFJakIsTUFBTSxDQUFDaUIsQ0FBRDtBQUF4QixTQUNJZixRQURKO0FBQUEsZ0NBR0k7QUFDSSxtQkFBUyxFQUFDLG1CQURkO0FBRUksK0JBQWtCLElBRnRCO0FBR0ksNEJBQWUsTUFIbkI7QUFBQSxpQ0FLSTtBQUFLLHFCQUFTLEVBQUMsd0NBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHFDQUNJO0FBQUssbUJBQUcsRUFBQyxrQ0FBVDtBQUE0QyxtQkFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUk7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsWUFBZDtBQUFBLHVDQUNBLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxnQkFBWDtBQUFBLHlDQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQU9JO0FBQUcseUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBKLGVBV0k7QUFBSyx5QkFBUyxFQUFDLHVCQUFmO0FBQUEsdUNBQ0k7QUFBQSwwQ0FDSTtBQUFJLDZCQUFTLEVBQUMsV0FBZDtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBS0k7QUFBSSw2QkFBUyxFQUFDLGNBQWQ7QUFBQSwyQ0FDSTtBQUFHLDBCQUFJLEVBQUMscUJBQVI7QUFBQSw4Q0FDSTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMSixlQVdJO0FBQUksNkJBQVMsRUFBQyxZQUFkO0FBQUEsNENBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQUEsOENBQ0k7QUFBQSwrQ0FDSTtBQUNJLG1DQUFTLEVBQUMsZ0JBRGQ7QUFFSSw4QkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosZUFPSTtBQUFBLCtDQUNJO0FBQ0ksbUNBQVMsRUFBQyxlQURkO0FBRUksOEJBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVBKLGVBYUk7QUFBQSwrQ0FDSTtBQUNJLG1DQUFTLEVBQUMsZ0JBRGQ7QUFFSSw4QkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBK0RJO0FBQ0ksbUJBQVMsRUFBQyxtQkFEZDtBQUVJLCtCQUFrQixJQUZ0QjtBQUdJLDRCQUFlLE1BSG5CO0FBQUEsaUNBS0k7QUFBSyxxQkFBUyxFQUFDLHdDQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxxQ0FDQSw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsZ0JBQVg7QUFBQSx1Q0FBNEI7QUFBQSx5Q0FDcEI7QUFDSSx1QkFBRyxFQUFDLGtDQURSO0FBRUksdUJBQUcsRUFBQztBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQVNJO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEsc0NBQ0k7QUFBSSx5QkFBUyxFQUFDLFlBQWQ7QUFBQSx1Q0FDSSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsZ0JBQVg7QUFBQSx5Q0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFPSTtBQUFHLHlCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixlQVdJO0FBQUsseUJBQVMsRUFBQyx1QkFBZjtBQUFBLHVDQUNJO0FBQUEsMENBQ0k7QUFBSSw2QkFBUyxFQUFDLFdBQWQ7QUFBQSw0Q0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUtJO0FBQUksNkJBQVMsRUFBQyxjQUFkO0FBQUEsMkNBQ0k7QUFBRywwQkFBSSxFQUFDLHFCQUFSO0FBQUEsOENBQ0k7QUFBRyxpQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEosZUFXSTtBQUFJLDZCQUFTLEVBQUMsWUFBZDtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFFSTtBQUFBLDhDQUNJO0FBQUEsK0NBQ0k7QUFDSSxtQ0FBUyxFQUFDLGdCQURkO0FBRUksOEJBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLGVBT0k7QUFBQSwrQ0FDSTtBQUNJLG1DQUFTLEVBQUMsZUFEZDtBQUVJLDhCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFQSixlQWFJO0FBQUEsK0NBQ0k7QUFDSSxtQ0FBUyxFQUFDLGdCQURkO0FBRUksOEJBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvREosZUFnSUk7QUFDSSxtQkFBUyxFQUFDLG1CQURkO0FBRUksK0JBQWtCLElBRnRCO0FBR0ksNEJBQWUsTUFIbkI7QUFBQSxpQ0FLSTtBQUFLLHFCQUFTLEVBQUMsd0NBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHFDQUNBLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxnQkFBWDtBQUFBLHVDQUE0QjtBQUFBLHlDQUNwQjtBQUNJLHVCQUFHLEVBQUMsa0NBRFI7QUFFSSx1QkFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBU0k7QUFBSyx1QkFBUyxFQUFDLFdBQWY7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsWUFBZDtBQUFBLHVDQUNBLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksRUFBQyxnQkFBWDtBQUFBLHlDQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQU9JO0FBQUcseUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBKLGVBV0k7QUFBSyx5QkFBUyxFQUFDLHVCQUFmO0FBQUEsdUNBQ0k7QUFBQSwwQ0FDSTtBQUFJLDZCQUFTLEVBQUMsV0FBZDtBQUFBLDRDQUNJO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBS0k7QUFBSSw2QkFBUyxFQUFDLGNBQWQ7QUFBQSwyQ0FDSTtBQUFHLDBCQUFJLEVBQUMscUJBQVI7QUFBQSw4Q0FDSTtBQUFHLGlDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMSixlQVdJO0FBQUksNkJBQVMsRUFBQyxZQUFkO0FBQUEsNENBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQUEsOENBQ0k7QUFBQSwrQ0FDSTtBQUNJLG1DQUFTLEVBQUMsZ0JBRGQ7QUFFSSw4QkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosZUFPSTtBQUFBLCtDQUNJO0FBQ0ksbUNBQVMsRUFBQyxlQURkO0FBRUksOEJBQUksRUFBQztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVBKLGVBYUk7QUFBQSwrQ0FDSTtBQUNJLG1DQUFTLEVBQUMsZ0JBRGQ7QUFFSSw4QkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhJSixlQWlNSTtBQUNJLG1CQUFTLEVBQUMsbUJBRGQ7QUFFSSwrQkFBa0IsSUFGdEI7QUFHSSw0QkFBZSxNQUhuQjtBQUFBLGlDQUtJO0FBQUsscUJBQVMsRUFBQyx3Q0FBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEscUNBQ0EsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxFQUFDLGdCQUFYO0FBQUEsdUNBQTRCO0FBQUEseUNBQ3BCO0FBQ0ksdUJBQUcsRUFBQyxrQ0FEUjtBQUVJLHVCQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFTSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHNDQUNJO0FBQUkseUJBQVMsRUFBQyxZQUFkO0FBQUEsdUNBQ0EsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFDLGdCQUFYO0FBQUEseUNBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBT0k7QUFBRyx5QkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEosZUFXSTtBQUFLLHlCQUFTLEVBQUMsdUJBQWY7QUFBQSx1Q0FDSTtBQUFBLDBDQUNJO0FBQUksNkJBQVMsRUFBQyxXQUFkO0FBQUEsNENBQ0k7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFLSTtBQUFJLDZCQUFTLEVBQUMsY0FBZDtBQUFBLDJDQUNJO0FBQUcsMEJBQUksRUFBQyxxQkFBUjtBQUFBLDhDQUNJO0FBQUcsaUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxKLGVBV0k7QUFBSSw2QkFBUyxFQUFDLFlBQWQ7QUFBQSw0Q0FDSTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBRUk7QUFBQSw4Q0FDSTtBQUFBLCtDQUNJO0FBQ0ksbUNBQVMsRUFBQyxnQkFEZDtBQUVJLDhCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixlQU9JO0FBQUEsK0NBQ0k7QUFDSSxtQ0FBUyxFQUFDLGVBRGQ7QUFFSSw4QkFBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBUEosZUFhSTtBQUFBLCtDQUNJO0FBQ0ksbUNBQVMsRUFBQyxnQkFEZDtBQUVJLDhCQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBak1KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBb1FLWSxZQUFZLEVBcFFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQTBRSDs7QUFFRCwrREFBZWhCLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwVUE7O0FBRUEsU0FBU29CLFlBQVQsR0FBd0I7QUFDcEIsUUFBTWhCLFFBQVEsR0FBRztBQUNiQyxRQUFJLEVBQUUsS0FETztBQUViSyxZQUFRLEVBQUUsSUFGRztBQUdiRixnQkFBWSxFQUFFLENBSEQ7QUFJYkcsa0JBQWMsRUFBRSxDQUpIO0FBS2JDLFlBQVEsRUFBRSxJQUxHO0FBTWJDLFNBQUssRUFBRSxJQU5NO0FBT2JQLFVBQU0sRUFBRSxLQVBLO0FBUW5CUSxjQUFVLEVBQUUsQ0FDWDtBQUNFQyxnQkFBVSxFQUFFLElBRGQ7QUFFRVgsY0FBUSxFQUFFO0FBQ1hJLG9CQUFZLEVBQUUsQ0FESDtBQUVYRyxzQkFBYyxFQUFFO0FBRkw7QUFGWixLQURXLEVBU1g7QUFDRUksZ0JBQVUsRUFBRSxHQURkO0FBRUVYLGNBQVEsRUFBRTtBQUNYSSxvQkFBWSxFQUFFLENBREg7QUFFWEcsc0JBQWMsRUFBRTtBQUZMO0FBRlosS0FUVyxFQWlCWDtBQUNFSSxnQkFBVSxFQUFFLEdBRGQ7QUFFRVgsY0FBUSxFQUFFO0FBQ1hJLG9CQUFZLEVBQUUsQ0FESDtBQUVYRyxzQkFBYyxFQUFFO0FBRkw7QUFGWixLQWpCVztBQVJPLEdBQWpCO0FBbUNBLHNCQUNJO0FBQUEsMkJBQ0ksOERBQUMsb0RBQUQsa0NBQVlQLFFBQVo7QUFBQSw4QkFDUjtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0M7QUFDQyxxQkFBUyxFQUFDLFdBRFg7QUFFQyxlQUFHLEVBQUMsOEJBRkw7QUFHQyxlQUFHLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBTUM7QUFDQyxxQkFBUyxFQUFDLFlBRFg7QUFFQyxlQUFHLEVBQUMsNkJBRkw7QUFHQyxlQUFHLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEUSxlQWVSO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxrQ0FDQztBQUNDLHFCQUFTLEVBQUMsV0FEWDtBQUVDLGVBQUcsRUFBQyw4QkFGTDtBQUdDLGVBQUcsRUFBQztBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFNQztBQUNDLHFCQUFTLEVBQUMsWUFEWDtBQUVDLGVBQUcsRUFBQyw2QkFGTDtBQUdDLGVBQUcsRUFBQztBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZRLGVBNkJSO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxrQ0FDQztBQUNDLHFCQUFTLEVBQUMsV0FEWDtBQUVDLGVBQUcsRUFBQyw4QkFGTDtBQUdDLGVBQUcsRUFBQztBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFNQztBQUNDLHFCQUFTLEVBQUMsWUFEWDtBQUVDLGVBQUcsRUFBQyw2QkFGTDtBQUdDLGVBQUcsRUFBQztBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCUSxlQTJDUjtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0M7QUFDQyxxQkFBUyxFQUFDLFdBRFg7QUFFQyxlQUFHLEVBQUMsOEJBRkw7QUFHQyxlQUFHLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBTUM7QUFDQyxxQkFBUyxFQUFDLFlBRFg7QUFFQyxlQUFHLEVBQUMsNkJBRkw7QUFHQyxlQUFHLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQ1EsZUF5RFI7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSwrQkFDQztBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNDO0FBQ0MscUJBQVMsRUFBQyxXQURYO0FBRUMsZUFBRyxFQUFDLDhCQUZMO0FBR0MsZUFBRyxFQUFDO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQU1DO0FBQ0MscUJBQVMsRUFBQyxZQURYO0FBRUMsZUFBRyxFQUFDLDZCQUZMO0FBR0MsZUFBRyxFQUFDO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekRRLGVBdUVSO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxrQ0FDQztBQUNDLHFCQUFTLEVBQUMsV0FEWDtBQUVDLGVBQUcsRUFBQyw4QkFGTDtBQUdDLGVBQUcsRUFBQztBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFNQztBQUNDLHFCQUFTLEVBQUMsWUFEWDtBQUVDLGVBQUcsRUFBQyw2QkFGTDtBQUdDLGVBQUcsRUFBQztBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZFUSxlQXFGUjtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0M7QUFDQyxxQkFBUyxFQUFDLFdBRFg7QUFFQyxlQUFHLEVBQUMsOEJBRkw7QUFHQyxlQUFHLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBTUM7QUFDQyxxQkFBUyxFQUFDLFlBRFg7QUFFQyxlQUFHLEVBQUMsNkJBRkw7QUFHQyxlQUFHLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUF3R0g7O0FBRUQsK0RBQWVnQixZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hKQTtBQUNBOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUI7QUFBRUM7QUFBRixDQUFuQixFQUE4QjtBQUMxQixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLHNEQUFEO0FBQVMsU0FBRyxFQUFFQSxLQUFkO0FBQXFCLFlBQU0sRUFBRSxJQUE3QjtBQUFBLGdCQUNLLENBQUM7QUFBRUMsa0JBQUY7QUFBY0M7QUFBZCxPQUFELGtCQUNHLDhEQUFDLGdFQUFEO0FBQWtCLGdCQUFRLEVBQUVBLEtBQTVCO0FBQW1DLG1CQUFXLE1BQTlDO0FBQUEsK0JBQ0k7QUFBTSxhQUFHLEVBQUVELFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBV0g7O0FBRUQsK0RBQWVGLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ksU0FBVCxHQUFxQjtBQUNuQixRQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFDRUMsU0FBSyxFQUFFLDhCQURUO0FBRUVDLFlBQVEsRUFBRSxDQUFDLEtBQUQsRUFBUSxZQUFSLEVBQXNCLFVBQXRCLENBRlo7QUFHRUMsWUFBUSxFQUFFLDJCQUhaO0FBSUVDLE9BQUcsZUFDRCw4REFBQyxtREFBRDtBQUNFLFNBQUcsRUFBQywyQkFETjtBQUVFLFlBQU0sRUFBQyxZQUZUO0FBR0UsV0FBSyxFQUFFLEdBSFQ7QUFJRSxZQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFZRUMsVUFBTSxFQUFFO0FBWlYsR0FEZ0IsRUFlaEI7QUFDRUosU0FBSyxFQUFFLDhCQURUO0FBRUVDLFlBQVEsRUFBRSxDQUFDLEtBQUQsRUFBUSxpQkFBUixFQUEyQixVQUEzQixDQUZaO0FBR0VDLFlBQVEsRUFBRSwyQkFIWjtBQUlFQyxPQUFHLGVBQ0QsOERBQUMsbURBQUQ7QUFDRSxTQUFHLEVBQUMsMkJBRE47QUFFRSxZQUFNLEVBQUMsWUFGVDtBQUdFLFdBQUssRUFBRSxHQUhUO0FBSUUsWUFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBWUVDLFVBQU0sRUFBRTtBQVpWLEdBZmdCLEVBNkJoQjtBQUNFSixTQUFLLEVBQUUsOEJBRFQ7QUFFRUMsWUFBUSxFQUFFLENBQUMsS0FBRCxFQUFRLFlBQVIsRUFBc0IsS0FBdEIsQ0FGWjtBQUdFQyxZQUFRLEVBQUUsMkJBSFo7QUFJRUMsT0FBRyxlQUNELDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxFQUFDLDJCQUROO0FBRUUsWUFBTSxFQUFDLFlBRlQ7QUFHRSxXQUFLLEVBQUUsR0FIVDtBQUlFLFlBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQVlFQyxVQUFNLEVBQUU7QUFaVixHQTdCZ0IsRUEyQ2hCO0FBQ0VKLFNBQUssRUFBRSw4QkFEVDtBQUVFQyxZQUFRLEVBQUUsQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixVQUF0QixDQUZaO0FBR0VDLFlBQVEsRUFBRSwyQkFIWjtBQUlFQyxPQUFHLGVBQ0QsOERBQUMsbURBQUQ7QUFDRSxTQUFHLEVBQUMsMkJBRE47QUFFRSxZQUFNLEVBQUMsWUFGVDtBQUdFLFdBQUssRUFBRSxHQUhUO0FBSUUsWUFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBWUVDLFVBQU0sRUFBRTtBQVpWLEdBM0NnQixFQXlEaEI7QUFDRUosU0FBSyxFQUFFLDhCQURUO0FBRUVDLFlBQVEsRUFBRSxDQUFDLEtBQUQsRUFBUSxZQUFSLEVBQXNCLEtBQXRCLENBRlo7QUFHRUMsWUFBUSxFQUFFLDJCQUhaO0FBSUVDLE9BQUcsZUFDRCw4REFBQyxtREFBRDtBQUNFLFNBQUcsRUFBQywyQkFETjtBQUVFLFlBQU0sRUFBQyxZQUZUO0FBR0UsV0FBSyxFQUFFLEdBSFQ7QUFJRSxZQUFNLEVBQUU7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFZRUMsVUFBTSxFQUFFO0FBWlYsR0F6RGdCLEVBdUVoQjtBQUNFSixTQUFLLEVBQUUsOEJBRFQ7QUFFRUMsWUFBUSxFQUFFLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsS0FBcEIsQ0FGWjtBQUdFQyxZQUFRLEVBQUUsMkJBSFo7QUFJRUMsT0FBRyxlQUNELDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxFQUFDLDJCQUROO0FBRUUsWUFBTSxFQUFDLFlBRlQ7QUFHRSxXQUFLLEVBQUUsR0FIVDtBQUlFLFlBQU0sRUFBRTtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQVlFQyxVQUFNLEVBQUU7QUFaVixHQXZFZ0IsQ0FBbEI7QUF1RkEsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCOUIsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUMrQixRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQmhDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBRWlDO0FBQUYsTUFBbUJDLGtFQUFXLEVBQXBDO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkSCxlQUFXLENBQUNULFNBQUQsQ0FBWDtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQVksa0RBQVMsQ0FBQyxNQUFNO0FBQ2RILGVBQVcsQ0FBQyxFQUFELENBQVg7QUFFQSxVQUFNSSxRQUFRLEdBQUdiLFNBQVMsQ0FBQ2MsR0FBVixDQUFlQyxDQUFELG9DQUMxQkEsQ0FEMEI7QUFFN0JGLGNBQVEsRUFBRUUsQ0FBQyxDQUFDYixRQUFGLENBQVdjLFFBQVgsQ0FBb0JWLE1BQXBCO0FBRm1CLE1BQWQsQ0FBakI7QUFJQUcsZUFBVyxDQUFDSSxRQUFELENBQVg7QUFDRCxHQVJRLEVBUU4sQ0FBQ1AsTUFBRCxDQVJNLENBQVQ7QUFTQSxzQkFDTTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLDRDQUFmO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUcsT0FBTUEsTUFBTSxLQUFLLEtBQVgsR0FBbUIsUUFBbkIsR0FBOEIsRUFBRyxFQUF2RDtBQUFBLGlDQUNFO0FBQUcsa0JBQU0sRUFBRUEsTUFBTSxLQUFLLEtBQXRCO0FBQTZCLG1CQUFPLEVBQUUsTUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBSSxtQkFBUyxFQUFHLE9BQU1ELE1BQU0sS0FBSyxZQUFYLEdBQTBCLFFBQTFCLEdBQXFDLEVBQUcsRUFBOUQ7QUFBQSxpQ0FDRTtBQUNFLGtCQUFNLEVBQUVBLE1BQU0sS0FBSyxZQURyQjtBQUVFLG1CQUFPLEVBQUUsTUFBTUMsU0FBUyxDQUFDLFlBQUQsQ0FGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBY0U7QUFBSSxtQkFBUyxFQUFHLE9BQU1ELE1BQU0sS0FBSyxpQkFBWCxHQUErQixRQUEvQixHQUEwQyxFQUFHLEVBQW5FO0FBQUEsaUNBQ0U7QUFDRSxrQkFBTSxFQUFFQSxNQUFNLEtBQUssaUJBRHJCO0FBRUUsbUJBQU8sRUFBRSxNQUFNQyxTQUFTLENBQUMsaUJBQUQsQ0FGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGLGVBc0JFO0FBQUksbUJBQVMsRUFBRyxPQUFNRCxNQUFNLEtBQUssVUFBWCxHQUF3QixRQUF4QixHQUFtQyxFQUFHLEVBQTVEO0FBQUEsaUNBQ0U7QUFDRSxrQkFBTSxFQUFFQSxNQUFNLEtBQUssVUFEckI7QUFFRSxtQkFBTyxFQUFFLE1BQU1DLFNBQVMsQ0FBQyxVQUFELENBRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkYsZUE4QkU7QUFBSSxtQkFBUyxFQUFHLE9BQU1ELE1BQU0sS0FBSyxZQUFYLEdBQTBCLFFBQTFCLEdBQXFDLEVBQUcsRUFBOUQ7QUFBQSxpQ0FDRTtBQUNFLGtCQUFNLEVBQUVBLE1BQU0sS0FBSyxZQURyQjtBQUVFLG1CQUFPLEVBQUUsTUFBTUMsU0FBUyxDQUFDLFlBQUQsQ0FGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlCRixlQXNDRTtBQUFJLG1CQUFTLEVBQUcsT0FBTUQsTUFBTSxLQUFLLEtBQVgsR0FBbUIsUUFBbkIsR0FBOEIsRUFBRyxFQUF2RDtBQUFBLGlDQUNFO0FBQUcsa0JBQU0sRUFBRUEsTUFBTSxLQUFLLEtBQXRCO0FBQTZCLG1CQUFPLEVBQUUsTUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUErQ0ksOERBQUMsOERBQUQ7QUFBQSw2QkFDSSw4REFBQyw2REFBRDtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0k7QUFBSSxjQUFFLEVBQUMsU0FBUDtBQUFpQixxQkFBUyxFQUFDLEtBQTNCO0FBQWlDLGlDQUFrQixHQUFuRDtBQUFBLHNCQUNHQyxRQUFRLENBQUNNLEdBQVQsQ0FBY0csSUFBRCxJQUNaQSxJQUFJLENBQUNKLFFBQUwsS0FBa0IsSUFBbEIsZ0JBQ0U7QUFBQSxxQ0FDRTtBQUNFLHlCQUFTLEVBQUMsbUVBRFo7QUFFRSxxQ0FBa0IsSUFGcEI7QUFHRSxrQ0FBZSxNQUhqQjtBQUFBLHVDQUtJO0FBQUssMkJBQVMsRUFBQyx3QkFBZjtBQUFBLHlDQUNJO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsMkNBQ0k7QUFBRywwQkFBSSxFQUFDLEVBQVI7QUFBQSxzQ0FBYUksSUFBSSxDQUFDYixHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERiw2QkFERixHQWVFLEVBaEJIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9DSjtBQUFBLGtCQUROO0FBNkVEOztBQUVELCtEQUFlTCxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TEE7O0FBRUEsU0FBU21CLE9BQVQsR0FBbUI7QUFDZixzQkFDRTtBQUFBLDJCQUNJO0FBQVMsZUFBUyxFQUFDLGVBQW5CO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsK0JBQWY7QUFBK0MsaUNBQWtCLElBQWpFO0FBQXNFLDhCQUFlLE1BQXJGO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLFVBQWY7QUFBQSxxQ0FDSTtBQUFLLG1CQUFHLEVBQUMsdUJBQVQ7QUFBaUMseUJBQVMsRUFBQyxRQUEzQztBQUFvRCxtQkFBRyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQU1JO0FBQUsscUJBQVMsRUFBQyxnQ0FBZjtBQUFnRCxpQ0FBa0IsSUFBbEU7QUFBdUUsOEJBQWUsTUFBdEY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsMkJBQWY7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFJLHlCQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSixlQU1JO0FBQUcsdUJBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KLGVBT0k7QUFBSyxpQkFBRyxFQUFDLGlCQUFUO0FBQTJCLGlCQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSixlQVFJO0FBQUksdUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJKLGVBU0csOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFlBQVg7QUFBQSxxQ0FBd0I7QUFBSSx5QkFBUyxFQUFDLCtDQUFkO0FBQUEsd0NBQThEO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURGO0FBMEJEOztBQUVELCtEQUFlQSxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRjs7QUFHQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2Qsc0JBQ0U7QUFBQSwyQkFDRTtBQUFTLGVBQVMsRUFBQyxpQkFBbkI7QUFBcUMsV0FBSyxFQUFFO0FBQUMsMkJBQWtCO0FBQW5CLE9BQTVDO0FBQUEsNkJBQ0g7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsa0NBQWY7QUFBQSxrQ0FDQztBQUFJLHFCQUFTLEVBQUMsMENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFJLHFCQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWFEOztBQUVELCtEQUFlQSxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2Ysc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLDREQUFmO0FBQUEsaUNBQ0EsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBWUg7O0FBRUQsK0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBOztBQUNBLFNBQVNDLE9BQVQsR0FBbUI7QUFDZixzQkFDRTtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLDBCQUFuQjtBQUE4QyxXQUFLLEVBQUU7QUFBQywyQkFBa0IsZ0NBQW5CO0FBQW9ELDRCQUFtQixXQUF2RTtBQUFtRiwwQkFBaUI7QUFBcEcsT0FBckQ7QUFBQSw2QkFDTDtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNDO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQWdELGlDQUFrQixJQUFsRTtBQUF1RSw4QkFBZSxNQUF0RjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxvQ0FBZjtBQUFBLHNDQUNDO0FBQUsseUJBQVMsRUFBQywrQ0FBZjtBQUFBLHVDQUNDO0FBQUcsc0JBQUksRUFBQyxxQkFBUjtBQUE4QiwyQkFBUyxFQUFDLFdBQXhDO0FBQUEseUNBQ0M7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBTUM7QUFBSyx5QkFBUyxFQUFDLGNBQWY7QUFBQSx3Q0FDQztBQUFNLDJCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFJLDJCQUFTLEVBQUMsMkJBQWQ7QUFBQSx5Q0FBMEMsOERBQUMseURBQUQ7QUFBWSx5QkFBSyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQWNDO0FBQUsscUJBQVMsRUFBQyxnQ0FBZjtBQUFnRCxpQ0FBa0IsSUFBbEU7QUFBdUUsOEJBQWUsTUFBdEY7QUFBQSxtQ0FDQztBQUFLLHVCQUFTLEVBQUMsMkNBQWY7QUFBQSxzQ0FDQztBQUFLLHlCQUFTLEVBQUMsaURBQWY7QUFBQSx1Q0FDQztBQUFHLHNCQUFJLEVBQUMscUJBQVI7QUFBOEIsMkJBQVMsRUFBQyxXQUF4QztBQUFBLHlDQUNDO0FBQUcsNkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQU1DO0FBQUsseUJBQVMsRUFBQyxjQUFmO0FBQUEsd0NBQ0M7QUFBTSwyQkFBUyxFQUFDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBRUM7QUFBSSwyQkFBUyxFQUFDLDJCQUFkO0FBQUEseUNBQTBDLDhEQUFDLHlEQUFEO0FBQVkseUJBQUssRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEQsZUEyQkM7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQWdELGlDQUFrQixJQUFsRTtBQUF1RSw4QkFBZSxNQUF0RjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxvQ0FBZjtBQUFBLHNDQUNDO0FBQUsseUJBQVMsRUFBQyw2Q0FBZjtBQUFBLHVDQUNDO0FBQUcsc0JBQUksRUFBQyxxQkFBUjtBQUE4QiwyQkFBUyxFQUFDLFdBQXhDO0FBQUEseUNBQ0M7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBTUM7QUFBSyx5QkFBUyxFQUFDLGNBQWY7QUFBQSx3Q0FDQztBQUFNLDJCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFJLDJCQUFTLEVBQUMsMkJBQWQ7QUFBQSx5Q0FBMEMsOERBQUMseURBQUQ7QUFBWSx5QkFBSyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEzQkQsZUF3Q0M7QUFBSyxxQkFBUyxFQUFDLGdDQUFmO0FBQWdELGlDQUFrQixJQUFsRTtBQUF1RSw4QkFBZSxNQUF0RjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQywyQ0FBZjtBQUFBLHNDQUNDO0FBQUsseUJBQVMsRUFBQywyQ0FBZjtBQUFBLHVDQUNDO0FBQUcsc0JBQUksRUFBQyxxQkFBUjtBQUE4QiwyQkFBUyxFQUFDLFdBQXhDO0FBQUEseUNBQ0M7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBTUM7QUFBSyx5QkFBUyxFQUFDLGNBQWY7QUFBQSx3Q0FDQztBQUFNLDJCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFJLDJCQUFTLEVBQUMsMkJBQWQ7QUFBQSx5Q0FBMEMsOERBQUMseURBQUQ7QUFBWSx5QkFBSyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQThERDs7QUFFRCwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVGOztBQUdBLFNBQVNDLEdBQVQsR0FBZTtBQUNiLHNCQUNFO0FBQUEsMkJBQ0U7QUFBUyxXQUFLLEVBQUU7QUFBQywyQkFBa0IsZ0NBQW5CO0FBQW9ELDBCQUFpQjtBQUFyRSxPQUFoQjtBQUFBLDZCQUNIO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLDJDQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLHVDQUFmO0FBQXVELGlDQUFrQixJQUF6RTtBQUE4RSw4QkFBZSxNQUE3RjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxzQkFBZjtBQUFBLHNDQUNDO0FBQUkseUJBQVMsRUFBQywwQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDO0FBQUkseUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFPQztBQUFLLHFCQUFTLEVBQUMsd0RBQWY7QUFBd0UsaUNBQWtCLElBQTFGO0FBQStGLDhCQUFlLE1BQTlHO0FBQUEsbUNBQ0MsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGNBQVg7QUFBQSxxQ0FBMEI7QUFBSSx5QkFBUyxFQUFDLCtDQUFkO0FBQUEsd0NBQThEO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBbUJEOztBQUVELCtEQUFlQSxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQSxTQUFTQyxVQUFULEdBQXNCO0FBQ2xCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBUyxlQUFTLEVBQUMsNEJBQW5CO0FBQWdELFdBQUssRUFBRTtBQUFDLDJCQUFrQixpQ0FBbkI7QUFBcUQsNEJBQW1CLFdBQXhFO0FBQW9GLDBCQUFpQjtBQUFyRyxPQUF2RDtBQUFBLDZCQUNMO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0M7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLGtDQUFmO0FBQWtELGlDQUFrQixJQUFwRTtBQUF5RSw4QkFBZSxNQUF4RjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHFDQUNDO0FBQUssbUJBQUcsRUFBQyx1QkFBVDtBQUFpQyx5QkFBUyxFQUFDLFFBQTNDO0FBQW9ELG1CQUFHLEVBQUM7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBTUM7QUFBSyxxQkFBUyxFQUFDLG1DQUFmO0FBQW1ELGlDQUFrQixJQUFyRTtBQUEwRSw4QkFBZSxNQUF6RjtBQUFBLG9DQUNDO0FBQUssdUJBQVMsRUFBQyxpQ0FBZjtBQUFBLHNDQUNDO0FBQUkseUJBQVMsRUFBQywyQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQUVDO0FBQUkseUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZELGVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBTUM7QUFBSyx1QkFBUyxFQUFDLGlDQUFmO0FBQUEscUNBQ0M7QUFBTSx5QkFBUyxFQUFDLGFBQWhCO0FBQThCLHNCQUFNLEVBQUMsc0JBQXJDO0FBQTRELHNCQUFNLEVBQUMsTUFBbkU7QUFBQSx3Q0FDQztBQUFLLDJCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBRUM7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSx5Q0FDQztBQUFLLDZCQUFTLEVBQUMsYUFBZjtBQUFBLDRDQUNDO0FBQU8sMEJBQUksRUFBQyxTQUFaO0FBQXNCLDhCQUFRLEVBQUMsVUFBL0I7QUFBMEMsMEJBQUksRUFBQyxPQUEvQztBQUF1RCwrQkFBUyxFQUFDLGNBQWpFO0FBQWdGLGlDQUFXLEVBQUM7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERCxlQUVDO0FBQUssK0JBQVMsRUFBQyxtQkFBZjtBQUFBLDZDQUNDO0FBQVEsNEJBQUksRUFBQyxRQUFiO0FBQXNCLDZCQUFLLEVBQUMsUUFBNUI7QUFBcUMsNEJBQUksRUFBQyxRQUExQztBQUFtRCxpQ0FBUyxFQUFDLG1DQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBbUNEOztBQUVELCtEQUFlQSxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRixTQUFTQyxRQUFULEdBQW9CO0FBQ2hCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBUyxlQUFTLEVBQUMsaUJBQW5CO0FBQUEsNkJBQ0w7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDQztBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsa0NBQWY7QUFBa0QsaUNBQWtCLElBQXBFO0FBQXlFLDhCQUFlLE1BQXhGO0FBQUEsb0NBQ0M7QUFBSyx1QkFBUyxFQUFDLHNCQUFmO0FBQUEsc0NBQ0M7QUFBSSx5QkFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELGVBRUM7QUFBSSx5QkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBS0M7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEsc0NBQ0M7QUFBSyx5QkFBUyxFQUFDLG1DQUFmO0FBQUEsd0NBQ0M7QUFBSywyQkFBUyxFQUFDLHFDQUFmO0FBQUEseUNBQ0M7QUFBRyx3QkFBSSxFQUFDLHFCQUFSO0FBQThCLDZCQUFTLEVBQUMsV0FBeEM7QUFBQSwyQ0FDQztBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFNQztBQUFLLDJCQUFTLEVBQUMsY0FBZjtBQUFBLDBDQUNDO0FBQUksNkJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERCxlQVlDO0FBQUsseUJBQVMsRUFBQyxtQ0FBZjtBQUFBLHdDQUNDO0FBQUssMkJBQVMsRUFBQyx3Q0FBZjtBQUFBLHlDQUNDO0FBQUcsd0JBQUksRUFBQyxxQkFBUjtBQUE4Qiw2QkFBUyxFQUFDLFdBQXhDO0FBQUEsMkNBQ0M7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBTUM7QUFBSywyQkFBUyxFQUFDLGNBQWY7QUFBQSwwQ0FDQztBQUFJLDZCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkQsZUF1QkM7QUFBSyx5QkFBUyxFQUFDLG1DQUFmO0FBQUEsd0NBQ0M7QUFBSywyQkFBUyxFQUFDLHVDQUFmO0FBQUEseUNBQ0M7QUFBRyx3QkFBSSxFQUFDLHFCQUFSO0FBQThCLDZCQUFTLEVBQUMsV0FBeEM7QUFBQSwyQ0FDQztBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFNQztBQUFLLDJCQUFTLEVBQUMsY0FBZjtBQUFBLDBDQUNDO0FBQUksNkJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQTBDQztBQUFLLHFCQUFTLEVBQUMsbUNBQWY7QUFBbUQsaUNBQWtCLElBQXJFO0FBQTBFLDhCQUFlLE1BQXpGO0FBQUEsbUNBQ0M7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxxQ0FDQztBQUFLLG1CQUFHLEVBQUMsdUJBQVQ7QUFBaUMseUJBQVMsRUFBQyxRQUEzQztBQUFvRCxtQkFBRyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXdERDs7QUFFRCwrREFBZUEsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURGOztBQUNBLFNBQVNDLE9BQVQsR0FBbUI7QUFDZixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JsRCwrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFDRixzQkFDRTtBQUFBLDJCQUNJO0FBQVMsZUFBUyxFQUFDLGVBQW5CO0FBQW1DLFdBQUssRUFBRTtBQUFDbUQsdUJBQWUsRUFBRSxpQ0FBbEI7QUFBcURDLHdCQUFnQixFQUFFLFdBQXZFO0FBQW9GQyxzQkFBYyxFQUFFLE1BQXBHO0FBQTRHQywwQkFBa0IsRUFBQztBQUEvSCxPQUExQztBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFJLHFCQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFLSTtBQUFLLG1CQUFTLEVBQUMsMkJBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsbUJBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUcsR0FBRUwsSUFBSSxLQUFLLElBQVQsR0FBZ0IsMkNBQWhCLEdBQThELDJDQUE0QyxFQUE3SDtBQUFnSSx5QkFBVyxFQUFFLE1BQU1DLE9BQU8sQ0FBQyxJQUFELENBQTFKO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLG9CQUFmO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLG9CQUFmO0FBQUEseUNBQ0k7QUFBSSw2QkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBSUk7QUFBSywyQkFBUyxFQUFDLG9CQUFmO0FBQUEseUNBQ0k7QUFBSSw2QkFBUyxFQUFDLGlCQUFkO0FBQUEsbURBQW1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKLGVBT0k7QUFBRywyQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEosZUFRSTtBQUFJLDJCQUFTLEVBQUMsdUJBQWQ7QUFBQSwwQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJKLGVBZ0JJO0FBQUssMkJBQVMsRUFBQyxxQkFBZjtBQUFBLHlDQUNJO0FBQUcsd0JBQUksRUFBQyxrQkFBUjtBQUEyQiw2QkFBUyxFQUFDLDRCQUFyQztBQUFBLDBEQUE0RTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQXlCSTtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUcsR0FBRUQsSUFBSSxLQUFLLElBQVQsR0FBZ0IsMkNBQWhCLEdBQThELDJDQUE0QyxFQUE3SDtBQUFnSSx5QkFBVyxFQUFFLE1BQU1DLE9BQU8sQ0FBQyxJQUFELENBQTFKO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLG9CQUFmO0FBQUEsd0NBQ0k7QUFBSywyQkFBUyxFQUFDLG9CQUFmO0FBQUEseUNBQ0k7QUFBSSw2QkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBSUk7QUFBSywyQkFBUyxFQUFDLG9CQUFmO0FBQUEseUNBQ0k7QUFBSSw2QkFBUyxFQUFDLGlCQUFkO0FBQUEsb0RBQW9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKLGVBT0k7QUFBRywyQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEosZUFRSTtBQUFJLDJCQUFTLEVBQUMsdUJBQWQ7QUFBQSwwQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJKLGVBZ0JJO0FBQUssMkJBQVMsRUFBQyxxQkFBZjtBQUFBLHlDQUNJO0FBQUcsd0JBQUksRUFBQyxrQkFBUjtBQUEyQiw2QkFBUyxFQUFDLDRCQUFyQztBQUFBLDBEQUE0RTtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF6QkosZUFpREk7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFHLEdBQUVELElBQUksS0FBSyxJQUFULEdBQWdCLDJDQUFoQixHQUE4RCwyQ0FBNEMsRUFBN0g7QUFBZ0kseUJBQVcsRUFBRSxNQUFNQyxPQUFPLENBQUMsSUFBRCxDQUExSjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxvQkFBZjtBQUFBLHdDQUNJO0FBQUssMkJBQVMsRUFBQyxvQkFBZjtBQUFBLHlDQUNJO0FBQUksNkJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUlJO0FBQUssMkJBQVMsRUFBQyxvQkFBZjtBQUFBLHlDQUNJO0FBQUksNkJBQVMsRUFBQyxpQkFBZDtBQUFBLG9EQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSixlQU9JO0FBQUcsMkJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVBKLGVBUUk7QUFBSSwyQkFBUyxFQUFDLHVCQUFkO0FBQUEsMENBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSSixlQWdCSTtBQUFLLDJCQUFTLEVBQUMscUJBQWY7QUFBQSx5Q0FDSTtBQUFHLHdCQUFJLEVBQUMsa0JBQVI7QUFBMkIsNkJBQVMsRUFBQyw0QkFBckM7QUFBQSwwREFBNEU7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREY7QUFzRkQ7O0FBRUQsK0RBQWVGLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBOztBQUVBLFNBQVNPLFFBQVQsR0FBb0I7QUFDaEIsc0JBQ0k7QUFBQSwyQkFDSTtBQUFTLGVBQVMsRUFBQyxlQUFuQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUk7QUFBSSxxQkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBVUksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFrQkg7O0FBRUQsK0RBQWVBLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ3RCQTs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQ2pCLFFBQU07QUFBQSxPQUFDUCxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQmxELCtDQUFRLENBQUMsSUFBRCxDQUFoQyxDQURpQixDQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLHNCQUNFO0FBQUEsMkJBQ0U7QUFDRSxlQUFTLEVBQUMsOEJBRFo7QUFFRSxXQUFLLEVBQUU7QUFBRW1ELHVCQUFlLEVBQUU7QUFBbkIsT0FGVDtBQUFBLDZCQUlFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGtDQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLDBDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBSSxxQkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLEVBQUMsZ0NBRFo7QUFFRSxpQ0FBa0IsSUFGcEI7QUFHRSw4QkFBZSxNQUhqQjtBQUFBLG1DQUtFO0FBQ0UsdUJBQVMsRUFBRyxHQUNWRixJQUFJLEtBQUssSUFBVCxHQUNJLDJEQURKLEdBRUksb0RBQ0wsRUFMSDtBQU1FLHlCQUFXLEVBQUUsTUFBTUMsT0FBTyxDQUFDLElBQUQsQ0FONUI7QUFBQSxzQ0FRRTtBQUFLLHlCQUFTLEVBQUMsMkNBQWY7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMscUJBQVI7QUFBOEIsMkJBQVMsRUFBQyxXQUF4QztBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRixlQWFFO0FBQUsseUJBQVMsRUFBQyxjQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQTZCRTtBQUNFLHFCQUFTLEVBQUMsZ0NBRFo7QUFFRSxpQ0FBa0IsSUFGcEI7QUFHRSw4QkFBZSxNQUhqQjtBQUFBLG1DQUtFO0FBQ0UsdUJBQVMsRUFBRyxHQUNWRCxJQUFJLEtBQUssSUFBVCxHQUNJLDJEQURKLEdBRUksb0RBQ0wsRUFMSDtBQU1FLHlCQUFXLEVBQUUsTUFBTUMsT0FBTyxDQUFDLElBQUQsQ0FONUI7QUFBQSxzQ0FRRTtBQUFLLHlCQUFTLEVBQUMscUNBQWY7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMscUJBQVI7QUFBOEIsMkJBQVMsRUFBQyxXQUF4QztBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRixlQWFFO0FBQUsseUJBQVMsRUFBQyxjQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QkYsZUF5REU7QUFDRSxxQkFBUyxFQUFDLGdDQURaO0FBRUUsaUNBQWtCLElBRnBCO0FBR0UsOEJBQWUsTUFIakI7QUFBQSxtQ0FLRTtBQUNFLHVCQUFTLEVBQUcsR0FDVkQsSUFBSSxLQUFLLElBQVQsR0FDSSwyREFESixHQUVJLG9EQUNMLEVBTEg7QUFNRSx5QkFBVyxFQUFFLE1BQU1DLE9BQU8sQ0FBQyxJQUFELENBTjVCO0FBQUEsc0NBUUU7QUFBSyx5QkFBUyxFQUFDLHlDQUFmO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFDLHFCQUFSO0FBQThCLDJCQUFTLEVBQUMsV0FBeEM7QUFBQSx5Q0FDRTtBQUFHLDZCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUkYsZUFhRTtBQUFLLHlCQUFTLEVBQUMsY0FBZjtBQUFBLHdDQUNFO0FBQUksMkJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF1R0Q7O0FBRUQsK0RBQWVNLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQ0E7O0FBR0EsU0FBU0MsT0FBVCxHQUFvQjtBQUNoQixzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsV0FBSyxFQUFFO0FBQUMsMkJBQWtCO0FBQW5CLE9BQW5DO0FBQUEsNkJBQ0w7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDQztBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsbUNBQXNCO0FBQUssaUJBQUcsRUFBQyxxQ0FBVDtBQUErQyxpQkFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUVDO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsbUNBQXNCO0FBQUssaUJBQUcsRUFBQyxxQ0FBVDtBQUErQyxpQkFBRyxFQUFDO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRCxlQUdDO0FBQUsscUJBQVMsRUFBQyx3QkFBZjtBQUFBLG9DQUNDO0FBQUssdUJBQVMsRUFBQyxVQUFmO0FBQUEscUNBQ0M7QUFBSyx5QkFBUyxFQUFDLGdCQUFmO0FBQUEsd0NBQ0M7QUFBSSx1Q0FBa0IsSUFBdEI7QUFBMkIsb0NBQWUsTUFBMUM7QUFBaUQsMkJBQVMsRUFBQyxxQ0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsZUFFQztBQUFJLHVDQUFrQixNQUF0QjtBQUE2QixvQ0FBZSxJQUE1QztBQUFpRCwyQkFBUyxFQUFDLGVBQTNEO0FBQUEsNkRBQTBGO0FBQU0sNkJBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZELGVBR0M7QUFBSSx1Q0FBa0IsTUFBdEI7QUFBNkIsb0NBQWUsTUFBNUM7QUFBbUQsMkJBQVMsRUFBQyxvQkFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEQsZUFJQyw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsWUFBWDtBQUFBLHlDQUF5QjtBQUFJLHlDQUFrQixNQUF0QjtBQUE2QixzQ0FBZSxJQUE1QztBQUFpRCw2QkFBUyxFQUFDLDREQUEzRDtBQUFBLDRDQUF5SDtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBU0M7QUFBSyx1QkFBUyxFQUFDLFVBQWY7QUFBQSxxQ0FDQztBQUFLLHlCQUFTLEVBQUMsOEJBQWY7QUFBOEMscUNBQWtCLE1BQWhFO0FBQXVFLGtDQUFlLE1BQXRGO0FBQUEsd0NBQ0M7QUFBSywyQkFBUyxFQUFDLFFBQWY7QUFBd0IscUJBQUcsRUFBQyxzQkFBNUI7QUFBbUQscUJBQUcsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELGVBRUM7QUFBSywyQkFBUyxFQUFDLFFBQWY7QUFBd0IscUJBQUcsRUFBQyxzQkFBNUI7QUFBbUQscUJBQUcsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE0QkQ7O0FBRUQsK0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENGO0FBQ0E7O0FBQ0EsU0FBU0MsTUFBVCxHQUFrQjtBQUNkLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQjVELCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDaUQsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JsRCwrQ0FBUSxDQUFDLE1BQUQsQ0FBaEM7QUFDQSxzQkFDRTtBQUFBLDJCQUVFO0FBQVEsZUFBUyxFQUFDLG1EQUFsQjtBQUFzRSxRQUFFLEVBQUMsWUFBekU7QUFBQSw2QkFFSTtBQUFLLGlCQUFTLEVBQUMsZ0RBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxvQ0FFSTtBQUFLLHVCQUFTLEVBQUMsK0JBQWY7QUFBQSxxQ0FDRyw4REFBQyxrREFBRDtBQUFNLG9CQUFJLEVBQUMsR0FBWDtBQUFBLHVDQUFlO0FBQUEseUNBQUc7QUFBSyx1QkFBRyxFQUFDLGlCQUFUO0FBQTJCLHVCQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQU1JO0FBQVEsdUJBQVMsRUFBRyx3REFBdUQyRCxJQUFJLEdBQUcsTUFBSCxHQUFZLEVBQUcsRUFBOUY7QUFBaUcscUJBQU8sRUFBRSxNQUFNQyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUF2SDtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkosZUFZSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxZQUFmO0FBQUEsdUNBQ0ksOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxFQUFDLGNBQVg7QUFBQSx5Q0FBMEI7QUFBRyw2QkFBUyxFQUFDLCtDQUFiO0FBQUEsNENBQTZEO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkosZUFpQkk7QUFBSyx1QkFBUyxFQUFHLDJEQUEwREEsSUFBSSxHQUFHLE1BQUgsR0FBWSxFQUFHLEVBQTlGO0FBQWlHLGdCQUFFLEVBQUMsbUJBQXBHO0FBQUEsc0NBQ0k7QUFBSyx5QkFBUyxFQUFDLGFBQWY7QUFBQSx1Q0FDSSw4REFBQyxrREFBRDtBQUFNLHNCQUFJLEVBQUMsR0FBWDtBQUFBLHlDQUFlO0FBQUEsMkNBQUc7QUFBSyx5QkFBRyxFQUFDLGlCQUFUO0FBQTJCLHlCQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUlJO0FBQUkseUJBQVMsRUFBQyx1QkFBZDtBQUFBLHdDQUNJO0FBQUEseUNBQUksOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLEdBQVg7QUFBQSwyQ0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBRUk7QUFBSSwyQkFBUyxFQUFHLEdBQUVWLElBQUksS0FBSyxPQUFULEdBQW1CLE1BQW5CLEdBQTRCLEVBQUcsRUFBakQ7QUFBQSwwQ0FBb0Q7QUFBSSwyQkFBTyxFQUFFLE1BQU1DLE9BQU8sQ0FBQyxPQUFELENBQTFCO0FBQUEsNENBQXFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFyQyxlQUF1RDtBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQXBELGVBQ0k7QUFBSSw2QkFBUyxFQUFDLFVBQWQ7QUFBQSw0Q0FDSTtBQUFBLDZDQUFJLDhEQUFDLGtEQUFEO0FBQU0sNEJBQUksRUFBQyxhQUFYO0FBQUEsK0NBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBRTFCO0FBQUEsNkNBQUksOERBQUMsa0RBQUQ7QUFBTSw0QkFBSSxFQUFDLFFBQVg7QUFBQSwrQ0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRjBCLGVBR0k7QUFBQSw2Q0FBSSw4REFBQyxrREFBRDtBQUFNLDRCQUFJLEVBQUMsa0JBQVg7QUFBQSwrQ0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSEosZUFJMUI7QUFBQSw2Q0FBSSw4REFBQyxrREFBRDtBQUFNLDRCQUFJLEVBQUMsU0FBWDtBQUFBLCtDQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFKMEIsZUFLSTtBQUFBLDZDQUFJLDhEQUFDLGtEQUFEO0FBQU0sNEJBQUksRUFBQyxjQUFYO0FBQUEsK0NBQTBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxKLGVBTUk7QUFBQSw2Q0FBSSw4REFBQyxrREFBRDtBQUFNLDRCQUFJLEVBQUMsWUFBWDtBQUFBLCtDQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFOSixlQU9JO0FBQUEsNkNBQUksOERBQUMsa0RBQUQ7QUFBTSw0QkFBSSxFQUFDLFdBQVg7QUFBQSwrQ0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixlQWFJO0FBQUksMkJBQVMsRUFBRyxHQUFFRCxJQUFJLEtBQUssVUFBVCxHQUFzQixNQUF0QixHQUErQixFQUFHLEVBQXBEO0FBQUEsMENBQXVEO0FBQUcsMkJBQU8sRUFBRSxNQUFNQyxPQUFPLENBQUMsVUFBRCxDQUF6QjtBQUFBLDRDQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBdkMsZUFBNEQ7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUF2RCxlQUNJO0FBQUksNkJBQVMsRUFBQyxVQUFkO0FBQUEsNENBRTFCO0FBQUEsNkNBQUksOERBQUMsa0RBQUQ7QUFBTSw0QkFBSSxFQUFDLGFBQVg7QUFBQSwrQ0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRjBCLGVBRzFCO0FBQUEsNkNBQUksOERBQUMsa0RBQUQ7QUFBTSw0QkFBSSxFQUFDLHFCQUFYO0FBQUEsK0NBQWlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUgwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWJKLGVBb0JJO0FBQUksMkJBQVMsRUFBRyxHQUFFRCxJQUFJLEtBQUssTUFBVCxHQUFrQixNQUFsQixHQUEyQixFQUFHLEVBQWhEO0FBQUEsMENBQW1EO0FBQUcsMkJBQU8sRUFBRSxNQUFNQyxPQUFPLENBQUMsTUFBRCxDQUF6QjtBQUFBLDRDQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBbkMsZUFBb0Q7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFuRCxlQUNJO0FBQUksNkJBQVMsRUFBQyxVQUFkO0FBQUEsNENBQ0k7QUFBQSw2Q0FBSSw4REFBQyxrREFBRDtBQUFNLDRCQUFJLEVBQUMsMkJBQVg7QUFBQSwrQ0FBdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFFMUI7QUFBQSw2Q0FBSSw4REFBQyxrREFBRDtBQUFNLDRCQUFJLEVBQUMsaUJBQVg7QUFBQSwrQ0FBNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBcEJKLGVBMEJwQjtBQUFBLHlDQUFJLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUksRUFBQyxlQUFYO0FBQUEsMkNBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTFCb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLGVBZ0NJO0FBQUsseUJBQVMsRUFBQyxrQkFBZjtBQUFBLHVDQUNJO0FBQUEsMENBQ0ksOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLDZCQUFYO0FBQUEsMkNBQXlDO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sd0JBQUksRUFBQyxtQ0FBWDtBQUFBLDJDQUErQztBQUFHLCtCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosZUFHSSw4REFBQyxrREFBRDtBQUFNLHdCQUFJLEVBQUMsZ0NBQVg7QUFBQSwyQ0FBNEM7QUFBRywrQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhKLGVBSUksOERBQUMsa0RBQUQ7QUFBTSx3QkFBSSxFQUFDLDRCQUFYO0FBQUEsMkNBQXdDO0FBQUcsK0JBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWhDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBMEVEOztBQUVELCtEQUFlUSxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0csSUFBVCxHQUFnQjtBQUNkMUIsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QyQixZQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFlBQS9CLENBQTRDLE9BQTVDLEVBQXFELFNBQXJEO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBdUMsUUFBRSxFQUFDLEtBQTFDO0FBQUEsOEJBQ0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UsOERBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0UsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUUsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBUUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBU0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBVUUsOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBV0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBWUUsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBYUUsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLGVBY0UsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBa0JFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQSxrQkFERjtBQXNCRDs7QUFFRCwrREFBZUgsSUFBZixFOzs7Ozs7Ozs7OztBQzdDQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZnVuY3Rpb24gQmxvZ1NsaWRlcigpIHtcclxuICAgIGNvbnN0IFthc2QsIHNldEFzZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOjUwMDAsXHJcblx0XHRyZXNwb25zaXZlOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0ICBicmVha3BvaW50OiAxMDI0LFxyXG5cdFx0XHQgIHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRcdGNlbnRlck1vZGU6ZmFsc2UsXHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdCAgYnJlYWtwb2ludDogNzY3LFxyXG5cdFx0XHQgIHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fSxcclxuXHRcdF1cclxuICAgIH07XHJcbiAgICBjb25zdCByZW5kZXJBcnJvd3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3dsLXByZXZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFzZC5zbGlja1ByZXYoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3dsLW5leHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFzZC5zbGlja05leHQoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNhcm91c2VsMSBvd2wtYnRuLTEgb3dsLWJ0bi1jZW50ZXItbHIgIG93bC1idG4tcHJpbWFyeVwiIHN0eWxlPXt7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIn19PlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlciByZWY9e2MgPT4gc2V0QXNkKGMpfVxyXG4gICAgICAgICAgICAgICAgey4uLnNldHRpbmdzfSBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0gd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItYmxvZyBzdHlsZS0xIGJnLXdoaXRlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9ibG9nL2Jsb2ctZ3JpZC0xL3BpYzEuanBnXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJkbGFiLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImJsb2ctZGV0YWlscy0xXCI+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByYWVzZW50IHV0IGxvYm9ydGlzIHB1cnVzIGhhc2VsbHVzIGxpYmVyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmNpLCBhY2N1bXNhbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSB2ZWwgbmliaCBncmF2aWRhIGVyYXQgaW50ZXJkdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFjaW5pYSB2ZWwgaW4gbGVjdHVzLiBTZWQgZmVybWVudHVtIHB1bHZpbmFyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZXRhIG1ldGEtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jbG9jayBtLXIxMFwiPjwvaT43XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJjaCwgMjAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3QtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNwZWVjaC1idWJibGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1zaGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNoYXJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZW4tZ2IuZmFjZWJvb2suY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2xvZ2luP2xhbmc9ZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSB3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIjJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIwLjRzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1ibG9nIHN0eWxlLTEgYmctd2hpdGUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImJsb2ctZGV0YWlscy0xXCI+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ibG9nL2Jsb2ctZ3JpZC0xL3BpYzIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZGxhYi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZy1kZXRhaWxzLTFcIj48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmVjIGZldWdpYXQgbW9sbGlzIG5pc2kgaW4gZGlnbmlzc2ltLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yYmkgbGVjdHVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIHZlbCBuaWJoIGdyYXZpZGEgZXJhdCBpbnRlcmR1bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWNpbmlhIHZlbCBpbiBsZWN0dXMuIFNlZCBmZXJtZW50dW0gcHVsdmluYXIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLW1ldGEgbWV0YS1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3QtZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWNsb2NrIG0tcjEwXCI+PC9pPjdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hcmNoLCAyMDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1jb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc3BlZWNoLWJ1YmJsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0LXNoYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc2hhcmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9lbi1nYi5mYWNlYm9vay5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbG9naW4/bGFuZz1lblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2xvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtIHdvdyBmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIjAuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLWJsb2cgc3R5bGUtMSBiZy13aGl0ZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiYmxvZy1kZXRhaWxzLTFcIj48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL2Jsb2cvYmxvZy1ncmlkLTEvcGljMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJkbGFiLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImJsb2ctZGV0YWlscy0xXCI+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBRdWlzcXVlIHNlbSB0b3J0b3IsIGNvbnZhbGxpcyBpbiBhcmN1IGV1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjdW1zYW4gZmluaWJ1cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSB2ZWwgbmliaCBncmF2aWRhIGVyYXQgaW50ZXJkdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFjaW5pYSB2ZWwgaW4gbGVjdHVzLiBTZWQgZmVybWVudHVtIHB1bHZpbmFyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZXRhIG1ldGEtYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0LWRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jbG9jayBtLXIxMFwiPjwvaT43XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJjaCwgMjAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3QtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNwZWVjaC1idWJibGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE1PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1zaGFyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNoYXJlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZW4tZ2IuZmFjZWJvb2suY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2xvZ2luP2xhbmc9ZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1saW5rZWRpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbSB3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIjJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIwLjZzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1ibG9nIHN0eWxlLTEgYmctd2hpdGUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1tZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImJsb2ctZGV0YWlscy0xXCI+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9ibG9nL2Jsb2ctZ3JpZC0xL3BpYzMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZGxhYi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJibG9nLWRldGFpbHMtMVwiPjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVpc3F1ZSBzZW0gdG9ydG9yLCBjb252YWxsaXMgaW4gYXJjdSBldSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY3Vtc2FuIGZpbmlidXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1iMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgdmVsIG5pYmggZ3JhdmlkYSBlcmF0IGludGVyZHVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhY2luaWEgdmVsIGluIGxlY3R1cy4gU2VkIGZlcm1lbnR1bSBwdWx2aW5hci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWV0YSBtZXRhLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9zdC1kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tY2xvY2sgbS1yMTBcIj48L2k+N1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFyY2gsIDIwMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3N0LWNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zcGVlY2gtYnViYmxlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xNTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvc3Qtc2hhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zaGFyZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2VuLWdiLmZhY2Vib29rLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9sb2dpbj9sYW5nPWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vbG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckFycm93cygpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dTbGlkZXI7XHJcbiIsImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5mdW5jdGlvbiBDbGllbnRTbGlkZXIoKSB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDIwMDAsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuXHRcdHJlc3BvbnNpdmU6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHQgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcblx0XHRcdCAgc2V0dGluZ3M6IHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdFx0XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9LFx0XHJcblx0XHRcdHtcclxuXHRcdFx0ICBicmVha3BvaW50OiA3NjcsXHJcblx0XHRcdCAgc2V0dGluZ3M6IHtcclxuXHRcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdFx0XHJcblx0XHRcdCAgfVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdCAgYnJlYWtwb2ludDogNDgwLFxyXG5cdFx0XHQgIHNldHRpbmdzOiB7XHJcblx0XHRcdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQgIH1cclxuXHRcdFx0fSxcclxuXHRcdF1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLW1haW5cIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cImltYWdlcy9sb2dvL2xvZ28tcHVycGxlMS5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLWhvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbG9nby9sb2dvLWxpZ2h0MS5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLW1haW5cIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cImltYWdlcy9sb2dvL2xvZ28tcHVycGxlMi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLWhvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbG9nby9sb2dvLWxpZ2h0Mi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLW1haW5cIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cImltYWdlcy9sb2dvL2xvZ28tcHVycGxlMy5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLWhvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbG9nby9sb2dvLWxpZ2h0My5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLW1haW5cIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cImltYWdlcy9sb2dvL2xvZ28tcHVycGxlNC5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLWhvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbG9nby9sb2dvLWxpZ2h0NC5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLW1haW5cIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cImltYWdlcy9sb2dvL2xvZ28tcHVycGxlNS5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLWhvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbG9nby9sb2dvLWxpZ2h0NS5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLW1haW5cIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cImltYWdlcy9sb2dvL2xvZ28tcHVycGxlNi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLWhvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbG9nby9sb2dvLWxpZ2h0Ni5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50cy1sb2dvXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLW1haW5cIlxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cImltYWdlcy9sb2dvL2xvZ28tcHVycGxlNi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJsb2dvLWhvdmVyXCJcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCJpbWFnZXMvbG9nby9sb2dvLWxpZ2h0Ni5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9TbGlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnRTbGlkZXI7XHJcbiIsImltcG9ydCBDb3VudFVwIGZyb20gXCJyZWFjdC1jb3VudHVwXCI7XHJcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xyXG5cclxuZnVuY3Rpb24gQ291bnRlcnVwKHsgY291bnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q291bnRVcCBlbmQ9e2NvdW50fSByZWRyYXc9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgeyh7IGNvdW50VXBSZWYsIHN0YXJ0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17c3RhcnR9IGRlbGF5ZWRDYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2NvdW50VXBSZWZ9PmNvdW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQ291bnRVcD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJ1cDtcclxuIiwiLy8gaW1wb3J0IEltYWdlMSBmcm9tIFwiaW1hZ2VzL3Byb2plY3RzL2dyaWQvcGljMVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2ltcGxlUmVhY3RMaWdodGJveCBmcm9tICdzaW1wbGUtcmVhY3QtbGlnaHRib3gnO1xyXG5pbXBvcnQge1NSTFdyYXBwZXIsIHVzZUxpZ2h0Ym94fSBmcm9tICdzaW1wbGUtcmVhY3QtbGlnaHRib3gnOyBcclxuXHJcbmZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcclxuICBjb25zdCBwb3J0Zm9saW8gPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNvZnR3YXJlIExhbmRpbmcgUGFnZSBEZXNpZ25cIixcclxuICAgICAgY2F0ZWdvcnk6IFtcImFsbFwiLCBcIndlYl9kZXNpZ25cIiwgXCJicmFuZGluZ1wiXSxcclxuICAgICAgaW1hZ2VTcmM6IFwiL2ltYWdlcy9wcm9qZWN0cy9waWM0LmpwZ1wiLFxyXG4gICAgICBpbWc6IChcclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvamVjdHMvcGljMS5qcGdcIlxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICB3aWR0aD17MzcwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszNzB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSxcclxuICAgICAgYXV0aG9yOiBcIkpob25lIERvZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiU29mdHdhcmUgTGFuZGluZyBQYWdlIERlc2lnblwiLFxyXG4gICAgICBjYXRlZ29yeTogW1wiYWxsXCIsIFwid2ViX2RldmVsb3BtZW50XCIsIFwiYnJhbmRpbmdcIl0sXHJcbiAgICAgIGltYWdlU3JjOiBcIi9pbWFnZXMvcHJvamVjdHMvcGljNC5qcGdcIixcclxuICAgICAgaW1nOiAoXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2plY3RzL3BpYzIuanBnXCJcclxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgd2lkdGg9ezM3MH1cclxuICAgICAgICAgIGhlaWdodD17MzcwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICksXHJcbiAgICAgIGF1dGhvcjogXCJKaG9uZSBEb2VcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNvZnR3YXJlIExhbmRpbmcgUGFnZSBEZXNpZ25cIixcclxuICAgICAgY2F0ZWdvcnk6IFtcImFsbFwiLCBcIndlYl9kZXNpZ25cIiwgXCJzZW9cIl0sXHJcbiAgICAgIGltYWdlU3JjOiBcIi9pbWFnZXMvcHJvamVjdHMvcGljNC5qcGdcIixcclxuICAgICAgaW1nOiAoXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2plY3RzL3BpYzMuanBnXCJcclxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgd2lkdGg9ezM3MH1cclxuICAgICAgICAgIGhlaWdodD17MzcwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICksXHJcbiAgICAgIGF1dGhvcjogXCJKaG9uZSBEb2VcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNvZnR3YXJlIExhbmRpbmcgUGFnZSBEZXNpZ25cIixcclxuICAgICAgY2F0ZWdvcnk6IFtcImFsbFwiLCBcIndlYl9kZXNpZ25cIiwgXCJicmFuZGluZ1wiXSxcclxuICAgICAgaW1hZ2VTcmM6IFwiL2ltYWdlcy9wcm9qZWN0cy9waWM0LmpwZ1wiLFxyXG4gICAgICBpbWc6IChcclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvamVjdHMvcGljNC5qcGdcIlxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICB3aWR0aD17MzcwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszNzB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSxcclxuICAgICAgYXV0aG9yOiBcIkpob25lIERvZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiU29mdHdhcmUgTGFuZGluZyBQYWdlIERlc2lnblwiLFxyXG4gICAgICBjYXRlZ29yeTogW1wiYWxsXCIsIFwibW9iaWxlX2FwcFwiLCBcInNlb1wiXSxcclxuICAgICAgaW1hZ2VTcmM6IFwiL2ltYWdlcy9wcm9qZWN0cy9waWM0LmpwZ1wiLFxyXG4gICAgICBpbWc6IChcclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvamVjdHMvcGljNS5qcGdcIlxyXG4gICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICB3aWR0aD17MzcwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszNzB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSxcclxuICAgICAgYXV0aG9yOiBcIkpob25lIERvZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiU29mdHdhcmUgTGFuZGluZyBQYWdlIERlc2lnblwiLFxyXG4gICAgICBjYXRlZ29yeTogW1wiYWxsXCIsIFwiYnJhbmRpbmdcIiwgXCJzZW9cIl0sXHJcbiAgICAgIGltYWdlU3JjOiBcIi9pbWFnZXMvcHJvamVjdHMvcGljNC5qcGdcIixcclxuICAgICAgaW1nOiAoXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2plY3RzL3BpYzYuanBnXCJcclxuICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgd2lkdGg9ezM3MH1cclxuICAgICAgICAgIGhlaWdodD17MzcwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICksXHJcbiAgICAgIGF1dGhvcjogXCJKaG9uZSBEb2VcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgb3BlbkxpZ2h0Ym94IH0gPSB1c2VMaWdodGJveCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UHJvamVjdHMocG9ydGZvbGlvKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQcm9qZWN0cyhbXSk7XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwb3J0Zm9saW8ubWFwKChwKSA9PiAoe1xyXG4gICAgICAuLi5wLFxyXG4gICAgICBmaWx0ZXJlZDogcC5jYXRlZ29yeS5pbmNsdWRlcyhmaWx0ZXIpLFxyXG4gICAgfSkpO1xyXG4gICAgc2V0UHJvamVjdHMoZmlsdGVyZWQpO1xyXG4gIH0sIFtmaWx0ZXJdKTtcclxuICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1maWx0ZXJzIHN0eWxlLTEgY2xlYXJmaXggY2VudGVyIG0tYjQwXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgYnRuICR7ZmlsdGVyID09PSBcImFsbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgYWN0aXZlPXtmaWx0ZXIgPT09IFwiYWxsXCJ9IG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcImFsbFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BidG4gJHtmaWx0ZXIgPT09IFwid2ViX2Rlc2lnblwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ZmlsdGVyID09PSBcIndlYl9kZXNpZ25cIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIndlYl9kZXNpZ25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV2ViIERlc2lnblxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGJ0biAke2ZpbHRlciA9PT0gXCJ3ZWJfZGV2ZWxvcG1lbnRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2ZpbHRlciA9PT0gXCJ3ZWJfZGV2ZWxvcG1lbnRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIndlYl9kZXZlbG9wbWVudFwiKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBXZWIgRGV2ZWxvcG1lbnRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BidG4gJHtmaWx0ZXIgPT09IFwiYnJhbmRpbmdcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2ZpbHRlciA9PT0gXCJicmFuZGluZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RmlsdGVyKFwiYnJhbmRpbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQnJhbmRpbmdcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BidG4gJHtmaWx0ZXIgPT09IFwibW9iaWxlX2FwcFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17ZmlsdGVyID09PSBcIm1vYmlsZV9hcHBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZpbHRlcihcIm1vYmlsZV9hcHBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTW9iaWxlIEFwcFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YGJ0biAke2ZpbHRlciA9PT0gXCJzZW9cIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGFjdGl2ZT17ZmlsdGVyID09PSBcInNlb1wifSBvbkNsaWNrPXsoKSA9PiBzZXRGaWx0ZXIoXCJzZW9cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgU0VPXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTaW1wbGVSZWFjdExpZ2h0Ym94PlxyXG4gICAgICAgICAgICAgICAgPFNSTFdyYXBwZXIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwibWFzb25yeVwiIGNsYXNzTmFtZT1cInJvd1wiIGRhdGEtY29sdW1uLXdpZHRoPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZpbHRlcmVkID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1jb250YWluZXIgY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTYgd2ViX2Rlc2lnbiB3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT1cIjAuMXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkbGFiLWJveCBzdHlsZS0xIG0tYjMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRsYWItbWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+IHtpdGVtLmltZ308L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NSTFdyYXBwZXIgPiAgICAgIFxyXG4gICAgICAgICAgICA8L1NpbXBsZVJlYWN0TGlnaHRib3g+ICBcclxuICAgICAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBBYm91dFVzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD4gIFxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtLWIzMCB3b3cgZmFkZUluTGVmdFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR6LW1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Fib3V0L2ltZzQucG5nXCIgY2xhc3NOYW1lPVwibW92ZS0xXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG0tYjMwIHdvdyBmYWRlSW5SaWdodFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZCBzdHlsZS0xIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Yi10aXRsZSBiZ2wtcHJpbWFyeSBtLWIyMCB0ZXh0LXByaW1hcnlcIj5BYm91dCBVczwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPkhvdyBXZSBDYW4gSGVscCBZb3UgQWNoaWV2ZSBZb3VyIEJ1c2luZXNzIEdvYWw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkludGVnZXIgcHJldGl1bSBtb2xlc3RpZSBuaXNsLCBub24gYmxhbmRpdCBsZWN0dXMgc3VzY2lwaXQgaW4uIFZpdmFtdXMgdGVsbHVzIGRpYW0sIGlhY3VsaXMgZWdldCBudWxsYSBzaXQgYW1ldCwgdGluY2lkdW50IGNvbnNlY3RldHVyIHNlbS4gU3VzcGVuZGlzc2UgbGFvcmVldCwgcXVhbSBzZWQgZmF1Y2lidXMgZmV1Z2lhdCwgdG9ydG9yIHZlbGl0IHN1c2NpcGl0IG9yY2ksIHNlZCBjb25zZWN0ZXR1ciBhbnRlIGVyb3MgaWQgdXJuYS4gTWF1cmlzIGx1Y3R1cyBudWxsYSB1dCBwaGFyZXRyYSB0ZW1wb3IuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYjMwXCI+TWF1cmlzIGVnZXN0YXMgZWxlaWZlbmQgc2FwaWVuIGV1IG1hbGVzdWFkYS4gUGhhc2VsbHVzIGF0IG1ldHVzIGVnZXQgc2FwaWVuIHRyaXN0aXF1ZSBhY2N1bXNhbiBub24gc2l0IGFtZXQgYXVndWUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3NpZ24ucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtLWIzMFwiPkNFTyBKaG9uZSBEb2U8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0LXVzLTFcIj48YSAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHQgbS1yMTBcIj48L2k+TGVhcm4gTW9yZTwvYT48L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQWJvdXRVczsiLCJpbXBvcnQgQmxvZ1NsaWRlciBmcm9tIFwiLi4vY29tcG9uZW50L2Jsb2dTbGlkZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBCbG9nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyLTJcIiBzdHlsZT17e1wiYmFja2dyb3VuZEltYWdlXCI6XCJ1cmwoaW1hZ2VzL2JhY2tncm91bmQvYmcxLnBuZylcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkIHN0eWxlLTEgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJzdWItdGl0bGUgYmdsLXByaW1hcnkgbS1iMjAgdGV4dC1wcmltYXJ5XCI+QmxvZzwvaDY+XHJcblx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5MYXRlc3QgQmxvZyAmIE5ld3M8L2gyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxCbG9nU2xpZGVyLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7IiwiaW1wb3J0IENsaWVudFNsaWRlciBmcm9tIFwiLi8uLi9jb21wb25lbnQvY2xpZW50U2xpZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBDbGllbnRzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudHMtY2Fyb3VzZWwgb3dsLW5vbmUgb3dsLWNhcm91c2VsIG93bC1sb2FkZWQgb3dsLWRyYWdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xpZW50U2xpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50cztcclxuIiwiXHJcbmltcG9ydCBDb3VudGVydXAgZnJvbSAnLi4vY29tcG9uZW50L2NvdW50ZXJ1cCc7XHJcbmZ1bmN0aW9uIENvdW50ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXIgYmctcHJpbWFyeVwiIHN0eWxlPXt7XCJiYWNrZ3JvdW5kSW1hZ2VcIjpcInVybChpbWFnZXMvYmFja2dyb3VuZC9iZzMucG5nKVwiLFwiYmFja2dyb3VuZFJlcGVhdFwiOlwibm8tcmVwZWF0XCIsXCJiYWNrZ3JvdW5kU2l6ZVwiOlwiY292ZXJcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LXdyYXBlciBzdHlsZS00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LXNtIHJhZGl1cyBiZy1ncmVlbiBzaGFkb3ctZ3JlZW4gbS1iMjBcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImljb24tY2VsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1zbWlsZVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT4gXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U2F0aXNmaWVkIENsaWVudHM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiY291bnRlciBtLWIwIHRleHQtcHJpbWFyeVwiPjxDb3VudGVydXAgIGNvdW50PXs5ODc1fS8+PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTYgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIyc1wiIGRhdGEtd293LWRlbGF5PVwiMC40c1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24tYngtd3JhcGVyIHN0eWxlLTQgdGV4dC1jZW50ZXIgbS10YjMwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LXNtIHJhZGl1cyBiZy15ZWxsb3cgc2hhZG93LXllbGxvdyBtLWIyMFwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiaWNvbi1jZWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLWxpbmUtZ3JhcGhcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+IFxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlByb2plY3QgQ29tcGxldGVkPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImNvdW50ZXIgbS1iMCB0ZXh0LXByaW1hcnlcIj48Q291bnRlcnVwICBjb3VudD17ODc2NX0vPjwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNnNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LXdyYXBlciBzdHlsZS00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LXNtIHJhZGl1cyBiZy1ibHVlIHNoYWRvdy1ibHVlIG0tYjIwXCI+IFxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJpY29uLWNlbGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmxhdGljb24tc3RhcnR1cFwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT4gXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UHJvamVjdCBMdW5jaGVkPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImNvdW50ZXIgbS1iMCB0ZXh0LXByaW1hcnlcIj48Q291bnRlcnVwICBjb3VudD17Nzg5NH0vPjwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS02IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuOHNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LXdyYXBlciBzdHlsZS00IHRleHQtY2VudGVyIG0tdGIzMFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ieC1zbSByYWRpdXMgYmctcmVkIHNoYWRvdy1yZWQgbS1iMjBcIj4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cImljb24tY2VsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1jb25mZXR0aVwiPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT4gXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+WWVhcnMgQ29tcGxldGVkPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImNvdW50ZXIgbS1iMCB0ZXh0LXByaW1hcnlcIj48Q291bnRlcnVwICBjb3VudD17NjV9Lz48L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENvdW50ZXI7IiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEN0YSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gc3R5bGU9e3tcImJhY2tncm91bmRJbWFnZVwiOlwidXJsKGltYWdlcy9iYWNrZ3JvdW5kL2JnNS5qcGcpXCIsXCJiYWNrZ3JvdW5kU2l6ZVwiOlwiY292ZXJcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFjdGlvbi1ib3ggc3R5bGUtMSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTcgY29sLWxnLTggY29sLW1kLTggd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWQgc3R5bGUtMVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNiBjbGFzc05hbWU9XCJzdWItdGl0bGUgYmdsLXByaW1hcnkgbS1iMjAgdGV4dC1wcmltYXJ5XCI+TW9yZSBXaXRoIFVzPC9oNj5cclxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3UgV2FudCBUbyBTaG93Y2FzZSBZb3VyIFdlYnNpdGUgSW4gVG9wIEpvaW4gV2l0aCBVczwvaDI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC01IGNvbC1sZy00IGNvbC1tZC00IHRleHQtcmlnaHQgbS1iMzAgd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNHNcIj5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cImNvbnRhY3QtdXMtMVwiPjxhICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodCBtLXIxMFwiPjwvaT5Kb2luIE5vdzwvYT48L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN0YTsiLCJcclxuXHJcbmZ1bmN0aW9uIE5ld3NsZXR0ZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnQtaW5uZXItMyBiZy1wcmltYXJ5XCIgc3R5bGU9e3tcImJhY2tncm91bmRJbWFnZVwiOlwidXJsKGltYWdlcy9iYWNrZ3JvdW5kL2JnMTMucG5nKVwiLFwiYmFja2dyb3VuZFJlcGVhdFwiOlwibm8tcmVwZWF0XCIsXCJiYWNrZ3JvdW5kU2l6ZVwiOlwiY292ZXJcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNSB3b3cgZmFkZUluTGVmdFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuMnNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkbGFiLW1lZGlhIG0tYjMwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvaW1nOS5wbmdcIiBjbGFzc05hbWU9XCJtb3ZlLTJcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC03IHdvdyBmYWRlSW5SaWdodFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNHNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWQgc3R5bGUtMSB0ZXh0LXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg2IGNsYXNzTmFtZT1cInN1Yi10aXRsZSBiZ2wtbGlnaHQgbS1iMjBcIj5OZXdzbGV0dGVyPC9oNj5cclxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGl0bGUgbS1iMTVcIj5TdWJzY3JpYmUgVG8gT3VyIE5ld3NsZXR0ZXIgRm9yIExhdGVzdCBVcGRhdGUgT2YgRmluYW5pY2FsIFNlcnZpY2VzIDwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PHA+Q3VyYWJpdHVyIGVsZWlmZW5kIG5pYmggc2l0IGFtZXQgZXggcG9zdWVyZSwgdmVsIG1hbGVzdWFkYSB0dXJwaXMgcHJldGl1bS4gUXVpc3F1ZSBldCB0aW5jaWR1bnQgcmlzdXMsIGEgdGVtcG9yIG1hc3NhLiBDcmFzIHRlbXBvciBlZ2VzdGFzIGxpYmVybywgZXUgbGFvcmVldCBlbmltIHBoYXJldHJhIG5vbi48L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRsYWItc3Vic2NyaWJlIHN0eWxlLTIgbWF4LXc1MDBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJkelN1YnNjcmliZVwiIGFjdGlvbj1cInNjcmlwdC9tYWlsY2hhbXAucGhwXCIgbWV0aG9kPVwicG9zdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkelN1YnNjcmliZU1zZ1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgbmFtZT1cImR6RW1haWxcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biByb3VuZGVkLXhsIHNoYWRvdyBidG4tcHJpbWFyeVwiPlN1YnNjcmliZSBOb3c8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlcjsiLCJcclxuXHJcbmZ1bmN0aW9uIEZlYXR1cmVzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LWlubmVyLTJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTYgY29sLWxnLTcgd293IGZhZGVJbkxlZnRcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIjJzXCIgZGF0YS13b3ctZGVsYXk9XCIwLjJzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkIHN0eWxlLTFcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgY2xhc3NOYW1lPVwic3ViLXRpdGxlIGJnbC1wcmltYXJ5IG0tYjIwIHRleHQtcHJpbWFyeVwiPkZldHVyZXM8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPk91ciBXb3JraW5nIFByb2Nlc3MgVG8gSGVscCBZb3VyIEJvb3N0IFlvdXIgQnVzaW5lc3M8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXdyYXBlci1vbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24tYngtd3JhcGVyIHN0eWxlLTIgbGVmdCBtLWIzMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LW1kIHJhZGl1cyBiZy13aGl0ZSB0ZXh0LXJlZFwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJpY29uLWNlbGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1pZGVhXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+IFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZGxhYi10aXRsZVwiPklkZWEgJiBBbmFseXNpcyBHYXRoZXJpbmc8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS48L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24tYngtd3JhcGVyIHN0eWxlLTIgbGVmdCBtLWIzMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LW1kIHJhZGl1cyBiZy13aGl0ZSB0ZXh0LXllbGxvd1wiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJpY29uLWNlbGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1saW5lLWdyYXBoXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+IFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGVudFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDQgY2xhc3NOYW1lPVwiZGxhYi10aXRsZVwiPkRlc2lnbmluZyAmIERldmVsb3Bpbmc8L2g0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLWJ4LXdyYXBlciBzdHlsZS0yIGxlZnQgbS1iMzBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ieC1tZCByYWRpdXMgYmctd2hpdGUgdGV4dC1ncmVlblwiPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJpY29uLWNlbGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1yb2NrZXRcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT4gXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoNCBjbGFzc05hbWU9XCJkbGFiLXRpdGxlXCI+VGVzdGluZyAmIEx1bmNoaW5nPC9oND5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC02IGNvbC1sZy01IHdvdyBmYWRlSW5SaWdodFwiIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIiBkYXRhLXdvdy1kZWxheT1cIjAuNHNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkbGFiLW1lZGlhXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvaW1nNS5wbmdcIiBjbGFzc05hbWU9XCJtb3ZlLTJcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXM7IiwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmZ1bmN0aW9uIFByaWNpbmcoKSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShcInAyXCIpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChpbWFnZXMvYmFja2dyb3VuZC9iZzIwLnBuZylcIiwgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIiwgYmFja2dyb3VuZFNpemU6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kUG9zaXRpb246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWQgc3R5bGUtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5QUklDSU5HPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5DSE9PU0UgUExBTjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHByaWNpbmd0YWJsZS13cmFwZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake29wZW4gPT09IFwicDFcIiA/IFwicHJpY2luZ3RhYmxlLXdyYXBwZXIgYWN0aXZlIHN0eWxlLTEgbS1iMzBcIiA6IFwicHJpY2luZ3RhYmxlLXdyYXBwZXIgc3R5bGUtMSBjZW50ZXIgbS1iMzBcIn1gfSBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0T3BlbihcInAxXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ3RhYmxlLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5ndGFibGUtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+QmFzaWMgUGxhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5ndGFibGUtcHJpY2VcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcmljaW5ndGFibGUtYnhcIj4kOTk8c21hbGw+L01vbnRoPC9zbWFsbD48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj5BbGlxdWFtIGR1aSBsYWN1cywgbG9ib3J0aXMgcXVpcyBzYXBpZW4gbm9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHJpY2luZ3RhYmxlLWZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5HcmFwaGljIERlc2lnbiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+V2ViIERlc2lnbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5VSS9VWDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5IVE1ML0NTUzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5TRU8gTWFya2V0aW5nPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJ1c2luZXNzIEFuYWx5c2lzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ3RhYmxlLWZvb3RlclwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcmljaW5nLXRhYmxlLTFcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgcm91bmRlZC1tZFwiPlN0YXJ0IE5vdyA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodCBtLWwxMFwiPjwvaT48L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtvcGVuID09PSBcInAyXCIgPyBcInByaWNpbmd0YWJsZS13cmFwcGVyIHN0eWxlLTEgYWN0aXZlIG0tYjMwXCIgOiBcInByaWNpbmd0YWJsZS13cmFwcGVyIHN0eWxlLTEgY2VudGVyIG0tYjMwXCJ9YH0gb25Nb3VzZU92ZXI9eygpID0+IHNldE9wZW4oXCJwMlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmd0YWJsZS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ3RhYmxlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0YW5kYXJ0IFBsYW48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ3RhYmxlLXByaWNlXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJpY2luZ3RhYmxlLWJ4XCI+JDE5OTxzbWFsbD4vTW9udGg8L3NtYWxsPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dFwiPkFsaXF1YW0gZHVpIGxhY3VzLCBsb2JvcnRpcyBxdWlzIHNhcGllbiBub24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcmljaW5ndGFibGUtZmVhdHVyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdyYXBoaWMgRGVzaWduIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWIgRGVzaWduPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVJL1VYPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhUTUwvQ1NTPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNFTyBNYXJrZXRpbmc8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QnVzaW5lc3MgQW5hbHlzaXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5ndGFibGUtZm9vdGVyXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3ByaWNpbmctdGFibGUtMVwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSByb3VuZGVkLW1kXCI+U3RhcnQgTm93IDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0IG0tbDEwXCI+PC9pPjwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCAgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtvcGVuID09PSBcInAzXCIgPyBcInByaWNpbmd0YWJsZS13cmFwcGVyIGFjdGl2ZSBzdHlsZS0xIG0tYjMwXCIgOiBcInByaWNpbmd0YWJsZS13cmFwcGVyIHN0eWxlLTEgY2VudGVyIG0tYjMwXCJ9YH0gb25Nb3VzZU92ZXI9eygpID0+IHNldE9wZW4oXCJwM1wiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmd0YWJsZS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2luZ3RhYmxlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlByZW1pdW0gUGxhbjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5ndGFibGUtcHJpY2VcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwcmljaW5ndGFibGUtYnhcIj4kMTQ5PHNtYWxsPi9Nb250aDwvc21hbGw+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0XCI+QWxpcXVhbSBkdWkgbGFjdXMsIGxvYm9ydGlzIHF1aXMgc2FwaWVuIG5vbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByaWNpbmd0YWJsZS1mZWF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+R3JhcGhpYyBEZXNpZ24gPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlYiBEZXNpZ248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VUkvVVg8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SFRNTC9DU1M8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U0VPIE1hcmtldGluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5CdXNpbmVzcyBBbmFseXNpczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmd0YWJsZS1mb290ZXJcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJpY2luZy10YWJsZS0xXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHJvdW5kZWQtbWRcIj5TdGFydCBOb3cgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtcmlnaHQgbS1sMTBcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZzsiLCJpbXBvcnQgUG9ydGZvbGlvIGZyb20gXCIuLi9jb21wb25lbnQvcG9ydGZvbGlvXCI7XHJcblxyXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZCBzdHlsZS0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWItdGl0bGUgYmdsLXByaW1hcnkgbS1iMjAgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgQSBMb29rIEF0IE91ciBMYXRlc3QgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW8gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBXT1cgfSBmcm9tIFwid293anNcIjtcclxuXHJcbmZ1bmN0aW9uIFNlcnZpY2UoKSB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoXCJwMlwiKTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3Qgd293ID0gbmV3IFdPVyh7XHJcbiAgLy8gICAgIG9mZnNldDogMTAwLFxyXG4gIC8vICAgICBtb2JpbGU6IGZhbHNlLFxyXG4gIC8vICAgICBsaXZlOiB0cnVlLFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgd293LmluaXQoKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1pbm5lci0yIHdvdyBmYWRlSW5VcFwiXHJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChpbWFnZXMvYmFja2dyb3VuZC9iZzEucG5nKVwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWQgc3R5bGUtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3ViLXRpdGxlIGJnbC1wcmltYXJ5IG0tYjIwIHRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlByb3ZpZGUgQXdlc29tZSBTZXJ2aWNlIFRvIFlvdTwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiB3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIlxyXG4gICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMC4yc1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBvcGVuID09PSBcInAxXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbi1ieC13cmFwZXIgc3R5bGUtMSBib3gtaG92ZXIgdGV4dC1jZW50ZXIgbS1iMzAgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbi1ieC13cmFwZXIgc3R5bGUtMSBib3gtaG92ZXIgdGV4dC1jZW50ZXIgbS1iMzBcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0T3BlbihcInAxXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ieC1tZCByYWRpdXMgYmcteWVsbG93IHNoYWRvdy15ZWxsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJpY29uLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi1vZmZpY2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImRsYWItdGl0bGVcIj5TdHJhdGVneSAmIFJlc2VhcmNoPC9oND5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRnVzY2Ugc2l0IGFtZXQgZHVpIHZpdGFlIHVybmEgdHJpc3RpcXVlIGltcGVyZGlldC4gRG9uZWNcclxuICAgICAgICAgICAgICAgICAgICBlZ2V0IHNhcGllbiBldWlzbW9kLCBmYXVjaWJ1cyBuaWJoIG5vbiwgY29uc2VxdWF0IGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgUHJhZXNlbnQgc2VkIHZlaGljdWxhLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiB3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIlxyXG4gICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMC40c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBvcGVuID09PSBcInAyXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbi1ieC13cmFwZXIgc3R5bGUtMSBib3gtaG92ZXIgdGV4dC1jZW50ZXIgbS1iMzAgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbi1ieC13cmFwZXIgc3R5bGUtMSBib3gtaG92ZXIgdGV4dC1jZW50ZXIgbS1iMzBcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0T3BlbihcInAyXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ieC1tZCByYWRpdXMgYmctcmVkIHNoYWRvdy1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJpY29uLWNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmbGF0aWNvbi13ZWJzaXRlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkbGFiLXRpdGxlXCI+V2ViIERldmVsb3BtZW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRnVzY2Ugc2l0IGFtZXQgZHVpIHZpdGFlIHVybmEgdHJpc3RpcXVlIGltcGVyZGlldC4gRG9uZWNcclxuICAgICAgICAgICAgICAgICAgICBlZ2V0IHNhcGllbiBldWlzbW9kLCBmYXVjaWJ1cyBuaWJoIG5vbiwgY29uc2VxdWF0IGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgUHJhZXNlbnQgc2VkIHZlaGljdWxhLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiB3b3cgZmFkZUluVXBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtd293LWR1cmF0aW9uPVwiMnNcIlxyXG4gICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiMC42c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICBvcGVuID09PSBcInAzXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiaWNvbi1ieC13cmFwZXIgc3R5bGUtMSBib3gtaG92ZXIgdGV4dC1jZW50ZXIgbS1iMzAgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiaWNvbi1ieC13cmFwZXIgc3R5bGUtMSBib3gtaG92ZXIgdGV4dC1jZW50ZXIgbS1iMzBcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0T3BlbihcInAzXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ieC1tZCByYWRpdXMgYmctZ3JlZW4gc2hhZG93LWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwiaWNvbi1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmxhdGljb24tcGllLWNoYXJ0c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZGxhYi10aXRsZVwiPldlYiBTb2x1dGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEZ1c2NlIHNpdCBhbWV0IGR1aSB2aXRhZSB1cm5hIHRyaXN0aXF1ZSBpbXBlcmRpZXQuIERvbmVjXHJcbiAgICAgICAgICAgICAgICAgICAgZWdldCBzYXBpZW4gZXVpc21vZCwgZmF1Y2lidXMgbmliaCBub24sIGNvbnNlcXVhdCBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgIFByYWVzZW50IHNlZCB2ZWhpY3VsYS5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTbGlkZXIxICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItb25lXCIgc3R5bGU9e3tcImJhY2tncm91bmRJbWFnZVwiOlwidXJsKGltYWdlcy9tYWluLXNsaWRlci9zbGlkZXIxL3BpYzIucG5nKVwifX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaW5uZXJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1nMVwiPjxpbWcgc3JjPVwiaW1hZ2VzL21haW4tc2xpZGVyL3NsaWRlcjEvcGljMy5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltZzJcIj48aW1nIHNyYz1cImltYWdlcy9tYWluLXNsaWRlci9zbGlkZXIxL3BpYzQucG5nXCIgYWx0PVwiXCIvPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDYgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiIGRhdGEtd293LWRlbGF5PVwiMC41c1wiIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcCBzdWItdGl0bGUgdGV4dC1wcmltYXJ5XCI+V2UgQ3JlYXRlIElkZWFzPC9oNj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMSBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuMnNcIiBkYXRhLXdvdy1kZWxheT1cIjFzXCIgY2xhc3NOYW1lPVwid293IGZhZGVJblVwIFwiPkJ1aWxkIFN0dW5uaW5nIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPldlYnNpdGU8L3NwYW4+IFdpdGggU2xhY2sgQWdlbmN5PC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdDxwICBkYXRhLXdvdy1kdXJhdGlvbj1cIjEuNHNcIiBkYXRhLXdvdy1kZWxheT1cIjEuNXNcIiBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXAgbS1iMzBcIj5Nb3JiaSBzZWQgbGFjdXMgbmVjIHJpc3VzIGZpbmlidXMgZmV1Z2lhdCBldCBmZXJtZW50dW0gbmliaC4gUGVsbGVudGVzcXVlIHZpdGFlIGFudGUgYXQgZWxpdCBmcmluZ2lsbGEgYWMgYXQgcHVydXMuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cImFib3V0LXVzLTFcIiA+PGEgIGRhdGEtd293LWR1cmF0aW9uPVwiMS42c1wiIGRhdGEtd293LWRlbGF5PVwiMnNcIiBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXAgYnRuIGJ0bi1saW5rIGQtaW5saW5lLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCIgPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0IG0tcjEwXCI+PC9pPkxlYXJuIE1vcmU8L2E+PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHotbWVkaWEgbW92ZS1ib3ggd293IGZhZGVJblwiIGRhdGEtd293LWR1cmF0aW9uPVwiMS42c1wiIGRhdGEtd293LWRlbGF5PVwiMC44c1wiID5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwibW92ZS0xXCIgc3JjPVwiaW1hZ2VzL21vdmUvcGljMS5wbmdcIiBhbHQ9XCJcIi8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cIm1vdmUtMlwiIHNyYz1cImltYWdlcy9tb3ZlL3BpYzIucG5nXCIgYWx0PVwiXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgU2xpZGVyMTsiLCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKFwiaG9tZVwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgey8qIDwhLS0gSGVhZGVyIC0tPiAqL31cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNpdGUtaGVhZGVyIGhlYWRlci10cmFuc3BhcmVudCB0ZXh0LWJsYWNrIG1vLWxlZnRcIiBpZD1cImZpeC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgey8qIDwhLS0gTWFpbiBIZWFkZXIgLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreS1oZWFkZXIgbWFpbi1iYXItd3JhcGVyIG5hdmJhci1leHBhbmQtbGdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1iYXIgY2xlYXJmaXggXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gV2Vic2l0ZSBMb2dvIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWhlYWRlciBtb3N0aW9uIGxvZ28tZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgc3JjPVwiaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBOYXYgVG9nZ2xlIEJ1dHRvbiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbmF2YmFyLXRvZ2dsZXIgY29sbGFwc2VkIG5hdmljb24ganVzdGlmeS1jb250ZW50LWVuZCAke3Nob3cgPyBcIm9wZW5cIiA6IFwiXCJ9YH0gb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gRXh0cmEgTmF2IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYS1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmEtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJjb250YWN0LXVzLTFcIj48YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZC1pbmxpbmUtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodCBtLXIxMFwiPjwvaT5HZXQgQSBRdW90ZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLW5hdiBuYXZiYXItY29sbGFwc2UgY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZCAke3Nob3cgPyBcInNob3dcIiA6IFwiXCJ9YH0gaWQ9XCJuYXZiYXJOYXZEcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+PGltZyBzcmM9XCJpbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJcIi8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhclwiPlx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvXCI+PGE+SG9tZTwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtvcGVuID09PSBcImFib3V0XCIgPyBcIm9wZW5cIiA6IFwiXCJ9YH0+PGEgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oXCJhYm91dFwiKX0+PHNwYW4+UGFnZXM8L3NwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1kb3duXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9hYm91dC11cy0xXCI+PGE+QWJvdXQgVXM8L2E+PC9MaW5rPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxMaW5rIGhyZWY9XCIvZmFxLTFcIj48YT5GYXE8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9wcmljaW5nLXRhYmxlLTFcIj48YT5QcmljaW5nIFRhYmxlPC9hPjwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL3RlYW0tMVwiPjxhPlRlYW08L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb21pbmctc29vblwiPjxhPkNvbWluZyBTb29uPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZXJyb3ItNDA0XCI+PGE+RXJyb3IgNDA0PC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvc2l0ZWRvd25cIj48YT5TaXRlIERvd248L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgJHtvcGVuID09PSBcInNlcnZpY2VzXCIgPyBcIm9wZW5cIiA6IFwiXCJ9YH0+PGEgb25DbGljaz17KCkgPT4gc2V0T3BlbihcInNlcnZpY2VzXCIpfT48c3Bhbj5TZXJ2aWNlczwvc3Bhbj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLWRvd25cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL3NlcnZpY2VzLTFcIj48YT5TZXJ2aWNlczwvYT48L0xpbms+PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PExpbmsgaHJlZj1cIi9zZXJ2aWNlcy1kZXRhaWxzLTFcIj48YT5TZXJ2aWNlcyBEZXRhaWxzPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7b3BlbiA9PT0gXCJibG9nXCIgPyBcIm9wZW5cIiA6IFwiXCJ9YH0+PGEgb25DbGljaz17KCkgPT4gc2V0T3BlbihcImJsb2dcIil9PjxzcGFuPkJsb2c8L3NwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1kb3duXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9ibG9nLWxhcmdlLXJpZ2h0LXNpZGViYXJcIj48YT5MYXJnZSBSaWdodCBTaWRlYmFyPC9hPjwvTGluaz48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48TGluayBocmVmPVwiL2Jsb2ctZGV0YWlscy0xXCI+PGE+QmxvZyBEZXRhaWxzPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGk+PExpbmsgaHJlZj1cIi9jb250YWN0LXVzLTFcIj48YT5Db250YWN0IFVzPC9hPjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGxhYi1zb2NpYWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZW4tZ2IuZmFjZWJvb2suY29tL1wiPjxhIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbG9naW4/bGFuZz1lblwiPjxhIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2xvZ2luXCI+PGEgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW5cIj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIj48YSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBNYWluIEhlYWRlciBFbmQgLS0+ICovfVxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIHsvKiA8IS0tIEhlYWRlciBFbmQgLS0+ICovfVxyXG4gICAgICAgIFxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cclxuICAiLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4uL2VsZW1lbnQvYWJvdXRVc1wiO1xyXG5pbXBvcnQgQmxvZyBmcm9tIFwiLi4vZWxlbWVudC9ibG9nXCI7XHJcbmltcG9ydCBDbGllbnRzIGZyb20gXCIuLi9lbGVtZW50L2NsaWVudHNcIjtcclxuaW1wb3J0IENvdW50ZXIgZnJvbSBcIi4uL2VsZW1lbnQvY291bnRlclwiO1xyXG5pbXBvcnQgQ3RhIGZyb20gXCIuLi9lbGVtZW50L2N0YVwiO1xyXG5pbXBvcnQgTmV3c2xldHRlciBmcm9tIFwiLi4vZWxlbWVudC9uZXdzbGV0dGVyXCI7XHJcbmltcG9ydCBGZWF0dXJlcyBmcm9tIFwiLi4vZWxlbWVudC9vdXItZmVhdHVyZXNcIjtcclxuaW1wb3J0IFByaWNpbmcgZnJvbSBcIi4uL2VsZW1lbnQvcHJpY2luZ1wiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4uL2VsZW1lbnQvcHJvamVjdHNcIjtcclxuaW1wb3J0IFF1b3RlIGZyb20gXCIuLi9lbGVtZW50L3F1b3RlXCI7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gXCIuLi9lbGVtZW50L3NlcnZpY2VcIjtcclxuaW1wb3J0IFNsaWRlcjEgZnJvbSBcIi4uL2VsZW1lbnQvc2xpZGVyLTFcIjtcclxuaW1wb3J0IFRlYW0gZnJvbSBcIi4uL2VsZW1lbnQvdGVhbVwiO1xyXG5pbXBvcnQgVGVzdGltb25pYWwgZnJvbSBcIi4uL2VsZW1lbnQvdGVzdGltb25pYWxcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vbGF5b3V0L2Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9sYXlvdXQvaGVhZGVyXCI7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIFwiY29sb3JfMVwiKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnQgYmctd2hpdGVcIiBpZD1cInRvcFwiPlxyXG4gICAgICAgIDxTbGlkZXIxIC8+XHJcbiAgICAgICAgPENsaWVudHMgLz5cclxuICAgICAgICA8U2VydmljZSAvPlxyXG4gICAgICAgIDxBYm91dFVzIC8+XHJcbiAgICAgICAgPENvdW50ZXIgLz5cclxuICAgICAgICA8RmVhdHVyZXMgLz5cclxuICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICA8TmV3c2xldHRlciAvPlxyXG4gICAgICAgIDxUZWFtIC8+XHJcbiAgICAgICAgPFByaWNpbmcgLz5cclxuICAgICAgICA8VGVzdGltb25pYWwgLz5cclxuICAgICAgICA8QmxvZyAvPlxyXG4gICAgICAgIDxRdW90ZSAvPlxyXG4gICAgICAgIDxDdGEgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50dXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2ltcGxlLXJlYWN0LWxpZ2h0Ym94XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9