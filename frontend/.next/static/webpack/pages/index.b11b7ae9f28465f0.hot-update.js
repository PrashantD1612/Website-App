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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Loading state to control the initial render\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Check login status on initial load and fetch products after successful login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const token = localStorage.getItem('token');\n            if (token) {\n                // User is logged in, fetch the userId from localStorage\n                const storedUserId = localStorage.getItem('userId');\n                console.log(\"storedUserId\" + storedUserId);\n                setUserId(storedUserId);\n                setIsLoggedIn(false); // Set login state to true\n            }\n            setLoading(false); // Once login check is done, stop loading\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Fetch products after login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            if (isLoggedIn && userId) {\n                const fetchProducts = {\n                    \"HomePage.useEffect.fetchProducts\": async ()=>{\n                        try {\n                            const token = localStorage.getItem('token');\n                            if (!token) {\n                                router.push('/login'); // Redirect to login if no token\n                                return;\n                            }\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('http://localhost:5000/api/products', {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(token)\n                                }\n                            });\n                            setProducts(response.data);\n                        } catch (error) {\n                            console.error('Error fetching products:', error);\n                            if (error.response && error.response.status === 401) {\n                                router.push('/login'); // Redirect to login if unauthorized\n                            }\n                        }\n                    }\n                }[\"HomePage.useEffect.fetchProducts\"];\n                fetchProducts();\n            }\n        }\n    }[\"HomePage.useEffect\"], [\n        isLoggedIn,\n        userId,\n        router\n    ]);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery), {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    const addToCart = async (product)=>{\n        try {\n            const token = localStorage.getItem('token'); // Get token from localStorage\n            if (!token) {\n                console.error('No token found, please log in first');\n                return; // If no token exists, don't proceed with the request\n            }\n            // Make the POST request with Authorization header\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post('http://localhost:5000/api/cart/add-to-cart', {\n                userId,\n                productId: product._id\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setCart(response.data.cart); // Update the cart state with the response from the server\n        } catch (error) {\n            console.error('Error adding product to cart:', error);\n        }\n    };\n    const removeFromCart = async (product)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post('http://localhost:5000/api/cart/remove-from-cart', {\n                userId,\n                productId: product._id\n            });\n            setCart(response.data.cart);\n        } catch (error) {\n            console.error('Error removing product from cart:', error);\n        }\n    };\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post('http://localhost:5000/apis/login', {\n                email,\n                password\n            });\n            const { token, user } = response.data;\n            // Store token and userId in localStorage\n            localStorage.setItem('token', token);\n            localStorage.setItem('userId', user._id);\n            // Update state and redirect to home page\n            setIsLoggedIn(true);\n            setUserId(user._id);\n            router.push('/'); // Redirect to homepage after successful login\n        } catch (error) {\n            console.error('Error logging in:', error);\n        }\n    };\n    const handleLogout = ()=>{\n        localStorage.removeItem('token');\n        localStorage.removeItem('userId');\n        setIsLoggedIn(false);\n        setUserId(null);\n        router.push('/login'); // Redirect to login page after logout\n    };\n    // Render a loading state while checking login and fetching data\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 149,\n            columnNumber: 12\n        }, undefined); // Simple loading message or spinner\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"login-form\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 156,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleLogin,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Email:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 159,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 160,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 158,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: \"Password:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 168,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    value: password,\n                                    onChange: (e)=>setPassword(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 169,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 167,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 176,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 157,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 155,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    userId: userId,\n                    cart: cart,\n                    onLogout: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 181,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 182,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by SKU or Name\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 184,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 190,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 183,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: products,\n                    cart: cart,\n                    addToCart: addToCart\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 193,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 180,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"iw5lchXUu/PlKlHDb6ONyGLH++w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUNWSSxVQUFVQTtvQkFDVkUsTUFBTUE7b0JBQ05pQyxXQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0FuTU1wQzs7UUFVV0Qsa0RBQVNBOzs7S0FWcEJDO0FBcU1OLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTGFiLUthcmluaS1BaVxcZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBMb2FkaW5nIHN0YXRlIHRvIGNvbnRyb2wgdGhlIGluaXRpYWwgcmVuZGVyXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy8gQ2hlY2sgbG9naW4gc3RhdHVzIG9uIGluaXRpYWwgbG9hZCBhbmQgZmV0Y2ggcHJvZHVjdHMgYWZ0ZXIgc3VjY2Vzc2Z1bCBsb2dpblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAvLyBVc2VyIGlzIGxvZ2dlZCBpbiwgZmV0Y2ggdGhlIHVzZXJJZCBmcm9tIGxvY2FsU3RvcmFnZVxuICAgICAgY29uc3Qgc3RvcmVkVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgICAgY29uc29sZS5sb2coXCJzdG9yZWRVc2VySWRcIitzdG9yZWRVc2VySWQpXG4gICAgICBzZXRVc2VySWQoc3RvcmVkVXNlcklkKTtcbiAgICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpOyAvLyBTZXQgbG9naW4gc3RhdGUgdG8gdHJ1ZVxuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gT25jZSBsb2dpbiBjaGVjayBpcyBkb25lLCBzdG9wIGxvYWRpbmdcbiAgfSwgW10pO1xuXG4gIC8vIEZldGNoIHByb2R1Y3RzIGFmdGVyIGxvZ2luXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTG9nZ2VkSW4gJiYgdXNlcklkKSB7XG4gICAgICBjb25zdCBmZXRjaFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBpZiBubyB0b2tlblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Byb2R1Y3RzJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIGlmIHVuYXV0aG9yaXplZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZmV0Y2hQcm9kdWN0cygpO1xuICAgIH1cbiAgfSwgW2lzTG9nZ2VkSW4sIHVzZXJJZCwgcm91dGVyXSk7XG5cbiBcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3NlYXJjaD9xdWVyeT0ke3NlYXJjaFF1ZXJ5fWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBzZXRQcm9kdWN0cyhyZXNwb25zZS5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VhcmNoaW5nIHByb2R1Y3RzOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgLy8gR2V0IHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHRva2VuIGZvdW5kLCBwbGVhc2UgbG9nIGluIGZpcnN0Jyk7XG4gICAgICAgIHJldHVybjsgLy8gSWYgbm8gdG9rZW4gZXhpc3RzLCBkb24ndCBwcm9jZWVkIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgIH1cbiAgXG4gICAgICAvLyBNYWtlIHRoZSBQT1NUIHJlcXVlc3Qgd2l0aCBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0L2FkZC10by1jYXJ0JywgXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0Ll9pZCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLCAvLyBBZGQgdGhlIHRva2VuIHRvIHRoZSBoZWFkZXJzXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgXG4gICAgICBzZXRDYXJ0KHJlc3BvbnNlLmRhdGEuY2FydCk7IC8vIFVwZGF0ZSB0aGUgY2FydCBzdGF0ZSB3aXRoIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHByb2R1Y3QgdG8gY2FydDonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FydC9yZW1vdmUtZnJvbS1jYXJ0Jywge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5faWQsXG4gICAgICB9KTtcbiAgICAgIHNldENhcnQocmVzcG9uc2UuZGF0YS5jYXJ0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgcHJvZHVjdCBmcm9tIGNhcnQ6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGlzL2xvZ2luJywge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgIC8vIFN0b3JlIHRva2VuIGFuZCB1c2VySWQgaW4gbG9jYWxTdG9yYWdlXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgdXNlci5faWQpO1xuXG4gICAgICAvLyBVcGRhdGUgc3RhdGUgYW5kIHJlZGlyZWN0IHRvIGhvbWUgcGFnZVxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgICAgIHNldFVzZXJJZCh1c2VyLl9pZCk7XG4gICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmVjdCB0byBob21lcGFnZSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW46JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuICAgIHNldFVzZXJJZChudWxsKTtcbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7IC8vIFJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UgYWZ0ZXIgbG9nb3V0XG4gIH07XG5cbiAgLy8gUmVuZGVyIGEgbG9hZGluZyBzdGF0ZSB3aGlsZSBjaGVja2luZyBsb2dpbiBhbmQgZmV0Y2hpbmcgZGF0YVxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47IC8vIFNpbXBsZSBsb2FkaW5nIG1lc3NhZ2Ugb3Igc3Bpbm5lclxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiPlxuICAgICAgeyFpc0xvZ2dlZEluID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cbiAgICAgICAgICA8aDI+TG9naW48L2gyPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWRlciB1c2VySWQ9e3VzZXJJZH0gY2FydD17Y2FydH0gb25Mb2dvdXQ9e2hhbmRsZUxvZ291dH0gLz5cbiAgICAgICAgICA8aDE+UHJvZHVjdCBMaXN0PC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IFNLVSBvciBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICA8UHJvZHVjdExpc3RcbiAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgIGNhcnQ9e2NhcnR9XG4gICAgICAgICAgICBhZGRUb0NhcnQ9e2FkZFRvQ2FydH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUHJvZHVjdExpc3QiLCJIZWFkZXIiLCJ1c2VSb3V0ZXIiLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXJ0Iiwic2V0Q2FydCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwidXNlcklkIiwic2V0VXNlcklkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRVc2VySWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hQcm9kdWN0cyIsInB1c2giLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiaGFuZGxlU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInBvc3QiLCJwcm9kdWN0SWQiLCJfaWQiLCJyZW1vdmVGcm9tQ2FydCIsImhhbmRsZUxvZ2luIiwidXNlciIsInNldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uTG9nb3V0IiwiaDEiLCJwbGFjZWhvbGRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});