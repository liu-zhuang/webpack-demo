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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_common_css__);
// import 'babel-polyfill';
// import sum from './sum';	
// import {Person, test} from './multi';
// import createDiv from './component/div';

// const arr = [1, 6, 3, 4, 5, 2];

// const div = createDiv(['hello', 'webpack', 'css']);
// document.body.appendChild(div);	

// if (arr.includes(2)) {
// 	import(/* webpackChunkName: "lodash" */'lodash')
// 	.then(_ => {
// 		console.log(_.join(['hello', 'world', '!'], ' '));
// 	})
// 	// require.ensure([], () => {
// 	// 	const _ = require('lodash');
// 	// 	console.log(_.join(['Hello', 'World', '!'], ' '));
// 	// }, 'lodash')
// }

// test();
// const p1 = new Person('lz', 18);
// console.log(p1.name, p1.age);
// console.log(a);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: window is not defined\n    at /Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/style-loader/index.js??ref--1-1!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/css-loader/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/postcss-loader/lib/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/src/css/common.css:235:2\n    at /Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/style-loader/index.js??ref--1-1!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/css-loader/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/postcss-loader/lib/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/src/css/common.css:224:46\n    at module.exports.module.exports (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/style-loader/index.js??ref--1-1!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/css-loader/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/postcss-loader/lib/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/src/css/common.css:279:46)\n    at Object.<anonymous> (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/style-loader/index.js??ref--1-1!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/css-loader/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/postcss-loader/lib/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/src/css/common.css:82:36)\n    at __webpack_require__ (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/style-loader/index.js??ref--1-1!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/css-loader/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/postcss-loader/lib/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/src/css/common.css:21:30)\n    at /Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/style-loader/index.js??ref--1-1!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/css-loader/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/postcss-loader/lib/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/src/css/common.css:64:18\n    at Object.<anonymous> (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/style-loader/index.js??ref--1-1!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/css-loader/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/postcss-loader/lib/index.js!/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/src/css/common.css:67:10)\n    at Module._compile (module.js:573:30)\n    at Object.exec (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/extract-text-webpack-plugin/dist/loader.js:131:26\n    at compile (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compiler.js:300:11)\n    at applyPluginsAsync.err (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compiler.js:510:14)\n    at next (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/extract-text-webpack-plugin/dist/loader.js:112:7)\n    at next (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compiler.js:507:11)\n    at Compilation.applyPluginsAsyncSeries (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:195:46)\n    at applyPluginsAsync.err (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compilation.js:677:19)\n    at Compilation.applyPluginsAsyncSeries (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:195:46)\n    at applyPluginsAsync.err (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compilation.js:668:11)\n    at Compilation.applyPluginsAsyncSeries (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:195:46)\n    at applyPluginsAsync.err (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compilation.js:663:10)\n    at Compilation.applyPluginsAsyncSeries (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:195:46)\n    at applyPluginsAsyncSeries (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compilation.js:659:9)\n    at Compilation.applyPluginsAsyncSeries (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:195:46)\n    at Compilation.seal (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compilation.js:602:8)\n    at applyPluginsParallel.err (/Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/webpack/lib/Compiler.js:504:17)\n    at /Users/nickylau/Desktop/Develop/GitHub/webpack-demo/node_modules/tapable/lib/Tapable.js:289:11");

/***/ })
/******/ ]);