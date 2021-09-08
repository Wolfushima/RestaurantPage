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

    main.appendChild(homeContent)
    homeContent.appendChild(createHeadline())
    homeContent.appendChild(createHomeImages())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

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
    const div = document.createElement("div");
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

    div.classList.add("logo")
    ul.classList.add("nav-links")

    h4.textContent = "MEATY MEAT";
    aHome.textContent = "HOME";
    aMenu.textContent = "MENU";
    aBar.textContent = "BAR";
    aContact.textContent = "CONTACT";

    aHome.href = "#";
    aMenu.href = "#";
    aBar.href = "#";
    aContact.href = "#";

    div.appendChild(h4)
    nav.appendChild(div)
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



function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])())
    content.appendChild(main)
    
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDcER2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNTO0FBQ047O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsbURBQVk7QUFDcEM7QUFDQTtBQUNBLElBQUksa0RBQVE7QUFDWjs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUNiMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsb0RBQVcsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhlYWRsaW5lKCkge1xuICAgIGNvbnN0IGhvbWVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGhvbWVIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkbGluZVwiKVxuXG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkNPTUUgVFJZIFRIRSBCRVNUXFxuQU5EIE1PU1QgREVMSUNJT1VTXFxuU1RFQUsgSU4gVE9XTlwiO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIlBlcmZlY3RseSBDb29rZWQgRXZlcnkgVGltZSFcIjtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJPUkRFUiBOT1dcIjtcblxuICAgIGEuaHJlZiA9IFwiI1wiO1xuXG4gICAgaG9tZUhlYWRsaW5lLmFwcGVuZENoaWxkKGgxKVxuICAgIGhvbWVIZWFkbGluZS5hcHBlbmRDaGlsZChwKVxuICAgIGhvbWVIZWFkbGluZS5hcHBlbmRDaGlsZChhKVxuICAgIGEuYXBwZW5kQ2hpbGQobWVudUJ0bilcblxuICAgIHJldHVybiBob21lSGVhZGxpbmVcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZUltYWdlcygpIHtcbiAgICBjb25zdCBob21lSW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcXVhbGl0eVN0ZWFrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBiYXJIb21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzcGVjaWFsdHlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgcXVhbGl0eVN0ZWFrSW1nLmNsYXNzTGlzdC5hZGQoXCJxdWFsaXR5LXN0ZWFrXCIpO1xuICAgIGJhckhvbWVJbWcuY2xhc3NMaXN0LmFkZChcImJhci1ob21lXCIpO1xuICAgIHNwZWNpYWx0eUltZy5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbHR5XCIpO1xuXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQocXVhbGl0eVN0ZWFrSW1nKVxuICAgIGhvbWVJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKGJhckhvbWVJbWcpXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3BlY2lhbHR5SW1nKVxuXG4gICAgcmV0dXJuIGhvbWVJbWFnZXNDb250ZW50XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250ZW50XCIpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRsaW5lKCkpXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUltYWdlcygpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgYU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgYUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIilcblxuICAgIGg0LnRleHRDb250ZW50ID0gXCJNRUFUWSBNRUFUXCI7XG4gICAgYUhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgICBhTWVudS50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICAgIGFCYXIudGV4dENvbnRlbnQgPSBcIkJBUlwiO1xuICAgIGFDb250YWN0LnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XG5cbiAgICBhSG9tZS5ocmVmID0gXCIjXCI7XG4gICAgYU1lbnUuaHJlZiA9IFwiI1wiO1xuICAgIGFCYXIuaHJlZiA9IFwiI1wiO1xuICAgIGFDb250YWN0LmhyZWYgPSBcIiNcIjtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoNClcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bClcbiAgICB1bC5hcHBlbmRDaGlsZChsaUhvbWUpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlNZW51KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQmFyKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQ29udGFjdClcbiAgICBsaUhvbWUuYXBwZW5kQ2hpbGQoYUhvbWUpXG4gICAgbGlNZW51LmFwcGVuZENoaWxkKGFNZW51KVxuICAgIGxpQmFyLmFwcGVuZENoaWxkKGFCYXIpXG4gICAgbGlDb250YWN0LmFwcGVuZENoaWxkKGFDb250YWN0KVxuXG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdmJhcjsiLCJpbXBvcnQgY3JlYXRlTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcblxuZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbiAgICBcbiAgICBsb2FkSG9tZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRXZWJzaXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIlxuXG5pbml0V2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==