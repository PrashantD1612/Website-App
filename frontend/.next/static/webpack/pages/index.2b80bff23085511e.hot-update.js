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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Hook to Check login status on initial load and fetch products after successful login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const token = localStorage.getItem('token');\n            if (token) {\n                const storedUserId = localStorage.getItem('userId');\n                console.log(\"storedUserId\" + storedUserId);\n                setUserId(storedUserId);\n                setIsLoggedIn(false); // Set login state to true\n            }\n            setLoading(false);\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Hook to Fetch products after login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            if (isLoggedIn && userId) {\n                const fetchProducts = {\n                    \"HomePage.useEffect.fetchProducts\": async ()=>{\n                        try {\n                            const token = localStorage.getItem('token');\n                            if (!token) {\n                                router.push('/login'); // Redirect to login if no token\n                                return;\n                            }\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('http://localhost:5000/api/products', {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(token)\n                                }\n                            });\n                            setProducts(response.data);\n                        } catch (error) {\n                            console.error('Error fetching products:', error);\n                            if (error.response && error.response.status === 401) {\n                                router.push('/login'); // Redirect to login if unauthorized\n                            }\n                        }\n                    }\n                }[\"HomePage.useEffect.fetchProducts\"];\n                fetchProducts();\n            }\n        }\n    }[\"HomePage.useEffect\"], [\n        isLoggedIn,\n        userId,\n        router\n    ]);\n    // Function to Search by query\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery), {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    //Function to add product to Cart\n    const addToCart = async (product)=>{\n        try {\n            const token = localStorage.getItem('token');\n            if (!token) {\n                console.error('No token found, please log in first');\n                return;\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/api/cart/add-to-cart', {\n                userId,\n                productId: product._id\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setCart(response.data.cart);\n        } catch (error) {\n            console.error('Error adding product to cart:', error);\n        }\n    };\n    //Function to Login\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/apis/login', {\n                email,\n                password\n            });\n            const { token, user } = response.data;\n            localStorage.setItem('token', token);\n            localStorage.setItem('userId', user._id);\n            setIsLoggedIn(true);\n            setUserId(user._id);\n            router.push('/'); //After login redirecting to home page\n        } catch (error) {\n            console.error('Error logging in:', error);\n        }\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem('token');\n        localStorage.removeItem('userId');\n        setIsLoggedIn(false);\n        setUserId(null);\n        router.push('/'); // Redirect to login page after logout\n    };\n    // Render a loading state while checking login and fetching data\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 134,\n            columnNumber: 12\n        }, undefined); // Simple loading message or spinner\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 142,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleLogin,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Password:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 154,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 162,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 143,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/register\",\n                                children: \"Register here\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 166,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 164,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 141,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 140,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    userId: userId,\n                    cart: cart,\n                    onLogout: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 174,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 175,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by SKU or Name\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 177,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 183,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 176,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: products,\n                    cart: cart,\n                    addToCart: addToCart\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 186,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 173,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"iw5lchXUu/PlKlHDb6ONyGLH++w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDO3dDQUNDQyxNQUFLO3dDQUNMQyxPQUFPL0M7d0NBQ1BnRCxVQUFVLENBQUNyQixJQUFNMUIsU0FBUzBCLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7d0NBQ3hDRyxRQUFROzs7Ozs7Ozs7Ozs7MENBR1osOERBQUNYOztrREFDQyw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLE9BQU83Qzt3Q0FDUDhDLFVBQVUsQ0FBQ3JCLElBQU14QixZQUFZd0IsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDM0NHLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FHWiw4REFBQ0M7Z0NBQU9MLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNNOzs0QkFBRTs0QkFDc0I7MENBQ3ZCLDhEQUFDNUQsa0RBQUlBO2dDQUFDNkQsTUFBSzswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPN0IsOERBQUNkOzs4QkFDQyw4REFBQ2pELDBEQUFNQTtvQkFBQ2dCLFFBQVFBO29CQUFRVixNQUFNQTtvQkFBTTBELFVBQVVqQjs7Ozs7OzhCQUM5Qyw4REFBQ2tCOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNiO29CQUFLQyxVQUFVakI7O3NDQUNkLDhEQUFDbUI7NEJBQ0NDLE1BQUs7NEJBQ0xVLGFBQVk7NEJBQ1pULE9BQU9qRDs0QkFDUGtELFVBQVUsQ0FBQ3JCLElBQU01QixlQUFlNEIsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O3NDQUVoRCw4REFBQ0k7NEJBQU9MLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs4QkFHeEIsOERBQUN6RCwrREFBV0E7b0JBQ1ZLLFVBQVVBO29CQUNWRSxNQUFNQTtvQkFDTmlDLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQTNMTXBDOztRQVVXRixrREFBU0E7OztLQVZwQkU7QUE4TE4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxMYWItS2FyaW5pLUFpXFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gSG9vayB0byBDaGVjayBsb2dpbiBzdGF0dXMgb24gaW5pdGlhbCBsb2FkIGFuZCBmZXRjaCBwcm9kdWN0cyBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGNvbnN0IHN0b3JlZFVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RvcmVkVXNlcklkXCIrc3RvcmVkVXNlcklkKVxuICAgICAgc2V0VXNlcklkKHN0b3JlZFVzZXJJZCk7XG4gICAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTsgLy8gU2V0IGxvZ2luIHN0YXRlIHRvIHRydWVcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuXG4gIC8vIEhvb2sgdG8gRmV0Y2ggcHJvZHVjdHMgYWZ0ZXIgbG9naW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNMb2dnZWRJbiAmJiB1c2VySWQpIHtcbiAgICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIGlmIG5vIHRva2VuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcHJvZHVjdHMnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzOicsIGVycm9yKTtcbiAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTsgLy8gUmVkaXJlY3QgdG8gbG9naW4gaWYgdW5hdXRob3JpemVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmZXRjaFByb2R1Y3RzKCk7XG4gICAgfVxuICB9LCBbaXNMb2dnZWRJbiwgdXNlcklkLCByb3V0ZXJdKTtcblxuIC8vIEZ1bmN0aW9uIHRvIFNlYXJjaCBieSBxdWVyeVxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvc2VhcmNoP3F1ZXJ5PSR7c2VhcmNoUXVlcnl9YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZWFyY2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICAvL0Z1bmN0aW9uIHRvIGFkZCBwcm9kdWN0IHRvIENhcnRcbiAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgXG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHRva2VuIGZvdW5kLCBwbGVhc2UgbG9nIGluIGZpcnN0Jyk7XG4gICAgICAgIHJldHVybjsgXG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2NhcnQvYWRkLXRvLWNhcnQnLCBcbiAgICAgICAge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuX2lkLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgXG4gICAgICBzZXRDYXJ0KHJlc3BvbnNlLmRhdGEuY2FydCk7IFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgcHJvZHVjdCB0byBjYXJ0OicsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIFxuICAvL0Z1bmN0aW9uIHRvIExvZ2luXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaXMvbG9naW4nLCB7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCB1c2VyLl9pZCk7XG4gICAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xuICAgICAgc2V0VXNlcklkKHVzZXIuX2lkKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vQWZ0ZXIgbG9naW4gcmVkaXJlY3RpbmcgdG8gaG9tZSBwYWdlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW46JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuICAgIHNldFVzZXJJZChudWxsKTtcbiAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBwYWdlIGFmdGVyIGxvZ291dFxuICB9O1xuXG4gIC8vIFJlbmRlciBhIGxvYWRpbmcgc3RhdGUgd2hpbGUgY2hlY2tpbmcgbG9naW4gYW5kIGZldGNoaW5nIGRhdGFcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+OyAvLyBTaW1wbGUgbG9hZGluZyBtZXNzYWdlIG9yIHNwaW5uZXJcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXBhZ2VcIj5cbiAgICAgIHshaXNMb2dnZWRJbiA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyIGhlcmVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1c2VySWQ9e3VzZXJJZH0gY2FydD17Y2FydH0gb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0gLz5cbiAgICAgICAgICA8aDE+UHJvZHVjdCBMaXN0PC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IFNLVSBvciBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICA8UHJvZHVjdExpc3RcbiAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgIGNhcnQ9e2NhcnR9XG4gICAgICAgICAgICBhZGRUb0NhcnQ9e2FkZFRvQ2FydH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJQcm9kdWN0TGlzdCIsIkhlYWRlciIsInVzZVJvdXRlciIsIkxpbmsiLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXJ0Iiwic2V0Q2FydCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwidXNlcklkIiwic2V0VXNlcklkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRVc2VySWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQcm9kdWN0cyIsInB1c2giLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiaGFuZGxlU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInBvc3QiLCJwcm9kdWN0SWQiLCJfaWQiLCJoYW5kbGVMb2dpbiIsInVzZXIiLCJzZXRJdGVtIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJwIiwiaHJlZiIsIm9uTG9nb3V0IiwiaDEiLCJwbGFjZWhvbGRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});