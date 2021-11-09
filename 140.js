"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[140],{

/***/ 8140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Overview)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5418);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @mui/icons-material@^5.0.5 (strict) (fallback: ../../../node_modules/@mui/icons-material/esm/index.js)
var index_js_ = __webpack_require__(4321);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.0.6 (strict) (fallback: ../../../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(7590);
// EXTERNAL MODULE: ../../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(11);
// EXTERNAL MODULE: ../../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(3613);
// EXTERNAL MODULE: consume shared module (default) react-custom-scrollbars@^4.2.1 (strict) (fallback: ../../../node_modules/react-custom-scrollbars/lib/index.js)
var lib_index_js_ = __webpack_require__(800);
;// CONCATENATED MODULE: ../../libs/common/CustomScrollbar/CustomScrollbar.tsx


var _excluded = ["children"];



var CustomScrollbar = function CustomScrollbar(_ref) {
  var children = _ref.children,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  return /*#__PURE__*/index_js_eager_default().createElement(lib_index_js_.Scrollbars, (0,esm_extends/* default */.Z)({
    autoHide: true,
    thumbMinSize: 30
  }, rest), children);
};

/* harmony default export */ const CustomScrollbar_CustomScrollbar = (CustomScrollbar);
;// CONCATENATED MODULE: ../../libs/common/CustomScrollbar/index.ts


;// CONCATENATED MODULE: ../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ../../libs/common/Input/Input.tsx



var Input_excluded = (/* unused pure expression or super */ null && (["type", "inputProps"])),
    _excluded2 = ["type", "placeholder", "variant", "InputProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var ControlType = function ControlType(type) {
  switch (type) {
    case 'radio':
      return Radio;

    case 'switch':
      return Switch;

    case 'checkbox':
      return Checkbox;

    default:
      return Checkbox;
  }
};

var RadioInput = function RadioInput(_ref) {
  var type = _ref.type,
      inputProps = _ref.inputProps,
      rest = _objectWithoutProperties(_ref, Input_excluded);

  var Control = ControlType(type);
  return /*#__PURE__*/React.createElement(FormControlLabel, _extends({}, rest, {
    control: /*#__PURE__*/React.createElement(Control, inputProps)
  }));
};

var TextInput = function TextInput(_ref2) {
  var type = _ref2.type,
      placeholder = _ref2.placeholder,
      variant = _ref2.variant,
      InputProps = _ref2.InputProps,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);

  var searchAdornment = type === 'search' ? {
    startAdornment: /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.InputAdornment, {
      position: "start"
    }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.SearchOutlined, null))
  } : undefined;
  return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.TextField, (0,esm_extends/* default */.Z)({
    variant: variant || 'outlined',
    InputProps: _objectSpread(_objectSpread({}, searchAdornment), InputProps),
    type: type,
    placeholder: type === 'search' && !placeholder ? 'Search' : placeholder
  }, rest));
};


;// CONCATENATED MODULE: ../../libs/common/Input/index.ts

// EXTERNAL MODULE: ../../libs/icon/src/index.ts + 4 modules
var src = __webpack_require__(2622);
;// CONCATENATED MODULE: ../project/src/components/ProjectCard/ProjectCard.tsx




var ProjectCard = function ProjectCard() {
  return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Card, {
    variant: "outlined",
    sx: {
      display: 'flex',
      mb: 2,
      p: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.CardHeader, {
    sx: {
      p: 0
    },
    avatar: /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Avatar, {
      sx: {
        width: '86px',
        height: '86px',
        bgcolor: '#D8D8D8'
      }
    }, /*#__PURE__*/index_js_eager_default().createElement(src/* ProjectOutlined */.S, {
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

;// CONCATENATED MODULE: ../project/src/pages/Overview/Overview.tsx








var Overview = function Overview() {
  return /*#__PURE__*/index_js_eager_default().createElement((index_js_eager_default()).Fragment, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      height: 1,
      maxHeight: 1
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'start'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mb: 1.5
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(src/* ProjectOutlined */.S, {
    color: "primary",
    sx: {
      mr: 1,
      fontSize: '2.5rem'
    }
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "h6",
    component: "h2"
  }, "Project overview")), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam aut eveniet fuga explicabo.")), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Button, {
    variant: "outlined",
    color: "secondary",
    sx: {
      ml: 'auto'
    }
  }, "Create project")), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mt: 4
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(TextInput, {
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
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.FilterListOutlined, null)))), /*#__PURE__*/index_js_eager_default().createElement(CustomScrollbar_CustomScrollbar, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      width: 1,
      flex: 1,
      display: 'flex',
      flexWrap: 'wrap',
      mt: 3,
      overflowY: 'hidden',
      '& > div': {
        flex: '0 0 calc(33.33% - .7rem)'
      },
      '& > div:not(:nth-of-type(3n))': {
        marginRight: 2
      }
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(ProjectCard_ProjectCard, null), /*#__PURE__*/index_js_eager_default().createElement(ProjectCard_ProjectCard, null), /*#__PURE__*/index_js_eager_default().createElement(ProjectCard_ProjectCard, null), /*#__PURE__*/index_js_eager_default().createElement(ProjectCard_ProjectCard, null), /*#__PURE__*/index_js_eager_default().createElement(ProjectCard_ProjectCard, null), /*#__PURE__*/index_js_eager_default().createElement(ProjectCard_ProjectCard, null)))));
};

/* harmony default export */ const Overview_Overview = (Overview);
;// CONCATENATED MODULE: ../project/src/pages/Overview/index.ts


/* harmony default export */ const pages_Overview = (Overview_Overview);

/***/ })

}]);