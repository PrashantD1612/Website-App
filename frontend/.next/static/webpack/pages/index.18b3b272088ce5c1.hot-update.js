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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Hook to Check login status on initial load and fetch products after successful login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const token = localStorage.getItem('token');\n            if (token) {\n                // User is logged in, fetch the userId from localStorage\n                const storedUserId = localStorage.getItem('userId');\n                console.log(\"storedUserId\" + storedUserId);\n                setUserId(storedUserId);\n                setIsLoggedIn(false); // Set login state to true\n            }\n            setLoading(false);\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Hook to Fetch products after login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            if (isLoggedIn && userId) {\n                const fetchProducts = {\n                    \"HomePage.useEffect.fetchProducts\": async ()=>{\n                        try {\n                            const token = localStorage.getItem('token');\n                            if (!token) {\n                                router.push('/login');\n                                return;\n                            }\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('http://localhost:5000/api/products', {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(token)\n                                }\n                            });\n                            setProducts(response.data);\n                        } catch (error) {\n                            console.error('Error fetching products:', error);\n                            if (error.response && error.response.status === 401) {\n                                router.push('/login'); // Redirect to login if unauthorized\n                            }\n                        }\n                    }\n                }[\"HomePage.useEffect.fetchProducts\"];\n                fetchProducts();\n            }\n        }\n    }[\"HomePage.useEffect\"], [\n        isLoggedIn,\n        userId,\n        router\n    ]);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery), {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    //Function to add product to Cart\n    const addToCart = async (product)=>{\n        try {\n            const token = localStorage.getItem('token');\n            if (!token) {\n                console.error('No token found, please log in first');\n                return;\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/api/cart/add-to-cart', {\n                userId,\n                productId: product._id\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setCart(response.data.cart); //updating the Cart with response from server\n        } catch (error) {\n            console.error('Error adding product to cart:', error);\n        }\n    };\n    //Function to Login\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/apis/login', {\n                email,\n                password\n            });\n            const { token, user } = response.data;\n            localStorage.setItem('token', token);\n            localStorage.setItem('userId', user._id);\n            setIsLoggedIn(true);\n            setUserId(user._id);\n            router.push('/'); //After login redirecting to home page\n        } catch (error) {\n            console.error('Error logging in:', error);\n        }\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem('token');\n        localStorage.removeItem('userId');\n        setIsLoggedIn(false);\n        setUserId(null);\n        router.push('/'); // Redirect to login page after logout\n    };\n    // Render a loading state while checking login and fetching data\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 134,\n            columnNumber: 12\n        }, undefined); // Simple loading message or spinner\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 142,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleLogin,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 145,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 144,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Password:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 154,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 155,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 162,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 143,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/register\",\n                                children: \"Register here\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 166,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 164,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 141,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 140,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    userId: userId,\n                    cart: cart,\n                    onLogout: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 174,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 175,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by SKU or Name\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 177,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 183,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 176,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: products,\n                    cart: cart,\n                    addToCart: addToCart\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 186,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 173,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"iw5lchXUu/PlKlHDb6ONyGLH++w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDO3dDQUNDQyxNQUFLO3dDQUNMQyxPQUFPL0M7d0NBQ1BnRCxVQUFVLENBQUNyQixJQUFNMUIsU0FBUzBCLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7d0NBQ3hDRyxRQUFROzs7Ozs7Ozs7Ozs7MENBR1osOERBQUNYOztrREFDQyw4REFBQ0s7a0RBQU07Ozs7OztrREFDUCw4REFBQ0M7d0NBQ0NDLE1BQUs7d0NBQ0xDLE9BQU83Qzt3Q0FDUDhDLFVBQVUsQ0FBQ3JCLElBQU14QixZQUFZd0IsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDM0NHLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FHWiw4REFBQ0M7Z0NBQU9MLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNNOzs0QkFBRTs0QkFDc0I7MENBQ3ZCLDhEQUFDNUQsa0RBQUlBO2dDQUFDNkQsTUFBSzswQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FPN0IsOERBQUNkOzs4QkFDQyw4REFBQ2pELDBEQUFNQTtvQkFBQ2dCLFFBQVFBO29CQUFRVixNQUFNQTtvQkFBTTBELFVBQVVqQjs7Ozs7OzhCQUM5Qyw4REFBQ2tCOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNiO29CQUFLQyxVQUFVakI7O3NDQUNkLDhEQUFDbUI7NEJBQ0NDLE1BQUs7NEJBQ0xVLGFBQVk7NEJBQ1pULE9BQU9qRDs0QkFDUGtELFVBQVUsQ0FBQ3JCLElBQU01QixlQUFlNEIsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O3NDQUVoRCw4REFBQ0k7NEJBQU9MLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs4QkFHeEIsOERBQUN6RCwrREFBV0E7b0JBQ1ZLLFVBQVVBO29CQUNWRSxNQUFNQTtvQkFDTmlDLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQTNMTXBDOztRQVVXRixrREFBU0E7OztLQVZwQkU7QUE4TE4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxMYWItS2FyaW5pLUFpXFxmcm9udGVuZFxccGFnZXNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gSG9vayB0byBDaGVjayBsb2dpbiBzdGF0dXMgb24gaW5pdGlhbCBsb2FkIGFuZCBmZXRjaCBwcm9kdWN0cyBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIC8vIFVzZXIgaXMgbG9nZ2VkIGluLCBmZXRjaCB0aGUgdXNlcklkIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICBjb25zdCBzdG9yZWRVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XG4gICAgICBjb25zb2xlLmxvZyhcInN0b3JlZFVzZXJJZFwiK3N0b3JlZFVzZXJJZClcbiAgICAgIHNldFVzZXJJZChzdG9yZWRVc2VySWQpO1xuICAgICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7IC8vIFNldCBsb2dpbiBzdGF0ZSB0byB0cnVlXG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgLy8gSG9vayB0byBGZXRjaCBwcm9kdWN0cyBhZnRlciBsb2dpblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dlZEluICYmIHVzZXJJZCkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wcm9kdWN0cycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBpZiB1bmF1dGhvcml6ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9XG4gIH0sIFtpc0xvZ2dlZEluLCB1c2VySWQsIHJvdXRlcl0pO1xuXG4gXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9zZWFyY2g/cXVlcnk9JHtzZWFyY2hRdWVyeX1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlYXJjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vRnVuY3Rpb24gdG8gYWRkIHByb2R1Y3QgdG8gQ2FydFxuICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOyBcbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gdG9rZW4gZm91bmQsIHBsZWFzZSBsb2cgaW4gZmlyc3QnKTtcbiAgICAgICAgcmV0dXJuOyBcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FydC9hZGQtdG8tY2FydCcsIFxuICAgICAgICB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5faWQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICBcbiAgICAgIHNldENhcnQocmVzcG9uc2UuZGF0YS5jYXJ0KTsgLy91cGRhdGluZyB0aGUgQ2FydCB3aXRoIHJlc3BvbnNlIGZyb20gc2VydmVyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBwcm9kdWN0IHRvIGNhcnQ6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgXG4gIC8vRnVuY3Rpb24gdG8gTG9naW5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpcy9sb2dpbicsIHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBjb25zdCB7IHRva2VuLCB1c2VyIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHVzZXIuX2lkKTtcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XG4gICAgICBzZXRVc2VySWQodXNlci5faWQpO1xuICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy9BZnRlciBsb2dpbiByZWRpcmVjdGluZyB0byBob21lIHBhZ2VcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJyk7XG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gICAgc2V0VXNlcklkKG51bGwpO1xuICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgYWZ0ZXIgbG9nb3V0XG4gIH07XG5cbiAgLy8gUmVuZGVyIGEgbG9hZGluZyBzdGF0ZSB3aGlsZSBjaGVja2luZyBsb2dpbiBhbmQgZmV0Y2hpbmcgZGF0YVxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47IC8vIFNpbXBsZSBsb2FkaW5nIG1lc3NhZ2Ugb3Igc3Bpbm5lclxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiPlxuICAgICAgeyFpc0xvZ2dlZEluID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXIgaGVyZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVzZXJJZD17dXNlcklkfSBjYXJ0PXtjYXJ0fSBvbkxvZ291dD17aGFuZGxlTG9nb3V0fSAvPlxuICAgICAgICAgIDxoMT5Qcm9kdWN0IExpc3Q8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgU0tVIG9yIE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxQcm9kdWN0TGlzdFxuICAgICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgY2FydD17Y2FydH1cbiAgICAgICAgICAgIGFkZFRvQ2FydD17YWRkVG9DYXJ0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2R1Y3RMaXN0IiwiSGVhZGVyIiwidXNlUm91dGVyIiwiTGluayIsIkhvbWVQYWdlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNhcnQiLCJzZXRDYXJ0Iiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFVzZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFByb2R1Y3RzIiwicHVzaCIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXMiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicG9zdCIsInByb2R1Y3RJZCIsIl9pZCIsImhhbmRsZUxvZ2luIiwidXNlciIsInNldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJocmVmIiwib25Mb2dvdXQiLCJoMSIsInBsYWNlaG9sZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});