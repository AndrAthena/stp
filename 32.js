"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[32],{

/***/ 6340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ ProjectTopHeader_ProjectTopHeader)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5847);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: ../../libs/icon/index.ts + 10 modules
var icon = __webpack_require__(9560);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.0.6 (strict) (fallback: ../../../../node_modules/@mui/material/index.js)
var index_js_ = __webpack_require__(9039);
;// CONCATENATED MODULE: ../project/src/components/ProjectTopHeader/ProjectTopHeader.tsx




var ProjectTopHeader = function ProjectTopHeader(_ref) {
  var title = _ref.title,
      desc = _ref.desc,
      action = _ref.action,
      _ref$overview = _ref.overview,
      overview = _ref$overview === void 0 ? false : _ref$overview;
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'start'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mb: 1.5
    }
  }, overview && /*#__PURE__*/index_js_eager_default().createElement(icon/* ProjectOutlined */.Sq, {
    color: "primary",
    sx: {
      mr: 1,
      fontSize: '2.5rem'
    }
  }), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    variant: "h6",
    component: "h2"
  }, title)), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, desc)), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Button, {
    variant: "outlined",
    color: "secondary",
    sx: {
      ml: 'auto'
    },
    onClick: action
  }, "Create project"));
};

/* harmony default export */ const ProjectTopHeader_ProjectTopHeader = (ProjectTopHeader);
;// CONCATENATED MODULE: ../project/src/components/ProjectTopHeader/index.ts


/***/ }),

/***/ 6032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Overview)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5847);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @mui/icons-material@^5.0.5 (strict) (fallback: ../../../../node_modules/@mui/icons-material/esm/index.js)
var index_js_ = __webpack_require__(6454);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.0.6 (strict) (fallback: ../../../../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(9039);
// EXTERNAL MODULE: ../../libs/common/index.ts + 9 modules
var common = __webpack_require__(6884);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4390);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1093);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2172);
// EXTERNAL MODULE: ../../libs/icon/index.ts + 10 modules
var icon = __webpack_require__(9560);
;// CONCATENATED MODULE: ../project/src/components/ProjectCard/style.ts
var sx = {
  card: {
    display: 'flex',
    mb: 2,
    p: 2,
    cursor: 'pointer'
  }
};
/* harmony default export */ const style = (sx);
;// CONCATENATED MODULE: ../project/src/components/ProjectCard/ProjectCard.tsx



var _excluded = ["sx"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ProjectCard = function ProjectCard(_ref) {
  var sx = _ref.sx,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Card, (0,esm_extends/* default */.Z)({
    variant: "outlined",
    sx: _objectSpread(_objectSpread({}, sx), style.card)
  }, rest), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.CardHeader, {
    sx: {
      p: 0
    },
    avatar: /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Avatar, {
      sx: {
        width: '86px',
        height: '86px',
        bgcolor: '#D8D8D8'
      }
    }, /*#__PURE__*/index_js_eager_default().createElement(icon/* ProjectOutlined */.Sq, {
      sx: {
        fontSize: '3rem'
      },
      color: "primary"
    }))
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.CardContent, {
    sx: {
      p: '0 !important'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "h6",
    gutterBottom: true
  }, "Project 1"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    gutterBottom: true,
    noWrap: true
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    component: "span",
    sx: {
      display: 'inline-flex',
      width: 90
    }
  }, "Description\xA0:\xA0"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    component: "span",
    sx: {
      color: 'text.secondary'
    }
  }, "Lorem ipsum dolor sit amet.")), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    gutterBottom: true,
    noWrap: true
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    component: "span",
    sx: {
      display: 'inline-flex',
      width: 90
    }
  }, "Team\xA0:\xA0"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    component: "span",
    sx: {
      color: 'text.secondary'
    }
  }, "Lorem ipsum dolor sit amet.")), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    gutterBottom: true
  }, "Progression\xA0:")));
};

/* harmony default export */ const ProjectCard_ProjectCard = (ProjectCard);
;// CONCATENATED MODULE: ../project/src/components/ProjectCard/index.ts

;// CONCATENATED MODULE: ../project/src/pages/Overview/style.ts
var style_sx = {
  overview: {
    display: 'flex',
    flexDirection: 'column',
    height: 1,
    maxHeight: 1,
    p: 2
  },
  projectList: {
    width: 1,
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    mt: 3,
    overflowY: 'hidden',
    '& > div': {
      flex: '0 0 calc(33.33% - 0.7rem)',
      maxWidth: 'calc(33.33% - 0.7rem)'
    },
    '& > div:not(:nth-of-type(3n))': {
      marginRight: 2
    }
  }
};
/* harmony default export */ const Overview_style = (style_sx);
// EXTERNAL MODULE: ../project/src/components/ProjectTopHeader/index.ts + 1 modules
var ProjectTopHeader = __webpack_require__(6340);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@^6.0.1 (strict) (fallback: ../../../../node_modules/react-router-dom/index.js)
var react_router_dom_index_js_ = __webpack_require__(7477);
;// CONCATENATED MODULE: ../project/src/pages/Overview/Overview.tsx









var Overview = function Overview() {
  var navigate = (0,react_router_dom_index_js_.useNavigate)();

  var handleClickProject = function handleClickProject(to) {
    return function () {
      return navigate(to);
    };
  };

  return /*#__PURE__*/index_js_eager_default().createElement((index_js_eager_default()).Fragment, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: Overview_style.overview
  }, /*#__PURE__*/index_js_eager_default().createElement(ProjectTopHeader/* default */.Z, {
    title: "Project overview",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis\r doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam\r quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam aut\r eveniet fuga explicabo.",
    action: function action(_) {}
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mt: 4
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
    type: "search",
    placeholder: "Searh",
    fullWidth: true
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      ml: 1
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.IconButton, {
    size: "small"
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.GridViewSharp, null)), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.IconButton, {
    size: "small"
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.SortOutlined, null)), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.IconButton, {
    size: "small"
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.FilterListOutlined, null)))), /*#__PURE__*/index_js_eager_default().createElement(common/* CustomScrollbar */.$T, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: Overview_style.projectList
  }, new Array(5).fill(null).map(function (_, index) {
    return /*#__PURE__*/index_js_eager_default().createElement(ProjectCard_ProjectCard, {
      onClick: handleClickProject('/project/' + index)
    });
  })))));
};

/* harmony default export */ const Overview_Overview = (Overview);
;// CONCATENATED MODULE: ../project/src/pages/Overview/index.ts


/* harmony default export */ const pages_Overview = (Overview_Overview);

/***/ })

}]);