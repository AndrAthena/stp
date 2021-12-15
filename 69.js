"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[69],{

/***/ 69:
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
// EXTERNAL MODULE: ../../libs/common/index.ts + 12 modules
var common = __webpack_require__(1788);
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
// EXTERNAL MODULE: consume shared module (default) yup@~0.32.11 (strict) (fallback: ../../../../node_modules/yup/es/index.js)
var es_index_js_ = __webpack_require__(8651);
// EXTERNAL MODULE: consume shared module (default) formik@^2.2.9 (strict) (fallback: ../../../../node_modules/formik/dist/formik.esm.js)
var formik_esm_js_ = __webpack_require__(4712);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.0.6 (strict) (fallback: ../../../../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(9039);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step1/style.ts
var sx = {
  step1: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      maxWidth: 600,
      minWidth: 600
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
  },
  radioChecked: {
    border: '1px solid secondary.main'
  }
};
/* harmony default export */ const style = (sx);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step1/Step1.tsx





var Step1 = function Step1(_ref) {
  var onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;
  return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: style.step1
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
  }, /*#__PURE__*/index_js_eager_default().createElement("form", {
    onSubmit: onSubmit,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        onSubmit(e);
      }
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
    label: "Project name",
    name: "project_name",
    gutterBottom: true,
    fullWidth: true
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    gutterBottom: true
  }, "Project type"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.RadioGroup, {
    name: "project_type",
    onChange: onChange,
    row: true
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* RadioInput */.NA, {
    type: "radio",
    label: "B2B",
    value: "B2B",
    inputProps: {
      color: 'secondary'
    },
    sx: style.radio,
    gutterBottom: true
  }), /*#__PURE__*/index_js_eager_default().createElement(common/* RadioInput */.NA, {
    type: "radio",
    label: "B2C",
    value: "B2C",
    inputProps: {
      color: 'secondary'
    },
    sx: style.radio,
    gutterBottom: true
  })), /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
    label: "Storage",
    name: "project_storage",
    gutterBottom: true,
    fullWidth: true
  })))));
};

/* harmony default export */ const Step1_Step1 = (Step1);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step1/index.ts


;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step2/style.ts
var style_sx = {
  step: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > div': {
      maxWidth: 600,
      minWidth: 600
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
  },
  radioChecked: {
    border: '1px solid secondary.main'
  }
};
/* harmony default export */ const Step2_style = (style_sx);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step2/Step2.tsx





var Step2 = function Step2(_ref) {
  var onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;
  return /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: Step2_style.step
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "h2",
    align: "center",
    gutterBottom: true
  }, "Welcome, Set up your project"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
    variant: "h6",
    align: "center",
    gutterBottom: true
  }, "Second, invite all your team member and validators"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      mt: 10
    }
  }, /*#__PURE__*/index_js_eager_default().createElement("form", {
    onSubmit: onSubmit,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        onSubmit(e);
      }
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
    label: "Add member",
    name: "project_name",
    type: "search",
    searchIconPlacement: "end",
    gutterBottom: true,
    fullWidth: true
  }), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Button, {
    variant: "contained",
    color: "secondary",
    fullWidth: true,
    disableElevation: true
  }, "Send invitation"), /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Box, {
    sx: {
      mt: 3
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Card, {
    variant: "outlined"
  }, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.CardActionArea, null, /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.CardHeader, {
    avatar: /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Avatar, {
      variant: "circular"
    }, "M"),
    title: /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, null, "Marosoa"),
    subheader: /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
      variant: "caption",
      sx: {
        color: 'text.secondary'
      }
    }, "marosoa@gmail.com"),
    action: /*#__PURE__*/index_js_eager_default().createElement(material_index_js_.Typography, {
      sx: {
        mr: 1,
        color: 'text.secondary'
      }
    }, "IT Member")
  }))))))));
};

/* harmony default export */ const Step2_Step2 = (Step2);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/components/Step2/index.ts


;// CONCATENATED MODULE: ../project/src/pages/CreateProject/useSteps.tsx




var useSteps = function useSteps(_ref) {
  var onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;
  var steps = [{
    label: 'Project setting',
    content: /*#__PURE__*/index_js_eager_default().createElement(Step1_Step1, {
      onSubmit: onSubmit,
      onChange: onChange
    })
  }, {
    label: 'Team member',
    content: /*#__PURE__*/index_js_eager_default().createElement(Step2_Step2, {
      onSubmit: onSubmit,
      onChange: onChange
    })
  }];
  return steps;
};

/* harmony default export */ const CreateProject_useSteps = (useSteps);
;// CONCATENATED MODULE: ../project/src/pages/CreateProject/CreateProject.tsx







var CreateProject = function CreateProject() {
  var _useState = (0,index_js_eager_.useState)(1),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var handlePrev = function handlePrev() {};

  return /*#__PURE__*/index_js_eager_default().createElement(formik_esm_js_.Formik, {
    initialValues: {
      project_name: '',
      project_storage: '',
      project_type: 'B2B'
    },
    validationSchema: es_index_js_.object({
      project_name: es_index_js_.string().min(2).required(),
      project_storage: es_index_js_.string().min(2).required(),
      project_type: es_index_js_.string().required().required()
    }),
    onSubmit: function onSubmit(values) {
      console.log(values);
    }
  }, function (_ref) {
    var handleSubmit = _ref.handleSubmit,
        handleChange = _ref.handleChange,
        isSubmitting = _ref.isSubmitting,
        setSubmitting = _ref.setSubmitting;

    var handleNext = function handleNext() {
      handleSubmit();
      setSubmitting(true);
    };

    var steps = CreateProject_useSteps({
      onChange: handleChange,
      onSubmit: handleNext
    });
    return /*#__PURE__*/index_js_eager_default().createElement(common/* CustomStepper */.C_, {
      activeStep: activeStep,
      setActiveStep: setActiveStep,
      steps: steps,
      orientation: "vertical",
      sx: {
        minWidth: '250px'
      },
      backLabel: "Project Overview",
      onContinue: handleNext,
      onPrev: handlePrev,
      isValid: isSubmitting
    });
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