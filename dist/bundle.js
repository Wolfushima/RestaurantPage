/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createBar() {
    const barWrapper = document.createElement("div");
    const barHeader = document.createElement("h2");
    const barImagesContent = document.createElement("div");
    const barImage = document.createElement("div");

    barWrapper.classList.add("bar-wrapper");
    barImagesContent.classList.add("bar-images-content");
    barImage.classList.add("bar-image");

    barHeader.textContent = "We have a big selection in our bar"
    
    barWrapper.appendChild(barHeader)
    barWrapper.appendChild(barImagesContent)
    barImagesContent.appendChild(barImage)

    return barWrapper
}

function loadBar() {
    const main = document.querySelector("main");
    const barContent = document.createElement("div");

    barContent.classList.add("bar-content")
    barContent.dataset.tabContent = "";
    barContent.id = "bar";

    main.appendChild(barContent)
    barContent.appendChild(createBar())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadBar);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeadline() {
    const homeHeadline = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const a = document.createElement("a");
    const menuBtn = document.createElement("button");

    homeHeadline.classList.add("home-headline")
    menuBtn.classList.add("menu-btn")

    h1.textContent = "COME TRY THE BEST\nAND MOST DELICIOUS\nSTEAK IN TOWN";
    p.textContent = "Perfectly Cooked Every Time!";
    menuBtn.textContent = "ORDER NOW";

    a.href = "#";

    homeHeadline.appendChild(h1)
    homeHeadline.appendChild(p)
    homeHeadline.appendChild(a)
    a.appendChild(menuBtn)

    return homeHeadline
}

function createHomeImages() {
    const homeImagesContent = document.createElement("div");
    const qualitySteakImg = document.createElement("div");
    const barHomeImg = document.createElement("div");
    const specialtyImg = document.createElement("div");

    homeImagesContent.classList.add("home-images-content");
    qualitySteakImg.classList.add("quality-steak");
    barHomeImg.classList.add("bar-home");
    specialtyImg.classList.add("specialty");

    homeImagesContent.appendChild(qualitySteakImg)
    homeImagesContent.appendChild(barHomeImg)
    homeImagesContent.appendChild(specialtyImg)

    return homeImagesContent
}

function loadHome() {
    const main = document.querySelector("main");
    const homeContent = document.createElement("div");

    homeContent.classList.add("home-content")
    homeContent.classList.add("active")
    homeContent.dataset.tabContent = "";
    homeContent.id = "home";

    main.appendChild(homeContent)
    homeContent.appendChild(createHeadline())
    homeContent.appendChild(createHomeImages())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createSteakMenu() { 
    const steakMenu = document.createElement("div");
    const menuSteakHeader = document.createElement("h2");
    const steakImagesContent = document.createElement("div");
    const steak1 = document.createElement("div");
    const steak2 = document.createElement("div");
    const steak3 = document.createElement("div");
    const steak4 = document.createElement("div");
    const steak5 = document.createElement("div");
    const steak6 = document.createElement("div");

    steakMenu.classList.add("steak-menu");
    steakImagesContent.classList.add("steak-images-content");
    steak1.classList.add("steak1");
    steak2.classList.add("steak2");
    steak3.classList.add("steak3");
    steak4.classList.add("steak4");
    steak5.classList.add("steak5");
    steak6.classList.add("steak6");

    menuSteakHeader.textContent = "Steaks";

    steakMenu.appendChild(menuSteakHeader)
    steakMenu.appendChild(steakImagesContent)
    steakImagesContent.appendChild(steak1)
    steakImagesContent.appendChild(steak2)
    steakImagesContent.appendChild(steak3)
    steakImagesContent.appendChild(steak4)
    steakImagesContent.appendChild(steak5)
    steakImagesContent.appendChild(steak6)

    return steakMenu
}

function createSaladMenu() {
    const saladMenu = document.createElement("div");
    const menuSaladHeader = document.createElement("h2");
    const saladImagesContent = document.createElement("div");
    const salad1 = document.createElement("div");
    const salad2 = document.createElement("div");

    saladMenu.classList.add("salad-menu");
    saladImagesContent.classList.add("salad-images-content");
    salad1.classList.add("salad1");
    salad2.classList.add("salad2");

    menuSaladHeader.textContent = "Salads"
    
    saladMenu.appendChild(menuSaladHeader)
    saladMenu.appendChild(saladImagesContent)
    saladImagesContent.appendChild(salad1)
    saladImagesContent.appendChild(salad2)

    return saladMenu
}

function createDessertMenu() {
    const dessertMenu = document.createElement("div");
    const menuDessertHeader = document.createElement("h2");
    const dessertImagesContent = document.createElement("div");
    const dessert1 = document.createElement("div");
    const dessert2 = document.createElement("div");

    dessertMenu.classList.add("dessert-menu");
    dessertImagesContent.classList.add("dessert-images-content");
    dessert1.classList.add("dessert1");
    dessert2.classList.add("dessert2");

    menuDessertHeader.textContent = "Desserts"
    
    dessertMenu.appendChild(menuDessertHeader)
    dessertMenu.appendChild(dessertImagesContent)
    dessertImagesContent.appendChild(dessert1)
    dessertImagesContent.appendChild(dessert2)

    return dessertMenu
}

function loadMenu() {
    const main = document.querySelector("main");
    const menuContent = document.createElement("div");

    menuContent.classList.add("menu-content")
    menuContent.dataset.tabContent = "";
    menuContent.id = "menu";

    main.appendChild(menuContent)
    menuContent.appendChild(createSteakMenu())
    menuContent.appendChild(createSaladMenu())
    menuContent.appendChild(createDessertMenu())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createNavbar() {
    const nav = document.createElement("nav");
    const logoContent = document.createElement("div");
    const logoIcon = document.createElement("div");
    const h4 = document.createElement("h4");
    const ul = document.createElement("ul");
    const liHome = document.createElement("li");
    const liMenu = document.createElement("li");
    const liBar = document.createElement("li");
    const liContact = document.createElement("li");
    const aHome = document.createElement("a");
    const aMenu = document.createElement("a");
    const aBar = document.createElement("a");
    const aContact = document.createElement("a");

    logoContent.classList.add("logo-content")
    logoIcon.classList.add("logo-icon")
    ul.classList.add("nav-links")
    liHome.dataset.tabTarget = "#home";
    liMenu.dataset.tabTarget = "#menu";
    liBar.dataset.tabTarget = "#bar";
    liContact.dataset.tabTarget = "#contact";

    h4.textContent = "GREY'S WOLF";
    aHome.textContent = "HOME";
    aMenu.textContent = "MENU";
    aBar.textContent = "BAR";
    aContact.textContent = "CONTACT";

    aHome.href = "#";
    aMenu.href = "#";
    aBar.href = "#";
    aContact.href = "#";

    logoContent.appendChild(logoIcon)
    logoContent.appendChild(h4)
    nav.appendChild(logoContent)
    nav.appendChild(ul)
    ul.appendChild(liHome)
    ul.appendChild(liMenu)
    ul.appendChild(liBar)
    ul.appendChild(liContact)
    liHome.appendChild(aHome)
    liMenu.appendChild(aMenu)
    liBar.appendChild(aBar)
    liContact.appendChild(aContact)


    return nav
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNavbar);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar */ "./src/bar.js");










function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])())
    content.appendChild(main)
    
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_bar__WEBPACK_IMPORTED_MODULE_3__["default"])()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active")
        })
        target.classList.add("active")
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDL0J0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ3hEdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUM1RnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRTO0FBQ047QUFDQTtBQUNGOzs7Ozs7O0FBTzVCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsbURBQVk7QUFDcEM7QUFDQTtBQUNBLElBQUksa0RBQVE7QUFDWixJQUFJLGtEQUFRO0FBQ1osSUFBSSxpREFBTztBQUNYOztBQUVBLGlFQUFlLFdBQVc7Ozs7OztVQ3RCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsb0RBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9iYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQmFyKCkge1xuICAgIGNvbnN0IGJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBiYXJJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBiYXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBiYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJiYXItd3JhcHBlclwiKTtcbiAgICBiYXJJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJiYXItaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgYmFySW1hZ2UuY2xhc3NMaXN0LmFkZChcImJhci1pbWFnZVwiKTtcblxuICAgIGJhckhlYWRlci50ZXh0Q29udGVudCA9IFwiV2UgaGF2ZSBhIGJpZyBzZWxlY3Rpb24gaW4gb3VyIGJhclwiXG4gICAgXG4gICAgYmFyV3JhcHBlci5hcHBlbmRDaGlsZChiYXJIZWFkZXIpXG4gICAgYmFyV3JhcHBlci5hcHBlbmRDaGlsZChiYXJJbWFnZXNDb250ZW50KVxuICAgIGJhckltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoYmFySW1hZ2UpXG5cbiAgICByZXR1cm4gYmFyV3JhcHBlclxufVxuXG5mdW5jdGlvbiBsb2FkQmFyKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBiYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGJhckNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJhci1jb250ZW50XCIpXG4gICAgYmFyQ29udGVudC5kYXRhc2V0LnRhYkNvbnRlbnQgPSBcIlwiO1xuICAgIGJhckNvbnRlbnQuaWQgPSBcImJhclwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChiYXJDb250ZW50KVxuICAgIGJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFyKCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCYXI7IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGxpbmUoKSB7XG4gICAgY29uc3QgaG9tZUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgaG9tZUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRsaW5lXCIpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIilcblxuICAgIGgxLnRleHRDb250ZW50ID0gXCJDT01FIFRSWSBUSEUgQkVTVFxcbkFORCBNT1NUIERFTElDSU9VU1xcblNURUFLIElOIFRPV05cIjtcbiAgICBwLnRleHRDb250ZW50ID0gXCJQZXJmZWN0bHkgQ29va2VkIEV2ZXJ5IFRpbWUhXCI7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiT1JERVIgTk9XXCI7XG5cbiAgICBhLmhyZWYgPSBcIiNcIjtcblxuICAgIGhvbWVIZWFkbGluZS5hcHBlbmRDaGlsZChoMSlcbiAgICBob21lSGVhZGxpbmUuYXBwZW5kQ2hpbGQocClcbiAgICBob21lSGVhZGxpbmUuYXBwZW5kQ2hpbGQoYSlcbiAgICBhLmFwcGVuZENoaWxkKG1lbnVCdG4pXG5cbiAgICByZXR1cm4gaG9tZUhlYWRsaW5lXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVJbWFnZXMoKSB7XG4gICAgY29uc3QgaG9tZUltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHF1YWxpdHlTdGVha0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYmFySG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3BlY2lhbHR5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGhvbWVJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLWltYWdlcy1jb250ZW50XCIpO1xuICAgIHF1YWxpdHlTdGVha0ltZy5jbGFzc0xpc3QuYWRkKFwicXVhbGl0eS1zdGVha1wiKTtcbiAgICBiYXJIb21lSW1nLmNsYXNzTGlzdC5hZGQoXCJiYXItaG9tZVwiKTtcbiAgICBzcGVjaWFsdHlJbWcuY2xhc3NMaXN0LmFkZChcInNwZWNpYWx0eVwiKTtcblxuICAgIGhvbWVJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHF1YWxpdHlTdGVha0ltZylcbiAgICBob21lSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChiYXJIb21lSW1nKVxuICAgIGhvbWVJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHNwZWNpYWx0eUltZylcblxuICAgIHJldHVybiBob21lSW1hZ2VzQ29udGVudFxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGVudFwiKVxuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBob21lQ29udGVudC5kYXRhc2V0LnRhYkNvbnRlbnQgPSBcIlwiO1xuICAgIGhvbWVDb250ZW50LmlkID0gXCJob21lXCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRsaW5lKCkpXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUltYWdlcygpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVTdGVha01lbnUoKSB7IFxuICAgIGNvbnN0IHN0ZWFrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudVN0ZWFrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IHN0ZWFrSW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzdGVha01lbnUuY2xhc3NMaXN0LmFkZChcInN0ZWFrLW1lbnVcIik7XG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzdGVhay1pbWFnZXMtY29udGVudFwiKTtcbiAgICBzdGVhazEuY2xhc3NMaXN0LmFkZChcInN0ZWFrMVwiKTtcbiAgICBzdGVhazIuY2xhc3NMaXN0LmFkZChcInN0ZWFrMlwiKTtcbiAgICBzdGVhazMuY2xhc3NMaXN0LmFkZChcInN0ZWFrM1wiKTtcbiAgICBzdGVhazQuY2xhc3NMaXN0LmFkZChcInN0ZWFrNFwiKTtcbiAgICBzdGVhazUuY2xhc3NMaXN0LmFkZChcInN0ZWFrNVwiKTtcbiAgICBzdGVhazYuY2xhc3NMaXN0LmFkZChcInN0ZWFrNlwiKTtcblxuICAgIG1lbnVTdGVha0hlYWRlci50ZXh0Q29udGVudCA9IFwiU3RlYWtzXCI7XG5cbiAgICBzdGVha01lbnUuYXBwZW5kQ2hpbGQobWVudVN0ZWFrSGVhZGVyKVxuICAgIHN0ZWFrTWVudS5hcHBlbmRDaGlsZChzdGVha0ltYWdlc0NvbnRlbnQpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrMSlcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWsyKVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazMpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrNClcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWs1KVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazYpXG5cbiAgICByZXR1cm4gc3RlYWtNZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNhbGFkTWVudSgpIHtcbiAgICBjb25zdCBzYWxhZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVTYWxhZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBzYWxhZEltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNhbGFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2FsYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNhbGFkTWVudS5jbGFzc0xpc3QuYWRkKFwic2FsYWQtbWVudVwiKTtcbiAgICBzYWxhZEltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNhbGFkLWltYWdlcy1jb250ZW50XCIpO1xuICAgIHNhbGFkMS5jbGFzc0xpc3QuYWRkKFwic2FsYWQxXCIpO1xuICAgIHNhbGFkMi5jbGFzc0xpc3QuYWRkKFwic2FsYWQyXCIpO1xuXG4gICAgbWVudVNhbGFkSGVhZGVyLnRleHRDb250ZW50ID0gXCJTYWxhZHNcIlxuICAgIFxuICAgIHNhbGFkTWVudS5hcHBlbmRDaGlsZChtZW51U2FsYWRIZWFkZXIpXG4gICAgc2FsYWRNZW51LmFwcGVuZENoaWxkKHNhbGFkSW1hZ2VzQ29udGVudClcbiAgICBzYWxhZEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2FsYWQxKVxuICAgIHNhbGFkSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzYWxhZDIpXG5cbiAgICByZXR1cm4gc2FsYWRNZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc3NlcnRNZW51KCkge1xuICAgIGNvbnN0IGRlc3NlcnRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51RGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBkZXNzZXJ0SW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzc2VydDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc3NlcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGRlc3NlcnRNZW51LmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0LW1lbnVcIik7XG4gICAgZGVzc2VydEltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQtaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgZGVzc2VydDEuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQxXCIpO1xuICAgIGRlc3NlcnQyLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0MlwiKTtcblxuICAgIG1lbnVEZXNzZXJ0SGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiXG4gICAgXG4gICAgZGVzc2VydE1lbnUuYXBwZW5kQ2hpbGQobWVudURlc3NlcnRIZWFkZXIpXG4gICAgZGVzc2VydE1lbnUuYXBwZW5kQ2hpbGQoZGVzc2VydEltYWdlc0NvbnRlbnQpXG4gICAgZGVzc2VydEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydDEpXG4gICAgZGVzc2VydEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydDIpXG5cbiAgICByZXR1cm4gZGVzc2VydE1lbnVcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIilcbiAgICBtZW51Q29udGVudC5kYXRhc2V0LnRhYkNvbnRlbnQgPSBcIlwiO1xuICAgIG1lbnVDb250ZW50LmlkID0gXCJtZW51XCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVN0ZWFrTWVudSgpKVxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNhbGFkTWVudSgpKVxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURlc3NlcnRNZW51KCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IGxvZ29Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsb2dvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGFCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgbG9nb0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGVudFwiKVxuICAgIGxvZ29JY29uLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWljb25cIilcbiAgICB1bC5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpXG4gICAgbGlIb21lLmRhdGFzZXQudGFiVGFyZ2V0ID0gXCIjaG9tZVwiO1xuICAgIGxpTWVudS5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI21lbnVcIjtcbiAgICBsaUJhci5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI2JhclwiO1xuICAgIGxpQ29udGFjdC5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI2NvbnRhY3RcIjtcblxuICAgIGg0LnRleHRDb250ZW50ID0gXCJHUkVZJ1MgV09MRlwiO1xuICAgIGFIb21lLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gICAgYU1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBhQmFyLnRleHRDb250ZW50ID0gXCJCQVJcIjtcbiAgICBhQ29udGFjdC50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuXG4gICAgYUhvbWUuaHJlZiA9IFwiI1wiO1xuICAgIGFNZW51LmhyZWYgPSBcIiNcIjtcbiAgICBhQmFyLmhyZWYgPSBcIiNcIjtcbiAgICBhQ29udGFjdC5ocmVmID0gXCIjXCI7XG5cbiAgICBsb2dvQ29udGVudC5hcHBlbmRDaGlsZChsb2dvSWNvbilcbiAgICBsb2dvQ29udGVudC5hcHBlbmRDaGlsZChoNClcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nb0NvbnRlbnQpXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpSG9tZSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaU1lbnUpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlCYXIpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlDb250YWN0KVxuICAgIGxpSG9tZS5hcHBlbmRDaGlsZChhSG9tZSlcbiAgICBsaU1lbnUuYXBwZW5kQ2hpbGQoYU1lbnUpXG4gICAgbGlCYXIuYXBwZW5kQ2hpbGQoYUJhcilcbiAgICBsaUNvbnRhY3QuYXBwZW5kQ2hpbGQoYUNvbnRhY3QpXG5cblxuICAgIHJldHVybiBuYXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmF2YmFyOyIsImltcG9ydCBjcmVhdGVOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQmFyIGZyb20gXCIuL2JhclwiO1xuXG5cblxuXG5cblxuZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbiAgICBcbiAgICBsb2FkSG9tZSgpXG4gICAgbG9hZE1lbnUoKVxuICAgIGxvYWRCYXIoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0V2Vic2l0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0V2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCJcblxuaW5pdFdlYnNpdGUoKTtcblxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWItdGFyZ2V0XVwiKTtcbmNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhYi1jb250ZW50XVwiKTtcblxudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiLmRhdGFzZXQudGFiVGFyZ2V0KTtcbiAgICAgICAgdGFiQ29udGVudHMuZm9yRWFjaCh0YWJDb250ZW50ID0+IHtcbiAgICAgICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==