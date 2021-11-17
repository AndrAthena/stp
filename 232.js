"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[232],{

/***/ 7232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ route)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5418);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @loadable/component@^5.15.0 (strict) (fallback: ../../../node_modules/@loadable/component/dist/loadable.esm.js)
var loadable_esm_js_ = __webpack_require__(7461);
var loadable_esm_js_default = /*#__PURE__*/__webpack_require__.n(loadable_esm_js_);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@^6.0.1 (strict) (fallback: ../../../node_modules/react-router-dom/index.js)
var index_js_ = __webpack_require__(573);
// EXTERNAL MODULE: ../../libs/common/index.ts + 9 modules
var common = __webpack_require__(3291);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(487);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(631);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(2052);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(4010);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(1469);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(9329);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../../node_modules/css-loader/dist/cjs.js!../project/src/index.css
var src = __webpack_require__(5049);
;// CONCATENATED MODULE: ../project/src/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(src/* default */.Z, options);




       /* harmony default export */ const project_src = (src/* default */.Z && src/* default.locals */.Z.locals ? src/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../project/src/route.tsx





var ROUTE_BASENAME = 'project';
var Overview = loadable_esm_js_default()(function () {
  return __webpack_require__.e(/* import() */ 799).then(__webpack_require__.bind(__webpack_require__, 7799));
}, {
  fallback: /*#__PURE__*/index_js_eager_default().createElement(common/* Loading */.gb, {
    open: true
  })
});
var ProjectDetails = loadable_esm_js_default()(function () {
  return __webpack_require__.e(/* import() */ 721).then(__webpack_require__.bind(__webpack_require__, 6721));
}, {
  fallback: /*#__PURE__*/index_js_eager_default().createElement(common/* Loading */.gb, {
    open: true
  })
});

var ProjectRoute = function ProjectRoute() {
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Routes, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Route, {
    path: "".concat(ROUTE_BASENAME),
    element: /*#__PURE__*/index_js_eager_default().createElement(Overview, null)
  }), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Route, {
    path: "".concat(ROUTE_BASENAME, "/:projectId"),
    element: /*#__PURE__*/index_js_eager_default().createElement(ProjectDetails, null)
  }));
};

/* harmony default export */ const route = (ProjectRoute);

/***/ }),

/***/ 5049:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6558);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(361);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody,\r\n#root {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);