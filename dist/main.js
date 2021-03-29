/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend/weatherapi.js":
/*!***********************************!*\
  !*** ./src/backend/weatherapi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(city) {\r\n  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c3727ba2570a1fd7f92097742a63699`)\r\n\r\n  if (response.status !== 200) {\r\n    throw new Error('Data cannot be fetched')\r\n  }\r\n  \r\n  const weather = await response.json()\r\n  return weather;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/backend/weatherapi.js?");

/***/ }),

/***/ "./src/frontend/weather.js":
/*!*********************************!*\
  !*** ./src/frontend/weather.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\n/* harmony import */ var _backend_weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/weatherapi */ \"./src/backend/weatherapi.js\");\n\r\n\r\nfunction displayWeather() {\r\n  const city = document.getElementById('city').value\r\n  const submit = document.getElementById('submit')\r\n  submit.onclick = () => {\r\n    ;(0,_backend_weatherapi__WEBPACK_IMPORTED_MODULE_0__.default)(city)\r\n    .then(weather => {\r\n      const html = `\r\n      <p>Weather: ${weather.weather[0].description}</p>\r\n      <p>Temperature: ${weather.main.temp} °F</p>\r\n      <p>Min Temperature: ${weather.main.temp_min} °F</p>\r\n      <p>Max Temperature: ${weather.main.temp_max} °F</p>\r\n      <p>Humidity: ${weather.main.humidity}%</p>\r\n      `\r\n      document.getElementById('container').insertAdjacentHTML('beforeend', html)\r\n\r\n    })\r\n    .catch(error => {\r\n      console.error(error.message)\r\n      const html = `\r\n        <p>City does not exist</p>\r\n      `\r\n      document.getElementById('container').insertAdjacentHTML('beforeend', html)\r\n    });\r\n  }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/frontend/weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontend_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend/weather */ \"./src/frontend/weather.js\");\n// import getWeather from './backend/weatherapi'\r\n\r\n// getWeather('London')\r\n//   .then(data => console.log(data))\r\n//   .catch(error => console.error(error.message));\r\n\r\n\r\n\r\n(0,_frontend_weather__WEBPACK_IMPORTED_MODULE_0__.default)()\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;