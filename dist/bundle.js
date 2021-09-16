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

    contactContent.classList.add("contact-content")
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
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar),
/* harmony export */   "navSlide": () => (/* binding */ navSlide)
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

    const menuIcon = document.createElement("div");
    const menuIconLine1 = document.createElement("div");
    const menuIconLine2 = document.createElement("div");
    const menuIconLine3 = document.createElement("div");

    logoContent.classList.add("logo-content")
    logoIcon.classList.add("logo-icon")
    ul.classList.add("nav-links")
    liHome.dataset.tabTarget = "#home";
    liMenu.dataset.tabTarget = "#menu";
    liBar.dataset.tabTarget = "#bar";
    liContact.dataset.tabTarget = "#contact";
    menuIcon.classList.add("menu-icon")
    menuIconLine1.classList.add("menu-icon-line1")
    menuIconLine2.classList.add("menu-icon-line2")
    menuIconLine3.classList.add("menu-icon-line3")

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
    nav.appendChild(menuIcon)
    menuIcon.appendChild(menuIconLine1)
    menuIcon.appendChild(menuIconLine2)
    menuIcon.appendChild(menuIconLine3)
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

function navSlide() {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("menu-icon-active");
        //toggle nav
        nav.classList.toggle("nav-active");

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })
    })
}



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

    content.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)())
    content.appendChild(main)
    
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_bar__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])()

    
    ;(0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navSlide)()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDL0J0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3JDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUN4RHZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQzVGdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZrRDtBQUNwQjtBQUNBO0FBQ0Y7QUFDUTs7Ozs7OztBQU9wQztBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHFEQUFZO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTtBQUNaLElBQUksaURBQU87QUFDWCxJQUFJLHFEQUFXOztBQUVmO0FBQ0EsSUFBSSxrREFBUTtBQUNaOztBQUVBLGlFQUFlLFdBQVc7Ozs7OztVQzNCMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsb0RBQVc7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9iYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQmFyKCkge1xuICAgIGNvbnN0IGJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGJhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBiYXJJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBiYXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBiYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJiYXItd3JhcHBlclwiKTtcbiAgICBiYXJJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJiYXItaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgYmFySW1hZ2UuY2xhc3NMaXN0LmFkZChcImJhci1pbWFnZVwiKTtcblxuICAgIGJhckhlYWRlci50ZXh0Q29udGVudCA9IFwiV2UgaGF2ZSBhIGJpZyBzZWxlY3Rpb24gaW4gb3VyIGJhclwiXG4gICAgXG4gICAgYmFyV3JhcHBlci5hcHBlbmRDaGlsZChiYXJIZWFkZXIpXG4gICAgYmFyV3JhcHBlci5hcHBlbmRDaGlsZChiYXJJbWFnZXNDb250ZW50KVxuICAgIGJhckltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoYmFySW1hZ2UpXG5cbiAgICByZXR1cm4gYmFyV3JhcHBlclxufVxuXG5mdW5jdGlvbiBsb2FkQmFyKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBiYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGJhckNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJhci1jb250ZW50XCIpXG4gICAgYmFyQ29udGVudC5kYXRhc2V0LnRhYkNvbnRlbnQgPSBcIlwiO1xuICAgIGJhckNvbnRlbnQuaWQgPSBcImJhclwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChiYXJDb250ZW50KVxuICAgIGJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFyKCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCYXI7IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RBZGRyZXNzUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC13cmFwcGVyXCIpO1xuICAgIGNvbnRhY3RJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1pbWFnZVwiKTtcblxuICAgIGNvbnRhY3RQaG9uZS50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyOlwiO1xuICAgIGNvbnRhY3RQaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiMTIzLTQ1Ni03ODlcIjtcbiAgICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzczpcIjtcbiAgICBjb250YWN0QWRkcmVzc1AudGV4dENvbnRlbnQgPSBcIjEyMyBmYWtlIHN0cmVldCBOb3J0aCBIb2xseXdvb2QsIENBIDkxNjA2XCI7XG5cbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0UGhvbmUpXG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lTnVtYmVyKVxuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzKVxuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzUClcbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0SW1hZ2UpXG5cbiAgICByZXR1cm4gY29udGFjdFdyYXBwZXJcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRlbnRcIilcbiAgICBjb250YWN0Q29udGVudC5kYXRhc2V0LnRhYkNvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnRhY3RDb250ZW50LmlkID0gXCJjb250YWN0XCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KVxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiZnVuY3Rpb24gY3JlYXRlSGVhZGxpbmUoKSB7XG4gICAgY29uc3QgaG9tZUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgaG9tZUhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlYWRsaW5lXCIpXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudS1idG5cIilcblxuICAgIGgxLnRleHRDb250ZW50ID0gXCJDT01FIFRSWSBUSEUgQkVTVFxcbkFORCBNT1NUIERFTElDSU9VU1xcblNURUFLIElOIFRPV05cIjtcbiAgICBwLnRleHRDb250ZW50ID0gXCJQZXJmZWN0bHkgQ29va2VkIEV2ZXJ5IFRpbWUhXCI7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiT1JERVIgTk9XXCI7XG5cbiAgICBhLmhyZWYgPSBcIiNcIjtcblxuICAgIGhvbWVIZWFkbGluZS5hcHBlbmRDaGlsZChoMSlcbiAgICBob21lSGVhZGxpbmUuYXBwZW5kQ2hpbGQocClcbiAgICBob21lSGVhZGxpbmUuYXBwZW5kQ2hpbGQoYSlcbiAgICBhLmFwcGVuZENoaWxkKG1lbnVCdG4pXG5cbiAgICByZXR1cm4gaG9tZUhlYWRsaW5lXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVJbWFnZXMoKSB7XG4gICAgY29uc3QgaG9tZUltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHF1YWxpdHlTdGVha0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYmFySG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3BlY2lhbHR5SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGhvbWVJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lLWltYWdlcy1jb250ZW50XCIpO1xuICAgIHF1YWxpdHlTdGVha0ltZy5jbGFzc0xpc3QuYWRkKFwicXVhbGl0eS1zdGVha1wiKTtcbiAgICBiYXJIb21lSW1nLmNsYXNzTGlzdC5hZGQoXCJiYXItaG9tZVwiKTtcbiAgICBzcGVjaWFsdHlJbWcuY2xhc3NMaXN0LmFkZChcInNwZWNpYWx0eVwiKTtcblxuICAgIGhvbWVJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHF1YWxpdHlTdGVha0ltZylcbiAgICBob21lSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChiYXJIb21lSW1nKVxuICAgIGhvbWVJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHNwZWNpYWx0eUltZylcblxuICAgIHJldHVybiBob21lSW1hZ2VzQ29udGVudFxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGVudFwiKVxuICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICBob21lQ29udGVudC5kYXRhc2V0LnRhYkNvbnRlbnQgPSBcIlwiO1xuICAgIGhvbWVDb250ZW50LmlkID0gXCJob21lXCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVDb250ZW50KVxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRsaW5lKCkpXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZUltYWdlcygpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVTdGVha01lbnUoKSB7IFxuICAgIGNvbnN0IHN0ZWFrTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudVN0ZWFrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IHN0ZWFrSW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBzdGVha01lbnUuY2xhc3NMaXN0LmFkZChcInN0ZWFrLW1lbnVcIik7XG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzdGVhay1pbWFnZXMtY29udGVudFwiKTtcbiAgICBzdGVhazEuY2xhc3NMaXN0LmFkZChcInN0ZWFrMVwiKTtcbiAgICBzdGVhazIuY2xhc3NMaXN0LmFkZChcInN0ZWFrMlwiKTtcbiAgICBzdGVhazMuY2xhc3NMaXN0LmFkZChcInN0ZWFrM1wiKTtcbiAgICBzdGVhazQuY2xhc3NMaXN0LmFkZChcInN0ZWFrNFwiKTtcbiAgICBzdGVhazUuY2xhc3NMaXN0LmFkZChcInN0ZWFrNVwiKTtcbiAgICBzdGVhazYuY2xhc3NMaXN0LmFkZChcInN0ZWFrNlwiKTtcblxuICAgIG1lbnVTdGVha0hlYWRlci50ZXh0Q29udGVudCA9IFwiU3RlYWtzXCI7XG5cbiAgICBzdGVha01lbnUuYXBwZW5kQ2hpbGQobWVudVN0ZWFrSGVhZGVyKVxuICAgIHN0ZWFrTWVudS5hcHBlbmRDaGlsZChzdGVha0ltYWdlc0NvbnRlbnQpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrMSlcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWsyKVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazMpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrNClcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWs1KVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazYpXG5cbiAgICByZXR1cm4gc3RlYWtNZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNhbGFkTWVudSgpIHtcbiAgICBjb25zdCBzYWxhZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVTYWxhZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBzYWxhZEltYWdlc0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNhbGFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2FsYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHNhbGFkTWVudS5jbGFzc0xpc3QuYWRkKFwic2FsYWQtbWVudVwiKTtcbiAgICBzYWxhZEltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNhbGFkLWltYWdlcy1jb250ZW50XCIpO1xuICAgIHNhbGFkMS5jbGFzc0xpc3QuYWRkKFwic2FsYWQxXCIpO1xuICAgIHNhbGFkMi5jbGFzc0xpc3QuYWRkKFwic2FsYWQyXCIpO1xuXG4gICAgbWVudVNhbGFkSGVhZGVyLnRleHRDb250ZW50ID0gXCJTYWxhZHNcIlxuICAgIFxuICAgIHNhbGFkTWVudS5hcHBlbmRDaGlsZChtZW51U2FsYWRIZWFkZXIpXG4gICAgc2FsYWRNZW51LmFwcGVuZENoaWxkKHNhbGFkSW1hZ2VzQ29udGVudClcbiAgICBzYWxhZEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc2FsYWQxKVxuICAgIHNhbGFkSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzYWxhZDIpXG5cbiAgICByZXR1cm4gc2FsYWRNZW51XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc3NlcnRNZW51KCkge1xuICAgIGNvbnN0IGRlc3NlcnRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51RGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBkZXNzZXJ0SW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzc2VydDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc3NlcnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGRlc3NlcnRNZW51LmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0LW1lbnVcIik7XG4gICAgZGVzc2VydEltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQtaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgZGVzc2VydDEuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQxXCIpO1xuICAgIGRlc3NlcnQyLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0MlwiKTtcblxuICAgIG1lbnVEZXNzZXJ0SGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiXG4gICAgXG4gICAgZGVzc2VydE1lbnUuYXBwZW5kQ2hpbGQobWVudURlc3NlcnRIZWFkZXIpXG4gICAgZGVzc2VydE1lbnUuYXBwZW5kQ2hpbGQoZGVzc2VydEltYWdlc0NvbnRlbnQpXG4gICAgZGVzc2VydEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydDEpXG4gICAgZGVzc2VydEltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzc2VydDIpXG5cbiAgICByZXR1cm4gZGVzc2VydE1lbnVcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIilcbiAgICBtZW51Q29udGVudC5kYXRhc2V0LnRhYkNvbnRlbnQgPSBcIlwiO1xuICAgIG1lbnVDb250ZW50LmlkID0gXCJtZW51XCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250ZW50KVxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVN0ZWFrTWVudSgpKVxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVNhbGFkTWVudSgpKVxuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURlc3NlcnRNZW51KCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IGxvZ29Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsb2dvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaUNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgYUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGFCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBhQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJY29uTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJY29uTGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJY29uTGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbG9nb0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGVudFwiKVxuICAgIGxvZ29JY29uLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWljb25cIilcbiAgICB1bC5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpXG4gICAgbGlIb21lLmRhdGFzZXQudGFiVGFyZ2V0ID0gXCIjaG9tZVwiO1xuICAgIGxpTWVudS5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI21lbnVcIjtcbiAgICBsaUJhci5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI2JhclwiO1xuICAgIGxpQ29udGFjdC5kYXRhc2V0LnRhYlRhcmdldCA9IFwiI2NvbnRhY3RcIjtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1pY29uXCIpXG4gICAgbWVudUljb25MaW5lMS5jbGFzc0xpc3QuYWRkKFwibWVudS1pY29uLWxpbmUxXCIpXG4gICAgbWVudUljb25MaW5lMi5jbGFzc0xpc3QuYWRkKFwibWVudS1pY29uLWxpbmUyXCIpXG4gICAgbWVudUljb25MaW5lMy5jbGFzc0xpc3QuYWRkKFwibWVudS1pY29uLWxpbmUzXCIpXG5cbiAgICBoNC50ZXh0Q29udGVudCA9IFwiR1JFWSdTIFdPTEZcIjtcbiAgICBhSG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICAgIGFNZW51LnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gICAgYUJhci50ZXh0Q29udGVudCA9IFwiQkFSXCI7XG4gICAgYUNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcblxuICAgIGFIb21lLmhyZWYgPSBcIiNcIjtcbiAgICBhTWVudS5ocmVmID0gXCIjXCI7XG4gICAgYUJhci5ocmVmID0gXCIjXCI7XG4gICAgYUNvbnRhY3QuaHJlZiA9IFwiI1wiO1xuXG4gICAgbG9nb0NvbnRlbnQuYXBwZW5kQ2hpbGQobG9nb0ljb24pXG4gICAgbG9nb0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDQpXG4gICAgbmF2LmFwcGVuZENoaWxkKGxvZ29Db250ZW50KVxuICAgIG5hdi5hcHBlbmRDaGlsZCh1bClcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUljb24pXG4gICAgbWVudUljb24uYXBwZW5kQ2hpbGQobWVudUljb25MaW5lMSlcbiAgICBtZW51SWNvbi5hcHBlbmRDaGlsZChtZW51SWNvbkxpbmUyKVxuICAgIG1lbnVJY29uLmFwcGVuZENoaWxkKG1lbnVJY29uTGluZTMpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlIb21lKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpTWVudSlcbiAgICB1bC5hcHBlbmRDaGlsZChsaUJhcilcbiAgICB1bC5hcHBlbmRDaGlsZChsaUNvbnRhY3QpXG4gICAgbGlIb21lLmFwcGVuZENoaWxkKGFIb21lKVxuICAgIGxpTWVudS5hcHBlbmRDaGlsZChhTWVudSlcbiAgICBsaUJhci5hcHBlbmRDaGlsZChhQmFyKVxuICAgIGxpQ29udGFjdC5hcHBlbmRDaGlsZChhQ29udGFjdClcblxuXG4gICAgcmV0dXJuIG5hdlxufVxuXG5mdW5jdGlvbiBuYXZTbGlkZSgpIHtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1pY29uXCIpO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWxpbmtzXCIpO1xuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlua3MgbGlcIik7XG5cbiAgICBcbiAgICBtZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwibWVudS1pY29uLWFjdGl2ZVwiKTtcbiAgICAgICAgLy90b2dnbGUgbmF2XG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWFjdGl2ZVwiKTtcblxuICAgICAgICAvL0FuaW1hdGUgbGlua3NcbiAgICAgICAgbmF2TGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGxpbmsuc3R5bGUuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGluay5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGluay5zdHlsZS5hbmltYXRpb24gPSBgbmF2TGlua0ZhZGUgMC41cyBlYXNlIGZvcndhcmRzICR7aW5kZXggLyA3ICsgMC4zfXNgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdmJhciwgbmF2U2xpZGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVOYXZiYXIsIG5hdlNsaWRlIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQmFyIGZyb20gXCIuL2JhclwiO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuXG5cblxuXG5cbmZ1bmN0aW9uIGluaXRXZWJzaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXG4gICAgXG4gICAgbG9hZEhvbWUoKVxuICAgIGxvYWRNZW51KClcbiAgICBsb2FkQmFyKClcbiAgICBsb2FkQ29udGFjdCgpXG5cbiAgICBcbiAgICBuYXZTbGlkZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRXZWJzaXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGluaXRXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIlxuXG5pbml0V2Vic2l0ZSgpO1xuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXRhYi10YXJnZXRdXCIpO1xuY29uc3QgdGFiQ29udGVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFiLWNvbnRlbnRdXCIpO1xuXG50YWJzLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWIuZGF0YXNldC50YWJUYXJnZXQpO1xuICAgICAgICB0YWJDb250ZW50cy5mb3JFYWNoKHRhYkNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9