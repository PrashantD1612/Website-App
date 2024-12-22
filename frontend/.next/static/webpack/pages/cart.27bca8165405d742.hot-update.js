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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cart = (param)=>{\n    let { userId } = param;\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        items: []\n    }); // Cart starts with an empty array of items\n    //fetch cart products\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Cart.useEffect\": ()=>{\n            const fetchCart = {\n                \"Cart.useEffect.fetchCart\": async ()=>{\n                    try {\n                        if (!userId) return;\n                        // Get the token from localStorage\n                        const token = localStorage.getItem('token');\n                        console.log(\"token\" + token);\n                        if (!token) {\n                            console.error('No token found, unable to fetch cart.');\n                            return; // Exit if no token is found\n                        }\n                        // Send the GET request with the Authorization header\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/api/cart/\".concat(userId), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(token)\n                            }\n                        });\n                        console.log('Response Data:', response.data);\n                        setCart({\n                            items: response.data.products || []\n                        });\n                    } catch (error) {\n                        console.error('Error fetching cart:', error);\n                        setCart({\n                            items: []\n                        }); // Reset cart to an empty array in case of error\n                    }\n                }\n            }[\"Cart.useEffect.fetchCart\"];\n            fetchCart();\n        }\n    }[\"Cart.useEffect\"], [\n        userId\n    ]);\n    // Function to remove product from the cart\n    const removeFromCart = async (productId)=>{\n        try {\n            console.log(\"Removing product with ID:\", productId);\n            // Get the token from localStorage\n            const token = localStorage.getItem('token');\n            if (!token) {\n                console.error('No token found, unable to remove product.');\n                return; // Exit if no token is found\n            }\n            // Send the POST request with the Authorization header\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('http://localhost:5000/api/cart/remove-from-cart', {\n                userId: userId,\n                productId: productId\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            console.log('Response after removing product:', response.data);\n        } catch (error) {\n            console.error('Error removing product from cart:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your Cart\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            cart.items.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your cart is empty\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined) : cart.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        borderBottom: '1px solid #ddd',\n                        marginBottom: '20px',\n                        paddingBottom: '10px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: item['Image Src'],\n                            alt: item.Title,\n                            width: \"100\",\n                            height: \"100\",\n                            style: {\n                                borderRadius: '10px',\n                                objectFit: 'cover'\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: item.Title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"SKU:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 18\n                                        }, undefined),\n                                        \" \",\n                                        item['Variant SKU']\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                            children: \"Price:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 18\n                                        }, undefined),\n                                        \" $\",\n                                        item['Variant Price']\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeFromCart(item._id),\n                            style: {\n                                backgroundColor: 'red',\n                                color: '#fff',\n                                padding: '10px',\n                                border: 'none',\n                                borderRadius: '5px',\n                                cursor: 'pointer'\n                            },\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, item._id, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cart, \"bie6sVwGtPC2xOoGMlvRbrXarDA=\");\n_c = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNlOzRCQUNDQyxTQUFTLElBQU14QixlQUFlUSxLQUFLaUIsR0FBRzs0QkFDdENoQixPQUFPO2dDQUFFaUIsaUJBQWlCO2dDQUFPQyxPQUFPO2dDQUFRQyxTQUFTO2dDQUFRQyxRQUFRO2dDQUFRVixjQUFjO2dDQUFPVyxRQUFROzRCQUFVO3NDQUN6SDs7Ozs7OzttQkFyQk90QixLQUFLaUIsR0FBRzs7Ozs7Ozs7Ozs7QUE2QjVCO0dBdEdNM0M7S0FBQUE7QUF3R04saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxMYWItS2FyaW5pLUFpXFxmcm9udGVuZFxcY29tcG9uZW50c1xcQ2FydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQ2FydCA9ICh7IHVzZXJJZH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoeyBpdGVtczogW10gfSk7IC8vIENhcnQgc3RhcnRzIHdpdGggYW4gZW1wdHkgYXJyYXkgb2YgaXRlbXNcclxuXHJcblxyXG4vL2ZldGNoIGNhcnQgcHJvZHVjdHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDYXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICghdXNlcklkKSByZXR1cm47IFxyXG4gICAgICAgIC8vIEdldCB0aGUgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIit0b2tlbilcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyB0b2tlbiBmb3VuZCwgdW5hYmxlIHRvIGZldGNoIGNhcnQuJyk7XHJcbiAgICAgICAgICByZXR1cm47IC8vIEV4aXQgaWYgbm8gdG9rZW4gaXMgZm91bmRcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLy8gU2VuZCB0aGUgR0VUIHJlcXVlc3Qgd2l0aCB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0LyR7dXNlcklkfWAsIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsIC8vIEFkZCB0b2tlbiB0byB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIERhdGE6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0Q2FydCh7IGl0ZW1zOiByZXNwb25zZS5kYXRhLnByb2R1Y3RzIHx8IFtdIH0pO1xyXG4gIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldENhcnQoeyBpdGVtczogW10gfSk7IC8vIFJlc2V0IGNhcnQgdG8gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBlcnJvclxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgZmV0Y2hDYXJ0KCk7XHJcbiAgfSwgW3VzZXJJZF0pO1xyXG4gIFxyXG4gIFxyXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVtb3ZlIHByb2R1Y3QgZnJvbSB0aGUgY2FydFxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmluZyBwcm9kdWN0IHdpdGggSUQ6XCIsIHByb2R1Y3RJZCk7XHJcbiAgICBcclxuICAgICAgICAvLyBHZXQgdGhlIHRva2VuIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyB0b2tlbiBmb3VuZCwgdW5hYmxlIHRvIHJlbW92ZSBwcm9kdWN0LicpO1xyXG4gICAgICAgICAgcmV0dXJuOyAvLyBFeGl0IGlmIG5vIHRva2VuIGlzIGZvdW5kXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gU2VuZCB0aGUgUE9TVCByZXF1ZXN0IHdpdGggdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2NhcnQvcmVtb3ZlLWZyb20tY2FydCcsIHtcclxuICAgICAgICAgIHVzZXJJZDogdXNlcklkLCAvLyBPciBwYXNzIHRoZSBhY3R1YWwgdXNlcklkIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgcHJvZHVjdElkOiBwcm9kdWN0SWQsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCwgLy8gQWRkIHRva2VuIHRvIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZSBhZnRlciByZW1vdmluZyBwcm9kdWN0OicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIHByb2R1Y3QgZnJvbSBjYXJ0OicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+WW91ciBDYXJ0PC9oMj5cclxuICAgICAge2NhcnQuaXRlbXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxwPllvdXIgY2FydCBpcyBlbXB0eTwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uX2lkfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2RkZCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnLCBwYWRkaW5nQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgIHsvKiBEaXNwbGF5IFByb2R1Y3QgSW1hZ2UgKi99XHJcbiAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtWydJbWFnZSBTcmMnXX0gXHJcbiAgICAgICAgICAgICAgYWx0PXtpdGVtLlRpdGxlfSBcclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiIFxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiIFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzEwcHgnLCBvYmplY3RGaXQ6ICdjb3ZlcicgfX0gXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogRGlzcGxheSBQcm9kdWN0IEluZm9ybWF0aW9uICovfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz57aXRlbS5UaXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPjxzdHJvbmc+U0tVOjwvc3Ryb25nPiB7aXRlbVsnVmFyaWFudCBTS1UnXX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+PHN0cm9uZz5QcmljZTo8L3N0cm9uZz4gJHtpdGVtWydWYXJpYW50IFByaWNlJ119PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSZW1vdmUgQnV0dG9uICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21DYXJ0KGl0ZW0uX2lkKX0gXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAncmVkJywgY29sb3I6ICcjZmZmJywgcGFkZGluZzogJzEwcHgnLCBib3JkZXI6ICdub25lJywgYm9yZGVyUmFkaXVzOiAnNXB4JywgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJDYXJ0IiwidXNlcklkIiwiY2FydCIsInNldENhcnQiLCJpdGVtcyIsImZldGNoQ2FydCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlc3BvbnNlIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwicHJvZHVjdHMiLCJyZW1vdmVGcm9tQ2FydCIsInByb2R1Y3RJZCIsInBvc3QiLCJkaXYiLCJoMiIsImxlbmd0aCIsInAiLCJtYXAiLCJpdGVtIiwic3R5bGUiLCJib3JkZXJCb3R0b20iLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiaW1nIiwic3JjIiwiYWx0IiwiVGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm9iamVjdEZpdCIsImgzIiwic3Ryb25nIiwiYnV0dG9uIiwib25DbGljayIsIl9pZCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlciIsImN1cnNvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cart.js\n"));

/***/ })

});