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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Cart = (param)=>{\n    let { cartId } = param;\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        items: []\n    }); // Ensure cart has items as an empty array initially\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Cart.useEffect\": ()=>{\n            // Fetch cart data initially\n            const fetchCart = {\n                \"Cart.useEffect.fetchCart\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:5000/api/cart/6763ecb93fbf12110eb19b66\");\n                        console.log(\"response.data\" + JSON.stringify(response.data));\n                        // Ensure cart response has an 'items' array\n                        setCart({\n                            items: response.data || []\n                        });\n                    } catch (error) {\n                        console.error('Error fetching cart:', error);\n                        setCart({\n                            items: []\n                        }); // Ensure cart remains an object with an empty items array in case of error\n                    }\n                }\n            }[\"Cart.useEffect.fetchCart\"];\n            fetchCart();\n        }\n    }[\"Cart.useEffect\"], [\n        cartId\n    ]);\n    const handleRemoveItem = async (itemId)=>{\n        // Handle removing the item from the cart\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:5000/api/cart/remove\", {\n                itemId,\n                cartId\n            });\n            setCart({\n                items: response.data.items || []\n            }); // Update cart after removal\n        } catch (error) {\n            console.error('Error removing item from cart:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Your CartEE\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            cart.items.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Your cart is empty\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined) : cart.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        borderBottom: '1px solid #ddd',\n                        marginBottom: '10px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: item.Title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: 'SKU: item[\"Variant SKU\"]'\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Quantity: \",\n                                item.quantity\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleRemoveItem(item._id),\n                            children: \"Remove\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, item._id, true, {\n                    fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\components\\\\Cart.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cart, \"bie6sVwGtPC2xOoGMlvRbrXarDA=\");\n_c = Cart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFFMUIsTUFBTUcsT0FBTztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLE9BQU8sRUFBRTtJQUFDLElBQUksb0RBQW9EO0lBRXJHTixnREFBU0E7MEJBQUM7WUFDUiw0QkFBNEI7WUFDNUIsTUFBTU87NENBQVk7b0JBQ2hCLElBQUk7d0JBQ0YsTUFBTUMsV0FBVyxNQUFNUCxpREFBUyxDQUFFO3dCQUNsQ1MsUUFBUUMsR0FBRyxDQUFDLGtCQUFnQkMsS0FBS0MsU0FBUyxDQUFDTCxTQUFTTSxJQUFJO3dCQUN4RCw0Q0FBNEM7d0JBQzVDVCxRQUFROzRCQUFFQyxPQUFPRSxTQUFTTSxJQUFJLElBQUksRUFBRTt3QkFBQztvQkFDdkMsRUFBRSxPQUFPQyxPQUFPO3dCQUNkTCxRQUFRSyxLQUFLLENBQUMsd0JBQXdCQTt3QkFDdENWLFFBQVE7NEJBQUVDLE9BQU8sRUFBRTt3QkFBQyxJQUFJLDJFQUEyRTtvQkFDckc7Z0JBQ0Y7O1lBRUFDO1FBQ0Y7eUJBQUc7UUFBQ0o7S0FBTztJQUVYLE1BQU1hLG1CQUFtQixPQUFPQztRQUM5Qix5Q0FBeUM7UUFDekMsSUFBSTtZQUNGLE1BQU1ULFdBQVcsTUFBTVAsa0RBQVUsQ0FBRSx5Q0FBd0M7Z0JBQUVnQjtnQkFBUWQ7WUFBTztZQUM1RkUsUUFBUTtnQkFBRUMsT0FBT0UsU0FBU00sSUFBSSxDQUFDUixLQUFLLElBQUksRUFBRTtZQUFDLElBQUksNEJBQTRCO1FBQzdFLEVBQUUsT0FBT1MsT0FBTztZQUNkTCxRQUFRSyxLQUFLLENBQUMsa0NBQWtDQTtRQUNsRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIaEIsS0FBS0UsS0FBSyxDQUFDZSxNQUFNLEtBQUssa0JBQ3JCLDhEQUFDQzswQkFBRTs7Ozs7NEJBRUhsQixLQUFLRSxLQUFLLENBQUNpQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNMO29CQUFtQk0sT0FBTzt3QkFBRUMsY0FBYzt3QkFBa0JDLGNBQWM7b0JBQU87O3NDQUNoRiw4REFBQ0M7c0NBQUlKLEtBQUtLLEtBQUs7Ozs7OztzQ0FDZiw4REFBQ1A7c0NBQUU7Ozs7OztzQ0FDSCw4REFBQ0E7O2dDQUFFO2dDQUFXRSxLQUFLTSxRQUFROzs7Ozs7O3NDQUMzQiw4REFBQ0M7NEJBQU9DLFNBQVMsSUFBTWhCLGlCQUFpQlEsS0FBS1MsR0FBRztzQ0FBRzs7Ozs7OzttQkFKM0NULEtBQUtTLEdBQUc7Ozs7Ozs7Ozs7O0FBVTVCO0dBL0NNL0I7S0FBQUE7QUFpRE4saUVBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxMYWItS2FyaW5pLUFpXFxmcm9udGVuZFxcY29tcG9uZW50c1xcQ2FydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgQ2FydCA9ICh7IGNhcnRJZCB9KSA9PiB7XHJcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoeyBpdGVtczogW10gfSk7IC8vIEVuc3VyZSBjYXJ0IGhhcyBpdGVtcyBhcyBhbiBlbXB0eSBhcnJheSBpbml0aWFsbHlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZldGNoIGNhcnQgZGF0YSBpbml0aWFsbHlcclxuICAgIGNvbnN0IGZldGNoQ2FydCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0LzY3NjNlY2I5M2ZiZjEyMTEwZWIxOWI2NmApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2UuZGF0YVwiK0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgIC8vIEVuc3VyZSBjYXJ0IHJlc3BvbnNlIGhhcyBhbiAnaXRlbXMnIGFycmF5XHJcbiAgICAgICAgc2V0Q2FydCh7IGl0ZW1zOiByZXNwb25zZS5kYXRhIHx8IFtdIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNhcnQ6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldENhcnQoeyBpdGVtczogW10gfSk7IC8vIEVuc3VyZSBjYXJ0IHJlbWFpbnMgYW4gb2JqZWN0IHdpdGggYW4gZW1wdHkgaXRlbXMgYXJyYXkgaW4gY2FzZSBvZiBlcnJvclxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoQ2FydCgpO1xyXG4gIH0sIFtjYXJ0SWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IGFzeW5jIChpdGVtSWQpID0+IHtcclxuICAgIC8vIEhhbmRsZSByZW1vdmluZyB0aGUgaXRlbSBmcm9tIHRoZSBjYXJ0XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FydC9yZW1vdmVgLCB7IGl0ZW1JZCwgY2FydElkIH0pO1xyXG4gICAgICBzZXRDYXJ0KHsgaXRlbXM6IHJlc3BvbnNlLmRhdGEuaXRlbXMgfHwgW10gfSk7IC8vIFVwZGF0ZSBjYXJ0IGFmdGVyIHJlbW92YWxcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIGl0ZW0gZnJvbSBjYXJ0OicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPllvdXIgQ2FydEVFPC9oMj5cclxuICAgICAge2NhcnQuaXRlbXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxwPllvdXIgY2FydCBpcyBlbXB0eTwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uX2lkfSBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2RkZCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICA8aDM+e2l0ZW0uVGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPHA+U0tVOiBpdGVtW1wiVmFyaWFudCBTS1VcIl08L3A+XHJcbiAgICAgICAgICAgIDxwPlF1YW50aXR5OiB7aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlSXRlbShpdGVtLl9pZCl9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkNhcnQiLCJjYXJ0SWQiLCJjYXJ0Iiwic2V0Q2FydCIsIml0ZW1zIiwiZmV0Y2hDYXJ0IiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJlcnJvciIsImhhbmRsZVJlbW92ZUl0ZW0iLCJpdGVtSWQiLCJwb3N0IiwiZGl2IiwiaDIiLCJsZW5ndGgiLCJwIiwibWFwIiwiaXRlbSIsInN0eWxlIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luQm90dG9tIiwiaDMiLCJUaXRsZSIsInF1YW50aXR5IiwiYnV0dG9uIiwib25DbGljayIsIl9pZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Cart.js\n"));

/***/ })

});