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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Hook to Check login status on initial load and fetch products after successful login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const token = localStorage.getItem('token');\n            if (token) {\n                const storedUserId = localStorage.getItem('userId');\n                console.log(\"storedUserId\" + storedUserId);\n                setUserId(storedUserId);\n                setIsLoggedIn(false); // Set login state to true\n            }\n            setLoading(false);\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Hook to Fetch products after login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            if (isLoggedIn && userId) {\n                const fetchProducts = {\n                    \"HomePage.useEffect.fetchProducts\": async ()=>{\n                        try {\n                            const token = localStorage.getItem('token');\n                            if (!token) {\n                                router.push('/login'); // Redirect to login if no token\n                                return;\n                            }\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('http://localhost:5000/api/products', {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(token)\n                                }\n                            });\n                            setProducts(response.data);\n                        } catch (error) {\n                            console.error('Error fetching products:', error);\n                            if (error.response && error.response.status === 401) {\n                                router.push('/login'); // Redirect to login if unauthorized\n                            }\n                        }\n                    }\n                }[\"HomePage.useEffect.fetchProducts\"];\n                fetchProducts();\n            }\n        }\n    }[\"HomePage.useEffect\"], [\n        isLoggedIn,\n        userId,\n        router\n    ]);\n    // Function to Search by query\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery), {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem('token'))\n                }\n            });\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    //Function to add product to Cart\n    const addToCart = async (product)=>{\n        try {\n            const token = localStorage.getItem('token');\n            if (!token) {\n                console.error('No token found, please log in first');\n                return;\n            }\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/api/cart/add-to-cart', {\n                userId,\n                productId: product._id\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            setCart(response.data.cart);\n        } catch (error) {\n            console.error('Error adding product to cart:', error);\n        }\n    };\n    //Function to Login\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post('http://localhost:5000/apis/login', {\n                email,\n                password\n            });\n            const { token, user } = response.data;\n            localStorage.setItem('token', token);\n            localStorage.setItem('userId', user._id);\n            setIsLoggedIn(true);\n            setUserId(user._id);\n            router.push('/');\n        } catch (error) {\n            console.log(\"error login\" + error.response);\n            if (error.response && error.response.data) {\n                alert(error.response.data.message); // Show error message from the backend\n            }\n            console.error('Error logging in:', error);\n        }\n    };\n    //Function to Logout\n    const handleLogout = ()=>{\n        localStorage.removeItem('token');\n        localStorage.removeItem('userId');\n        setIsLoggedIn(false);\n        setUserId(null);\n        router.push('/');\n    };\n    // this is for Render a loading state while checking login and fetching data\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 139,\n            columnNumber: 12\n        }, undefined); // Simple loading message or spinner\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: !isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 147,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleLogin,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Email:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 151,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 149,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Password:\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 159,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                        lineNumber: 160,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 158,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 167,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 148,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Don't have an account?\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                href: \"/register\",\n                                children: \"Register here\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                                lineNumber: 171,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 169,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 146,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 145,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    userId: userId,\n                    cart: cart,\n                    onLogout: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 179,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Product List\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 180,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSearch,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search by SKU or Name\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 182,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 188,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 181,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    products: products,\n                    cart: cart,\n                    addToCart: addToCart\n                }, void 0, false, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 191,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n            lineNumber: 178,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"iw5lchXUu/PlKlHDb6ONyGLH++w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZCO0dBaE1NcEM7O1FBVVdGLGtEQUFTQTs7O0tBVnBCRTtBQW1NTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXExhYi1LYXJpbmktQWlcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBIb29rIHRvIENoZWNrIGxvZ2luIHN0YXR1cyBvbiBpbml0aWFsIGxvYWQgYW5kIGZldGNoIHByb2R1Y3RzIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgY29uc3Qgc3RvcmVkVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJZCcpO1xuICAgICAgY29uc29sZS5sb2coXCJzdG9yZWRVc2VySWRcIitzdG9yZWRVc2VySWQpXG4gICAgICBzZXRVc2VySWQoc3RvcmVkVXNlcklkKTtcbiAgICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpOyAvLyBTZXQgbG9naW4gc3RhdGUgdG8gdHJ1ZVxuICAgIH1cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfSwgW10pO1xuXG5cbiAgLy8gSG9vayB0byBGZXRjaCBwcm9kdWN0cyBhZnRlciBsb2dpblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dlZEluICYmIHVzZXJJZCkge1xuICAgICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTsgLy8gUmVkaXJlY3QgdG8gbG9naW4gaWYgbm8gdG9rZW5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wcm9kdWN0cycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xuICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpOyAvLyBSZWRpcmVjdCB0byBsb2dpbiBpZiB1bmF1dGhvcml6ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgICB9XG4gIH0sIFtpc0xvZ2dlZEluLCB1c2VySWQsIHJvdXRlcl0pO1xuXG4gLy8gRnVuY3Rpb24gdG8gU2VhcmNoIGJ5IHF1ZXJ5XG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9zZWFyY2g/cXVlcnk9JHtzZWFyY2hRdWVyeX1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlYXJjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vRnVuY3Rpb24gdG8gYWRkIHByb2R1Y3QgdG8gQ2FydFxuICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOyBcbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTm8gdG9rZW4gZm91bmQsIHBsZWFzZSBsb2cgaW4gZmlyc3QnKTtcbiAgICAgICAgcmV0dXJuOyBcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FydC9hZGQtdG8tY2FydCcsIFxuICAgICAgICB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5faWQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICBcbiAgICAgIHNldENhcnQocmVzcG9uc2UuZGF0YS5jYXJ0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIHByb2R1Y3QgdG8gY2FydDonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuICBcbiAgLy9GdW5jdGlvbiB0byBMb2dpblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGlzL2xvZ2luJywge1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHsgdG9rZW4sIHVzZXIgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgdXNlci5faWQpO1xuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgICAgIHNldFVzZXJJZCh1c2VyLl9pZCk7XG4gICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGxvZ2luXCIrZXJyb3IucmVzcG9uc2UpXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICBhbGVydChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpOyAvLyBTaG93IGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgYmFja2VuZFxuICAgICAgfVxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9nZ2luZyBpbjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vRnVuY3Rpb24gdG8gTG9nb3V0XG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJyk7XG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XG4gICAgc2V0VXNlcklkKG51bGwpO1xuICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gIH07XG5cbiAgLy8gdGhpcyBpcyBmb3IgUmVuZGVyIGEgbG9hZGluZyBzdGF0ZSB3aGlsZSBjaGVja2luZyBsb2dpbiBhbmQgZmV0Y2hpbmcgZGF0YVxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47IC8vIFNpbXBsZSBsb2FkaW5nIG1lc3NhZ2Ugb3Igc3Bpbm5lclxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiPlxuICAgICAgeyFpc0xvZ2dlZEluID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXIgaGVyZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SGVhZGVyIHVzZXJJZD17dXNlcklkfSBjYXJ0PXtjYXJ0fSBvbkxvZ291dD17aGFuZGxlTG9nb3V0fSAvPlxuICAgICAgICAgIDxoMT5Qcm9kdWN0IExpc3Q8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgU0tVIG9yIE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxQcm9kdWN0TGlzdFxuICAgICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgY2FydD17Y2FydH1cbiAgICAgICAgICAgIGFkZFRvQ2FydD17YWRkVG9DYXJ0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlByb2R1Y3RMaXN0IiwiSGVhZGVyIiwidXNlUm91dGVyIiwiTGluayIsIkhvbWVQYWdlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNhcnQiLCJzZXRDYXJ0Iiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZFVzZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFByb2R1Y3RzIiwicHVzaCIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXMiLCJoYW5kbGVTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicG9zdCIsInByb2R1Y3RJZCIsIl9pZCIsImhhbmRsZUxvZ2luIiwidXNlciIsInNldEl0ZW0iLCJhbGVydCIsIm1lc3NhZ2UiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJocmVmIiwib25Mb2dvdXQiLCJoMSIsInBsYWNlaG9sZGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});