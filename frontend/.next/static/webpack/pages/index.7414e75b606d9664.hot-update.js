"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/Header.js\n\n\nconst Header = (param)=>{\n    let { userId, cart, removeFromCart } = param;\n    console.log(\"userId\" + userId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Shopping Website\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Header.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Header.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/cart\",\n                        children: [\n                            \"Cart (\",\n                            cart.length,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Header.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Header.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"cart\", {\n                userId: userId,\n                removeFromCart: removeFromCart\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Header.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Header.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVCQUF1Qjs7QUFDRztBQUUxQixNQUFNQyxTQUFTO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLGNBQWMsRUFBRTtJQUM5Q0MsUUFBUUMsR0FBRyxDQUFDLFdBQVNKO0lBQ3JCLHFCQUNFLDhEQUFDSzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDQyw4REFBQ0M7d0JBQUVDLE1BQUs7a0NBQUk7Ozs7OztrQ0FDWiw4REFBQ0Q7d0JBQUVDLE1BQUs7OzRCQUFROzRCQUFPUixLQUFLUyxNQUFNOzRCQUFDOzs7Ozs7O29CQUFLOzs7Ozs7OzBCQUkxQyw4REFBQ1Q7Z0JBQUtELFFBQVFBO2dCQUFTRSxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7QUFHN0M7S0FkTUg7QUFnQk4saUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxMYWItS2FyaW5pLUFpXFxmcm9udGVuZFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvSGVhZGVyLmpzXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyB1c2VySWQsIGNhcnQsIHJlbW92ZUZyb21DYXJ0IH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhcInVzZXJJZFwiK3VzZXJJZClcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgPGgxPlNob3BwaW5nIFdlYnNpdGU8L2gxPlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cclxuICAgICAgICA8YSBocmVmPVwiL2NhcnRcIj5DYXJ0ICh7Y2FydC5sZW5ndGh9KTwvYT4gey8qIENhcnQgY291bnQgKi99XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgey8qIFBhc3NpbmcgdXNlcklkIGFuZCBjYXJ0IGRhdGEgdG8gQ2FydCAqL31cclxuICAgICAgPGNhcnQgdXNlcklkPXt1c2VySWR9ICByZW1vdmVGcm9tQ2FydD17cmVtb3ZlRnJvbUNhcnR9IC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJ1c2VySWQiLCJjYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyIiwiaDEiLCJuYXYiLCJhIiwiaHJlZiIsImxlbmd0aCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});