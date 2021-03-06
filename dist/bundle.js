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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//#region Creating Observables \r\n// One way\r\n// function subscribe(subscriber){\r\n//     for(let book of allBooks){\r\n//         subscriber.next(book);\r\n//     }\r\n// }\r\n// let allBookObservable$ = new Observable(subscribe);\r\n//------------------------\r\n//2nd way\r\n// let allBookObservable$ = new Observable(subscriber => {\r\n//     for(let book of allBooks){\r\n//                 subscriber.next(book);\r\n//             }\r\n// });\r\n//using all 3 methods of Observer Interface\r\n// let allBookObservable$ = new Observable(subscriber => {\r\n//     if(document.title != 'RxBookTracker')\r\n//     {\r\n//         subscriber.error('Incorrect page title');\r\n//     }\r\n//     for(let book of allBooks){\r\n//         subscriber.next(book);\r\n//     }\r\n//     setTimeout(()  => {\r\n//         subscriber.complete();\r\n//     },2000);\r\n//     return  () => console.log('Executing Teardown code');\r\n// });\r\n//using Observable.create instaed of new Observable\r\n// let allBookObservable$ =  Observable.create(subscriber => {\r\n//     if(document.title != 'RxBookTracker')\r\n//     {\r\n//         subscriber.error('Incorrect page title');\r\n//     }\r\n//     for(let book of allBooks){\r\n//         subscriber.next(book);\r\n//     }\r\n//     setTimeout(()  => {\r\n//         subscriber.complete();\r\n//     },2000);\r\n//     return  () => console.log('Executing Teardown code');\r\n// });\r\n// allBookObservable$.subscribe(book => console.log(book.title));\r\n//---------------------------------------\r\n//creating observer using \"of\" function\r\n//you can pass anything in omma separator values\r\n// let source1$ = of('hello', 10 ,true , allReaders[0].name);\r\n// source1$.subscribe(value => console.log(value));\r\n//creating observer using \"from\" function\r\n//You can pass the following things into \"from\" function\r\n//subscribable i.e. another observable\r\n//Promise\r\n//Array\r\n// let source2$ = from(allBooks);\r\n// source2$.subscribe(book => console.log(book.title));\r\n//-----------------------------------------\r\n//Combining two observables using concat\r\n// let source1$ = of('hello', 10 ,true , allReaders[0].name);\r\n// let source2$ = from(allBooks);\r\n// concat(source1$,source2$).subscribe(value => console.log(value));\r\n//-----------------------------\r\n//Handlng the DOM events using the Observables\r\n//using RxJs button event \"fromEvent\"\r\n// let button = document.getElementById('readersButton');\r\n//The values produced by the observables will be \r\n//javascript event object\r\n// fromEvent(button,  'click').subscribe(\r\n//     event => {\r\n//         console.log(event);\r\n//         let readersDiv = document.getElementById('readers');\r\n//         for(let reader of allReaders){\r\n//                 readersDiv.innerHTML += reader.name + '<br>'\r\n//         }\r\n//     });\r\n//--------------------------\r\n//making an ajax request using RxJs\r\n// let button = document.getElementById('readersButton');\r\n// fromEvent(button, 'click')\r\n//     .subscribe(event => {\r\n//         //server -> data -> readers\r\n//         ajax('/api/readers')\r\n//         .subscribe(ajaxResponse => {\r\n//             console.log(ajaxResponse);\r\n//             let readers = ajaxResponse.response;\r\n//             let readersDiv = document.getElementById('readers');\r\n//             for(let reader of readers){\r\n//                 readersDiv.innerHTML += reader.name + '<br>';\r\n//             }\r\n//         })\r\n//     });\r\n//#endregion \r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });