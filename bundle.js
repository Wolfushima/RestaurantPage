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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const contactWrapper = document.createElement("div");
    const contactPhone = document.createElement("h2");
    const contactPhoneNumber = document.createElement("p");
    const contactAddress = document.createElement("h2");
    const contactAddressP = document.createElement("p");
    const contactImage = document.createElement("div");

    contactWrapper.classList.add("contact-wrapper");
    contactImage.classList.add("contact-image");

    contactPhone.textContent = "Phone Number:";
    contactPhoneNumber.textContent = "123-456-789";
    contactAddress.textContent = "Address:";
    contactAddressP.textContent = "123 fake street North Hollywood, CA 91606";

    contactWrapper.appendChild(contactPhone)
    contactWrapper.appendChild(contactPhoneNumber)
    contactWrapper.appendChild(contactAddress)
    contactWrapper.appendChild(contactAddressP)
    contactWrapper.appendChild(contactImage)

    return contactWrapper
}

function loadContact() {
    const main = document.querySelector("main");
    const contactContent = document.createElement("div");

    contactContent.classList.add("bar-content")
    contactContent.dataset.tabContent = "";
    contactContent.id = "contact";

    main.appendChild(contactContent)
    contactContent.appendChild(createContact())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");











function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__["default"])())
    content.appendChild(main)
    
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_bar__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDL0J0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3JDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN4RHZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDNUZ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRFM7QUFDTjtBQUNBO0FBQ0Y7QUFDUTs7Ozs7OztBQU9wQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1EQUFZO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTtBQUNaLElBQUksaURBQU87QUFDWCxJQUFJLHFEQUFXO0FBQ2Y7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7O1VDeEIxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm1DOztBQUVuQyxvREFBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Jhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVCYXIoKSB7XG4gICAgY29uc3QgYmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYmFySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGJhckltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJhckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImJhci13cmFwcGVyXCIpO1xuICAgIGJhckltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJhci1pbWFnZXMtY29udGVudFwiKTtcbiAgICBiYXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYmFyLWltYWdlXCIpO1xuXG4gICAgYmFySGVhZGVyLnRleHRDb250ZW50ID0gXCJXZSBoYXZlIGEgYmlnIHNlbGVjdGlvbiBpbiBvdXIgYmFyXCJcbiAgICBcbiAgICBiYXJXcmFwcGVyLmFwcGVuZENoaWxkKGJhckhlYWRlcilcbiAgICBiYXJXcmFwcGVyLmFwcGVuZENoaWxkKGJhckltYWdlc0NvbnRlbnQpXG4gICAgYmFySW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChiYXJJbWFnZSlcblxuICAgIHJldHVybiBiYXJXcmFwcGVyXG59XG5cbmZ1bmN0aW9uIGxvYWRCYXIoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IGJhckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmFyLWNvbnRlbnRcIilcbiAgICBiYXJDb250ZW50LmRhdGFzZXQudGFiQ29udGVudCA9IFwiXCI7XG4gICAgYmFyQ29udGVudC5pZCA9IFwiYmFyXCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGJhckNvbnRlbnQpXG4gICAgYmFyQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYXIoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEJhcjsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb250YWN0UGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgY29udGFjdFBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgY29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgY29udGFjdEFkZHJlc3NQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgY29udGFjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnRhY3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXdyYXBwZXJcIik7XG4gICAgY29udGFjdEltYWdlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWltYWdlXCIpO1xuXG4gICAgY29udGFjdFBob25lLnRleHRDb250ZW50ID0gXCJQaG9uZSBOdW1iZXI6XCI7XG4gICAgY29udGFjdFBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCIxMjMtNDU2LTc4OVwiO1xuICAgIGNvbnRhY3RBZGRyZXNzLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOlwiO1xuICAgIGNvbnRhY3RBZGRyZXNzUC50ZXh0Q29udGVudCA9IFwiMTIzIGZha2Ugc3RyZWV0IE5vcnRoIEhvbGx5d29vZCwgQ0EgOTE2MDZcIjtcblxuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZSlcbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0UGhvbmVOdW1iZXIpXG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3MpXG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3NQKVxuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbWFnZSlcblxuICAgIHJldHVybiBjb250YWN0V3JhcHBlclxufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJhci1jb250ZW50XCIpXG4gICAgY29udGFjdENvbnRlbnQuZGF0YXNldC50YWJDb250ZW50ID0gXCJcIjtcbiAgICBjb250YWN0Q29udGVudC5pZCA9IFwiY29udGFjdFwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudClcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRsaW5lKCkge1xuICAgIGNvbnN0IGhvbWVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGhvbWVIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkbGluZVwiKVxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpXG5cbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQ09NRSBUUlkgVEhFIEJFU1RcXG5BTkQgTU9TVCBERUxJQ0lPVVNcXG5TVEVBSyBJTiBUT1dOXCI7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiUGVyZmVjdGx5IENvb2tlZCBFdmVyeSBUaW1lIVwiO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk9SREVSIE5PV1wiO1xuXG4gICAgYS5ocmVmID0gXCIjXCI7XG5cbiAgICBob21lSGVhZGxpbmUuYXBwZW5kQ2hpbGQoaDEpXG4gICAgaG9tZUhlYWRsaW5lLmFwcGVuZENoaWxkKHApXG4gICAgaG9tZUhlYWRsaW5lLmFwcGVuZENoaWxkKGEpXG4gICAgYS5hcHBlbmRDaGlsZChtZW51QnRuKVxuXG4gICAgcmV0dXJuIGhvbWVIZWFkbGluZVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lSW1hZ2VzKCkge1xuICAgIGNvbnN0IGhvbWVJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBxdWFsaXR5U3RlYWtJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJhckhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNwZWNpYWx0eUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBob21lSW1hZ2VzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1pbWFnZXMtY29udGVudFwiKTtcbiAgICBxdWFsaXR5U3RlYWtJbWcuY2xhc3NMaXN0LmFkZChcInF1YWxpdHktc3RlYWtcIik7XG4gICAgYmFySG9tZUltZy5jbGFzc0xpc3QuYWRkKFwiYmFyLWhvbWVcIik7XG4gICAgc3BlY2lhbHR5SW1nLmNsYXNzTGlzdC5hZGQoXCJzcGVjaWFsdHlcIik7XG5cbiAgICBob21lSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChxdWFsaXR5U3RlYWtJbWcpXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoYmFySG9tZUltZylcbiAgICBob21lSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzcGVjaWFsdHlJbWcpXG5cbiAgICByZXR1cm4gaG9tZUltYWdlc0NvbnRlbnRcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRlbnRcIilcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgaG9tZUNvbnRlbnQuZGF0YXNldC50YWJDb250ZW50ID0gXCJcIjtcbiAgICBob21lQ29udGVudC5pZCA9IFwiaG9tZVwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lQ29udGVudClcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkbGluZSgpKVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVJbWFnZXMoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiZnVuY3Rpb24gY3JlYXRlU3RlYWtNZW51KCkgeyBcbiAgICBjb25zdCBzdGVha01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVTdGVha0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBzdGVha0ltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWs1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc3RlYWtNZW51LmNsYXNzTGlzdC5hZGQoXCJzdGVhay1tZW51XCIpO1xuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic3RlYWstaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgc3RlYWsxLmNsYXNzTGlzdC5hZGQoXCJzdGVhazFcIik7XG4gICAgc3RlYWsyLmNsYXNzTGlzdC5hZGQoXCJzdGVhazJcIik7XG4gICAgc3RlYWszLmNsYXNzTGlzdC5hZGQoXCJzdGVhazNcIik7XG4gICAgc3RlYWs0LmNsYXNzTGlzdC5hZGQoXCJzdGVhazRcIik7XG4gICAgc3RlYWs1LmNsYXNzTGlzdC5hZGQoXCJzdGVhazVcIik7XG4gICAgc3RlYWs2LmNsYXNzTGlzdC5hZGQoXCJzdGVhazZcIik7XG5cbiAgICBtZW51U3RlYWtIZWFkZXIudGV4dENvbnRlbnQgPSBcIlN0ZWFrc1wiO1xuXG4gICAgc3RlYWtNZW51LmFwcGVuZENoaWxkKG1lbnVTdGVha0hlYWRlcilcbiAgICBzdGVha01lbnUuYXBwZW5kQ2hpbGQoc3RlYWtJbWFnZXNDb250ZW50KVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazEpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrMilcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWszKVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazQpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrNSlcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWs2KVxuXG4gICAgcmV0dXJuIHN0ZWFrTWVudVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTYWxhZE1lbnUoKSB7XG4gICAgY29uc3Qgc2FsYWRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51U2FsYWRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3Qgc2FsYWRJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzYWxhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNhbGFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzYWxhZE1lbnUuY2xhc3NMaXN0LmFkZChcInNhbGFkLW1lbnVcIik7XG4gICAgc2FsYWRJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzYWxhZC1pbWFnZXMtY29udGVudFwiKTtcbiAgICBzYWxhZDEuY2xhc3NMaXN0LmFkZChcInNhbGFkMVwiKTtcbiAgICBzYWxhZDIuY2xhc3NMaXN0LmFkZChcInNhbGFkMlwiKTtcblxuICAgIG1lbnVTYWxhZEhlYWRlci50ZXh0Q29udGVudCA9IFwiU2FsYWRzXCJcbiAgICBcbiAgICBzYWxhZE1lbnUuYXBwZW5kQ2hpbGQobWVudVNhbGFkSGVhZGVyKVxuICAgIHNhbGFkTWVudS5hcHBlbmRDaGlsZChzYWxhZEltYWdlc0NvbnRlbnQpXG4gICAgc2FsYWRJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHNhbGFkMSlcbiAgICBzYWxhZEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2FsYWQyKVxuXG4gICAgcmV0dXJuIHNhbGFkTWVudVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0TWVudSgpIHtcbiAgICBjb25zdCBkZXNzZXJ0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudURlc3NlcnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgZGVzc2VydEltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc3NlcnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNzZXJ0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBkZXNzZXJ0TWVudS5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydC1tZW51XCIpO1xuICAgIGRlc3NlcnRJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0LWltYWdlcy1jb250ZW50XCIpO1xuICAgIGRlc3NlcnQxLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0MVwiKTtcbiAgICBkZXNzZXJ0Mi5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydDJcIik7XG5cbiAgICBtZW51RGVzc2VydEhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIlxuICAgIFxuICAgIGRlc3NlcnRNZW51LmFwcGVuZENoaWxkKG1lbnVEZXNzZXJ0SGVhZGVyKVxuICAgIGRlc3NlcnRNZW51LmFwcGVuZENoaWxkKGRlc3NlcnRJbWFnZXNDb250ZW50KVxuICAgIGRlc3NlcnRJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnQxKVxuICAgIGRlc3NlcnRJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKGRlc3NlcnQyKVxuXG4gICAgcmV0dXJuIGRlc3NlcnRNZW51XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250ZW50XCIpXG4gICAgbWVudUNvbnRlbnQuZGF0YXNldC50YWJDb250ZW50ID0gXCJcIjtcbiAgICBtZW51Q29udGVudC5pZCA9IFwibWVudVwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51Q29udGVudClcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTdGVha01lbnUoKSlcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTYWxhZE1lbnUoKSlcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0TWVudSgpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBsb2dvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbG9nb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgYU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgYUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICAgIGxvZ29Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJsb2dvLWNvbnRlbnRcIilcbiAgICBsb2dvSWNvbi5jbGFzc0xpc3QuYWRkKFwibG9nby1pY29uXCIpXG4gICAgdWwuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKVxuICAgIGxpSG9tZS5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI2hvbWVcIjtcbiAgICBsaU1lbnUuZGF0YXNldC50YWJUYXJnZXQgPSBcIiNtZW51XCI7XG4gICAgbGlCYXIuZGF0YXNldC50YWJUYXJnZXQgPSBcIiNiYXJcIjtcbiAgICBsaUNvbnRhY3QuZGF0YXNldC50YWJUYXJnZXQgPSBcIiNjb250YWN0XCI7XG5cbiAgICBoNC50ZXh0Q29udGVudCA9IFwiR1JFWSdTIFdPTEZcIjtcbiAgICBhSG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICAgIGFNZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgYUJhci50ZXh0Q29udGVudCA9IFwiQkFSXCI7XG4gICAgYUNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcblxuICAgIGFIb21lLmhyZWYgPSBcIiNcIjtcbiAgICBhTWVudS5ocmVmID0gXCIjXCI7XG4gICAgYUJhci5ocmVmID0gXCIjXCI7XG4gICAgYUNvbnRhY3QuaHJlZiA9IFwiI1wiO1xuXG4gICAgbG9nb0NvbnRlbnQuYXBwZW5kQ2hpbGQobG9nb0ljb24pXG4gICAgbG9nb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDQpXG4gICAgbmF2LmFwcGVuZENoaWxkKGxvZ29Db250ZW50KVxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bClcbiAgICB1bC5hcHBlbmRDaGlsZChsaUhvbWUpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlNZW51KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQmFyKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQ29udGFjdClcbiAgICBsaUhvbWUuYXBwZW5kQ2hpbGQoYUhvbWUpXG4gICAgbGlNZW51LmFwcGVuZENoaWxkKGFNZW51KVxuICAgIGxpQmFyLmFwcGVuZENoaWxkKGFCYXIpXG4gICAgbGlDb250YWN0LmFwcGVuZENoaWxkKGFDb250YWN0KVxuXG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5hdmJhcjsiLCJpbXBvcnQgY3JlYXRlTmF2YmFyIGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZEJhciBmcm9tIFwiLi9iYXJcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cblxuXG5cblxuXG5mdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxuICAgIFxuICAgIGxvYWRIb21lKClcbiAgICBsb2FkTWVudSgpXG4gICAgbG9hZEJhcigpXG4gICAgbG9hZENvbnRhY3QoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0V2Vic2l0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0V2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCJcblxuaW5pdFdlYnNpdGUoKTtcblxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWItdGFyZ2V0XVwiKTtcbmNvbnN0IHRhYkNvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhYi1jb250ZW50XVwiKTtcblxudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFiLmRhdGFzZXQudGFiVGFyZ2V0KTtcbiAgICAgICAgdGFiQ29udGVudHMuZm9yRWFjaCh0YWJDb250ZW50ID0+IHtcbiAgICAgICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9KVxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==