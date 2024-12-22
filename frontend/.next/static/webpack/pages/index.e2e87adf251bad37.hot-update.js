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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Hook to Check login status on initial load and fetch products after successful login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const token = localStorage.getItem('token');\n            if (token) {\n                const storedUserId = localStorage.getItem('userId');\n                console.log(\"storedUserId\" + storedUserId);\n                setUserId(storedUserId);\n                setIsLoggedIn(false); // Set login state to true\n            }\n            setLoading(false);\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Hook to Fetch products after login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            if (isLoggedIn && userId) {\n                const fetchProducts = {\n                    \"HomePage.useEffect.fetchProducts\": async ()=>{\n                        try {\n                            const token = localStorage.getItem('token');\n                            if (!token) {\n                                router.push('/login'); // Redirect to login if no token\n                                return;\n                            }\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('http://localhost:5000/api/products', {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(token)\n                                }\n                            });\n                            setProducts(response.data);\n                        } catch (error) {\n                            console.error('Error fetching products:', error);\n                            if (error.response && error.response.data) {\n                                console.log(\"\");\n                                alert(error.response); // Show error message from the backend\n                            }\n                        }\n                    }\n                }[\"HomePage.useEffect.fetchProducts\"];\n                fetchProducts();\n            }\n        }\n    }[\"HomePage.useEffect\"], [\n        isLoggedIn,\n        userId,\n        router\n    ]);\n    // Function to Search by query\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery), {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    //Function to add product to Cart\n    const addToCart = async (product)=>{\n        try {\n            const token = localStorage.getItem('token');\n            if (!token) {\n                console.error('No token found, please log in first');\n                return;\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/api/cart/add-to-cart', {\n                userId,\n                productId: product._id\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setCart(response.data.cart);\n        } catch (error) {\n            console.error('Error adding product to cart:', error);\n        }\n    };\n    //Function to Login\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/apis/login', {\n                email,\n                password\n            });\n            const { token, user } = response.data;\n            localStorage.setItem('token', token);\n            localStorage.setItem('userId', user._id);\n            setIsLoggedIn(true);\n            setUserId(user._id);\n            router.push('/');\n        } catch (error) {\n            console.error('Error logging in:', error);\n        }\n    };\n    //Function to Logout\n    const handleLogout = ()=>{\n        localStorage.removeItem('token');\n        localStorage.removeItem('userId');\n        setIsLoggedIn(false);\n        setUserId(null);\n        router.push('/');\n    };\n    // this is for Render a loading state while checking login and fetching data\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 136,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 144,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleLogin,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 147,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 148,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 146,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Password:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 156,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 157,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 155,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 164,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/register\",\n                                children: \"Register here\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 168,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 166,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 143,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 142,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    userId: userId,\n                    cart: cart,\n                    onLogout: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 176,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 177,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by SKU or Name\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 179,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 185,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 178,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: products,\n                    cart: cart,\n                    addToCart: addToCart\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 187,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 175,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"iw5lchXUu/PlKlHDb6ONyGLH++w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsTUFBSzt3Q0FDTEMsT0FBTy9DO3dDQUNQZ0QsVUFBVSxDQUFDckIsSUFBTTFCLFNBQVMwQixFQUFFc0IsTUFBTSxDQUFDRixLQUFLO3dDQUN4Q0csUUFBUTs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDWDs7a0RBQ0MsOERBQUNLO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNDO3dDQUNDQyxNQUFLO3dDQUNMQyxPQUFPN0M7d0NBQ1A4QyxVQUFVLENBQUNyQixJQUFNeEIsWUFBWXdCLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7d0NBQzNDRyxRQUFROzs7Ozs7Ozs7Ozs7MENBR1osOERBQUNDO2dDQUFPTCxNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7a0NBRXhCLDhEQUFDTTs7NEJBQUU7NEJBQ3NCOzBDQUN2Qiw4REFBQzVELGtEQUFJQTtnQ0FBQzZELE1BQUs7MENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTzdCLDhEQUFDZDs7OEJBQ0MsOERBQUNqRCwwREFBTUE7b0JBQUNnQixRQUFRQTtvQkFBUVYsTUFBTUE7b0JBQU0wRCxVQUFVakI7Ozs7Ozs4QkFDOUMsOERBQUNrQjs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDYjtvQkFBS0MsVUFBVWpCOztzQ0FDZCw4REFBQ21COzRCQUNDQyxNQUFLOzRCQUNMVSxhQUFZOzRCQUNaVCxPQUFPakQ7NEJBQ1BrRCxVQUFVLENBQUNyQixJQUFNNUIsZUFBZTRCLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7Ozs7OztzQ0FFaEQsOERBQUNJOzRCQUFPTCxNQUFLO3NDQUFTOzs7Ozs7Ozs7Ozs7OEJBRXhCLDhEQUFDekQsK0RBQVdBO29CQUNWSyxVQUFVQTtvQkFDVkUsTUFBTUE7b0JBQ05pQyxXQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0E1TE1wQzs7UUFVV0Ysa0RBQVNBOzs7S0FWcEJFO0FBK0xOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTGFiLUthcmluaS1BaVxcZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIEhvb2sgdG8gQ2hlY2sgbG9naW4gc3RhdHVzIG9uIGluaXRpYWwgbG9hZCBhbmQgZmV0Y2ggcHJvZHVjdHMgYWZ0ZXIgc3VjY2Vzc2Z1bCBsb2dpblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25zdCBzdG9yZWRVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgICBjb25zb2xlLmxvZyhcInN0b3JlZFVzZXJJZFwiK3N0b3JlZFVzZXJJZClcbiAgICAgIHNldFVzZXJJZChzdG9yZWRVc2VySWQpO1xuICAgICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7IC8vIFNldCBsb2dpbiBzdGF0ZSB0byB0cnVlXG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cblxuICAvLyBIb29rIHRvIEZldGNoIHByb2R1Y3RzIGFmdGVyIGxvZ2luXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTG9nZ2VkSW4gJiYgdXNlcklkKSB7XG4gICAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBpZiBubyB0b2tlblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Byb2R1Y3RzJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpXG4gICAgICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZSk7IC8vIFNob3cgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBiYWNrZW5kXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgfVxuICB9LCBbaXNMb2dnZWRJbiwgdXNlcklkLCByb3V0ZXJdKTtcblxuIC8vIEZ1bmN0aW9uIHRvIFNlYXJjaCBieSBxdWVyeVxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc2VhcmNoP3F1ZXJ5PSR7c2VhcmNoUXVlcnl9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZWFyY2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvL0Z1bmN0aW9uIHRvIGFkZCBwcm9kdWN0IHRvIENhcnRcbiAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgXG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHRva2VuIGZvdW5kLCBwbGVhc2UgbG9nIGluIGZpcnN0Jyk7XG4gICAgICAgIHJldHVybjsgXG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2NhcnQvYWRkLXRvLWNhcnQnLCBcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuX2lkLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgXG4gICAgICBzZXRDYXJ0KHJlc3BvbnNlLmRhdGEuY2FydCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBwcm9kdWN0IHRvIGNhcnQ6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgXG4gIC8vRnVuY3Rpb24gdG8gTG9naW5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpcy9sb2dpbicsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHVzZXIuX2lkKTtcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgICBzZXRVc2VySWQodXNlci5faWQpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vRnVuY3Rpb24gdG8gTG9nb3V0XG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJyk7XG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gICAgc2V0VXNlcklkKG51bGwpO1xuICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gIH07XG5cbiAgLy8gdGhpcyBpcyBmb3IgUmVuZGVyIGEgbG9hZGluZyBzdGF0ZSB3aGlsZSBjaGVja2luZyBsb2dpbiBhbmQgZmV0Y2hpbmcgZGF0YVxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47IFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiPlxuICAgICAgeyFpc0xvZ2dlZEluID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXIgaGVyZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVzZXJJZD17dXNlcklkfSBjYXJ0PXtjYXJ0fSBvbkxvZ291dD17aGFuZGxlTG9nb3V0fSAvPlxuICAgICAgICAgIDxoMT5Qcm9kdWN0IExpc3Q8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgU0tVIG9yIE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8UHJvZHVjdExpc3RcbiAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgIGNhcnQ9e2NhcnR9XG4gICAgICAgICAgICBhZGRUb0NhcnQ9e2FkZFRvQ2FydH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJQcm9kdWN0TGlzdCIsIkhlYWRlciIsInVzZVJvdXRlciIsIkxpbmsiLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXJ0Iiwic2V0Q2FydCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwidXNlcklkIiwic2V0VXNlcklkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRVc2VySWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQcm9kdWN0cyIsInB1c2giLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicG9zdCIsInByb2R1Y3RJZCIsIl9pZCIsImhhbmRsZUxvZ2luIiwidXNlciIsInNldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJocmVmIiwib25Mb2dvdXQiLCJoMSIsInBsYWNlaG9sZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});