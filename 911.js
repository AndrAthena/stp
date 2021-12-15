"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[911],{

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);

/***/ }),

/***/ 3998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(884);


function useTheme() {
  const theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);

  if (false) {}

  return theme;
}

/***/ }),

/***/ 1374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ styled)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3175);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3866);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/** @license MUI v5.1.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function styled(tag, options) {
  const stylesFactory = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(tag, options);

  if (false) {}

  return stylesFactory;
}




/***/ }),

/***/ 4268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4390);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2972);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1131);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6849);
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1374);
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(200);
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9025);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8289);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3704);


const _excluded = ["className", "component"];







function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName
  } = options;
  const BoxRoot = (0,_mui_styled_engine__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(_styleFunctionSx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
  const Box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Box(inProps, ref) {
    const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(defaultTheme);

    const _extendSxProp = (0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(inProps),
          {
      className,
      component = 'div'
    } = _extendSxProp,
          other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(_extendSxProp, _excluded);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BoxRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)({
      as: component,
      ref: ref,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: theme
    }, other));
  });
   false ? 0 : void 0;
  return Box;
}

/***/ }),

/***/ 2449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ esm_getThemeValue),
  "G": () => (/* binding */ propToStyleFunction)
});

// EXTERNAL MODULE: ../../../../node_modules/@mui/system/esm/style.js
var style = __webpack_require__(2672);
// EXTERNAL MODULE: ../../../../node_modules/@mui/system/esm/merge.js
var merge = __webpack_require__(1654);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/compose.js


function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return (0,merge/* default */.Z)(acc, handlers[prop](props));
      }

      return acc;
    }, {});
  };

  fn.propTypes =  false ? 0 : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

/* harmony default export */ const esm_compose = (compose);
// EXTERNAL MODULE: ../../../../node_modules/@mui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(8697);
// EXTERNAL MODULE: ../../../../node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(9719);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/borders.js






function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = (0,style/* default */.Z)({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = (0,style/* default */.Z)({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = (0,style/* default */.Z)({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = (0,style/* default */.Z)({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = (0,style/* default */.Z)({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = (0,style/* default */.Z)({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderTopColor = (0,style/* default */.Z)({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
const borderRightColor = (0,style/* default */.Z)({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
const borderBottomColor = (0,style/* default */.Z)({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
const borderLeftColor = (0,style/* default */.Z)({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'shape.borderRadius', 4, 'borderRadius');

    const styleFromPropValue = propValue => ({
      borderRadius: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};
borderRadius.propTypes =  false ? 0 : {};
borderRadius.filterProps = ['borderRadius'];
const borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
/* harmony default export */ const esm_borders = (borders);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/display.js


const displayPrint = (0,style/* default */.Z)({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = (0,style/* default */.Z)({
  prop: 'display'
});
const overflow = (0,style/* default */.Z)({
  prop: 'overflow'
});
const textOverflow = (0,style/* default */.Z)({
  prop: 'textOverflow'
});
const visibility = (0,style/* default */.Z)({
  prop: 'visibility'
});
const whiteSpace = (0,style/* default */.Z)({
  prop: 'whiteSpace'
});
/* harmony default export */ const display = (esm_compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/flexbox.js


const flexBasis = (0,style/* default */.Z)({
  prop: 'flexBasis'
});
const flexDirection = (0,style/* default */.Z)({
  prop: 'flexDirection'
});
const flexWrap = (0,style/* default */.Z)({
  prop: 'flexWrap'
});
const justifyContent = (0,style/* default */.Z)({
  prop: 'justifyContent'
});
const alignItems = (0,style/* default */.Z)({
  prop: 'alignItems'
});
const alignContent = (0,style/* default */.Z)({
  prop: 'alignContent'
});
const order = (0,style/* default */.Z)({
  prop: 'order'
});
const flex = (0,style/* default */.Z)({
  prop: 'flex'
});
const flexGrow = (0,style/* default */.Z)({
  prop: 'flexGrow'
});
const flexShrink = (0,style/* default */.Z)({
  prop: 'flexShrink'
});
const alignSelf = (0,style/* default */.Z)({
  prop: 'alignSelf'
});
const justifyItems = (0,style/* default */.Z)({
  prop: 'justifyItems'
});
const justifySelf = (0,style/* default */.Z)({
  prop: 'justifySelf'
});
const flexbox = esm_compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ const esm_flexbox = (flexbox);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/grid.js





const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'spacing', 8, 'gap');

    const styleFromPropValue = propValue => ({
      gap: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.gap, styleFromPropValue);
  }

  return null;
};
gap.propTypes =  false ? 0 : {};
gap.filterProps = ['gap'];
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'spacing', 8, 'columnGap');

    const styleFromPropValue = propValue => ({
      columnGap: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.columnGap, styleFromPropValue);
  }

  return null;
};
columnGap.propTypes =  false ? 0 : {};
columnGap.filterProps = ['columnGap'];
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'spacing', 8, 'rowGap');

    const styleFromPropValue = propValue => ({
      rowGap: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.rowGap, styleFromPropValue);
  }

  return null;
};
rowGap.propTypes =  false ? 0 : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = (0,style/* default */.Z)({
  prop: 'gridColumn'
});
const gridRow = (0,style/* default */.Z)({
  prop: 'gridRow'
});
const gridAutoFlow = (0,style/* default */.Z)({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = (0,style/* default */.Z)({
  prop: 'gridAutoColumns'
});
const gridAutoRows = (0,style/* default */.Z)({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = (0,style/* default */.Z)({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = (0,style/* default */.Z)({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = (0,style/* default */.Z)({
  prop: 'gridTemplateAreas'
});
const gridArea = (0,style/* default */.Z)({
  prop: 'gridArea'
});
const grid = esm_compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ const esm_grid = (grid);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/positions.js


const position = (0,style/* default */.Z)({
  prop: 'position'
});
const zIndex = (0,style/* default */.Z)({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const positions_top = (0,style/* default */.Z)({
  prop: 'top'
});
const right = (0,style/* default */.Z)({
  prop: 'right'
});
const bottom = (0,style/* default */.Z)({
  prop: 'bottom'
});
const left = (0,style/* default */.Z)({
  prop: 'left'
});
/* harmony default export */ const positions = (esm_compose(position, zIndex, positions_top, right, bottom, left));
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/palette.js


const color = (0,style/* default */.Z)({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = (0,style/* default */.Z)({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const backgroundColor = (0,style/* default */.Z)({
  prop: 'backgroundColor',
  themeKey: 'palette'
});
const palette = esm_compose(color, bgcolor, backgroundColor);
/* harmony default export */ const esm_palette = (palette);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/shadows.js

const boxShadow = (0,style/* default */.Z)({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ const shadows = (boxShadow);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/sizing.js




function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}

const width = (0,style/* default */.Z)({
  prop: 'width',
  transform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || breakpoints/* values */.VO[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = (0,style/* default */.Z)({
  prop: 'minWidth',
  transform
});
const height = (0,style/* default */.Z)({
  prop: 'height',
  transform
});
const maxHeight = (0,style/* default */.Z)({
  prop: 'maxHeight',
  transform
});
const minHeight = (0,style/* default */.Z)({
  prop: 'minHeight',
  transform
});
const sizeWidth = (0,style/* default */.Z)({
  prop: 'size',
  cssProperty: 'width',
  transform
});
const sizeHeight = (0,style/* default */.Z)({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = (0,style/* default */.Z)({
  prop: 'boxSizing'
});
const sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ const esm_sizing = (sizing);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/typography.js


const fontFamily = (0,style/* default */.Z)({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = (0,style/* default */.Z)({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = (0,style/* default */.Z)({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = (0,style/* default */.Z)({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = (0,style/* default */.Z)({
  prop: 'letterSpacing'
});
const lineHeight = (0,style/* default */.Z)({
  prop: 'lineHeight'
});
const textAlign = (0,style/* default */.Z)({
  prop: 'textAlign'
});
const typographyVariant = (0,style/* default */.Z)({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography'
});
const typography = esm_compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ const esm_typography = (typography);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/getThemeValue.js










const filterPropsMapping = {
  borders: esm_borders.filterProps,
  display: display.filterProps,
  flexbox: esm_flexbox.filterProps,
  grid: esm_grid.filterProps,
  positions: positions.filterProps,
  palette: esm_palette.filterProps,
  shadows: shadows.filterProps,
  sizing: esm_sizing.filterProps,
  spacing: spacing/* default.filterProps */.ZP.filterProps,
  typography: esm_typography.filterProps
};
const styleFunctionMapping = {
  borders: esm_borders,
  display: display,
  flexbox: esm_flexbox,
  grid: esm_grid,
  positions: positions,
  palette: esm_palette,
  shadows: shadows,
  sizing: esm_sizing,
  spacing: spacing/* default */.ZP,
  typography: esm_typography
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach(propName => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}

/* harmony default export */ const esm_getThemeValue = (getThemeValue);

/***/ }),

/***/ 9025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ extendSxProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4390);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2972);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6614);
/* harmony import */ var _getThemeValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2449);


const _excluded = ["sx"];



const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (_getThemeValue__WEBPACK_IMPORTED_MODULE_0__/* .propToStyleFunction */ .G[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(props, _excluded);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;

  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);

      if (!(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* .isPlainObject */ .P)(result)) {
        return systemProps;
      }

      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, systemProps, result);
    };
  } else {
    finalSx = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, systemProps, inSx);
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, otherProps, {
    sx: finalSx
  });
}

/***/ }),

/***/ 200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1654);
/* harmony import */ var _getThemeValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2449);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9719);




function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

function styleFunctionSx(props) {
  const {
    sx,
    theme = {}
  } = props || {};

  if (!sx) {
    return null; // emotion & styled-components will neglect null
  }
  /*
   * Receive `sxInput` as object or callback
   * and then recursively check keys & values to create media query object styles.
   * (the result will be used in `styled`)
   */


  function traverse(sxInput) {
    let sxObject = sxInput;

    if (typeof sxInput === 'function') {
      sxObject = sxInput(theme);
    } else if (typeof sxInput !== 'object') {
      // value
      return sxInput;
    }

    const emptyBreakpoints = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_0__/* .createEmptyBreakpointObject */ .W8)(theme.breakpoints);
    const breakpointsKeys = Object.keys(emptyBreakpoints);
    let css = emptyBreakpoints;
    Object.keys(sxObject).forEach(styleKey => {
      const value = callIfFn(sxObject[styleKey], theme);

      if (typeof value === 'object') {
        if (_getThemeValue__WEBPACK_IMPORTED_MODULE_1__/* .propToStyleFunction */ .G[styleKey]) {
          css = (0,_merge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(css, (0,_getThemeValue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(styleKey, value, theme));
        } else {
          const breakpointsValues = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_0__/* .handleBreakpoints */ .k9)({
            theme
          }, value, x => ({
            [styleKey]: x
          }));

          if (objectsHaveSameKeys(breakpointsValues, value)) {
            css[styleKey] = styleFunctionSx({
              sx: value,
              theme
            });
          } else {
            css = (0,_merge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(css, breakpointsValues);
          }
        }
      } else {
        css = (0,_merge__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(css, (0,_getThemeValue__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(styleKey, value, theme));
      }
    });
    return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_0__/* .removeUnusedBreakpoints */ .L7)(breakpointsKeys, css);
  }

  return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
}

styleFunctionSx.filterProps = ['sx'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleFunctionSx);

/***/ }),

/***/ 8289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export systemDefaultTheme */
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6621);
/* harmony import */ var _useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8974);


const systemDefaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();

function useTheme(defaultTheme = systemDefaultTheme) {
  return (0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(defaultTheme);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ }),

/***/ 8974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_private_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3998);


function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function useTheme(defaultTheme = null) {
  const contextTheme = (0,_mui_private_theming__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ }),

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

/***/ 1911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ ProjectDetails_ProjectDetails)
});

// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(1093);
// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5847);
var index_js_eager_default = /*#__PURE__*/__webpack_require__.n(index_js_eager_);
// EXTERNAL MODULE: ../project/src/components/ProjectTopHeader/index.ts + 1 modules
var ProjectTopHeader = __webpack_require__(6340);
// EXTERNAL MODULE: ../../libs/common/index.ts + 12 modules
var common = __webpack_require__(1788);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.0.6 (strict) (fallback: ../../../../node_modules/@mui/material/index.js)
var index_js_ = __webpack_require__(9039);
// EXTERNAL MODULE: ../../libs/icon/index.ts + 10 modules
var icon = __webpack_require__(9560);
// EXTERNAL MODULE: ../../libs/icon/src/CheckList/index.ts + 1 modules
var CheckList = __webpack_require__(9014);
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
  projectContainer: {
    display: 'flex',
    '& > div': {
      flex: '1 0 0'
    }
  },
  coloredBox: {
    mb: 2,
    p: 1.5,
    minHeight: '120px',
    borderRadius: 2
  }
};
/* harmony default export */ const style = (sx);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2172);
;// CONCATENATED MODULE: ../project/src/components/BubbleText/style.ts
var style_sx = {
  coloredBox: {
    ml: 1,
    mb: 2,
    p: 1.5,
    minHeight: '120px',
    borderRadius: 2
  }
};
/* harmony default export */ const BubbleText_style = (style_sx);
;// CONCATENATED MODULE: ../project/src/components/BubbleText/BubbleText.tsx


var _excluded = ["title", "children", "textSx"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var BubbleText = function BubbleText(_ref) {
  var title = _ref.title,
      children = _ref.children,
      textSx = _ref.textSx,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, rest, typeof title === 'string' ? /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, title) : title, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: _objectSpread(_objectSpread({}, BubbleText_style.coloredBox), textSx)
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, children)));
};

/* harmony default export */ const BubbleText_BubbleText = (BubbleText);
;// CONCATENATED MODULE: ../project/src/components/BubbleText/index.ts

// EXTERNAL MODULE: consume shared module (default) @mui/icons-material@^5.0.5 (strict) (fallback: ../../../../node_modules/@mui/icons-material/esm/index.js)
var esm_index_js_ = __webpack_require__(6454);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(914);
// EXTERNAL MODULE: ../../../../node_modules/@mui/system/esm/createBox.js
var createBox = __webpack_require__(4268);
;// CONCATENATED MODULE: ../../../../node_modules/@mui/system/esm/Box/Box.js

const Box = (0,createBox/* default */.Z)();
/* harmony default export */ const Box_Box = (Box);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4390);
;// CONCATENATED MODULE: ../project/src/components/TargetMarketTab/style.ts
var TargetMarketTab_style_sx = {
  tabs: {
    '& .MuiTab-root': {
      textTransform: 'initial',
      borderRadius: 2,
      '&:nth-of-type(n+1):not(:last-of-type)': {
        mx: 2
      },
      '&.Mui-selected': {
        color: 'common.white',
        bgcolor: '#FF6492'
      }
    }
  }
};
/* harmony default export */ const TargetMarketTab_style = (TargetMarketTab_style_sx);
;// CONCATENATED MODULE: ../project/src/components/TargetMarketTab/TargetMarketTab.tsx


var TargetMarketTab_excluded = ["tabs", "value", "setValue"];




var TargetMarketTab = function TargetMarketTab(_ref) {
  var tabs = _ref.tabs,
      value = _ref.value,
      setValue = _ref.setValue,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, TargetMarketTab_excluded);

  var handleChange = function handleChange(_, value) {
    return setValue(value);
  };

  console.log(tabs);
  return /*#__PURE__*/index_js_eager_default().createElement((index_js_eager_default()).Fragment, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Tabs, (0,esm_extends/* default */.Z)({
    value: value,
    onChange: handleChange,
    sx: TargetMarketTab_style.tabs,
    TabIndicatorProps: {
      hidden: true
    }
  }, rest), tabs.map(function (tab, index) {
    return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Tab, (0,esm_extends/* default */.Z)({}, tab, {
      key: "target-market-".concat(index)
    }));
  })), tabs.map(function (_ref2, index) {
    var content = _ref2.content,
        valueTab = _ref2.value;
    return value === valueTab && /*#__PURE__*/index_js_eager_default().createElement("div", {
      key: "target-market-content-".concat(index)
    }, content);
  }));
};

/* harmony default export */ const TargetMarketTab_TargetMarketTab = (TargetMarketTab);
;// CONCATENATED MODULE: ../project/src/components/TargetMarketTab/index.ts


// EXTERNAL MODULE: ../project/src/assets/target-market.png
var target_market = __webpack_require__(4312);
;// CONCATENATED MODULE: ../project/src/components/SegmentProperties/SegmentProperties.tsx



var SegmentProperties = function SegmentProperties() {
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Card, {
    variant: "outlined",
    sx: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: '200px'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.CardHeader, {
    title: "Properties of segment",
    sx: {
      p: 1,
      textAlign: 'center',
      color: '#fff',
      bgcolor: '#4472C4'
    },
    disableTypography: true
  }), /*#__PURE__*/index_js_eager_default().createElement(index_js_.CardContent, {
    sx: {
      p: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, "Name: Frozen market"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, "Variation base", ' ', /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    component: "span",
    sx: {
      color: 'secondary.main'
    }
  }, "(2)")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    component: "ul"
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    component: "li"
  }, "Demographics"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    component: "li"
  }, "Geographics")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, "Branch variation", ' ', /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    component: "span",
    sx: {
      color: 'secondary.main'
    }
  }, "(10)"))));
};

/* harmony default export */ const SegmentProperties_SegmentProperties = (SegmentProperties);
;// CONCATENATED MODULE: ../project/src/components/SegmentProperties/index.ts


;// CONCATENATED MODULE: ../project/src/components/TargetMarketDetails/TargetMarketDetails.tsx






var TargetMarketDetails = function TargetMarketDetails() {
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      position: 'relative'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.IconButton, null, /*#__PURE__*/index_js_eager_default().createElement(esm_index_js_.ArrowBack, null)), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Button, {
    variant: "contained",
    sx: {
      bgcolor: '#FF6492'
    },
    disableElevation: true
  }, "Target Market 1"), /*#__PURE__*/index_js_eager_default().createElement("div", null, /*#__PURE__*/index_js_eager_default().createElement("img", {
    src: target_market,
    alt: ""
  })), /*#__PURE__*/index_js_eager_default().createElement(SegmentProperties_SegmentProperties, null));
};

/* harmony default export */ const TargetMarketDetails_TargetMarketDetails = (TargetMarketDetails);
;// CONCATENATED MODULE: ../project/src/components/TargetMarketDetails/index.ts

;// CONCATENATED MODULE: ../project/src/pages/TargetMarket/TargetMarket.tsx







var TargetMarket = function TargetMarket() {
  var _useState = (0,index_js_eager_.useState)('target-1'),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0,index_js_eager_.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      viewDetails = _useState4[0],
      setViewDetails = _useState4[1];

  var handleViewDetails = function handleViewDetails() {
    return setViewDetails(true);
  };

  var tabs = [{
    value: 'target-1',
    content: /*#__PURE__*/index_js_eager_default().createElement(Box_Box, {
      sx: {
        textAlign: 'center'
      },
      onClick: handleViewDetails
    }, /*#__PURE__*/index_js_eager_default().createElement("img", {
      src: target_market,
      alt: ""
    })),
    label: 'Target Market 1'
  }, {
    value: 'target-2',
    content: /*#__PURE__*/index_js_eager_default().createElement(Box_Box, {
      sx: {
        textAlign: 'center'
      },
      onClick: handleViewDetails
    }, /*#__PURE__*/index_js_eager_default().createElement("img", {
      src: target_market,
      alt: ""
    })),
    label: 'Target Market 2'
  }, {
    value: 'target-3',
    content: /*#__PURE__*/index_js_eager_default().createElement(Box_Box, {
      sx: {
        textAlign: 'center'
      },
      onClick: handleViewDetails
    }, /*#__PURE__*/index_js_eager_default().createElement("img", {
      src: target_market,
      alt: ""
    })),
    label: 'Target Market 3'
  }];
  return viewDetails ? /*#__PURE__*/index_js_eager_default().createElement(TargetMarketDetails_TargetMarketDetails, null) : /*#__PURE__*/index_js_eager_default().createElement(TargetMarketTab_TargetMarketTab, {
    value: value,
    setValue: setValue,
    tabs: tabs,
    centered: true
  });
};

/* harmony default export */ const TargetMarket_TargetMarket = (TargetMarket);
;// CONCATENATED MODULE: ../project/src/pages/TargetMarket/index.ts

// EXTERNAL MODULE: consume shared module (default) formik@^2.2.9 (strict) (fallback: ../../../../node_modules/formik/dist/formik.esm.js)
var formik_esm_js_ = __webpack_require__(4712);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@^6.0.1 (strict) (fallback: ../../../../node_modules/react-router-dom/index.js)
var react_router_dom_index_js_ = __webpack_require__(7477);
;// CONCATENATED MODULE: ../project/src/pages/ProjectDetails/ProjectDetails.tsx


function ProjectDetails_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function ProjectDetails_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProjectDetails_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProjectDetails_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var ProjectDetails = function ProjectDetails() {
  var navigate = (0,react_router_dom_index_js_.useNavigate)();
  return /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      height: 1,
      p: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(ProjectTopHeader/* default */.Z, {
    overview: true,
    title: "Project 1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod vero quisquam officiis\r doloribus perferendis voluptate doloremque. Optio in necessitatibus facere quisquam\r quaerat corporis, voluptatum suscipit, delectus eius nihil repellendus non quod ullam aut\r eveniet fuga explicabo.",
    action: function action() {
      return navigate('/project/create');
    }
  }), /*#__PURE__*/index_js_eager_default().createElement(formik_esm_js_.Formik, {
    initialValues: {
      search: ''
    },
    onSubmit: function onSubmit() {}
  }, function () {
    return /*#__PURE__*/index_js_eager_default().createElement(common/* TextInput */.oi, {
      type: "search",
      name: "search",
      placeholder: "Searh",
      sx: {
        mt: 5,
        mb: 4
      },
      fullWidth: true
    });
  }), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: style.projectContainer
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Business issues",
    badges: [icon/* Info */.kI, icon/* InfoEdited */.b0, CheckList/* default */.Z],
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(BubbleText_BubbleText, {
    title: "Business issues to be addressed",
    textSx: {
      mb: 2,
      bgcolor: '#EFF7FF'
    }
  }, "Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to"), /*#__PURE__*/index_js_eager_default().createElement(BubbleText_BubbleText, {
    title: "What is already known about this?",
    textSx: {
      bgcolor: '#EFF7FF'
    }
  }, "Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "What need to be done"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      ml: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      mb: 1
    }
  }, "1) TASK 1"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: ProjectDetails_objectSpread(ProjectDetails_objectSpread({}, style.coloredBox), {}, {
      bgcolor: '#EFF7FF'
    })
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, "Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Button, {
    variant: "contained",
    size: "small",
    sx: {
      bgcolor: '#4E5679'
    },
    disableElevation: true,
    fullWidth: true
  }, "Completed")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      ml: 2
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      mt: 2,
      mb: 1
    }
  }, "1) TASK 2"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: ProjectDetails_objectSpread(ProjectDetails_objectSpread({}, style.coloredBox), {}, {
      bgcolor: '#EFF7FF'
    })
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, "Segments with strong growth rates are more attractive as firms can gain market share from primary demand (as opposed to")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Button, {
    variant: "contained",
    size: "small",
    sx: {
      bgcolor: '#2BDF60'
    },
    disableElevation: true,
    fullWidth: true
  }, "Completed")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      mt: 3,
      textAlign: 'center'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Button, {
    variant: "contained",
    color: "inherit",
    disableElevation: true
  }, "Show all task"))), /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Specific solution",
    badges: [icon/* Info */.kI, icon/* InfoEdited */.b0, CheckList/* default */.Z]
  }, /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Objective 1",
    subtitle: /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
      variant: "body2"
    }, "Warning!!! the deadline is in 02 days"),
    sx: style.innerCard,
    variant: "elevation",
    elevation: 0
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(BubbleText_BubbleText, {
    title: "Description",
    textSx: {
      bgcolor: '#FFF'
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim alias quas sed velit fugit modi error non excepturi atque dolor, aliquam molestiae vel ipsa culpa molestias perferendis amet aperiam."), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "Budget\xA0"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    variant: "h6",
    sx: {
      color: 'success.light',
      fontWeight: 600
    },
    gutterBottom: true
  }, "$ 1000,00")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "Spent\xA0"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    variant: "h6",
    sx: {
      color: 'success.light',
      fontWeight: 600
    },
    gutterBottom: true
  }, "$ 99,00"))), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      mt: 3,
      textAlign: 'center'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Button, {
    variant: "contained",
    color: "inherit",
    sx: {
      textTransform: 'uppercase',
      borderRadius: 0
    },
    endIcon: /*#__PURE__*/index_js_eager_default().createElement(esm_index_js_.ExpandMore, null),
    disableElevation: true
  }, "See Achievability"))), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, "Progression")))), /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Objective 2",
    subtitle: /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
      variant: "body2"
    }, "Warning!!! the deadline is in 02 days"),
    sx: style.innerCard,
    variant: "elevation",
    elevation: 0
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(BubbleText_BubbleText, {
    title: "Description",
    textSx: {
      bgcolor: '#FFF'
    }
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et enim alias quas sed velit fugit modi error non excepturi atque dolor, aliquam molestiae vel ipsa culpa molestias perferendis amet aperiam."), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "Budget\xA0"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    variant: "h6",
    sx: {
      color: 'success.light',
      fontWeight: 600
    },
    gutterBottom: true
  }, "$ 1000,00")), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    sx: {
      color: 'text.secondary'
    },
    gutterBottom: true
  }, "Spent\xA0"), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, {
    variant: "h6",
    sx: {
      color: 'success.light',
      fontWeight: 600
    },
    gutterBottom: true
  }, "$ 99,00"))), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, {
    sx: {
      mt: 3,
      textAlign: 'center'
    }
  }, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Button, {
    variant: "contained",
    color: "inherit",
    sx: {
      textTransform: 'uppercase',
      borderRadius: 0
    },
    endIcon: /*#__PURE__*/index_js_eager_default().createElement(esm_index_js_.ExpandMore, null),
    disableElevation: true
  }, "See Achievability"))), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Box, null, /*#__PURE__*/index_js_eager_default().createElement(index_js_.Typography, null, "Progression")))))), /*#__PURE__*/index_js_eager_default().createElement(index_js_.Divider, {
    sx: {
      my: 2
    }
  }), /*#__PURE__*/index_js_eager_default().createElement(common/* ProjectCard */.t, {
    title: "Target market",
    badges: [icon/* Info */.kI, icon/* InfoEdited */.b0, CheckList/* default */.Z]
  }, /*#__PURE__*/index_js_eager_default().createElement(TargetMarket_TargetMarket, null)));
};

/* harmony default export */ const ProjectDetails_ProjectDetails = (ProjectDetails);
;// CONCATENATED MODULE: ../project/src/pages/ProjectDetails/index.ts


/***/ }),

/***/ 6849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 1801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(8753);var f=__webpack_require__(5847),g=60103;__webpack_unused_export__=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");__webpack_unused_export__=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 3704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1801);
} else {}


/***/ }),

/***/ 4312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27cf3052f41816a0525a.png";

/***/ })

}]);