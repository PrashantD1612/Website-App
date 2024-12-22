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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cart = (param)=>{\n    let { userId } = param;\n    _s();\n    console.log(\"userId from Cart \" + userId);\n    // const userId=\"6763ecb93fbf12110eb19b66\";\n    // const productId=\"6763be900caf75b3aea2fad7\";\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        items: []\n    }); // Cart starts with an empty array of items\n    //fetch cart products\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Cart.useEffect\": ()=>{\n            const fetchCart = {\n                \"Cart.useEffect.fetchCart\": async ()=>{\n                    try {\n                        if (!userId) return;\n                        // Get the token from localStorage\n                        const token = localStorage.getItem('token');\n                        console.log(\"token\" + token);\n                        if (!token) {\n                            console.error('No token found, unable to fetch cart.');\n                            return; // Exit if no token is found\n                        }\n                        // Send the GET request with the Authorization header\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/api/cart/\".concat(userId), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(token)\n                            }\n                        });\n                        console.log('Response Data:', response.data);\n                        setCart({\n                            items: response.data.products || []\n                        });\n                    } catch (error) {\n                        console.error('Error fetching cart:', error);\n                        setCart({\n                            items: []\n                        }); // Reset cart to an empty array in case of error\n                    }\n                }\n            }[\"Cart.useEffect.fetchCart\"];\n            fetchCart();\n        }\n    }[\"Cart.useEffect\"], [\n        userId\n    ]);\n    // Function to remove product from the cart\n    const removeFromCart = async (productId)=>{\n        try {\n            console.log(\"Removing product with ID:\", productId);\n            // Get the token from localStorage\n            const token = localStorage.getItem('token');\n            if (!token) {\n                console.error('No token found, unable to remove product.');\n                return; // Exit if no token is found\n            }\n            // Send the POST request with the Authorization header\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('http://localhost:5000/api/cart/remove-from-cart', {\n                userId: \"6763db24fcceb658b644380d\",\n                productId: productId\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            console.log('Response after removing product:', response.data);\n        } catch (error) {\n            console.error('Error removing product from cart:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Cart\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            cart.items.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your cart is empty\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined) : cart.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        borderBottom: '1px solid #ddd',\n                        marginBottom: '20px',\n                        paddingBottom: '10px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: item['Image Src'],\n                            alt: item.Title,\n                            width: \"100\",\n                            height: \"100\",\n                            style: {\n                                borderRadius: '10px',\n                                objectFit: 'cover'\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: item.Title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"SKU:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 18\n                                        }, undefined),\n                                        \" \",\n                                        item['Variant SKU']\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Price:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 18\n                                        }, undefined),\n                                        \" $\",\n                                        item['Variant Price']\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeFromCart(item._id),\n                            style: {\n                                backgroundColor: 'red',\n                                color: '#fff',\n                                padding: '10px',\n                                border: 'none',\n                                borderRadius: '5px',\n                                cursor: 'pointer'\n                            },\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, item._id, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cart, \"bie6sVwGtPC2xOoGMlvRbrXarDA=\");\n_c = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPOzs7Ozs7d0NBQWU7d0NBQUdkLElBQUksQ0FBQyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7c0NBSXBELDhEQUFDZTs0QkFDQ0MsU0FBUyxJQUFNeEIsZUFBZVEsS0FBS2lCLEdBQUc7NEJBQ3RDaEIsT0FBTztnQ0FBRWlCLGlCQUFpQjtnQ0FBT0MsT0FBTztnQ0FBUUMsU0FBUztnQ0FBUUMsUUFBUTtnQ0FBUVYsY0FBYztnQ0FBT1csUUFBUTs0QkFBVTtzQ0FDekg7Ozs7Ozs7bUJBckJPdEIsS0FBS2lCLEdBQUc7Ozs7Ozs7Ozs7O0FBNkI1QjtHQXRHTTNDO0tBQUFBO0FBd0dOLGlFQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJEOlxcTGFiLUthcmluaS1BaVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXENhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IENhcnQgPSAoeyB1c2VySWR9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJ1c2VySWQgZnJvbSBDYXJ0IFwiK3VzZXJJZClcclxuIC8vIGNvbnN0IHVzZXJJZD1cIjY3NjNlY2I5M2ZiZjEyMTEwZWIxOWI2NlwiO1xyXG4gLy8gY29uc3QgcHJvZHVjdElkPVwiNjc2M2JlOTAwY2FmNzViM2FlYTJmYWQ3XCI7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoeyBpdGVtczogW10gfSk7IC8vIENhcnQgc3RhcnRzIHdpdGggYW4gZW1wdHkgYXJyYXkgb2YgaXRlbXNcclxuLy9mZXRjaCBjYXJ0IHByb2R1Y3RzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQ2FydCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoIXVzZXJJZCkgcmV0dXJuOyBcclxuICAgICAgICAvLyBHZXQgdGhlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuXCIrdG9rZW4pXHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTm8gdG9rZW4gZm91bmQsIHVuYWJsZSB0byBmZXRjaCBjYXJ0LicpO1xyXG4gICAgICAgICAgcmV0dXJuOyAvLyBFeGl0IGlmIG5vIHRva2VuIGlzIGZvdW5kXHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC8vIFNlbmQgdGhlIEdFVCByZXF1ZXN0IHdpdGggdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FydC8ke3VzZXJJZH1gLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLCAvLyBBZGQgdG9rZW4gdG8gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBEYXRhOicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIHNldENhcnQoeyBpdGVtczogcmVzcG9uc2UuZGF0YS5wcm9kdWN0cyB8fCBbXSB9KTtcclxuICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXJ0OicsIGVycm9yKTtcclxuICAgICAgICBzZXRDYXJ0KHsgaXRlbXM6IFtdIH0pOyAvLyBSZXNldCBjYXJ0IHRvIGFuIGVtcHR5IGFycmF5IGluIGNhc2Ugb2YgZXJyb3JcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGZldGNoQ2FydCgpO1xyXG4gIH0sIFt1c2VySWRdKTtcclxuICBcclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIHJlbW92ZSBwcm9kdWN0IGZyb20gdGhlIGNhcnRcclxuICAgIGNvbnN0IHJlbW92ZUZyb21DYXJ0ID0gYXN5bmMgKHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZpbmcgcHJvZHVjdCB3aXRoIElEOlwiLCBwcm9kdWN0SWQpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gR2V0IHRoZSB0b2tlbiBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTm8gdG9rZW4gZm91bmQsIHVuYWJsZSB0byByZW1vdmUgcHJvZHVjdC4nKTtcclxuICAgICAgICAgIHJldHVybjsgLy8gRXhpdCBpZiBubyB0b2tlbiBpcyBmb3VuZFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIFNlbmQgdGhlIFBPU1QgcmVxdWVzdCB3aXRoIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0L3JlbW92ZS1mcm9tLWNhcnQnLCB7XHJcbiAgICAgICAgICB1c2VySWQ6IFwiNjc2M2RiMjRmY2NlYjY1OGI2NDQzODBkXCIsIC8vIE9yIHBhc3MgdGhlIGFjdHVhbCB1c2VySWQgaWYgbmVjZXNzYXJ5XHJcbiAgICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLCAvLyBBZGQgdG9rZW4gdG8gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIGFmdGVyIHJlbW92aW5nIHByb2R1Y3Q6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgcHJvZHVjdCBmcm9tIGNhcnQ6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj5Zb3VyIENhcnQ8L2gyPlxyXG4gICAgICB7Y2FydC5pdGVtcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPHA+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5faWR9IHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZGRkJywgbWFyZ2luQm90dG9tOiAnMjBweCcsIHBhZGRpbmdCb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgey8qIERpc3BsYXkgUHJvZHVjdCBJbWFnZSAqL31cclxuICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICBzcmM9e2l0ZW1bJ0ltYWdlIFNyYyddfSBcclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0uVGl0bGV9IFxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCIgXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnMTBweCcsIG9iamVjdEZpdDogJ2NvdmVyJyB9fSBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEaXNwbGF5IFByb2R1Y3QgSW5mb3JtYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzPntpdGVtLlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+PHN0cm9uZz5TS1U6PC9zdHJvbmc+IHtpdGVtWydWYXJpYW50IFNLVSddfTwvcD5cclxuICAgICAgICAgICAgICA8cD48c3Ryb25nPlByaWNlOjwvc3Ryb25nPiAke2l0ZW1bJ1ZhcmlhbnQgUHJpY2UnXX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFJlbW92ZSBCdXR0b24gKi99XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlRnJvbUNhcnQoaXRlbS5faWQpfSBcclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCBjb2xvcjogJyNmZmYnLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjogJ25vbmUnLCBib3JkZXJSYWRpdXM6ICc1cHgnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkNhcnQiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwiY2FydCIsInNldENhcnQiLCJpdGVtcyIsImZldGNoQ2FydCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJwcm9kdWN0cyIsInJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwicG9zdCIsImRpdiIsImgyIiwibGVuZ3RoIiwicCIsIm1hcCIsIml0ZW0iLCJzdHlsZSIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJpbWciLCJzcmMiLCJhbHQiLCJUaXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwib2JqZWN0Rml0IiwiaDMiLCJzdHJvbmciLCJidXR0b24iLCJvbkNsaWNrIiwiX2lkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyIiwiY3Vyc29yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cart.js\n"));

/***/ })

});