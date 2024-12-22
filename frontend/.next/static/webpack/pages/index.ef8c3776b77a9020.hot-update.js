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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Fetch products on initial load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchProducts = {\n                \"HomePage.useEffect.fetchProducts\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('http://localhost:5000/api/products');\n                        setProducts(response.data);\n                    } catch (error) {\n                        console.error('Error fetching products:', error);\n                    }\n                }\n            }[\"HomePage.useEffect.fetchProducts\"];\n            if (isLoggedIn) {\n                fetchProducts();\n            }\n        }\n    }[\"HomePage.useEffect\"], [\n        isLoggedIn\n    ]);\n    // Fetch user's cart if logged in\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchCart = {\n                \"HomePage.useEffect.fetchCart\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/api/cart/\".concat(userId));\n                        setCart(response.data);\n                    } catch (error) {\n                        console.error('Error fetching cart:', error);\n                    }\n                }\n            }[\"HomePage.useEffect.fetchCart\"];\n            if (userId) fetchCart();\n        }\n    }[\"HomePage.useEffect\"], [\n        userId\n    ]);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery));\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post('http://localhost:5000/apis/login', {\n                email,\n                password\n            });\n            console.log(\"response.data\" + JSON.stringify(response.data.token));\n            const { token, user } = response.data;\n            // Store token in localStorage or sessionStorage\n            console.log(\"token\" + token);\n            console.log(\"user\" + JSON.stringify(user));\n            localStorage.setItem('token', token);\n            setIsLoggedIn(true);\n            setUserId(user._id);\n            // Redirect to home page (optional, you can remove this if you don't want a redirect)\n            router.push('/');\n        } catch (error) {\n            console.error('Error logging in:', error);\n        }\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem('token');\n        setIsLoggedIn(false);\n        setUserId(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"login-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Password:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 92,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    userId: userId,\n                    cart: cart,\n                    onLogout: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 118,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by SKU or Name\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 120,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: products,\n                    cart: cart,\n                    addToCart: addToCart,\n                    removeFromCart: removeFromCart\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 130,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 117,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"Ll5xYaX2UjwfqABSGhRWqvSmYBU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDSiw4REFBQ0M7b0JBQUtDLFVBQVVqQjs7c0NBQ2QsOERBQUNhOzs4Q0FDQyw4REFBQ0s7OENBQU07Ozs7Ozs4Q0FDUCw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE9BQU94QztvQ0FDUHlDLFVBQVUsQ0FBQ3hCLElBQU1oQixTQUFTZ0IsRUFBRXlCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDeENHLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ1g7OzhDQUNDLDhEQUFDSzs4Q0FBTTs7Ozs7OzhDQUNQLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsT0FBT3RDO29DQUNQdUMsVUFBVSxDQUFDeEIsSUFBTWQsWUFBWWMsRUFBRXlCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDM0NHLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ0M7NEJBQU9MLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUkxQiw4REFBQ1A7OzhCQUNDLDhEQUFDekMsMERBQU1BO29CQUFDZSxRQUFRQTtvQkFBUVYsTUFBTUE7b0JBQU1pRCxVQUFVZjs7Ozs7OzhCQUM5Qyw4REFBQ2dCOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNYO29CQUFLQyxVQUFVcEI7O3NDQUNkLDhEQUFDc0I7NEJBQ0NDLE1BQUs7NEJBQ0xRLGFBQVk7NEJBQ1pQLE9BQU8xQzs0QkFDUDJDLFVBQVUsQ0FBQ3hCLElBQU1sQixlQUFla0IsRUFBRXlCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O3NDQUVoRCw4REFBQ0k7NEJBQU9MLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs4QkFHeEIsOERBQUNqRCwrREFBV0E7b0JBQ1ZJLFVBQVVBO29CQUNWRSxNQUFNQTtvQkFDTm9ELFdBQVdBO29CQUNYQyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQXJJTXhEOztRQVNXRCxrREFBU0E7OztLQVRwQkM7QUF1SU4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxMYWItS2FyaW5pLUFpXFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBGZXRjaCBwcm9kdWN0cyBvbiBpbml0aWFsIGxvYWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHJvZHVjdHMnKTtcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgfVxuICB9LCBbaXNMb2dnZWRJbl0pO1xuXG4gIC8vIEZldGNoIHVzZXIncyBjYXJ0IGlmIGxvZ2dlZCBpblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ2FydCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2NhcnQvJHt1c2VySWR9YCk7XG4gICAgICAgIHNldENhcnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXJ0OicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHVzZXJJZCkgZmV0Y2hDYXJ0KCk7XG4gIH0sIFt1c2VySWRdKTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc2VhcmNoP3F1ZXJ5PSR7c2VhcmNoUXVlcnl9YCk7XG4gICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VhcmNoaW5nIHByb2R1Y3RzOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpcy9sb2dpbicsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJyZXNwb25zZS5kYXRhXCIrSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS50b2tlbikpXG4gICAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAvLyBTdG9yZSB0b2tlbiBpbiBsb2NhbFN0b3JhZ2Ugb3Igc2Vzc2lvblN0b3JhZ2VcbiAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIit0b2tlbilcbiAgICAgIGNvbnNvbGUubG9nKFwidXNlclwiK0pTT04uc3RyaW5naWZ5KHVzZXIpKVxuICAgICAgXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgICAgc2V0VXNlcklkKHVzZXIuX2lkKTtcblxuICAgICAgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlIChvcHRpb25hbCwgeW91IGNhbiByZW1vdmUgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCBhIHJlZGlyZWN0KVxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcbiAgICBzZXRVc2VySWQobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiPlxuICAgICAgeyFpc0xvZ2dlZEluID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICA8aDI+TG9naW48L2gyPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1c2VySWQ9e3VzZXJJZH0gY2FydD17Y2FydH0gb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0gLz5cbiAgICAgICAgICA8aDE+UHJvZHVjdCBMaXN0PC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IFNLVSBvciBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICA8UHJvZHVjdExpc3RcbiAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgIGNhcnQ9e2NhcnR9XG4gICAgICAgICAgICBhZGRUb0NhcnQ9e2FkZFRvQ2FydH1cbiAgICAgICAgICAgIHJlbW92ZUZyb21DYXJ0PXtyZW1vdmVGcm9tQ2FydH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUHJvZHVjdExpc3QiLCJIZWFkZXIiLCJ1c2VSb3V0ZXIiLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXJ0Iiwic2V0Q2FydCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwidXNlcklkIiwic2V0VXNlcklkIiwicm91dGVyIiwiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImZldGNoQ2FydCIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUxvZ2luIiwicG9zdCIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsInVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiX2lkIiwicHVzaCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25Mb2dvdXQiLCJoMSIsInBsYWNlaG9sZGVyIiwiYWRkVG9DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});