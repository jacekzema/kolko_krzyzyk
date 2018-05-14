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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//import hello from './js/hello.js';\r\n//import './scss/style.scss';\r\n\r\n// console.log(\"dziala\");\r\n// alert(\"ale jestem zajeb  ddddisty\");\r\n// hello('Jacek');\r\n\r\n\r\n//domyśle parametry funckji ES6\r\n//\r\n// function showData(name='Jacek',language='JS') {\r\n//     console.log(name + ' codes in: ' + language);\r\n// }\r\n// showData(\"Adam\");\r\n\r\n// Funkcje skrzałkowe\r\n\r\n// function abc (name=\"Nizio\",language=\"Jsie\")\r\n// {\r\n//     console.log(name +\" kodzi w: \"+ language);\r\n// }\r\n//\r\n// const fun = (name = \"Bazi\", language=\"C++\") => console.log(name+\" kodzi w: \"+language);\r\n//\r\n// abc(\"moja\",\"stara\");\r\n// fun(\"atutaj\",\"juz nie\");\r\n//\r\n// const numbers = [5,10,15,199];\r\n//\r\n//\r\n// const NewArr = numbers.map(number =>  number *2);\r\n//\r\n// console.log(NewArr);\r\n\r\nwindow.onload = function () {\r\n\r\n    window.addEventListener('resize',dynamiczna_zmiana_okna);\r\n    const pola = document.getElementsByClassName('pole');\r\n    var ilosc_pol = pola.length;\r\n\r\n    var dodajznak = function(){\r\n        this.innerHTML = 'X';\r\n    };\r\n\r\n\r\n    for (var j=0; j <=pola.length-1;j++ )\r\n    {\r\n        pola[j].addEventListener('click',dodajznak, false);\r\n    };\r\n\r\n\r\n    \r\n    function dynamiczna_zmiana_okna () {\r\n        var pola = document.getElementsByClassName('pole');\r\n        var szerokosc = document.getElementById('plansza').clientWidth;\r\n        document.getElementById('plansza').style.height = szerokosc+\"px\";\r\n\r\n        var szerokosc_pola = pola[0].clientHeight;\r\n\r\n        for (let i = 0; i <= (ilosc_pol-1) ; i++ )\r\n        {\r\n            pola[i].style.fontSize = szerokosc_pola *0.75 +\"px\";\r\n            pola[i].style.lineHeight = szerokosc_pola+\"px\";\r\n\r\n        };\r\n};\r\n    dynamiczna_zmiana_okna();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });