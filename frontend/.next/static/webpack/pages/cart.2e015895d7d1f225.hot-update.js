"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cart = (param)=>{\n    let { userId } = param;\n    _s();\n    console.log(\"userId from Cart \" + userId);\n    // const userId=\"6763ecb93fbf12110eb19b66\";\n    // const productId=\"6763be900caf75b3aea2fad7\";\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        items: []\n    }); // Cart starts with an empty array of items\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Cart.useEffect\": ()=>{\n            const fetchCart = {\n                \"Cart.useEffect.fetchCart\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/api/cart/6763db24fcceb658b644380d\");\n                        console.log('Response Data:', response.data);\n                        setCart({\n                            items: response.data.products || []\n                        });\n                    } catch (error) {\n                        console.error('Error fetching cart:', error);\n                        setCart({\n                            items: []\n                        }); // Reset cart to an empty array in case of error\n                    }\n                }\n            }[\"Cart.useEffect.fetchCart\"];\n            fetchCart();\n        }\n    }[\"Cart.useEffect\"], [\n        userId\n    ]);\n    // Fetch user's cart after login\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Cart.useEffect\": ()=>{\n            if (!userId) {\n                console.log(\"inside cart after login\");\n                const fetchCart = {\n                    \"Cart.useEffect.fetchCart\": async ()=>{\n                        try {\n                            // Get the token from localStorage\n                            const token = localStorage.getItem('token');\n                            console.log(\"token\" + token);\n                            if (!token) {\n                                console.error('No token found, user might not be logged in.');\n                                return; // If no token is found, stop the execution of the function\n                            }\n                            console.log('Sending request to fetch cart with token:', token); // Log token and action\n                            // Make the GET request to fetch cart with token in the Authorization header\n                            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/api/cart/\".concat(userId), {\n                                headers: {\n                                    Authorization: \"Bearer \".concat(token)\n                                }\n                            });\n                            console.log('Cart data fetched:', response.data); // Log the successful response\n                            // Set cart data from the response\n                            setCart({\n                                items: response.data.products || []\n                            });\n                        } catch (error) {\n                            // Log the error in detail\n                            if (error.response) {\n                                console.error('Error fetching cart:', error.response.status, error.response.data);\n                            } else {\n                                console.error('Error fetching cart:', error.message);\n                            }\n                            // Handle specific case for unauthorized access (401)\n                            if (error.response && error.response.status === 401) {\n                                console.error('Unauthorized access: The token may be invalid or expired.');\n                            // Optionally, you can redirect the user to login page:\n                            // router.push('/login');\n                            }\n                        }\n                    }\n                }[\"Cart.useEffect.fetchCart\"];\n                fetchCart();\n            }\n        }\n    }[\"Cart.useEffect\"], [\n        userId\n    ]);\n    // Function to remove product from the cart\n    const removeFromCart = async (productId)=>{\n        try {\n            console.log(\"Removing product with ID:\", productId);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('http://localhost:5000/api/cart/remove-from-cart', {\n                userId: \"6763db24fcceb658b644380d\",\n                productId: productId\n            });\n            console.log('Response after removing product:', response.data);\n        } catch (error) {\n            console.error('Error removing product from cart:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Cart\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, undefined),\n            cart.items.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your cart is empty\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, undefined) : cart.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        borderBottom: '1px solid #ddd',\n                        marginBottom: '20px',\n                        paddingBottom: '10px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: item['Image Src'],\n                            alt: item.Title,\n                            width: \"100\",\n                            height: \"100\",\n                            style: {\n                                borderRadius: '10px',\n                                objectFit: 'cover'\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: item.Title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 122,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"SKU:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 18\n                                        }, undefined),\n                                        \" \",\n                                        item['Variant SKU']\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Price:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 18\n                                        }, undefined),\n                                        \" $\",\n                                        item['Variant Price']\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeFromCart(item._id),\n                            style: {\n                                backgroundColor: 'red',\n                                color: '#fff',\n                                padding: '10px',\n                                border: 'none',\n                                borderRadius: '5px',\n                                cursor: 'pointer'\n                            },\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, item._id, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cart, \"9DILh5FINElDitjHvQ80GxSyOJI=\");\n_c = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIcEIsS0FBS0UsS0FBSyxDQUFDbUIsTUFBTSxLQUFLLGtCQUNyQiw4REFBQ0M7MEJBQUU7Ozs7OzRCQUVIdEIsS0FBS0UsS0FBSyxDQUFDcUIsR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDTDtvQkFBbUJNLE9BQU87d0JBQUVDLGNBQWM7d0JBQWtCQyxjQUFjO3dCQUFRQyxlQUFlO29CQUFPOztzQ0FFdkcsOERBQUNDOzRCQUNDQyxLQUFLTixJQUFJLENBQUMsWUFBWTs0QkFDdEJPLEtBQUtQLEtBQUtRLEtBQUs7NEJBQ2ZDLE9BQU07NEJBQ05DLFFBQU87NEJBQ1BULE9BQU87Z0NBQUVVLGNBQWM7Z0NBQVFDLFdBQVc7NEJBQVE7Ozs7OztzQ0FJcEQsOERBQUNqQjs7OENBQ0MsOERBQUNrQjs4Q0FBSWIsS0FBS1EsS0FBSzs7Ozs7OzhDQUNmLDhEQUFDVjs7c0RBQUUsOERBQUNnQjtzREFBTzs7Ozs7O3dDQUFhO3dDQUFFZCxJQUFJLENBQUMsY0FBYzs7Ozs7Ozs4Q0FDN0MsOERBQUNGOztzREFBRSw4REFBQ2dCO3NEQUFPOzs7Ozs7d0NBQWU7d0NBQUdkLElBQUksQ0FBQyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7c0NBSXBELDhEQUFDZTs0QkFDQ0MsU0FBUyxJQUFNeEIsZUFBZVEsS0FBS2lCLEdBQUc7NEJBQ3RDaEIsT0FBTztnQ0FBRWlCLGlCQUFpQjtnQ0FBT0MsT0FBTztnQ0FBUUMsU0FBUztnQ0FBUUMsUUFBUTtnQ0FBUVYsY0FBYztnQ0FBT1csUUFBUTs0QkFBVTtzQ0FDekg7Ozs7Ozs7bUJBckJPdEIsS0FBS2lCLEdBQUc7Ozs7Ozs7Ozs7O0FBNkI1QjtHQXZJTTdDO0tBQUFBO0FBeUlOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTGFiLUthcmluaS1BaVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXENhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IENhcnQgPSAoeyB1c2VySWR9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJ1c2VySWQgZnJvbSBDYXJ0IFwiK3VzZXJJZClcclxuIC8vIGNvbnN0IHVzZXJJZD1cIjY3NjNlY2I5M2ZiZjEyMTEwZWIxOWI2NlwiO1xyXG4gLy8gY29uc3QgcHJvZHVjdElkPVwiNjc2M2JlOTAwY2FmNzViM2FlYTJmYWQ3XCI7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoeyBpdGVtczogW10gfSk7IC8vIENhcnQgc3RhcnRzIHdpdGggYW4gZW1wdHkgYXJyYXkgb2YgaXRlbXNcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ2FydCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0LzY3NjNkYjI0ZmNjZWI2NThiNjQ0MzgwZGApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBEYXRhOicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNldENhcnQoeyBpdGVtczogcmVzcG9uc2UuZGF0YS5wcm9kdWN0c3x8IFtdIH0pO1xyXG4gICAgICAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FydDonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0Q2FydCh7IGl0ZW1zOiBbXSB9KTsgLy8gUmVzZXQgY2FydCB0byBhbiBlbXB0eSBhcnJheSBpbiBjYXNlIG9mIGVycm9yXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hDYXJ0KCk7XHJcbiAgfSwgW3VzZXJJZF0pO1xyXG5cclxuXHJcblxyXG4gIC8vIEZldGNoIHVzZXIncyBjYXJ0IGFmdGVyIGxvZ2luXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdXNlcklkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGNhcnQgYWZ0ZXIgbG9naW5cIilcclxuICAgICAgY29uc3QgZmV0Y2hDYXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBHZXQgdGhlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlblwiK3Rva2VuKVxyXG4gICAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyB0b2tlbiBmb3VuZCwgdXNlciBtaWdodCBub3QgYmUgbG9nZ2VkIGluLicpO1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIElmIG5vIHRva2VuIGlzIGZvdW5kLCBzdG9wIHRoZSBleGVjdXRpb24gb2YgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZyByZXF1ZXN0IHRvIGZldGNoIGNhcnQgd2l0aCB0b2tlbjonLCB0b2tlbik7IC8vIExvZyB0b2tlbiBhbmQgYWN0aW9uXHJcbiAgXHJcbiAgICAgICAgICAvLyBNYWtlIHRoZSBHRVQgcmVxdWVzdCB0byBmZXRjaCBjYXJ0IHdpdGggdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0LyR7dXNlcklkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLCAvLyBBZGQgdG9rZW4gdG8gQXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0NhcnQgZGF0YSBmZXRjaGVkOicsIHJlc3BvbnNlLmRhdGEpOyAvLyBMb2cgdGhlIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcclxuICBcclxuICAgICAgICAgIC8vIFNldCBjYXJ0IGRhdGEgZnJvbSB0aGUgcmVzcG9uc2VcclxuICAgICAgICAgIHNldENhcnQoeyBpdGVtczogcmVzcG9uc2UuZGF0YS5wcm9kdWN0c3x8IFtdIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBMb2cgdGhlIGVycm9yIGluIGRldGFpbFxyXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcnQ6JywgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcnQ6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAvLyBIYW5kbGUgc3BlY2lmaWMgY2FzZSBmb3IgdW5hdXRob3JpemVkIGFjY2VzcyAoNDAxKVxyXG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYXV0aG9yaXplZCBhY2Nlc3M6IFRoZSB0b2tlbiBtYXkgYmUgaW52YWxpZCBvciBleHBpcmVkLicpO1xyXG4gICAgICAgICAgICAvLyBPcHRpb25hbGx5LCB5b3UgY2FuIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGxvZ2luIHBhZ2U6XHJcbiAgICAgICAgICAgIC8vIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIGZldGNoQ2FydCgpO1xyXG4gICAgfVxyXG4gIH0sIFt1c2VySWRdKTtcclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIHByb2R1Y3QgZnJvbSB0aGUgY2FydFxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmluZyBwcm9kdWN0IHdpdGggSUQ6XCIsIHByb2R1Y3RJZCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2NhcnQvcmVtb3ZlLWZyb20tY2FydCcsIHtcclxuICAgICAgICAgIHVzZXJJZDogXCI2NzYzZGIyNGZjY2ViNjU4YjY0NDM4MGRcIixcclxuICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBhZnRlciByZW1vdmluZyBwcm9kdWN0OicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIHByb2R1Y3QgZnJvbSBjYXJ0OicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPllvdXIgQ2FydDwvaDI+XHJcbiAgICAgIHtjYXJ0Lml0ZW1zLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICA8cD5Zb3VyIGNhcnQgaXMgZW1wdHk8L3A+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtLl9pZH0gc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNkZGQnLCBtYXJnaW5Cb3R0b206ICcyMHB4JywgcGFkZGluZ0JvdHRvbTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICB7LyogRGlzcGxheSBQcm9kdWN0IEltYWdlICovfVxyXG4gICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgIHNyYz17aXRlbVsnSW1hZ2UgU3JjJ119IFxyXG4gICAgICAgICAgICAgIGFsdD17aXRlbS5UaXRsZX0gXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIiBcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIiBcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcxMHB4Jywgb2JqZWN0Rml0OiAnY292ZXInIH19IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgey8qIERpc3BsYXkgUHJvZHVjdCBJbmZvcm1hdGlvbiAqL31cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDM+e2l0ZW0uVGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8cD48c3Ryb25nPlNLVTo8L3N0cm9uZz4ge2l0ZW1bJ1ZhcmlhbnQgU0tVJ119PC9wPlxyXG4gICAgICAgICAgICAgIDxwPjxzdHJvbmc+UHJpY2U6PC9zdHJvbmc+ICR7aXRlbVsnVmFyaWFudCBQcmljZSddfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogUmVtb3ZlIEJ1dHRvbiAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVGcm9tQ2FydChpdGVtLl9pZCl9IFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3JlZCcsIGNvbG9yOiAnI2ZmZicsIHBhZGRpbmc6ICcxMHB4JywgYm9yZGVyOiAnbm9uZScsIGJvcmRlclJhZGl1czogJzVweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiQ2FydCIsInVzZXJJZCIsImNvbnNvbGUiLCJsb2ciLCJjYXJ0Iiwic2V0Q2FydCIsIml0ZW1zIiwiZmV0Y2hDYXJ0IiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwicHJvZHVjdHMiLCJlcnJvciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic3RhdHVzIiwibWVzc2FnZSIsInJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwicG9zdCIsImRpdiIsImgyIiwibGVuZ3RoIiwicCIsIm1hcCIsIml0ZW0iLCJzdHlsZSIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJpbWciLCJzcmMiLCJhbHQiLCJUaXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwib2JqZWN0Rml0IiwiaDMiLCJzdHJvbmciLCJidXR0b24iLCJvbkNsaWNrIiwiX2lkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwiY3Vyc29yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cart.js\n"));

/***/ })

});