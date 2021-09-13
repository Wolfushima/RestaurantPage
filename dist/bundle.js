/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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









function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])())
    content.appendChild(main)
    
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN4RHZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDNUZ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRTO0FBQ047QUFDQTs7Ozs7OztBQU85QjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1EQUFZO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTtBQUNaOztBQUVBLGlFQUFlLFdBQVc7Ozs7OztVQ3BCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsb0RBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhlYWRsaW5lKCkge1xuICAgIGNvbnN0IGhvbWVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGhvbWVIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkbGluZVwiKVxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpXG5cbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQ09NRSBUUlkgVEhFIEJFU1RcXG5BTkQgTU9TVCBERUxJQ0lPVVNcXG5TVEVBSyBJTiBUT1dOXCI7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiUGVyZmVjdGx5IENvb2tlZCBFdmVyeSBUaW1lIVwiO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk9SREVSIE5PV1wiO1xuXG4gICAgYS5ocmVmID0gXCIjXCI7XG5cbiAgICBob21lSGVhZGxpbmUuYXBwZW5kQ2hpbGQoaDEpXG4gICAgaG9tZUhlYWRsaW5lLmFwcGVuZENoaWxkKHApXG4gICAgaG9tZUhlYWRsaW5lLmFwcGVuZENoaWxkKGEpXG4gICAgYS5hcHBlbmRDaGlsZChtZW51QnRuKVxuXG4gICAgcmV0dXJuIGhvbWVIZWFkbGluZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lSW1hZ2VzKCkge1xuICAgIGNvbnN0IGhvbWVJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBxdWFsaXR5U3RlYWtJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJhckhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNwZWNpYWx0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBob21lSW1hZ2VzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWFnZXMtY29udGVudFwiKTtcbiAgICBxdWFsaXR5U3RlYWtJbWcuY2xhc3NMaXN0LmFkZChcInF1YWxpdHktc3RlYWtcIik7XG4gICAgYmFySG9tZUltZy5jbGFzc0xpc3QuYWRkKFwiYmFyLWhvbWVcIik7XG4gICAgc3BlY2lhbHR5SW1nLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsdHlcIik7XG5cbiAgICBob21lSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChxdWFsaXR5U3RlYWtJbWcpXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoYmFySG9tZUltZylcbiAgICBob21lSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzcGVjaWFsdHlJbWcpXG5cbiAgICByZXR1cm4gaG9tZUltYWdlc0NvbnRlbnRcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRlbnRcIilcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgaG9tZUNvbnRlbnQuZGF0YXNldC50YWJDb250ZW50ID0gXCJcIjtcbiAgICBob21lQ29udGVudC5pZCA9IFwiaG9tZVwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lQ29udGVudClcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkbGluZSgpKVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVJbWFnZXMoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gY3JlYXRlU3RlYWtNZW51KCkgeyBcbiAgICBjb25zdCBzdGVha01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVTdGVha0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBzdGVha0ltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc3RlYWtNZW51LmNsYXNzTGlzdC5hZGQoXCJzdGVhay1tZW51XCIpO1xuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic3RlYWstaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgc3RlYWsxLmNsYXNzTGlzdC5hZGQoXCJzdGVhazFcIik7XG4gICAgc3RlYWsyLmNsYXNzTGlzdC5hZGQoXCJzdGVhazJcIik7XG4gICAgc3RlYWszLmNsYXNzTGlzdC5hZGQoXCJzdGVhazNcIik7XG4gICAgc3RlYWs0LmNsYXNzTGlzdC5hZGQoXCJzdGVhazRcIik7XG4gICAgc3RlYWs1LmNsYXNzTGlzdC5hZGQoXCJzdGVhazVcIik7XG4gICAgc3RlYWs2LmNsYXNzTGlzdC5hZGQoXCJzdGVhazZcIik7XG5cbiAgICBtZW51U3RlYWtIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN0ZWFrc1wiO1xuXG4gICAgc3RlYWtNZW51LmFwcGVuZENoaWxkKG1lbnVTdGVha0hlYWRlcilcbiAgICBzdGVha01lbnUuYXBwZW5kQ2hpbGQoc3RlYWtJbWFnZXNDb250ZW50KVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazEpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrMilcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWszKVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazQpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrNSlcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWs2KVxuXG4gICAgcmV0dXJuIHN0ZWFrTWVudVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTYWxhZE1lbnUoKSB7XG4gICAgY29uc3Qgc2FsYWRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51U2FsYWRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3Qgc2FsYWRJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzYWxhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNhbGFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzYWxhZE1lbnUuY2xhc3NMaXN0LmFkZChcInNhbGFkLW1lbnVcIik7XG4gICAgc2FsYWRJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzYWxhZC1pbWFnZXMtY29udGVudFwiKTtcbiAgICBzYWxhZDEuY2xhc3NMaXN0LmFkZChcInNhbGFkMVwiKTtcbiAgICBzYWxhZDIuY2xhc3NMaXN0LmFkZChcInNhbGFkMlwiKTtcblxuICAgIG1lbnVTYWxhZEhlYWRlci50ZXh0Q29udGVudCA9IFwiU2FsYWRzXCJcbiAgICBcbiAgICBzYWxhZE1lbnUuYXBwZW5kQ2hpbGQobWVudVNhbGFkSGVhZGVyKVxuICAgIHNhbGFkTWVudS5hcHBlbmRDaGlsZChzYWxhZEltYWdlc0NvbnRlbnQpXG4gICAgc2FsYWRJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHNhbGFkMSlcbiAgICBzYWxhZEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2FsYWQyKVxuXG4gICAgcmV0dXJuIHNhbGFkTWVudVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0TWVudSgpIHtcbiAgICBjb25zdCBkZXNzZXJ0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudURlc3NlcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgZGVzc2VydEltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc3NlcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNzZXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkZXNzZXJ0TWVudS5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydC1tZW51XCIpO1xuICAgIGRlc3NlcnRJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0LWltYWdlcy1jb250ZW50XCIpO1xuICAgIGRlc3NlcnQxLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0MVwiKTtcbiAgICBkZXNzZXJ0Mi5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydDJcIik7XG5cbiAgICBtZW51RGVzc2VydEhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIlxuICAgIFxuICAgIGRlc3NlcnRNZW51LmFwcGVuZENoaWxkKG1lbnVEZXNzZXJ0SGVhZGVyKVxuICAgIGRlc3NlcnRNZW51LmFwcGVuZENoaWxkKGRlc3NlcnRJbWFnZXNDb250ZW50KVxuICAgIGRlc3NlcnRJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnQxKVxuICAgIGRlc3NlcnRJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnQyKVxuXG4gICAgcmV0dXJuIGRlc3NlcnRNZW51XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250ZW50XCIpXG4gICAgbWVudUNvbnRlbnQuZGF0YXNldC50YWJDb250ZW50ID0gXCJcIjtcbiAgICBtZW51Q29udGVudC5pZCA9IFwibWVudVwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGVudClcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTdGVha01lbnUoKSlcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTYWxhZE1lbnUoKSlcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0TWVudSgpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBsb2dvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9nb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgYU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgYUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGxvZ29Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJsb2dvLWNvbnRlbnRcIilcbiAgICBsb2dvSWNvbi5jbGFzc0xpc3QuYWRkKFwibG9nby1pY29uXCIpXG4gICAgdWwuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKVxuICAgIGxpSG9tZS5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI2hvbWVcIjtcbiAgICBsaU1lbnUuZGF0YXNldC50YWJUYXJnZXQgPSBcIiNtZW51XCI7XG4gICAgbGlCYXIuZGF0YXNldC50YWJUYXJnZXQgPSBcIiNiYXJcIjtcbiAgICBsaUNvbnRhY3QuZGF0YXNldC50YWJUYXJnZXQgPSBcIiNjb250YWN0XCI7XG5cbiAgICBoNC50ZXh0Q29udGVudCA9IFwiR1JFWSdTIFdPTEZcIjtcbiAgICBhSG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICAgIGFNZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgYUJhci50ZXh0Q29udGVudCA9IFwiQkFSXCI7XG4gICAgYUNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcblxuICAgIGFIb21lLmhyZWYgPSBcIiNcIjtcbiAgICBhTWVudS5ocmVmID0gXCIjXCI7XG4gICAgYUJhci5ocmVmID0gXCIjXCI7XG4gICAgYUNvbnRhY3QuaHJlZiA9IFwiI1wiO1xuXG4gICAgbG9nb0NvbnRlbnQuYXBwZW5kQ2hpbGQobG9nb0ljb24pXG4gICAgbG9nb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDQpXG4gICAgbmF2LmFwcGVuZENoaWxkKGxvZ29Db250ZW50KVxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bClcbiAgICB1bC5hcHBlbmRDaGlsZChsaUhvbWUpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlNZW51KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQmFyKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQ29udGFjdClcbiAgICBsaUhvbWUuYXBwZW5kQ2hpbGQoYUhvbWUpXG4gICAgbGlNZW51LmFwcGVuZENoaWxkKGFNZW51KVxuICAgIGxpQmFyLmFwcGVuZENoaWxkKGFCYXIpXG4gICAgbGlDb250YWN0LmFwcGVuZENoaWxkKGFDb250YWN0KVxuXG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdmJhcjsiLCJpbXBvcnQgY3JlYXRlTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5cblxuXG5cblxuXG5mdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxuICAgIFxuICAgIGxvYWRIb21lKClcbiAgICBsb2FkTWVudSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRXZWJzaXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIlxuXG5pbml0V2Vic2l0ZSgpO1xuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhYi10YXJnZXRdXCIpO1xuY29uc3QgdGFiQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFiLWNvbnRlbnRdXCIpO1xuXG50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWIuZGF0YXNldC50YWJUYXJnZXQpO1xuICAgICAgICB0YWJDb250ZW50cy5mb3JFYWNoKHRhYkNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9