"use strict";
(self["webpackChunk_app_main"] = self["webpackChunk_app_main"] || []).push([[795],{

/***/ 5795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BrowserRouter": () => (/* binding */ BrowserRouter),
  "HashRouter": () => (/* binding */ HashRouter),
  "Link": () => (/* binding */ Link),
  "MemoryRouter": () => (/* reexport */ MemoryRouter),
  "NavLink": () => (/* binding */ NavLink),
  "Navigate": () => (/* reexport */ Navigate),
  "Outlet": () => (/* reexport */ Outlet),
  "Route": () => (/* reexport */ Route),
  "Router": () => (/* reexport */ Router),
  "Routes": () => (/* reexport */ Routes),
  "UNSAFE_LocationContext": () => (/* reexport */ LocationContext),
  "UNSAFE_NavigationContext": () => (/* reexport */ NavigationContext),
  "UNSAFE_RouteContext": () => (/* reexport */ RouteContext),
  "createRoutesFromChildren": () => (/* reexport */ createRoutesFromChildren),
  "createSearchParams": () => (/* binding */ createSearchParams),
  "generatePath": () => (/* reexport */ generatePath),
  "matchPath": () => (/* reexport */ matchPath),
  "matchRoutes": () => (/* reexport */ matchRoutes),
  "renderMatches": () => (/* reexport */ renderMatches),
  "resolvePath": () => (/* reexport */ resolvePath),
  "useHref": () => (/* reexport */ useHref),
  "useInRouterContext": () => (/* reexport */ useInRouterContext),
  "useLinkClickHandler": () => (/* binding */ useLinkClickHandler),
  "useLocation": () => (/* reexport */ useLocation),
  "useMatch": () => (/* reexport */ useMatch),
  "useNavigate": () => (/* reexport */ useNavigate),
  "useNavigationType": () => (/* reexport */ useNavigationType),
  "useOutlet": () => (/* reexport */ useOutlet),
  "useParams": () => (/* reexport */ useParams),
  "useResolvedPath": () => (/* reexport */ useResolvedPath),
  "useRoutes": () => (/* reexport */ useRoutes),
  "useSearchParams": () => (/* binding */ useSearchParams)
});

// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ../../../../node_modules/react/index.js) (eager)
var index_js_eager_ = __webpack_require__(5847);
// EXTERNAL MODULE: ../../../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(4390);
;// CONCATENATED MODULE: ../../../../node_modules/history/index.js
var r,B=r||(r={});B.Pop="POP";B.Push="PUSH";B.Replace="REPLACE";var C= false?0:function(b){return b};function D(b,h){if(!b){"undefined"!==typeof console&&console.warn(h);try{throw Error(h);}catch(k){}}}function E(b){b.preventDefault();b.returnValue=""}
function F(){var b=[];return{get length(){return b.length},push:function(h){b.push(h);return function(){b=b.filter(function(k){return k!==h})}},call:function(h){b.forEach(function(k){return k&&k(h)})}}}function H(){return Math.random().toString(36).substr(2,8)}function I(b){var h=b.pathname,k=b.search;b=b.hash;return(void 0===h?"/":h)+(void 0===k?"":k)+(void 0===b?"":b)}
function J(b){var h={};if(b){var k=b.indexOf("#");0<=k&&(h.hash=b.substr(k),b=b.substr(0,k));k=b.indexOf("?");0<=k&&(h.search=b.substr(k),b=b.substr(0,k));b&&(h.pathname=b)}return h}
function createBrowserHistory(b){function h(){var c=p.location,a=m.state||{};return[a.idx,C({pathname:c.pathname,search:c.search,hash:c.hash,state:a.usr||null,key:a.key||"default"})]}function k(c){return"string"===typeof c?c:I(c)}function x(c,a){void 0===a&&(a=null);return C((0,esm_extends/* default */.Z)({pathname:q.pathname,hash:"",search:""},"string"===typeof c?J(c):c,{state:a,key:H()}))}function z(c){t=c;c=h();v=c[0];q=c[1];d.call({action:t,location:q})}function A(c,a){function e(){A(c,a)}var l=r.Push,g=x(c,
a);if(!f.length||(f.call({action:l,location:g,retry:e}),!1)){var n=[{usr:g.state,key:g.key,idx:v+1},k(g)];g=n[0];n=n[1];try{m.pushState(g,"",n)}catch(G){p.location.assign(n)}z(l)}}function y(c,a){function e(){y(c,a)}var l=r.Replace,g=x(c,a);f.length&&(f.call({action:l,location:g,retry:e}),1)||(g=[{usr:g.state,key:g.key,idx:v},k(g)],m.replaceState(g[0],"",g[1]),z(l))}function w(c){m.go(c)}void 0===b&&(b={});b=b.window;var p=void 0===b?document.defaultView:b,m=p.history,u=null;p.addEventListener("popstate",
function(){if(u)f.call(u),u=null;else{var c=r.Pop,a=h(),e=a[0];a=a[1];if(f.length)if(null!=e){var l=v-e;l&&(u={action:c,location:a,retry:function(){w(-1*l)}},w(l))}else false?0:
void 0;else z(c)}});var t=r.Pop;b=h();var v=b[0],q=b[1],d=F(),f=F();null==v&&(v=0,m.replaceState((0,esm_extends/* default */.Z)({},m.state,{idx:v}),""));return{get action(){return t},get location(){return q},createHref:k,push:A,replace:y,go:w,back:function(){w(-1)},forward:function(){w(1)},listen:function(c){return d.push(c)},block:function(c){var a=f.push(c);1===f.length&&p.addEventListener("beforeunload",E);return function(){a();f.length||p.removeEventListener("beforeunload",E)}}}};
function createHashHistory(b){function h(){var a=J(m.location.hash.substr(1)),e=a.pathname,l=a.search;a=a.hash;var g=u.state||{};return[g.idx,C({pathname:void 0===e?"/":e,search:void 0===l?"":l,hash:void 0===a?"":a,state:g.usr||null,key:g.key||"default"})]}function k(){if(t)c.call(t),t=null;else{var a=r.Pop,e=h(),l=e[0];e=e[1];if(c.length)if(null!=l){var g=q-l;g&&(t={action:a,location:e,retry:function(){p(-1*g)}},p(g))}else false?0:
void 0;else A(a)}}function x(a){var e=document.querySelector("base"),l="";e&&e.getAttribute("href")&&(e=m.location.href,l=e.indexOf("#"),l=-1===l?e:e.slice(0,l));return l+"#"+("string"===typeof a?a:I(a))}function z(a,e){void 0===e&&(e=null);return C((0,esm_extends/* default */.Z)({pathname:d.pathname,hash:"",search:""},"string"===typeof a?J(a):a,{state:e,key:H()}))}function A(a){v=a;a=h();q=a[0];d=a[1];f.call({action:v,location:d})}function y(a,e){function l(){y(a,e)}var g=r.Push,n=z(a,e); false?
0:void 0;if(!c.length||(c.call({action:g,location:n,retry:l}),!1)){var G=[{usr:n.state,key:n.key,idx:q+1},x(n)];n=G[0];G=G[1];try{u.pushState(n,"",G)}catch(K){m.location.assign(G)}A(g)}}function w(a,e){function l(){w(a,e)}var g=r.Replace,n=z(a,e); false?0:void 0;c.length&&(c.call({action:g,location:n,retry:l}),1)||(n=[{usr:n.state,key:n.key,idx:q},x(n)],u.replaceState(n[0],"",n[1]),A(g))}function p(a){u.go(a)}void 0===b&&(b={});b=b.window;var m=void 0===b?document.defaultView:b,u=m.history,t=null;m.addEventListener("popstate",k);m.addEventListener("hashchange",function(){var a=h()[1];I(a)!==I(d)&&k()});var v=r.Pop;b=h();var q=b[0],d=b[1],f=F(),c=F();null==q&&(q=0,u.replaceState((0,esm_extends/* default */.Z)({},u.state,{idx:q}),""));return{get action(){return v},get location(){return d},
createHref:x,push:y,replace:w,go:p,back:function(){p(-1)},forward:function(){p(1)},listen:function(a){return f.push(a)},block:function(a){var e=c.push(a);1===c.length&&m.addEventListener("beforeunload",E);return function(){e();c.length||m.removeEventListener("beforeunload",E)}}}};
function createMemoryHistory(b){function h(d,f){void 0===f&&(f=null);return C((0,esm_extends/* default */.Z)({pathname:t.pathname,search:"",hash:""},"string"===typeof d?J(d):d,{state:f,key:H()}))}function k(d,f,c){return!q.length||(q.call({action:d,location:f,retry:c}),!1)}function x(d,f){u=d;t=f;v.call({action:u,location:t})}function z(d,f){var c=r.Push,a=h(d,f); false?0:
void 0;k(c,a,function(){z(d,f)})&&(m+=1,p.splice(m,p.length,a),x(c,a))}function A(d,f){var c=r.Replace,a=h(d,f); false?0:void 0;k(c,a,function(){A(d,f)})&&(p[m]=a,x(c,a))}function y(d){var f=Math.min(Math.max(m+d,0),p.length-1),c=r.Pop,a=p[f];k(c,a,function(){y(d)})&&(m=f,x(c,a))}void 0===b&&(b={});var w=b;b=w.initialEntries;w=w.initialIndex;var p=(void 0===
b?["/"]:b).map(function(d){var f=C((0,esm_extends/* default */.Z)({pathname:"/",search:"",hash:"",state:null,key:H()},"string"===typeof d?J(d):d)); false?0:void 0;return f}),m=Math.min(Math.max(null==w?p.length-1:w,0),p.length-1),u=r.Pop,t=p[m],v=F(),q=F();return{get index(){return m},get action(){return u},get location(){return t},createHref:function(d){return"string"===
typeof d?d:I(d)},push:z,replace:A,go:y,back:function(){y(-1)},forward:function(){y(1)},listen:function(d){return v.push(d)},block:function(d){return q.push(d)}}};
//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../../../node_modules/react-router/index.js
/**
 * React Router v6.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */



function invariant(cond, message) {
  if (!cond) throw new Error(message);
}

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     false ? 0 : void 0;
  }
} ///////////////////////////////////////////////////////////////////////////////
// CONTEXT
///////////////////////////////////////////////////////////////////////////////

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */


const NavigationContext = /*#__PURE__*/(0,index_js_eager_.createContext)(null);

if (false) {}

const LocationContext = /*#__PURE__*/(0,index_js_eager_.createContext)(null);

if (false) {}

const RouteContext = /*#__PURE__*/(0,index_js_eager_.createContext)({
  outlet: null,
  matches: []
});

if (false) {} ///////////////////////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////////////////////


/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/docs/en/v6/api#memoryrouter
 */
function MemoryRouter(_ref) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref;
  let historyRef = (0,index_js_eager_.useRef)();

  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,index_js_eager_.useState)({
    action: history.action,
    location: history.location
  });
  (0,index_js_eager_.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,index_js_eager_.createElement)(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/docs/en/v6/api#navigate
 */
function Navigate(_ref2) {
  let {
    to,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
   false ? 0 : void 0;
  let navigate = useNavigate();
  (0,index_js_eager_.useEffect)(() => {
    navigate(to, {
      replace,
      state
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/docs/en/v6/api#outlet
 */
function Outlet(_props) {
  return useOutlet();
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#route
 */
function Route(_props) {
    false ? 0 : invariant(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/docs/en/v6/api#router
 */
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = r.Pop,
    navigator,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = (0,index_js_eager_.useMemo)(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = J(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = (0,index_js_eager_.useMemo)(() => {
    let trailingPathname = stripBasename(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
   false ? 0 : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/(0,index_js_eager_.createElement)(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/(0,index_js_eager_.createElement)(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#routes
 */
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
} ///////////////////////////////////////////////////////////////////////////////
// HOOKS
///////////////////////////////////////////////////////////////////////////////

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usehref
 */

function useHref(to) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0,index_js_eager_.useContext)(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to);
  let joinedPathname = pathname;

  if (basename !== "/") {
    let toPathname = getToPathname(to);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useinroutercontext
 */

function useInRouterContext() {
  return (0,index_js_eager_.useContext)(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/docs/en/v6/api#uselocation
 */

function useLocation() {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  return (0,index_js_eager_.useContext)(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigationtype
 */

function useNavigationType() {
  return (0,index_js_eager_.useContext)(LocationContext).navigationType;
}
/**
 * Returns true if the URL for the given "to" value matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usematch
 */

function useMatch(pattern) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  return matchPath(pattern, useLocation().pathname);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#usenavigate
 */
function useNavigate() {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = (0,index_js_eager_.useContext)(NavigationContext);
  let {
    matches
  } = (0,index_js_eager_.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  let activeRef = (0,index_js_eager_.useRef)(false);
  (0,index_js_eager_.useEffect)(() => {
    activeRef.current = true;
  });
  let navigate = (0,index_js_eager_.useCallback)(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     false ? 0 : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);

    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useoutlet
 */

function useOutlet() {
  return (0,index_js_eager_.useContext)(RouteContext).outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useparams
 */

function useParams() {
  let {
    matches
  } = (0,index_js_eager_.useContext)(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useresolvedpath
 */

function useResolvedPath(to) {
  let {
    matches
  } = (0,index_js_eager_.useContext)(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map(match => match.pathnameBase));
  return (0,index_js_eager_.useMemo)(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/docs/en/v6/api#useroutes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  false ? 0 : invariant(false) : void 0;
  let {
    matches: parentMatches
  } = (0,index_js_eager_.useContext)(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (false) {}

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? J(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? 0 : invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });

  if (false) {}

  return _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/docs/en/v6/api#createroutesfromchildren
 */

function createRoutesFromChildren(children) {
  let routes = [];
  index_js_eager_.Children.forEach(children, element => {
    if (! /*#__PURE__*/(0,index_js_eager_.isValidElement)(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === index_js_eager_.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }

    !(element.type === Route) ?  false ? 0 : invariant(false) : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * The parameters that were parsed from the URL path.
 */

/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/docs/en/v6/api#generatepath
 */
function generatePath(path, params) {
  if (params === void 0) {
    params = {};
  }

  return path.replace(/:(\w+)/g, (_, key) => {
    !(params[key] != null) ?  false ? 0 : invariant(false) : void 0;
    return params[key];
  }).replace(/\/*\*$/, _ => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
}
/**
 * A RouteMatch contains info about how a route matched a URL.
 */

/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchroutes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? J(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], routes, pathname);
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index
    };

    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ?  false ? 0 : invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      !(route.index !== true) ?  false ? 0 : invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, // TODO: attach original route object inside routesMeta so we don't need this arg
routesArg, pathname) {
  let routes = routesArg;
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = routes[meta.childrenIndex];
    matches.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: joinPaths([matchedPathname, match.pathnameBase]),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }

    routes = route.children;
  }

  return matches;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */


function renderMatches(matches) {
  return _renderMatches(matches);
}

function _renderMatches(matches, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) return null;
  return matches.reduceRight((outlet, match, index) => {
    return /*#__PURE__*/(0,index_js_eager_.createElement)(RouteContext.Provider, {
      children: match.route.element !== undefined ? match.route.element : /*#__PURE__*/(0,index_js_eager_.createElement)(Outlet, null),
      value: {
        outlet,
        matches: parentMatches.concat(matches.slice(0, index + 1))
      }
    });
  }, null);
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */


/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/docs/en/v6/api#matchpath
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

   false ? 0 : void 0;
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else {
    regexpSource += end ? "\\/*$" // When matching to the end, ignore trailing slashes
    : // Otherwise, at least match a word boundary. This restricts parent
    // routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    "(?:\\b|$)";
  }

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
     false ? 0 : void 0;
    return value;
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/docs/en/v6/api#resolvepath
 */


function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? J(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? J(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname; // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  let from;

  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original to value had one.

  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }

  return path;
}

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? J(to).pathname : to.pathname;
}

function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }

  let nextChar = pathname.charAt(basename.length);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(basename.length) || "/";
}

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash; ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ../../../../node_modules/react-router-dom/index.js
/**
 * React Router DOM v6.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "replace", "state", "target", "to"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to"];

function react_router_dom_warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A <Router> for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = (0,index_js_eager_.useRef)();

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,index_js_eager_.useState)({
    action: history.action,
    location: history.location
  });
  (0,index_js_eager_.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,index_js_eager_.createElement)(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A <Router> for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = (0,index_js_eager_.useRef)();

  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,index_js_eager_.useState)({
    action: history.action,
    location: history.location
  });
  (0,index_js_eager_.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,index_js_eager_.createElement)(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/(0,index_js_eager_.forwardRef)(function LinkWithRef(_ref3, ref) {
  let {
    onClick,
    replace = false,
    state,
    target,
    to
  } = _ref3,
      rest = _objectWithoutPropertiesLoose(_ref3, _excluded);

  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0,index_js_eager_.createElement)("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (false) {}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/(0,index_js_eager_.forwardRef)(function NavLinkWithRef(_ref4, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded2);

  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/(0,index_js_eager_.createElement)(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }));
});

if (false) {} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` compoments with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return (0,index_js_eager_.useCallback)(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || I(location) === I(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? 0 : void 0;
  let defaultSearchParamsRef = (0,index_js_eager_.useRef)(createSearchParams(defaultInit));
  let location = useLocation();
  let searchParams = (0,index_js_eager_.useMemo)(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = useNavigate();
  let setSearchParams = (0,index_js_eager_.useCallback)((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ })

}]);