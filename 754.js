"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[754],{

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ route)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5847);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: consume shared module (default) @loadable/component@^5.15.0 (strict) (fallback: ../../../../node_modules/@loadable/component/dist/loadable.esm.js)
var loadable_esm_js_ = __webpack_require__(7041);
var loadable_esm_js_default = /*#__PURE__*/__webpack_require__.n(loadable_esm_js_);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@^6.0.1 (strict) (fallback: ../../../../node_modules/react-router-dom/index.js)
var index_js_ = __webpack_require__(7477);
// EXTERNAL MODULE: ../../libs/common/index.ts + 9 modules
var common = __webpack_require__(6884);
// EXTERNAL MODULE: ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3278);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(8391);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(547);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5604);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(2593);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(7784);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../../../node_modules/css-loader/dist/cjs.js!../project/src/index.css
var src = __webpack_require__(1572);
;// CONCATENATED MODULE: ../project/src/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(src/* default */.Z, options);




       /* harmony default export */ const project_src = (src/* default */.Z && src/* default.locals */.Z.locals ? src/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(914);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4390);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1093);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2172);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.0.6 (strict) (fallback: ../../../../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(9039);
// EXTERNAL MODULE: consume shared module (default) @mui/icons-material@^5.0.5 (strict) (fallback: ../../../../node_modules/@mui/icons-material/esm/index.js)
var esm_index_js_ = __webpack_require__(6454);
;// CONCATENATED MODULE: ../project/src/components/CustomStepper/style.ts
var sx = {
  stepper: {
    width: 1,
    height: 1,
    display: 'flex'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 1,
    p: 2,
    backgroundColor: 'primary.dark'
  },
  stepContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    p: 2
  },
  horizontal: {},
  vertical: {
    flexDirection: 'column'
  }
};
/* harmony default export */ const style = (sx);
;// CONCATENATED MODULE: ../project/src/components/CustomStepper/CustomStepper.tsx



var _excluded = ["activeStep", "setActiveStep", "sx", "sxContainer", "orientation", "steps", "backLabel", "backHandler", "buttonLabel", "backButtonLabel", "buttonFinishLabel", "onPrev", "onContinue", "onFinish"],
    _excluded2 = ["label", "content"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var CustomStepper = function CustomStepper(_ref) {
  var activeStep = _ref.activeStep,
      setActiveStep = _ref.setActiveStep,
      sx = _ref.sx,
      sxContainer = _ref.sxContainer,
      orientation = _ref.orientation,
      steps = _ref.steps,
      backLabel = _ref.backLabel,
      backHandler = _ref.backHandler,
      buttonLabel = _ref.buttonLabel,
      backButtonLabel = _ref.backButtonLabel,
      buttonFinishLabel = _ref.buttonFinishLabel,
      onPrev = _ref.onPrev,
      onContinue = _ref.onContinue,
      onFinish = _ref.onFinish,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var verticalSx = orientation === 'horizontal' ? style.vertical : style.horizontal;
  var stepProps = {
    activeStep: activeStep,
    orientation: orientation,
    sx: {
      flex: 1,
      justifyContent: 'center'
    }
  };
  var lastIndex = steps.length - 1;

  var handleContinue = function handleContinue(e) {
    onContinue(e);
    setActiveStep(function (prev) {
      return prev + 1;
    });
  };

  var handlePrev = function handlePrev(e) {
    onPrev(e);
    setActiveStep(function (prev) {
      return prev - 1;
    });
  };

  return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: _objectSpread(_objectSpread(_objectSpread({}, style.stepper), verticalSx), sxContainer)
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: _objectSpread(_objectSpread({}, style.stepContainer), sx)
  }, backLabel && /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Button, {
    variant: "text",
    sx: {
      px: 0,
      justifyContent: 'flex-start',
      color: '#fff'
    },
    onClick: backHandler,
    startIcon: /*#__PURE__*/index_js_eager_default().createElement(esm_index_js_.ArrowBack, null)
  }, backLabel), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Stepper, (0,esm_extends/* default */.Z)({
    activeStep: activeStep
  }, stepProps, rest), steps.map(function (_ref2) {
    var label = _ref2.label,
        _ = _ref2.content,
        rest = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);

    return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Step, {
      key: label.replace(' ', '-').toLowerCase()
    }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.StepLabel, (0,esm_extends/* default */.Z)({
      sx: style.stepLabel
    }, rest), label));
  }))), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: style.stepContent
  }, steps.map(function (_ref3, index) {
    var content = _ref3.content;
    return activeStep === index && content;
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      textAlign: 'center'
    }
  }, activeStep !== 0 && /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Button, {
    variant: "outlined",
    color: "secondary",
    sx: {
      mr: 1.5
    },
    onClick: handlePrev
  }, backButtonLabel !== null && backButtonLabel !== void 0 ? backButtonLabel : 'Back'), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Button, {
    variant: "contained",
    color: "secondary",
    onClick: lastIndex === activeStep ? onFinish : handleContinue
  }, lastIndex === activeStep ? buttonFinishLabel !== null && buttonFinishLabel !== void 0 ? buttonFinishLabel : 'Finish' : buttonLabel !== null && buttonLabel !== void 0 ? buttonLabel : 'Continue'))));
};

/* harmony default export */ const CustomStepper_CustomStepper = (CustomStepper);
;// CONCATENATED MODULE: ../project/src/components/CustomStepper/index.ts


;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step1/style.ts
var style_sx = {
  step1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      maxWidth: 900,
      minWidth: 900
    }
  },
  radio: {
    flex: '1 0 0',
    ml: 0,
    mr: 0,
    border: '1px solid rgb(0 0 0 / .23)',
    borderRadius: 1.5,
    '&:first-of-type': {
      mr: 1.5
    }
  }
};
/* harmony default export */ const Step1_style = (style_sx);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step1/Step1.tsx





var Step1 = function Step1() {
  return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: Step1_style.step1
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "h2",
    align: "center",
    gutterBottom: true
  }, "Welcome, Set up your project"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "h6",
    align: "center",
    gutterBottom: true
  }, "First, let's started with the basics"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      mt: 10
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
    label: "Project name",
    gutterBottom: true,
    fullWidth: true
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    gutterBottom: true
  }, "Project type"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.RadioGroup, {
    name: "project_type",
    row: true
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* RadioInput */.NA, {
    type: "radio",
    label: "B2B",
    value: "B2B",
    inputProps: {
      color: 'secondary'
    },
    sx: Step1_style.radio,
    gutterBottom: true
  }), /*#__PURE__*/index_js_eager_default().createElement(common/* RadioInput */.NA, {
    type: "radio",
    label: "B2C",
    value: "B2C",
    inputProps: {
      color: 'secondary'
    },
    sx: Step1_style.radio,
    gutterBottom: true
  })), /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
    label: "Storage",
    gutterBottom: true,
    fullWidth: true
  }))));
};

/* harmony default export */ const Step1_Step1 = (Step1);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step1/index.ts

;// CONCATENATED MODULE: ../project/src/pages/CreateProject/CreateProject.tsx





var CreateProject = function CreateProject() {
  var _useState = (0,index_js_eager_.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var steps = [{
    label: 'Project setting',
    content: /*#__PURE__*/index_js_eager_default().createElement(Step1_Step1, null)
  }, {
    label: 'Team member',
    content: /*#__PURE__*/index_js_eager_default().createElement("div", null, "Project setting")
  }];

  var handleContinue = function handleContinue() {};

  return /*#__PURE__*/index_js_eager_default().createElement(CustomStepper_CustomStepper, {
    activeStep: activeStep,
    setActiveStep: setActiveStep,
    steps: steps,
    orientation: "vertical",
    sx: {
      minWidth: '250px'
    },
    backLabel: "Project Overview",
    onContinue: handleContinue
  });
};

/* harmony default export */ const CreateProject_CreateProject = (CreateProject);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/index.ts

;// CONCATENATED MODULE: ../project/src/route.tsx






var ROUTE_BASENAME = 'project';
var Overview = loadable_esm_js_default()(function () {
  return __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(__webpack_require__, 6032));
}, {
  fallback: /*#__PURE__*/index_js_eager_default().createElement(common/* Loading */.gb, {
    open: true
  })
});
var ProjectDetails = loadable_esm_js_default()(function () {
  return Promise.all(/* import() */[__webpack_require__.e(866), __webpack_require__.e(175), __webpack_require__.e(911)]).then(__webpack_require__.bind(__webpack_require__, 1911));
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
  }), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Route, {
    path: "".concat(ROUTE_BASENAME, "/create"),
    element: /*#__PURE__*/index_js_eager_default().createElement(CreateProject_CreateProject, null)
  }));
};

/* harmony default export */ const route = (ProjectRoute);

/***/ }),

/***/ 1572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8046);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7758);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody,\r\n#root {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);