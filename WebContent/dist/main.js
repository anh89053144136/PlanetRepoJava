/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ClientApp/boot.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/boot.tsx":
/*!****************************!*\
  !*** ./ClientApp/boot.tsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/site.css */ \"./ClientApp/css/site.css\");\n/* harmony import */ var _css_site_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_site_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ \"./ClientApp/routes.tsx\");\n\r\n//import 'bootstrap';\r\n\r\n\r\n\r\n\r\n\r\nvar routes = _routes__WEBPACK_IMPORTED_MODULE_5__[\"routes\"];\r\nfunction renderApp() {\r\n    // This code starts up the React app when it runs in a browser. It sets up the routing\r\n    // configuration and injects the app into a DOM element.\r\n    var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');\r\n    react_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"](react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_hot_loader__WEBPACK_IMPORTED_MODULE_3__[\"AppContainer\"], null,\r\n        react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"HashRouter\"], { children: routes, basename: baseUrl })), document.getElementById('react-app'));\r\n}\r\nrenderApp();\r\n// Allow Hot Module Replacement\r\nif (false) {}\r\n\n\n//# sourceURL=webpack:///./ClientApp/boot.tsx?");

/***/ }),

/***/ "./ClientApp/components/Counter.tsx":
/*!******************************************!*\
  !*** ./ClientApp/components/Counter.tsx ***!
  \******************************************/
/*! exports provided: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Counter\", function() { return Counter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Counter = /** @class */ (function (_super) {\r\n    __extends(Counter, _super);\r\n    function Counter(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        debugger;\r\n        _this.state = { currentCount: 0 };\r\n        return _this;\r\n    }\r\n    Counter.prototype.render = function () {\r\n        var _this = this;\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Counter\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This is a simple example of a React component.\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null,\r\n                \"Current count: \",\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"strong\", null, this.state.currentCount)),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"button\", { onClick: function () { _this.incrementCounter(); } }, \"Increment\"));\r\n    };\r\n    Counter.prototype.incrementCounter = function () {\r\n        this.setState({\r\n            currentCount: this.state.currentCount + 1\r\n        });\r\n    };\r\n    return Counter;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/Counter.tsx?");

/***/ }),

/***/ "./ClientApp/components/FetchData.tsx":
/*!********************************************!*\
  !*** ./ClientApp/components/FetchData.tsx ***!
  \********************************************/
/*! exports provided: FetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FetchData\", function() { return FetchData; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar FetchData = /** @class */ (function (_super) {\r\n    __extends(FetchData, _super);\r\n    function FetchData(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = { forecasts: [], loading: true };\r\n        fetch('api/SampleData/WeatherForecasts')\r\n            .then(function (response) { return response.json(); })\r\n            .then(function (data) {\r\n            _this.setState({ forecasts: data, loading: false });\r\n        });\r\n        return _this;\r\n    }\r\n    FetchData.prototype.render = function () {\r\n        var contents = this.state.loading\r\n            ? react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"em\", null, \"Loading...\"))\r\n            : FetchData.renderForecastsTable(this.state.forecasts);\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Weather forecast\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Planet repository\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"This component demonstrates fetching data from the server.\"),\r\n            contents);\r\n    };\r\n    FetchData.renderForecastsTable = function (forecasts) {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"table\", { className: 'table' },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"thead\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Date\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Temp. (C)\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Temp. (F)\"),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"th\", null, \"Summary\"))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tbody\", null, forecasts.map(function (forecast) {\r\n                return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"tr\", { key: forecast.dateFormatted },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, forecast.dateFormatted),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, forecast.temperatureC),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, forecast.temperatureF),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"td\", null, forecast.summary));\r\n            })));\r\n    };\r\n    return FetchData;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/FetchData.tsx?");

/***/ }),

/***/ "./ClientApp/components/Home.tsx":
/*!***************************************!*\
  !*** ./ClientApp/components/Home.tsx ***!
  \***************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Home = /** @class */ (function (_super) {\r\n    __extends(Home, _super);\r\n    function Home() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Home.prototype.render = function () {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Hello, world!\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"Welcome to your new single-page application, built with:\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: 'https://get.asp.net/' }, \"ASP.NET Core\"),\r\n                    \" and \",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' }, \"C#\"),\r\n                    \" for cross-platform server-side code\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: 'https://facebook.github.io/react/' }, \"React\"),\r\n                    \" and \",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: 'http://www.typescriptlang.org/' }, \"TypeScript\"),\r\n                    \" for client-side code\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: 'https://webpack.github.io/' }, \"Webpack\"),\r\n                    \" for building and bundling client-side resources\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"a\", { href: 'http://getbootstrap.com/' }, \"Bootstrap\"),\r\n                    \" for layout and styling\")),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"To help you get started, we've also set up:\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"strong\", null, \"Client-side navigation\"),\r\n                    \". For example, click \",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"em\", null, \"Counter\"),\r\n                    \" then \",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"em\", null, \"Back\"),\r\n                    \" to return here.\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"strong\", null, \"Webpack dev middleware\"),\r\n                    \". In development mode, there's no need to run the \",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"code\", null, \"webpack\"),\r\n                    \" build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"strong\", null, \"Hot module replacement\"),\r\n                    \". In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.\"),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"strong\", null, \"Efficient production builds\"),\r\n                    \". In production mode, development-time features are disabled, and the \",\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"code\", null, \"webpack\"),\r\n                    \" build tool produces minified static CSS and JavaScript files.\")),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h4\", null, \"Going further\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null,\r\n                \"For larger applications, or for server-side prerendering (i.e., for \",\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"em\", null, \"isomorphic\"),\r\n                \" or \",\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"em\", null, \"universal\"),\r\n                \" applications), you should consider using a Flux/Redux-like architecture. You can generate an ASP.NET Core application with React and Redux using \",\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"code\", null, \"dotnet new reactredux\"),\r\n                \" instead of using this template.\"));\r\n    };\r\n    return Home;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/Home.tsx?");

/***/ }),

/***/ "./ClientApp/components/Layout.tsx":
/*!*****************************************!*\
  !*** ./ClientApp/components/Layout.tsx ***!
  \*****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavMenu */ \"./ClientApp/components/NavMenu.tsx\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Storage */ \"./node_modules/@material-ui/icons/Storage.js\");\n/* harmony import */ var _material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_6__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar Layout = /** @class */ (function (_super) {\r\n    __extends(Layout, _super);\r\n    function Layout() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Layout.prototype.render = function () {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, { position: \"static\" },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, { variant: \"dense\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, { color: \"inherit\", \"aria-label\": \"Menu\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_Storage__WEBPACK_IMPORTED_MODULE_6___default.a, null)),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, { variant: \"title\", color: \"inherit\" }, \"Planets\"))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_NavMenu__WEBPACK_IMPORTED_MODULE_1__[\"NavMenu\"], null)),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null, this.props.children));\r\n    };\r\n    return Layout;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/Layout.tsx?");

/***/ }),

/***/ "./ClientApp/components/NavMenu.tsx":
/*!******************************************!*\
  !*** ./ClientApp/components/NavMenu.tsx ***!
  \******************************************/
/*! exports provided: NavMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavMenu\", function() { return NavMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar NavMenu = /** @class */ (function (_super) {\r\n    __extends(NavMenu, _super);\r\n    function NavMenu() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    NavMenu.prototype.render = function () {\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { className: 'main-nav' },\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"ul\", { className: 'nav navbar-nav' },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], { to: '/', exact: true, activeClassName: 'active' },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: 'glyphicon glyphicon-home' }),\r\n                        \" Home\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], { to: '/counter', activeClassName: 'active' },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: 'glyphicon glyphicon-education' }),\r\n                        \" Counter\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], { to: '/fetchdata', activeClassName: 'active' },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: 'glyphicon glyphicon-th-list' }),\r\n                        \" Fetch data\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"li\", null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], { to: '/planets', activeClassName: 'active' },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"span\", { className: 'glyphicon glyphicon-th-list' }),\r\n                        \" Planet repository\"))));\r\n    };\r\n    return NavMenu;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/NavMenu.tsx?");

/***/ }),

/***/ "./ClientApp/components/planets/PlanetItemView.tsx":
/*!*********************************************************!*\
  !*** ./ClientApp/components/planets/PlanetItemView.tsx ***!
  \*********************************************************/
/*! exports provided: PlanetItemView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlanetItemView\", function() { return PlanetItemView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/TextField/index.js\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ \"./node_modules/@material-ui/core/List/index.js\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"./node_modules/@material-ui/core/ListItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ \"./node_modules/@material-ui/icons/ArrowBack.js\");\n/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Save */ \"./node_modules/@material-ui/icons/Save.js\");\n/* harmony import */ var _material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar PlanetItemView = /** @class */ (function (_super) {\r\n    __extends(PlanetItemView, _super);\r\n    function PlanetItemView(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.state = {\r\n            id: 1,\r\n            name: \"Mercury\",\r\n            lastVisitDate: new Date(2004, 1, 1),\r\n            radius: 2439.7\r\n        };\r\n        return _this;\r\n    }\r\n    PlanetItemView.prototype.handleChangeName = function (event) {\r\n        // some validation\r\n        this.setState({\r\n            name: event.target.value\r\n        });\r\n    };\r\n    ;\r\n    PlanetItemView.prototype.handleChangeLastVisitDate = function (event) {\r\n        // some validation\r\n        var date = new Date(Date.parse(event.target.value));\r\n        this.setState({\r\n            lastVisitDate: date\r\n        });\r\n    };\r\n    ;\r\n    PlanetItemView.prototype.handleChangeRadius = function (event) {\r\n        // some validation\r\n        this.setState({\r\n            radius: event.target.value\r\n        });\r\n    };\r\n    ;\r\n    PlanetItemView.prototype.render = function () {\r\n        var _this = this;\r\n        var lastVisitDate = this.state.lastVisitDate ? this.state.lastVisitDate.toISOString().slice(0, 10) : \"\";\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Planet item\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"form\", { noValidate: true },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, { elevation: 1 },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: \"planet-name\", label: \"Name\", margin: \"normal\", value: this.state.name, onChange: function (e) { return _this.handleChangeName(e); } })),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: \"planet-last-visit\", label: \"Last visit date\", margin: \"normal\", type: \"date\", value: lastVisitDate, onChange: function (e) { return _this.handleChangeLastVisitDate(e); } })),\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_6___default.a, null,\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, { id: \"planet-radius\", label: \"Radius\", type: \"number\", margin: \"normal\", value: this.state.radius, onChange: function (e) { return _this.handleChangeRadius(e); } }))))),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, { container: true, spacing: 8 },\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, { item: true },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, { variant: \"extendedFab\", href: \"#/planets\" },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_8___default.a, null),\r\n                        \" Back\")),\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, { item: true },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, { variant: \"extendedFab\", color: \"primary\", onClick: function (e) { return _this.handleClick(e); } },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_Save__WEBPACK_IMPORTED_MODULE_9___default.a, null),\r\n                        \" Save\"))));\r\n    };\r\n    PlanetItemView.prototype.componentDidMount = function () {\r\n        //this\r\n    };\r\n    PlanetItemView.prototype.handleClick = function (e) {\r\n    };\r\n    return PlanetItemView;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/planets/PlanetItemView.tsx?");

/***/ }),

/***/ "./ClientApp/components/planets/PlanetsController.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/components/planets/PlanetsController.ts ***!
  \***********************************************************/
/*! exports provided: PlanetsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlanetsController\", function() { return PlanetsController; });\nvar allPlanets = [\r\n    { id: 1, name: \"Mercury\", lastVisitDate: new Date(2004, 0, 1), radius: 2439.7 },\r\n    { id: 2, name: \"Venus\", lastVisitDate: new Date(1970, 0, 1), radius: 6051.8 },\r\n    { id: 3, name: \"Earth\", lastVisitDate: null, radius: 6371.8 },\r\n    { id: 4, name: \"Mars\", lastVisitDate: new Date(1980, 0, 1), radius: 3389.5 },\r\n    { id: 5, name: \"Saturn\", lastVisitDate: new Date(2009, 7, 11), radius: 58232 },\r\n    { id: 6, name: \"Jupiter\", lastVisitDate: new Date(1997, 9, 15), radius: 69911 },\r\n    { id: 7, name: \"Uranus\", lastVisitDate: new Date(1986, 0, 17), radius: 0 },\r\n    { id: 8, name: \"Neptune\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 9, name: \"PSR 1257+12\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 10, name: \"GJ 1214 b\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 11, name: \"Kepler-10 b\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 12, name: \"Gliese 667 Cc\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 13, name: \"Gliese 581 d\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 14, name: \"Gliese 581 g\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 15, name: \"Kepler-20 e\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 16, name: \"HD 85512 b\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 17, name: \"Kepler-22 b\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 18, name: \"GD 66 b\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 },\r\n    { id: 19, name: \"HD 188753 Ab\", lastVisitDate: new Date(1989, 7, 1), radius: 24622 }\r\n];\r\nvar PlanetsController = /** @class */ (function () {\r\n    function PlanetsController(model) {\r\n        this.model = model;\r\n    }\r\n    PlanetsController.prototype.setNewPage = function (newState) {\r\n        var newPage = {\r\n            loading: false,\r\n            records: allPlanets.slice(newState.page * newState.rowsPerPage, newState.page * newState.rowsPerPage + newState.rowsPerPage),\r\n            orderBy: newState.orderBy,\r\n            order: newState.order,\r\n            page: newState.page,\r\n            rowsPerPage: newState.rowsPerPage,\r\n            rowsCount: allPlanets.length\r\n        };\r\n        this.model.setPlanets(newPage);\r\n    };\r\n    return PlanetsController;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/planets/PlanetsController.ts?");

/***/ }),

/***/ "./ClientApp/components/planets/PlanetsModel.ts":
/*!******************************************************!*\
  !*** ./ClientApp/components/planets/PlanetsModel.ts ***!
  \******************************************************/
/*! exports provided: PlanetsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlanetsModel\", function() { return PlanetsModel; });\n/* harmony import */ var fbemitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbemitter */ \"./node_modules/fbemitter/index.js\");\n/* harmony import */ var fbemitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbemitter__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar PlanetsModel = /** @class */ (function () {\r\n    function PlanetsModel() {\r\n        this.eventType = 'change';\r\n        this.emitter = new fbemitter__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]();\r\n        this.currentState = {\r\n            records: [],\r\n            loading: false,\r\n            rowsCount: 0,\r\n            order: \"\",\r\n            orderBy: \"\",\r\n            page: 0,\r\n            rowsPerPage: 0\r\n        };\r\n    }\r\n    PlanetsModel.prototype.addListener = function (fn) {\r\n        this.emitter.addListener(this.eventType, fn);\r\n    };\r\n    PlanetsModel.prototype.setPlanets = function (newState) {\r\n        this.currentState = newState;\r\n        this.emitter.emit(this.eventType, newState);\r\n    };\r\n    PlanetsModel.prototype.getPlanets = function () {\r\n        return this.currentState;\r\n    };\r\n    return PlanetsModel;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/planets/PlanetsModel.ts?");

/***/ }),

/***/ "./ClientApp/components/planets/PlanetsTable.tsx":
/*!*******************************************************!*\
  !*** ./ClientApp/components/planets/PlanetsTable.tsx ***!
  \*******************************************************/
/*! exports provided: PlanetsTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlanetsTable\", function() { return PlanetsTable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/Table/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ \"./node_modules/@material-ui/core/TableSortLabel/index.js\");\n/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableFooter */ \"./node_modules/@material-ui/core/TableFooter/index.js\");\n/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TablePagination */ \"./node_modules/@material-ui/core/TablePagination/index.js\");\n/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/CircularProgress/index.js\");\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ \"./node_modules/@material-ui/icons/DeleteForever.js\");\n/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"./node_modules/@material-ui/icons/Edit.js\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar loading_container = {\r\n    textAlign: \"center\"\r\n};\r\nvar PlanetsTable = /** @class */ (function (_super) {\r\n    __extends(PlanetsTable, _super);\r\n    function PlanetsTable(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.onChange = props.onChange;\r\n        _this.state = {\r\n            loading: true,\r\n            records: [],\r\n            orderBy: \"name\",\r\n            order: \"desc\",\r\n            page: 0,\r\n            rowsPerPage: 5,\r\n            rowsCount: 0\r\n        };\r\n        return _this;\r\n    }\r\n    PlanetsTable.prototype.render = function () {\r\n        var _this = this;\r\n        var tableBody = (this.state == null || this.state.records.length == 0 || this.state.loading == true) ?\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default.a, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default.a, null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { colSpan: 4 },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", { style: loading_container },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default.a, null))))) :\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default.a, null, this.state.records.map(function (row) {\r\n                var lastVisitDate = row.lastVisitDate ? row.lastVisitDate.toISOString().slice(0, 10) : \"\";\r\n                return (react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default.a, { key: row.name },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { component: \"th\", scope: \"row\" }, row.name),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, null, lastVisitDate),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { numeric: true }, row.radius),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { numeric: true },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { container: true, spacing: 8 },\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, { variant: \"fab\", href: \"#/planetitem/\" + row.id },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default.a, null))),\r\n                            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, { item: true },\r\n                                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10___default.a, { variant: \"fab\" },\r\n                                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_12___default.a, null)))))));\r\n            }));\r\n        var direction = this.state.order;\r\n        var result = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_1___default.a, null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4___default.a, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default.a, null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6___default.a, { active: this.state.orderBy === \"name\", direction: direction, onClick: function (event) { _this.handleRequestSort(\"name\"); } }, \"Name\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, null,\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6___default.a, { active: this.state.orderBy === \"lastVisitDate\", direction: direction, onClick: function (event) { _this.handleRequestSort(\"lastVisitDate\"); } }, \"Last visit date\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, { numeric: true },\r\n                        react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6___default.a, { active: this.state.orderBy === \"radius\", direction: direction, onClick: function (event) { _this.handleRequestSort(\"radius\"); } }, \"Radius\")),\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, null))),\r\n            tableBody,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_7___default.a, null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default.a, null,\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8___default.a, { colSpan: 4, count: this.state.rowsCount, rowsPerPage: this.state.rowsPerPage, page: this.state.page, onChangePage: function (event, page) { _this.handleChangePage(event, page); }, onChangeRowsPerPage: function (event) { _this.handleChangeRowsPerPage(event); } }))));\r\n        return result;\r\n    };\r\n    PlanetsTable.prototype.handleRequestSort = function (property) {\r\n        var orderBy = property;\r\n        var order = 'desc';\r\n        if (this.state.orderBy === property && this.state.order === 'desc') {\r\n            order = 'asc';\r\n        }\r\n        if (!this.onChange)\r\n            return;\r\n        this.setState({ loading: true });\r\n        this.onChange({\r\n            order: order,\r\n            orderBy: orderBy,\r\n            page: this.state.page,\r\n            rowsPerPage: this.state.rowsPerPage\r\n        });\r\n    };\r\n    ;\r\n    PlanetsTable.prototype.handleChangePage = function (event, page) {\r\n        if (!this.onChange)\r\n            return;\r\n        this.setState({ loading: true });\r\n        this.onChange({\r\n            order: this.state.order,\r\n            orderBy: this.state.orderBy,\r\n            page: page,\r\n            rowsPerPage: this.state.rowsPerPage\r\n        });\r\n    };\r\n    ;\r\n    PlanetsTable.prototype.handleChangeRowsPerPage = function (event) {\r\n        if (!this.onChange)\r\n            return;\r\n        this.setState({ loading: true });\r\n        this.onChange({\r\n            order: this.state.order,\r\n            orderBy: this.state.orderBy,\r\n            page: this.state.page,\r\n            rowsPerPage: event.target.value\r\n        });\r\n    };\r\n    ;\r\n    return PlanetsTable;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/planets/PlanetsTable.tsx?");

/***/ }),

/***/ "./ClientApp/components/planets/PlanetsView.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/planets/PlanetsView.tsx ***!
  \******************************************************/
/*! exports provided: PlanetsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlanetsView\", function() { return PlanetsView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ \"./node_modules/@material-ui/icons/AddCircleOutline.js\");\n/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/Button/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _PlanetsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlanetsTable */ \"./ClientApp/components/planets/PlanetsTable.tsx\");\n/* harmony import */ var _PlanetsModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlanetsModel */ \"./ClientApp/components/planets/PlanetsModel.ts\");\n/* harmony import */ var _PlanetsController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlanetsController */ \"./ClientApp/components/planets/PlanetsController.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    }\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar PlanetsView = /** @class */ (function (_super) {\r\n    __extends(PlanetsView, _super);\r\n    function PlanetsView(props) {\r\n        var _this = _super.call(this, props) || this;\r\n        _this.model = new _PlanetsModel__WEBPACK_IMPORTED_MODULE_5__[\"PlanetsModel\"]();\r\n        //this.state = { records: [], loading: true };\r\n        /*\r\n        fetch('api/SampleData/Weatherrecords')\r\n            .then(response => response.json() as Promise<PlanetRow[]>)\r\n            .then(data => {\r\n                this.setState({ records: data, loading: false });\r\n            });\r\n        */\r\n        _this.planetsTable = react__WEBPACK_IMPORTED_MODULE_0__[\"createRef\"]();\r\n        _this.model.addListener(function (e) { _this.onModelChange(e); });\r\n        _this.controller = new _PlanetsController__WEBPACK_IMPORTED_MODULE_6__[\"PlanetsController\"](_this.model);\r\n        return _this;\r\n        //this.planetsTable.setState({});\r\n    }\r\n    PlanetsView.prototype.onModelChange = function (newState) {\r\n        this.planetsTable.current.setState(newState);\r\n    };\r\n    PlanetsView.prototype.onTableStateChange = function (newState) {\r\n        this.controller.setNewPage(newState);\r\n    };\r\n    PlanetsView.prototype.render = function () {\r\n        var _this = this;\r\n        //large\r\n        return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", null,\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"h1\", null, \"Planet repository\"),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null,\r\n                react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, { variant: \"extendedFab\", href: \"#/planetitem/0\" },\r\n                    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_2___default.a, null),\r\n                    \" Add\")),\r\n            react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_PlanetsTable__WEBPACK_IMPORTED_MODULE_4__[\"PlanetsTable\"], { ref: this.planetsTable, onChange: function (e) { return _this.onTableStateChange(e); } }));\r\n    };\r\n    PlanetsView.prototype.componentDidMount = function () {\r\n        this.controller.setNewPage({\r\n            orderBy: \"name\",\r\n            order: \"desc\",\r\n            page: 0,\r\n            rowsPerPage: 5\r\n        });\r\n    };\r\n    return PlanetsView;\r\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/components/planets/PlanetsView.tsx?");

/***/ }),

/***/ "./ClientApp/css/site.css":
/*!********************************!*\
  !*** ./ClientApp/css/site.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./site.css */ \"./node_modules/css-loader/index.js!./ClientApp/css/site.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// Prepare cssTransformation\nvar transform;\n\nvar options = {}\noptions.transform = transform\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./ClientApp/css/site.css?");

/***/ }),

/***/ "./ClientApp/routes.tsx":
/*!******************************!*\
  !*** ./ClientApp/routes.tsx ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"routes\", function() { return routes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ \"./ClientApp/components/Layout.tsx\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home */ \"./ClientApp/components/Home.tsx\");\n/* harmony import */ var _components_FetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FetchData */ \"./ClientApp/components/FetchData.tsx\");\n/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Counter */ \"./ClientApp/components/Counter.tsx\");\n/* harmony import */ var _components_planets_PlanetsView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/planets/PlanetsView */ \"./ClientApp/components/planets/PlanetsView.tsx\");\n/* harmony import */ var _components_planets_PlanetItemView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/planets/PlanetItemView */ \"./ClientApp/components/planets/PlanetItemView.tsx\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar routes = react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], null,\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/', component: _components_Home__WEBPACK_IMPORTED_MODULE_3__[\"Home\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/counter', component: _components_Counter__WEBPACK_IMPORTED_MODULE_5__[\"Counter\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/fetchdata', component: _components_FetchData__WEBPACK_IMPORTED_MODULE_4__[\"FetchData\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/fetchdata', component: _components_FetchData__WEBPACK_IMPORTED_MODULE_4__[\"FetchData\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/planets', component: _components_planets_PlanetsView__WEBPACK_IMPORTED_MODULE_6__[\"PlanetsView\"] }),\r\n    react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { path: '/planetitem/:id', component: _components_planets_PlanetItemView__WEBPACK_IMPORTED_MODULE_7__[\"PlanetItemView\"] }));\r\n\n\n//# sourceURL=webpack:///./ClientApp/routes.tsx?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************************************!*\
  !*** delegated ./node_modules/@babel/runtime/helpers/interopRequireDefault.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@babel/runtime/helpers/interopRequireDefault.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/AppBar/index.js":
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/AppBar/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/AppBar/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/AppBar/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/*!*****************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Button/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/Button/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Button/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/CircularProgress/index.js":
/*!***************************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/CircularProgress/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/CircularProgress/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/CircularProgress/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/index.js":
/*!***************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Grid/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/Grid/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Grid/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/IconButton/index.js":
/*!*********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/IconButton/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/IconButton/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/IconButton/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/List/index.js":
/*!***************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/List/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/List/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/List/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItem/index.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/ListItem/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/ListItem/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/ListItem/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/index.js":
/*!****************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Paper/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/Paper/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Paper/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/SvgIcon/index.js":
/*!******************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/SvgIcon/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/SvgIcon/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/SvgIcon/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Table/index.js":
/*!****************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Table/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/Table/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Table/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableBody/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableBody/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TableBody/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableBody/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableCell/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableCell/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TableCell/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableCell/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableFooter/index.js":
/*!**********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableFooter/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TableFooter/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableFooter/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableHead/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableHead/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TableHead/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableHead/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TablePagination/index.js":
/*!**************************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TablePagination/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TablePagination/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TablePagination/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableRow/index.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableRow/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TableRow/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableRow/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TableSortLabel/index.js":
/*!*************************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TableSortLabel/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TableSortLabel/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TableSortLabel/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/TextField/index.js":
/*!********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/TextField/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/TextField/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/TextField/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Toolbar/index.js":
/*!******************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Toolbar/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/Toolbar/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Toolbar/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/index.js":
/*!*********************************************************************************************************************!*\
  !*** delegated ./node_modules/@material-ui/core/Typography/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/@material-ui/core/Typography/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/@material-ui/core/Typography/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/AddCircleOutline.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/icons/AddCircleOutline.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n}), _react.default.createElement(\"path\", {\n  d: \"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"\n})), 'AddCircleOutline');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/AddCircleOutline.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/ArrowBack.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowBack.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n}), _react.default.createElement(\"path\", {\n  d: \"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"\n})), 'ArrowBack');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/ArrowBack.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/DeleteForever.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/DeleteForever.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0V0z\"\n}), _react.default.createElement(\"path\", {\n  d: \"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z\"\n}), _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n})), 'DeleteForever');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/DeleteForever.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Edit.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Edit.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  d: \"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"\n}), _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n})), 'Edit');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/Edit.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Save.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Save.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n}), _react.default.createElement(\"path\", {\n  d: \"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z\"\n})), 'Save');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/Save.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Storage.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Storage.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"path\", {\n  fill: \"none\",\n  d: \"M0 0h24v24H0z\"\n}), _react.default.createElement(\"path\", {\n  d: \"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z\"\n})), 'Storage');\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/Storage.js?");

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _pure = _interopRequireDefault(__webpack_require__(/*! recompose/pure */ \"./node_modules/recompose/pure.js\"));\n\nvar _SvgIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/SvgIcon */ \"./node_modules/@material-ui/core/SvgIcon/index.js\"));\n\nfunction createSvgIcon(path, displayName) {\n  var Icon = function Icon(props) {\n    return _react.default.createElement(_SvgIcon.default, props, path);\n  };\n\n  Icon.displayName = \"\".concat(displayName, \"Icon\");\n  Icon = (0, _pure.default)(Icon);\n  Icon.muiName = 'SvgIcon';\n  return Icon;\n}\n\n;\nvar _default = createSvgIcon;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/@material-ui/icons/utils/createSvgIcon.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./ClientApp/css/site.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader!./ClientApp/css/site.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(undefined);\n// imports\n\n\n// module\nexports.push([module.i, \"/*\\r\\n.main-nav li .glyphicon {\\r\\n    margin-right: 10px;\\r\\n}\\r\\n\\r\\n.main-nav li a.active,\\r\\n.main-nav li a.active:hover,\\r\\n.main-nav li a.active:focus {\\r\\n    background-color: #4189C7;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.main-nav {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n@media (max-width: 767px) {\\r\\n    body {\\r\\n        padding-top: 50px;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n    .main-nav {\\r\\n        height: 100%;\\r\\n        width: calc(25% - 20px);\\r\\n    }\\r\\n    .main-nav .navbar {\\r\\n        border-radius: 0px;\\r\\n        border-width: 0px;\\r\\n        height: 100%;\\r\\n    }\\r\\n    .main-nav .navbar-header {\\r\\n        float: none;\\r\\n    }\\r\\n    .main-nav .navbar-collapse {\\r\\n        border-top: 1px solid #444;\\r\\n        padding: 0px;\\r\\n    }\\r\\n    .main-nav .navbar ul {\\r\\n        float: none;\\r\\n    }\\r\\n    .main-nav .navbar li {\\r\\n        float: none;\\r\\n        font-size: 15px;\\r\\n        margin: 6px;\\r\\n    }\\r\\n    .main-nav .navbar li a {\\r\\n        padding: 10px 16px;\\r\\n        border-radius: 4px;\\r\\n    }\\r\\n    .main-nav .navbar a {\\r\\n        width: 100%;\\r\\n        white-space: nowrap;\\r\\n        overflow: hidden;\\r\\n        text-overflow: ellipsis;\\r\\n    }\\r\\n}\\r\\n*/\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./ClientApp/css/site.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/fbemitter/index.js":
/*!*****************************************!*\
  !*** ./node_modules/fbemitter/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\nvar fbemitter = {\n  EventEmitter: __webpack_require__(/*! ./lib/BaseEventEmitter */ \"./node_modules/fbemitter/lib/BaseEventEmitter.js\"),\n  EmitterSubscription : __webpack_require__(/*! ./lib/EmitterSubscription */ \"./node_modules/fbemitter/lib/EmitterSubscription.js\")\n};\n\nmodule.exports = fbemitter;\n\n\n//# sourceURL=webpack:///./node_modules/fbemitter/index.js?");

/***/ }),

/***/ "./node_modules/fbemitter/lib/BaseEventEmitter.js":
/*!********************************************************!*\
  !*** ./node_modules/fbemitter/lib/BaseEventEmitter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule BaseEventEmitter\n * @typechecks\n */\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nvar EmitterSubscription = __webpack_require__(/*! ./EmitterSubscription */ \"./node_modules/fbemitter/lib/EmitterSubscription.js\");\nvar EventSubscriptionVendor = __webpack_require__(/*! ./EventSubscriptionVendor */ \"./node_modules/fbemitter/lib/EventSubscriptionVendor.js\");\n\nvar emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ \"./node_modules/fbjs/lib/emptyFunction.js\");\nvar invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\n\n/**\n * @class BaseEventEmitter\n * @description\n * An EventEmitter is responsible for managing a set of listeners and publishing\n * events to them when it is told that such events happened. In addition to the\n * data for the given event it also sends a event control object which allows\n * the listeners/handlers to prevent the default behavior of the given event.\n *\n * The emitter is designed to be generic enough to support all the different\n * contexts in which one might want to emit events. It is a simple multicast\n * mechanism on top of which extra functionality can be composed. For example, a\n * more advanced emitter may use an EventHolder and EventFactory.\n */\n\nvar BaseEventEmitter = (function () {\n  /**\n   * @constructor\n   */\n\n  function BaseEventEmitter() {\n    _classCallCheck(this, BaseEventEmitter);\n\n    this._subscriber = new EventSubscriptionVendor();\n    this._currentSubscription = null;\n  }\n\n  /**\n   * Adds a listener to be invoked when events of the specified type are\n   * emitted. An optional calling context may be provided. The data arguments\n   * emitted will be passed to the listener function.\n   *\n   * TODO: Annotate the listener arg's type. This is tricky because listeners\n   *       can be invoked with varargs.\n   *\n   * @param {string} eventType - Name of the event to listen to\n   * @param {function} listener - Function to invoke when the specified event is\n   *   emitted\n   * @param {*} context - Optional context object to use when invoking the\n   *   listener\n   */\n\n  BaseEventEmitter.prototype.addListener = function addListener(eventType, listener, context) {\n    return this._subscriber.addSubscription(eventType, new EmitterSubscription(this._subscriber, listener, context));\n  };\n\n  /**\n   * Similar to addListener, except that the listener is removed after it is\n   * invoked once.\n   *\n   * @param {string} eventType - Name of the event to listen to\n   * @param {function} listener - Function to invoke only once when the\n   *   specified event is emitted\n   * @param {*} context - Optional context object to use when invoking the\n   *   listener\n   */\n\n  BaseEventEmitter.prototype.once = function once(eventType, listener, context) {\n    var emitter = this;\n    return this.addListener(eventType, function () {\n      emitter.removeCurrentListener();\n      listener.apply(context, arguments);\n    });\n  };\n\n  /**\n   * Removes all of the registered listeners, including those registered as\n   * listener maps.\n   *\n   * @param {?string} eventType - Optional name of the event whose registered\n   *   listeners to remove\n   */\n\n  BaseEventEmitter.prototype.removeAllListeners = function removeAllListeners(eventType) {\n    this._subscriber.removeAllSubscriptions(eventType);\n  };\n\n  /**\n   * Provides an API that can be called during an eventing cycle to remove the\n   * last listener that was invoked. This allows a developer to provide an event\n   * object that can remove the listener (or listener map) during the\n   * invocation.\n   *\n   * If it is called when not inside of an emitting cycle it will throw.\n   *\n   * @throws {Error} When called not during an eventing cycle\n   *\n   * @example\n   *   var subscription = emitter.addListenerMap({\n   *     someEvent: function(data, event) {\n   *       console.log(data);\n   *       emitter.removeCurrentListener();\n   *     }\n   *   });\n   *\n   *   emitter.emit('someEvent', 'abc'); // logs 'abc'\n   *   emitter.emit('someEvent', 'def'); // does not log anything\n   */\n\n  BaseEventEmitter.prototype.removeCurrentListener = function removeCurrentListener() {\n    !!!this._currentSubscription ?  true ? invariant(false, 'Not in an emitting cycle; there is no current subscription') : undefined : undefined;\n    this._subscriber.removeSubscription(this._currentSubscription);\n  };\n\n  /**\n   * Returns an array of listeners that are currently registered for the given\n   * event.\n   *\n   * @param {string} eventType - Name of the event to query\n   * @return {array}\n   */\n\n  BaseEventEmitter.prototype.listeners = function listeners(eventType) /* TODO: Array<EventSubscription> */{\n    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);\n    return subscriptions ? subscriptions.filter(emptyFunction.thatReturnsTrue).map(function (subscription) {\n      return subscription.listener;\n    }) : [];\n  };\n\n  /**\n   * Emits an event of the given type with the given data. All handlers of that\n   * particular type will be notified.\n   *\n   * @param {string} eventType - Name of the event to emit\n   * @param {*} Arbitrary arguments to be passed to each registered listener\n   *\n   * @example\n   *   emitter.addListener('someEvent', function(message) {\n   *     console.log(message);\n   *   });\n   *\n   *   emitter.emit('someEvent', 'abc'); // logs 'abc'\n   */\n\n  BaseEventEmitter.prototype.emit = function emit(eventType) {\n    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);\n    if (subscriptions) {\n      var keys = Object.keys(subscriptions);\n      for (var ii = 0; ii < keys.length; ii++) {\n        var key = keys[ii];\n        var subscription = subscriptions[key];\n        // The subscription may have been removed during this event loop.\n        if (subscription) {\n          this._currentSubscription = subscription;\n          this.__emitToSubscription.apply(this, [subscription].concat(Array.prototype.slice.call(arguments)));\n        }\n      }\n      this._currentSubscription = null;\n    }\n  };\n\n  /**\n   * Provides a hook to override how the emitter emits an event to a specific\n   * subscription. This allows you to set up logging and error boundaries\n   * specific to your environment.\n   *\n   * @param {EmitterSubscription} subscription\n   * @param {string} eventType\n   * @param {*} Arbitrary arguments to be passed to each registered listener\n   */\n\n  BaseEventEmitter.prototype.__emitToSubscription = function __emitToSubscription(subscription, eventType) {\n    var args = Array.prototype.slice.call(arguments, 2);\n    subscription.listener.apply(subscription.context, args);\n  };\n\n  return BaseEventEmitter;\n})();\n\nmodule.exports = BaseEventEmitter;\n\n//# sourceURL=webpack:///./node_modules/fbemitter/lib/BaseEventEmitter.js?");

/***/ }),

/***/ "./node_modules/fbemitter/lib/EmitterSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/fbemitter/lib/EmitterSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n * \n * @providesModule EmitterSubscription\n * @typechecks\n */\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar EventSubscription = __webpack_require__(/*! ./EventSubscription */ \"./node_modules/fbemitter/lib/EventSubscription.js\");\n\n/**\n * EmitterSubscription represents a subscription with listener and context data.\n */\n\nvar EmitterSubscription = (function (_EventSubscription) {\n  _inherits(EmitterSubscription, _EventSubscription);\n\n  /**\n   * @param {EventSubscriptionVendor} subscriber - The subscriber that controls\n   *   this subscription\n   * @param {function} listener - Function to invoke when the specified event is\n   *   emitted\n   * @param {*} context - Optional context object to use when invoking the\n   *   listener\n   */\n\n  function EmitterSubscription(subscriber, listener, context) {\n    _classCallCheck(this, EmitterSubscription);\n\n    _EventSubscription.call(this, subscriber);\n    this.listener = listener;\n    this.context = context;\n  }\n\n  return EmitterSubscription;\n})(EventSubscription);\n\nmodule.exports = EmitterSubscription;\n\n//# sourceURL=webpack:///./node_modules/fbemitter/lib/EmitterSubscription.js?");

/***/ }),

/***/ "./node_modules/fbemitter/lib/EventSubscription.js":
/*!*********************************************************!*\
  !*** ./node_modules/fbemitter/lib/EventSubscription.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule EventSubscription\n * @typechecks\n */\n\n\n\n/**\n * EventSubscription represents a subscription to a particular event. It can\n * remove its own subscription.\n */\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nvar EventSubscription = (function () {\n\n  /**\n   * @param {EventSubscriptionVendor} subscriber the subscriber that controls\n   *   this subscription.\n   */\n\n  function EventSubscription(subscriber) {\n    _classCallCheck(this, EventSubscription);\n\n    this.subscriber = subscriber;\n  }\n\n  /**\n   * Removes this subscription from the subscriber that controls it.\n   */\n\n  EventSubscription.prototype.remove = function remove() {\n    if (this.subscriber) {\n      this.subscriber.removeSubscription(this);\n      this.subscriber = null;\n    }\n  };\n\n  return EventSubscription;\n})();\n\nmodule.exports = EventSubscription;\n\n//# sourceURL=webpack:///./node_modules/fbemitter/lib/EventSubscription.js?");

/***/ }),

/***/ "./node_modules/fbemitter/lib/EventSubscriptionVendor.js":
/*!***************************************************************!*\
  !*** ./node_modules/fbemitter/lib/EventSubscriptionVendor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n * \n * @providesModule EventSubscriptionVendor\n * @typechecks\n */\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nvar invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\n\n/**\n * EventSubscriptionVendor stores a set of EventSubscriptions that are\n * subscribed to a particular event type.\n */\n\nvar EventSubscriptionVendor = (function () {\n  function EventSubscriptionVendor() {\n    _classCallCheck(this, EventSubscriptionVendor);\n\n    this._subscriptionsForType = {};\n    this._currentSubscription = null;\n  }\n\n  /**\n   * Adds a subscription keyed by an event type.\n   *\n   * @param {string} eventType\n   * @param {EventSubscription} subscription\n   */\n\n  EventSubscriptionVendor.prototype.addSubscription = function addSubscription(eventType, subscription) {\n    !(subscription.subscriber === this) ?  true ? invariant(false, 'The subscriber of the subscription is incorrectly set.') : undefined : undefined;\n    if (!this._subscriptionsForType[eventType]) {\n      this._subscriptionsForType[eventType] = [];\n    }\n    var key = this._subscriptionsForType[eventType].length;\n    this._subscriptionsForType[eventType].push(subscription);\n    subscription.eventType = eventType;\n    subscription.key = key;\n    return subscription;\n  };\n\n  /**\n   * Removes a bulk set of the subscriptions.\n   *\n   * @param {?string} eventType - Optional name of the event type whose\n   *   registered supscriptions to remove, if null remove all subscriptions.\n   */\n\n  EventSubscriptionVendor.prototype.removeAllSubscriptions = function removeAllSubscriptions(eventType) {\n    if (eventType === undefined) {\n      this._subscriptionsForType = {};\n    } else {\n      delete this._subscriptionsForType[eventType];\n    }\n  };\n\n  /**\n   * Removes a specific subscription. Instead of calling this function, call\n   * `subscription.remove()` directly.\n   *\n   * @param {object} subscription\n   */\n\n  EventSubscriptionVendor.prototype.removeSubscription = function removeSubscription(subscription) {\n    var eventType = subscription.eventType;\n    var key = subscription.key;\n\n    var subscriptionsForType = this._subscriptionsForType[eventType];\n    if (subscriptionsForType) {\n      delete subscriptionsForType[key];\n    }\n  };\n\n  /**\n   * Returns the array of subscriptions that are currently registered for the\n   * given event type.\n   *\n   * Note: This array can be potentially sparse as subscriptions are deleted\n   * from it when they are removed.\n   *\n   * TODO: This returns a nullable array. wat?\n   *\n   * @param {string} eventType\n   * @return {?array}\n   */\n\n  EventSubscriptionVendor.prototype.getSubscriptionsForType = function getSubscriptionsForType(eventType) {\n    return this._subscriptionsForType[eventType];\n  };\n\n  return EventSubscriptionVendor;\n})();\n\nmodule.exports = EventSubscriptionVendor;\n\n//# sourceURL=webpack:///./node_modules/fbemitter/lib/EventSubscriptionVendor.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/fbjs/lib/emptyFunction.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/fbjs/lib/emptyFunction.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/fbjs/lib/emptyFunction.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/fbjs/lib/invariant.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/fbjs/lib/invariant.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/fbjs/lib/invariant.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!************************************************************************************************************************!*\
  !*** delegated ./node_modules/isomorphic-fetch/fetch-npm-browserify.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/isomorphic-fetch/fetch-npm-browserify.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!**************************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/react-dom/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-dom/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/index */ \"./node_modules/react-hot-loader/lib/index.js\");\n\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/index.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/AppContainer.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/AppContainer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable global-require */\n\n\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./AppContainer.prod */ \"./node_modules/react-hot-loader/lib/AppContainer.prod.js\");\n} else {}\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/AppContainer.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/AppContainer.prod.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/AppContainer.prod.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable react/prop-types */\n\n\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar Component = React.Component;\n\nvar AppContainer = function (_Component) {\n  _inherits(AppContainer, _Component);\n\n  function AppContainer() {\n    _classCallCheck(this, AppContainer);\n\n    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));\n  }\n\n  _createClass(AppContainer, [{\n    key: 'render',\n    value: function render() {\n      if (this.props.component) {\n        return React.createElement(this.props.component, this.props.props);\n      }\n\n      return React.Children.only(this.props.children);\n    }\n  }]);\n\n  return AppContainer;\n}(Component);\n\nmodule.exports = AppContainer;\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/AppContainer.prod.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable global-require */\n\n\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./index.prod */ \"./node_modules/react-hot-loader/lib/index.prod.js\");\n} else {}\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/index.js?");

/***/ }),

/***/ "./node_modules/react-hot-loader/lib/index.prod.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-hot-loader/lib/index.prod.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports.AppContainer = __webpack_require__(/*! ./AppContainer */ \"./node_modules/react-hot-loader/lib/AppContainer.js\");\n\n//# sourceURL=webpack:///./node_modules/react-hot-loader/lib/index.prod.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!************************************************************************************************************!*\
  !*** delegated ./node_modules/react-router-dom/es/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \************************************************************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, matchPath, withRouter */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/react-router-dom/es/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react-router-dom/es/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!**********************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/react/index.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/react/index.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/recompose/pure.js":
/*!*************************************************************************************************!*\
  !*** delegated ./node_modules/recompose/pure.js from dll-reference vendor_2870886895e687c4f0bb ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor_2870886895e687c4f0bb */ \"dll-reference vendor_2870886895e687c4f0bb\"))(\"./node_modules/recompose/pure.js\");\n\n//# sourceURL=webpack:///delegated_./node_modules/recompose/pure.js_from_dll-reference_vendor_2870886895e687c4f0bb?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(selector) {\n\t\tif (typeof memo[selector] === \"undefined\") {\n\t\t\tmemo[selector] = fn.call(this, selector);\n\t\t}\n\n\t\treturn memo[selector]\n\t};\n})(function (target) {\n\treturn document.querySelector(target)\n});\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton) options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n\tif (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else {\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "dll-reference vendor_2870886895e687c4f0bb":
/*!**********************************************!*\
  !*** external "vendor_2870886895e687c4f0bb" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor_2870886895e687c4f0bb;\n\n//# sourceURL=webpack:///external_%22vendor_2870886895e687c4f0bb%22?");

/***/ })

/******/ });