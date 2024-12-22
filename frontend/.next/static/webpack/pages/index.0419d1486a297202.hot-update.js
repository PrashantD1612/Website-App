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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Fetch products on initial load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchProducts = {\n                \"HomePage.useEffect.fetchProducts\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('http://localhost:5000/api/products');\n                        setProducts(response.data);\n                    } catch (error) {\n                        console.error('Error fetching products:', error);\n                    }\n                }\n            }[\"HomePage.useEffect.fetchProducts\"];\n            if (isLoggedIn) {\n                fetchProducts();\n            }\n        }\n    }[\"HomePage.useEffect\"], [\n        isLoggedIn\n    ]);\n    // Fetch user's cart if logged in\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchCart = {\n                \"HomePage.useEffect.fetchCart\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/api/cart/\".concat(userId));\n                        setCart(response.data);\n                    } catch (error) {\n                        console.error('Error fetching cart:', error);\n                    }\n                }\n            }[\"HomePage.useEffect.fetchCart\"];\n            if (userId) fetchCart();\n        }\n    }[\"HomePage.useEffect\"], [\n        userId\n    ]);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery));\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post('http://localhost:5000/apis/login', {\n                email,\n                password\n            });\n            console.log(\"response.data\" + JSON.stringify(response.data.token));\n            const { token, user } = response.data;\n            // Store token in localStorage or sessionStorage\n            console.log(\"token\" + token);\n            console.log(\"token\" + token);\n            user;\n            localStorage.setItem('token', token);\n            setIsLoggedIn(true);\n            setUserId(userId);\n            // Redirect to home page (optional, you can remove this if you don't want a redirect)\n            router.push('/');\n        } catch (error) {\n            console.error('Error logging in:', error);\n        }\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem('token');\n        setIsLoggedIn(false);\n        setUserId(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"login-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Password:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 92,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    userId: userId,\n                    cart: cart,\n                    onLogout: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 118,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by SKU or Name\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 120,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: products,\n                    cart: cart,\n                    addToCart: addToCart,\n                    removeFromCart: removeFromCart\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 130,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 117,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"Ll5xYaX2UjwfqABSGhRWqvSmYBU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUNkLDhEQUFDWTs7OENBQ0MsOERBQUNLOzhDQUFNOzs7Ozs7OENBQ1AsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxPQUFPdkM7b0NBQ1B3QyxVQUFVLENBQUN2QixJQUFNaEIsU0FBU2dCLEVBQUV3QixNQUFNLENBQUNGLEtBQUs7b0NBQ3hDRyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNYOzs4Q0FDQyw4REFBQ0s7OENBQU07Ozs7Ozs4Q0FDUCw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE9BQU9yQztvQ0FDUHNDLFVBQVUsQ0FBQ3ZCLElBQU1kLFlBQVljLEVBQUV3QixNQUFNLENBQUNGLEtBQUs7b0NBQzNDRyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNDOzRCQUFPTCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJMUIsOERBQUNQOzs4QkFDQyw4REFBQ3hDLDBEQUFNQTtvQkFBQ2UsUUFBUUE7b0JBQVFWLE1BQU1BO29CQUFNZ0QsVUFBVWY7Ozs7Ozs4QkFDOUMsOERBQUNnQjs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDWDtvQkFBS0MsVUFBVW5COztzQ0FDZCw4REFBQ3FCOzRCQUNDQyxNQUFLOzRCQUNMUSxhQUFZOzRCQUNaUCxPQUFPekM7NEJBQ1AwQyxVQUFVLENBQUN2QixJQUFNbEIsZUFBZWtCLEVBQUV3QixNQUFNLENBQUNGLEtBQUs7Ozs7OztzQ0FFaEQsOERBQUNJOzRCQUFPTCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7OEJBR3hCLDhEQUFDaEQsK0RBQVdBO29CQUNWSSxVQUFVQTtvQkFDVkUsTUFBTUE7b0JBQ05tRCxXQUFXQTtvQkFDWEMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUI7R0FySU12RDs7UUFTV0Qsa0RBQVNBOzs7S0FUcEJDO0FBdUlOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTGFiLUthcmluaS1BaVxcZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gRmV0Y2ggcHJvZHVjdHMgb24gaW5pdGlhbCBsb2FkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Byb2R1Y3RzJyk7XG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgZmV0Y2hQcm9kdWN0cygpO1xuICAgIH1cbiAgfSwgW2lzTG9nZ2VkSW5dKTtcblxuICAvLyBGZXRjaCB1c2VyJ3MgY2FydCBpZiBsb2dnZWQgaW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0LyR7dXNlcklkfWApO1xuICAgICAgICBzZXRDYXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FydDonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh1c2VySWQpIGZldGNoQ2FydCgpO1xuICB9LCBbdXNlcklkXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3NlYXJjaD9xdWVyeT0ke3NlYXJjaFF1ZXJ5fWApO1xuICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlYXJjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaXMvbG9naW4nLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UuZGF0YVwiK0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEudG9rZW4pKVxuICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgLy8gU3RvcmUgdG9rZW4gaW4gbG9jYWxTdG9yYWdlIG9yIHNlc3Npb25TdG9yYWdlXG4gICAgICBjb25zb2xlLmxvZyhcInRva2VuXCIrdG9rZW4pXG4gICAgICBjb25zb2xlLmxvZyhcInRva2VuXCIrdG9rZW4pXG4gICAgICB1c2VyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgICAgc2V0VXNlcklkKHVzZXJJZCk7XG5cbiAgICAgIC8vIFJlZGlyZWN0IHRvIGhvbWUgcGFnZSAob3B0aW9uYWwsIHlvdSBjYW4gcmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgYSByZWRpcmVjdClcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW46JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gICAgc2V0VXNlcklkKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXBhZ2VcIj5cbiAgICAgIHshaXNMb2dnZWRJbiA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxIZWFkZXIgdXNlcklkPXt1c2VySWR9IGNhcnQ9e2NhcnR9IG9uTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+XG4gICAgICAgICAgPGgxPlByb2R1Y3QgTGlzdDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBTS1Ugb3IgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPFByb2R1Y3RMaXN0XG4gICAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XG4gICAgICAgICAgICBjYXJ0PXtjYXJ0fVxuICAgICAgICAgICAgYWRkVG9DYXJ0PXthZGRUb0NhcnR9XG4gICAgICAgICAgICByZW1vdmVGcm9tQ2FydD17cmVtb3ZlRnJvbUNhcnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2R1Y3RMaXN0IiwiSGVhZGVyIiwidXNlUm91dGVyIiwiSG9tZVBhZ2UiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2FydCIsInNldENhcnQiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInVzZXJJZCIsInNldFVzZXJJZCIsInJvdXRlciIsImZldGNoUHJvZHVjdHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJmZXRjaENhcnQiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVMb2dpbiIsInBvc3QiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJ1c2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uTG9nb3V0IiwiaDEiLCJwbGFjZWhvbGRlciIsImFkZFRvQ2FydCIsInJlbW92ZUZyb21DYXJ0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});