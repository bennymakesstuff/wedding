webpackHotUpdate("home",{

/***/ "./node_modules/vue-loader/lib/index.js?!./src/views/loggedIn/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/loggedIn/Dashboard/Dashboard.vue?vue&type=template&id=8aafed2a&scoped=true&":
false,

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _views_loggedOut_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/loggedOut/Home.vue */ \"./src/views/loggedOut/Home.vue\");\n/* harmony import */ var _views_loggedIn_dashboard_Dashboard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/loggedIn/dashboard/Dashboard.vue */ \"./src/views/loggedIn/dashboard/Dashboard.vue\");\n/* harmony import */ var _views_loggedOut_Login_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/loggedOut/Login.vue */ \"./src/views/loggedOut/Login.vue\");\n/* harmony import */ var _views_loggedOut_Register_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/loggedOut/Register.vue */ \"./src/views/loggedOut/Register.vue\");\n/* harmony import */ var _views_errors_404_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/errors/404.vue */ \"./src/views/errors/404.vue\");\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst routes = [\n  {\n    path: \"/\",\n    name: \"home\",\n    component: _views_loggedOut_Home_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  {\n    path: \"/login\",\n    name: \"login\",\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: () =>\n      Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../views/loggedOut/Login.vue */ \"./src/views/loggedOut/Login.vue\"))\n  },\n  {\n    path: \"/register\",\n    name: \"register\",\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: () =>\n      Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../views/loggedOut/Register.vue */ \"./src/views/loggedOut/Register.vue\"))\n  },\n  {\n    path: \"/user\",\n    name: \"user\",\n    meta: {\n        requiresAuth: true\n            },\n    // route level code-splitting\n    // this generates a separate chunk (about.[hash].js) for this route\n    // which is lazy-loaded when the route is visited.\n    component: () =>\n      __webpack_require__.e(/*! import() | dashboard */ \"dashboard\").then(__webpack_require__.bind(null, /*! ../views/loggedIn/User.vue */ \"./src/views/loggedIn/User.vue\")),\n    children: [{\n      path: 'dashboard',\n      component: () =>\n        __webpack_require__.e(/*! import() | dashboard */ \"dashboard\").then(__webpack_require__.bind(null, /*! ../views/loggedIn/dashboard/Dashboard.vue */ \"./src/views/loggedIn/dashboard/Dashboard.vue\")),\n    }]\n  },\n  { path: \"*\", component: _views_errors_404_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }\n];\n\nconst router = new vue_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  mode: \"history\",\n  base: process.env.BASE_URL,\n  routes\n});\n\n//Add extra parts to make it if the user is logged in to not go to login or register\nrouter.beforeEach((to, from, next) => {\n    if(to.matched.some(record => record.meta.requiresAuth)) {\n        if (localStorage.getItem('token') == null) {\n            next({\n                path: '/login',\n                params: { nextUrl: to.fullPath }\n            })\n        } else {\n            next()\n        }\n    } else if(to.matched.some(record => record.meta.guest)) {\n        if(localStorage.getItem('token') == null){\n            next()\n        }\n        else{\n            next({ name: 'dashboard'})\n        }\n    }else {\n        next()\n    }\n})\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/views/loggedIn/Dashboard/Dashboard.vue":
false,

/***/ "./src/views/loggedIn/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
false,

/***/ "./src/views/loggedIn/Dashboard/Dashboard.vue?vue&type=template&id=8aafed2a&scoped=true&":
false

})