/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (88)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.14.1\n    at module.exports (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (node:internal/modules/cjs/loader:1108:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)\n    at Module.load (node:internal/modules/cjs/loader:973:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:813:14)\n    at Module.require (node:internal/modules/cjs/loader:997:19)\n    at require (node:internal/modules/cjs/helpers:92:18)\n    at Object.<anonymous> (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (node:internal/modules/cjs/loader:1108:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)\n    at Module.load (node:internal/modules/cjs/loader:973:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:813:14)\n    at Module.require (node:internal/modules/cjs/loader:997:19)\n    at require (node:internal/modules/cjs/helpers:92:18)\n    at loadLoader (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:180:15)\n    at Compilation.buildModule (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/Compilation.js:142:10)\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/Compilation.js:424:9\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:141:35\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:172:11\n    at loadLoader (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:32:11)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:180:15)\n    at Compilation.buildModule (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/Compilation.js:142:10)\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/Compilation.js:424:9\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:242:4\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:93:13\n    at /Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/tapable/lib/Tapable.js:272:13)\n    at onDoneResolving (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:68:11)\n    at onDoneResolving (/Users/robertschulte/Desktop/Code/learn-node/repository/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:189:6)\n    at processTicksAndRejections (node:internal/process/task_queues:76:11)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _bling = __webpack_require__(0);

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map