"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[423],{

/***/ 5002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8972);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7590);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




var ProjectTopHeader = function ProjectTopHeader(_ref) {
  var title = _ref.title,
      desc = _ref.desc,
      action = _ref.action,
      _ref$overview = _ref.overview,
      overview = _ref$overview === void 0 ? false : _ref$overview;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    sx: {
      display: 'flex',
      alignItems: 'start'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mb: 1.5
    }
  }, overview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_icons__WEBPACK_IMPORTED_MODULE_1__/* .ProjectOutlined */ .Sq, {
    color: "primary",
    sx: {
      mr: 1,
      fontSize: '2.5rem'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "h6",
    component: "h2"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, null, desc)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "outlined",
    color: "secondary",
    sx: {
      ml: 'auto'
    },
    onClick: action
  }, "Create project"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectTopHeader);

/***/ }),

/***/ 2423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ ProjectDetails_ProjectDetails)
});

// EXTERNAL MODULE: ../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(7169);
// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5418);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: ../project/src/components/ProjectTopHeader/ProjectTopHeader.tsx
var ProjectTopHeader = __webpack_require__(5002);
// EXTERNAL MODULE: ../../libs/common/index.ts + 10 modules
var common = __webpack_require__(1212);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.0.6 (strict) (fallback: ../../../node_modules/@mui/material/index.js)
var index_js_ = __webpack_require__(7590);
// EXTERNAL MODULE: ../../libs/icon/index.ts + 8 modules
var icon = __webpack_require__(8972);
// EXTERNAL MODULE: ../../libs/icon/src/CheckList/index.ts + 1 modules
var CheckList = __webpack_require__(4201);
;// CONCATENATED MODULE: ../project/src/pages/ProjectDetails/style.ts
var sx = {
  innerCard: {
    mb: 2,
    bgcolor: '#EFF7FF',
    '& .MuiCardHeader-root': {
      color: '#FFF',
      bgcolor: 'success.dark'
    }
  },
  coloredBox: {
    mx: 1,
    mb: 2,
    p: 1.5,
    minHeight: '120px',
    borderRadius: 2
  },
  projectContainer: {
    display: 'flex',
    '& > div': {
      flex: '1 0 0'
    }
  }
};
/* harmony default export */ const style = (sx);
;// CONCATENATED MODULE: ../project/src/pages/ProjectDetails/ProjectDetails.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var ProjectDetails = function ProjectDetails(params) {
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      height: 1
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(ProjectTopHeader/* default */.Z, {
    overview: true,
    title: "Project 1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis\r doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam\r quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam aut\r eveniet fuga explicabo.",
    action: function action(_) {}
  }), /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
    type: "search",
    sx: {
      mt: 5,
      mb: 4
    },
    fullWidth: true
  }), /*#__PURE__*/index_js_eager_default().createElement(common/* CustomScrollbar */.$T, {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: style.projectContainer
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Business issues",
    badges: [icon/* Info */.kI, icon/* InfoEdited */.b0, CheckList/* default */.Z],
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "Business issues to be addressed"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: _objectSpread(_objectSpread({}, style.coloredBox), {}, {
      bgcolor: '#EFF7FF'
    })
  }, "Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to"))), /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Specific solution",
    badges: [icon/* Info */.kI, icon/* InfoEdited */.b0, CheckList/* default */.Z]
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Objective 1",
    subtitle: /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
      variant: "body2"
    }, "Warning!!! the deadline is in 02 days"),
    sx: style.innerCard
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "Description"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: _objectSpread(_objectSpread({}, style.coloredBox), {}, {
      bgcolor: '#FFF'
    })
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim alias quas sed velit fugit modi error non excepturi atque dolor, aliquam molestiae vel ipsa culpa molestias perferendis amet aperiam."), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "Budget"), "\xA0", /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'success.light',
      fontWeight: 600
    },
    gutterBottom: true
  }, "$ 1000,00"))))))));
};

/* harmony default export */ const ProjectDetails_ProjectDetails = (ProjectDetails);
;// CONCATENATED MODULE: ../project/src/pages/ProjectDetails/index.ts


/***/ })

}]);