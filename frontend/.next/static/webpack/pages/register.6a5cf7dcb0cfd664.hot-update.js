"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RegisterPage = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleRegister = async (e)=>{\n        e.preventDefault();\n        try {\n            // Call your backend API for registration\n            const response = await fetch(\"http://localhost:5000/apis/register\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(\"Registration successful! You can now log in.\");\n            // Optionally, redirect to login page or another route\n            // window.location.href = \"/login\"; // You can add this to redirect to the login page after successful registration\n            } else {\n                const errorData = await response.json();\n                alert(\"Registration failed: \" + errorData.message);\n            }\n        } catch (error) {\n            console.error(\"Error during registration:\", error);\n            alert(\"Something went wrong. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"registration-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleRegister,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Name:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: name,\n                                onChange: (e)=>setName(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Email:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Already have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/\",\n                                children: \"Login here\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\register.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegisterPage, \"U1DCtFSIKcmCKgpSr3L7jOg/618=\");\n_c = RegisterPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterPage);\nvar _c;\n$RefreshReg$(_c, \"RegisterPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ2pDLE1BQU1DLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1RLGlCQUFpQixPQUFPQztRQUM1QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0YseUNBQXlDO1lBQ3pDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx1Q0FBdUM7Z0JBQ2xFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWY7b0JBQU1FO29CQUFPRTtnQkFBUztZQUMvQztZQUVBLElBQUlLLFNBQVNPLEVBQUUsRUFBRTtnQkFDZixNQUFNQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ2hDQyxNQUFNO1lBQ04sc0RBQXNEO1lBQ3RELG1IQUFtSDtZQUNySCxPQUFPO2dCQUNMLE1BQU1DLFlBQVksTUFBTVgsU0FBU1MsSUFBSTtnQkFDckNDLE1BQU0sMEJBQTBCQyxVQUFVQyxPQUFPO1lBQ25EO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzVDSCxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVV0Qjs7a0NBQ2QsOERBQUNrQjs7MENBQ0MsOERBQUNLOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPaEM7Z0NBQ1BpQyxVQUFVLENBQUMxQixJQUFNTixRQUFRTSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLO2dDQUN2Q0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWDs7MENBQ0MsOERBQUNLOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPOUI7Z0NBQ1ArQixVQUFVLENBQUMxQixJQUFNSixTQUFTSSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLO2dDQUN4Q0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWDs7MENBQ0MsOERBQUNLOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPNUI7Z0NBQ1A2QixVQUFVLENBQUMxQixJQUFNRixZQUFZRSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLO2dDQUMzQ0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDQzt3QkFBT0wsTUFBSztrQ0FBUzs7Ozs7O2tDQUN0Qiw4REFBQ007OzRCQUFFOzRCQUN3QjswQ0FDekIsOERBQUNDO2dDQUFFQyxNQUFLOzBDQUFJOzs7Ozs7NEJBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEM7R0F2RU14QztLQUFBQTtBQXlFTixpRUFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXExhYi1LYXJpbmktQWlcXGZyb250ZW5kXFxwYWdlc1xccmVnaXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgUmVnaXN0ZXJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ2FsbCB5b3VyIGJhY2tlbmQgQVBJIGZvciByZWdpc3RyYXRpb25cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGlzL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBhbGVydChcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsISBZb3UgY2FuIG5vdyBsb2cgaW4uXCIpO1xyXG4gICAgICAgIC8vIE9wdGlvbmFsbHksIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2Ugb3IgYW5vdGhlciByb3V0ZVxyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjsgLy8gWW91IGNhbiBhZGQgdGhpcyB0byByZWRpcmVjdCB0byB0aGUgbG9naW4gcGFnZSBhZnRlciBzdWNjZXNzZnVsIHJlZ2lzdHJhdGlvblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBhbGVydChcIlJlZ2lzdHJhdGlvbiBmYWlsZWQ6IFwiICsgZXJyb3JEYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHJlZ2lzdHJhdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3RyYXRpb24tcGFnZVwiPlxyXG4gICAgICA8aDI+UmVnaXN0ZXI8L2gyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+TG9naW4gaGVyZTwvYT4gey8qIExpbmsgdG8gdGhlIGxvZ2luIHBhZ2UgKi99XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWdpc3RlclBhZ2UiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlUmVnaXN0ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsImFsZXJ0IiwiZXJyb3JEYXRhIiwibWVzc2FnZSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJwIiwiYSIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});