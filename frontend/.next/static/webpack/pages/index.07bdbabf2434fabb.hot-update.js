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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n // New Header Component\nconst HomePage = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('6763db24fcceb658b644380d');\n    // Fetch products on initial load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchProducts = {\n                \"HomePage.useEffect.fetchProducts\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('http://localhost:5000/api/products');\n                        setProducts(response.data);\n                    } catch (error) {\n                        console.error('Error fetching products:', error);\n                    }\n                }\n            }[\"HomePage.useEffect.fetchProducts\"];\n            fetchProducts();\n        }\n    }[\"HomePage.useEffect\"], []);\n    // Fetch user's cart on initial load\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"HomePage.useEffect\": ()=>{\n            const fetchCart = {\n                \"HomePage.useEffect.fetchCart\": async ()=>{\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/cart/\".concat(userId));\n                        console.log(\"repsonse.dta\" + JSON.stringify(response.data));\n                        setCart(response.data); // Assuming the response has a cart property\n                    } catch (error) {\n                        console.error('Error fetching cart:', error);\n                    }\n                }\n            }[\"HomePage.useEffect.fetchCart\"];\n            if (userId) fetchCart();\n        }\n    }[\"HomePage.useEffect\"], [\n        userId\n    ]);\n    const handleSearch = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:5000/api/search?query=\".concat(searchQuery));\n            setProducts(response.data);\n        } catch (error) {\n            console.error('Error searching products:', error);\n        }\n    };\n    // Add product to cart by calling backend API\n    const addToCart = async (product)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post('http://localhost:5000/api/cart/add-to-cart', {\n                userId,\n                productId: product._id\n            });\n            setCart(response.data.cart); // Update the cart state with the updated cart from the backend\n        } catch (error) {\n            console.error('Error adding product to cart:', error);\n        }\n    };\n    // Remove product from cart by calling backend API\n    const removeFromCart = async (product)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post('http://localhost:5000/api/cart/remove-from-cart', {\n                userId,\n                productId: product._id\n            });\n            setCart(response.data.cart); // Update the cart state with the updated cart from the backend\n        } catch (error) {\n            console.error('Error removing product from cart:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                userId: userId,\n                cart: cart\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Product List\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSearch,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search by SKU or Name\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                products: products,\n                cart: cart,\n                addToCart: addToCart,\n                removeFromCart: removeFromCart\n            }, void 0, false, {\n                fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Lab-Karini-Ai\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"teo+PWrMkrz5BdSqdX4P/WfVF8g=\");\n_c = HomePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ1ZHLFVBQVVBO2dCQUNWRSxNQUFNQTtnQkFDTm1CLFdBQVdBO2dCQUNYSyxnQkFBZ0JBOzs7Ozs7Ozs7Ozs7QUFJeEI7R0FuR00zQjtLQUFBQTtBQXFHTixpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiRDpcXExhYi1LYXJpbmktQWlcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJzsgLy8gTmV3IEhlYWRlciBDb21wb25lbnRcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJzY3NjNkYjI0ZmNjZWI2NThiNjQ0MzgwZCcpXG5cbiAgLy8gRmV0Y2ggcHJvZHVjdHMgb24gaW5pdGlhbCBsb2FkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Byb2R1Y3RzJyk7XG4gICAgICAgIHNldFByb2R1Y3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFByb2R1Y3RzKCk7XG4gIH0sIFtdKTtcblxuICAvLyBGZXRjaCB1c2VyJ3MgY2FydCBvbiBpbml0aWFsIGxvYWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9jYXJ0LyR7dXNlcklkfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlcHNvbnNlLmR0YVwiK0pTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICBzZXRDYXJ0KHJlc3BvbnNlLmRhdGEpOyAvLyBBc3N1bWluZyB0aGUgcmVzcG9uc2UgaGFzIGEgY2FydCBwcm9wZXJ0eVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY2FydDonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh1c2VySWQpIGZldGNoQ2FydCgpO1xuICB9LCBbdXNlcklkXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3NlYXJjaD9xdWVyeT0ke3NlYXJjaFF1ZXJ5fWApO1xuICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlYXJjaGluZyBwcm9kdWN0czonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIC8vIEFkZCBwcm9kdWN0IHRvIGNhcnQgYnkgY2FsbGluZyBiYWNrZW5kIEFQSVxuICBjb25zdCBhZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FydC9hZGQtdG8tY2FydCcsIHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3QuX2lkLFxuICAgICAgfSk7XG4gICAgICBzZXRDYXJ0KHJlc3BvbnNlLmRhdGEuY2FydCk7IC8vIFVwZGF0ZSB0aGUgY2FydCBzdGF0ZSB3aXRoIHRoZSB1cGRhdGVkIGNhcnQgZnJvbSB0aGUgYmFja2VuZFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgcHJvZHVjdCB0byBjYXJ0OicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBjYXJ0IGJ5IGNhbGxpbmcgYmFja2VuZCBBUElcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvY2FydC9yZW1vdmUtZnJvbS1jYXJ0Jywge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdC5faWQsXG4gICAgICB9KTtcbiAgICAgIHNldENhcnQocmVzcG9uc2UuZGF0YS5jYXJ0KTsgLy8gVXBkYXRlIHRoZSBjYXJ0IHN0YXRlIHdpdGggdGhlIHVwZGF0ZWQgY2FydCBmcm9tIHRoZSBiYWNrZW5kXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlbW92aW5nIHByb2R1Y3QgZnJvbSBjYXJ0OicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtcGFnZVwiPlxuICAgICAgey8qIFBhc3MgY2FydCwgdXNlcklkLCBhbmQgcmVtb3ZlRnJvbUNhcnQgdG8gSGVhZGVyICovfVxuICAgICAgPEhlYWRlciBcbiAgICAgICAgdXNlcklkPXt1c2VySWR9IFxuICAgICAgICBjYXJ0PXtjYXJ0fVxuICBcbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxoMT5Qcm9kdWN0IExpc3Q8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNlYXJjaH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBTS1Ugb3IgTmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgPFByb2R1Y3RMaXN0XG4gICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgY2FydD17Y2FydH1cbiAgICAgICAgYWRkVG9DYXJ0PXthZGRUb0NhcnR9XG4gICAgICAgIHJlbW92ZUZyb21DYXJ0PXtyZW1vdmVGcm9tQ2FydH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUHJvZHVjdExpc3QiLCJIZWFkZXIiLCJIb21lUGFnZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXJ0Iiwic2V0Q2FydCIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJmZXRjaFByb2R1Y3RzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZmV0Y2hDYXJ0IiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZVNlYXJjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFRvQ2FydCIsInByb2R1Y3QiLCJwb3N0IiwicHJvZHVjdElkIiwiX2lkIiwicmVtb3ZlRnJvbUNhcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});