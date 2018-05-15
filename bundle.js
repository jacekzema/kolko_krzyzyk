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

eval("//import './scss/style.scss';\r\n\r\nvar zajete_pola  = [0,0,0,0,0,0,0,0,0]; //tablica która odpowiada za zajęte miejsca 1 - X, 2 - O\r\nconst pola = document.getElementsByClassName('pole');\r\nvar ilosc_pol = pola.length;\r\nvar prawda_fausz = true;\r\nvar tura = 0;\r\nvar punktyX = 0;\r\nvar punktyO = 0;\r\nvar pomocnicza_do_konca_tury = 0;\r\n\r\n\r\nfunction dodajznak() {\r\n    if(prawda_fausz == true)\r\n    {\r\n        this.innerHTML = 'X';\r\n        this.removeEventListener(\"click\", dodajznak);\r\n        zajete_pola[this.id] = 1;\r\n        sprawdz_wygrana();\r\n        prawda_fausz = false;\r\n    }\r\n    else\r\n    {\r\n        this.innerHTML = 'O';\r\n        this.removeEventListener(\"click\", dodajznak);\r\n        zajete_pola[this.id] = 2;\r\n        sprawdz_wygrana();\r\n        prawda_fausz = true;\r\n    }\r\n\r\n};\r\n\r\nfunction dynamiczna_zmiana_okna () {\r\n    var pola = document.getElementsByClassName('pole');\r\n    var szerokosc = document.getElementById('plansza').clientWidth;\r\n    document.getElementById('plansza').style.height = szerokosc+\"px\";\r\n\r\n    var szerokosc_pola = pola[0].clientHeight;\r\n\r\n    for (let i = 0; i <= (ilosc_pol-1) ; i++ )\r\n    {\r\n        pola[i].style.fontSize = szerokosc_pola *0.75 +\"px\";\r\n        pola[i].style.lineHeight = szerokosc_pola+\"px\";\r\n\r\n    };\r\n\r\n};\r\n\r\nfunction sprawdz_wygrana(){\r\n    tura++;\r\n    if(zajete_pola[0]==1 && zajete_pola[1]==1 && zajete_pola[2]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n    if(zajete_pola[3]==1 && zajete_pola[4]==1 && zajete_pola[5]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n    if(zajete_pola[6]==1 && zajete_pola[7]==1 && zajete_pola[8]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n    if(zajete_pola[0]==1 && zajete_pola[3]==1 && zajete_pola[6]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n    if(zajete_pola[1]==1 && zajete_pola[4]==1 && zajete_pola[7]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n    if(zajete_pola[2]==1 && zajete_pola[5]==1 && zajete_pola[8]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n    if(zajete_pola[0]==1 && zajete_pola[4]==1 && zajete_pola[8]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n    if(zajete_pola[2]==1 && zajete_pola[4]==1 && zajete_pola[6]==1)\r\n    {\r\n        dodaj_punkty('X');\r\n    };\r\n\r\n\r\n    if(zajete_pola[0]==2 && zajete_pola[1]==2 && zajete_pola[2]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n    if(zajete_pola[3]==2 && zajete_pola[4]==2 && zajete_pola[5]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n    if(zajete_pola[6]==2 && zajete_pola[7]==2 && zajete_pola[8]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n    if(zajete_pola[0]==2 && zajete_pola[3]==2 && zajete_pola[6]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n    if(zajete_pola[1]==2 && zajete_pola[4]==2 && zajete_pola[7]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n    if(zajete_pola[2]==2 && zajete_pola[5]==2 && zajete_pola[8]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n    if(zajete_pola[0]==2 && zajete_pola[4]==2 && zajete_pola[8]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n    if(zajete_pola[2]==2 && zajete_pola[4]==2 && zajete_pola[6]==2)\r\n    {\r\n        dodaj_punkty(\"1\");\r\n    };\r\n\r\n    console.log(tura);\r\n    console.log(pomocnicza_do_konca_tury);\r\n\r\n    if (tura ==9 && pomocnicza_do_konca_tury == 0)\r\n    {\r\n        alert('Remis!');\r\n    }\r\n\r\n};\r\n\r\nfunction dodawanie_nasluchwania() {\r\n\r\n    for (var j=0; j <=pola.length-1;j++ )\r\n    {\r\n        pola[j].addEventListener('click', dodajznak, false);\r\n        pola[j].innerHTML = \"\";\r\n        pola[j].id = j;\r\n    };\r\n\r\n};\r\n\r\nfunction dodaj_punkty(zmienna){\r\n    if (zmienna==\"X\")\r\n    {\r\n        punktyX++;\r\n        var element =  document.getElementById(\"pktx\");\r\n        element.innerHTML = punktyX;\r\n        blokuj_dodawannie();\r\n    }\r\n    if (zmienna==\"1\")\r\n    {\r\n        punktyO++;\r\n        var element =  document.getElementById(\"pktO\");\r\n        element.innerHTML = punktyO;\r\n        blokuj_dodawannie();\r\n    }\r\n    pomocnicza_do_konca_tury = 1;\r\n\r\n}\r\n\r\nfunction blokuj_dodawannie() {\r\n    for (var j=0; j <=pola.length-1;j++ )\r\n    {\r\n        pola[j].removeEventListener('click', dodajznak);\r\n    };\r\n\r\n}\r\n\r\nfunction jeszcze_raz() {\r\n    prawda_fausz = true;\r\n    tura = 0;\r\n    pomocnicza_do_konca_tury = 0;\r\n    zajete_pola  = [0,0,0,0,0,0,0,0,0];\r\n    dodawanie_nasluchwania();\r\n}\r\n\r\nwindow.onload = function () {\r\n\r\n    window.addEventListener('resize',dynamiczna_zmiana_okna);\r\n    document.getElementById('reset').addEventListener('click',jeszcze_raz);\r\n    dodawanie_nasluchwania();\r\n    dynamiczna_zmiana_okna();\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });