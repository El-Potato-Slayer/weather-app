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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(city) {\n  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2c3727ba2570a1fd7f92097742a63699`);\n\n  if (response.status !== 200) {\n    throw new Error('Data cannot be fetched');\n  }\n\n  const weather = await response.json();\n  return weather;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/backend/weatherapi.js?");

/***/ }),

/***/ "./src/frontend/helpers.js":
/*!*********************************!*\
  !*** ./src/frontend/helpers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeChildren)\n/* harmony export */ });\nfunction removeChildren(parent) {\n  while (parent.firstChild) {\n    parent.firstChild.remove();\n  }\n}\n\n//# sourceURL=webpack://weather-app/./src/frontend/helpers.js?");

/***/ }),

/***/ "./src/frontend/weather.js":
/*!*********************************!*\
  !*** ./src/frontend/weather.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayWeather)\n/* harmony export */ });\n/* harmony import */ var _backend_weatherapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/weatherapi */ \"./src/backend/weatherapi.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/frontend/helpers.js\");\n\n\n\nlet movedFlag = 0;\n\nfunction kelvinToCelsius(kelvin) {\n  return Math.round(kelvin - 273.15);\n}\n\nfunction kelvinToFahrenheit(kelvin) {\n  return Math.round((kelvin - 273.15) * (9 / 5) + 32);\n}\n\nfunction weatherContent(weather) {\n  return `\n    <p class=\"capitalize text-5xl mb-4\">${weather.weather[0].description}</p>\n    <p class=\"temp text-4xl\">${kelvinToFahrenheit(weather.main.temp)} °F / ${kelvinToCelsius(weather.main.temp)} °C</p>\n    <p class=\"min-temp\">Min Temperature: ${kelvinToFahrenheit(weather.main.temp_min)} °F / ${kelvinToCelsius(weather.main.temp_min)} °C</p>\n    <p class=\"max-temp\">Max Temperature: ${kelvinToFahrenheit(weather.main.temp_max)} °F / ${kelvinToCelsius(weather.main.temp_max)} °C</p>\n    <p>Humidity: ${weather.main.humidity}%</p>\n  `;\n}\n\nfunction moveFormRight(form) {\n  form.style.transform = 'translate(100%, -50%)';\n}\n\nfunction moveContentRight(content) {\n  content.style.left = '10%';\n  content.style.opacity = '100';\n}\n\nfunction assignBgImage(weather) {\n  const container = document.getElementById('container');\n  if (weather === 'Thunderstorm') {\n    container.style.backgroundImage = \"url('./images/thunderstorm3.jpg')\";\n  } else if (weather === 'Rain' || weather === 'Drizzle') {\n    container.style.backgroundImage = \"url('./images/rain5.jpg')\";\n  } else if (weather === 'Clouds') {\n    container.style.backgroundImage = \"url('./images/cloudy2.jpg')\";\n  } else if (weather === 'Snow') {\n    container.style.backgroundImage = \"url('./images/snow.jpg')\";\n  } else if (weather === 'Fog') {\n    container.style.backgroundImage = \"url('./images/fog.jpg')\";\n  }else {\n    container.style.backgroundImage = \"url('./images/clear.jpg')\";\n  }\n}\n\nfunction displayWeather() {\n  const form = document.querySelector('form');\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const weatherContainer = document.getElementById('weather-info');\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.default)(weatherContainer);\n    const city = document.getElementById('city').value;\n\n    (0,_backend_weatherapi__WEBPACK_IMPORTED_MODULE_0__.default)(city.replaceAll(' ', '+'))\n      .then((weather) => {\n        weatherContainer.insertAdjacentHTML('afterbegin', weatherContent(weather));\n        assignBgImage(weather.weather[0].main);\n        moveFormRight(form);\n        moveContentRight(document.getElementById('weather-info'));\n        movedFlag = 1;\n      })\n      .catch(() => {\n        if (movedFlag === 0) {\n          document.getElementById('container').insertAdjacentHTML('afterend', '<p class=\"text-white absolute error text-2xl\">Enter correct city</p>');\n        } else {\n          weatherContainer.insertAdjacentHTML('afterbegin', '<p class=\"text-2xl\">Enter correct city</p>');\n        }\n      });\n    const firstError = document.querySelector('p.error');\n    if (firstError) {\n      firstError.remove();\n    }\n  });\n}\n\n//# sourceURL=webpack://weather-app/./src/frontend/weather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontend_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend/weather */ \"./src/frontend/weather.js\");\n\n\n(0,_frontend_weather__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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