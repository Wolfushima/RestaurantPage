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
    const menu = document.querySelector("li[data-tab-target='#menu']");
    const menuBtn = document.createElement("button");

    homeHeadline.classList.add("home-headline")
    menuBtn.classList.add("menu-btn")

    h1.textContent = "COME TRY THE BEST\nAND MOST DELICIOUS\nSTEAK IN TOWN";
    p.textContent = "Perfectly Cooked Every Time!";
    menuBtn.textContent = "ORDER NOW";

    a.href = "#";

    menuBtn.addEventListener("click", () => {
        menu.click();
    })

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
            link.addEventListener("click", () => {
                menuIcon.click();
            })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDL0J0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ3JDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzdEdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDNUZ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxnQkFBZ0I7QUFDekY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGa0Q7QUFDcEI7QUFDQTtBQUNGO0FBQ1E7Ozs7Ozs7QUFPcEM7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxREFBWTtBQUNwQztBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLElBQUksa0RBQVE7QUFDWixJQUFJLGlEQUFPO0FBQ1gsSUFBSSxxREFBVzs7QUFFZjtBQUNBLElBQUksa0RBQVE7QUFDWjs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUMzQjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUM7O0FBRW5DLG9EQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvYmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUJhcigpIHtcbiAgICBjb25zdCBiYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBiYXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgYmFySW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYmFySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgYmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYmFyLXdyYXBwZXJcIik7XG4gICAgYmFySW1hZ2VzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmFyLWltYWdlcy1jb250ZW50XCIpO1xuICAgIGJhckltYWdlLmNsYXNzTGlzdC5hZGQoXCJiYXItaW1hZ2VcIik7XG5cbiAgICBiYXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlIGhhdmUgYSBiaWcgc2VsZWN0aW9uIGluIG91ciBiYXJcIlxuICAgIFxuICAgIGJhcldyYXBwZXIuYXBwZW5kQ2hpbGQoYmFySGVhZGVyKVxuICAgIGJhcldyYXBwZXIuYXBwZW5kQ2hpbGQoYmFySW1hZ2VzQ29udGVudClcbiAgICBiYXJJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKGJhckltYWdlKVxuXG4gICAgcmV0dXJuIGJhcldyYXBwZXJcbn1cblxuZnVuY3Rpb24gbG9hZEJhcigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYmFyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBiYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJiYXItY29udGVudFwiKVxuICAgIGJhckNvbnRlbnQuZGF0YXNldC50YWJDb250ZW50ID0gXCJcIjtcbiAgICBiYXJDb250ZW50LmlkID0gXCJiYXJcIjtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmFyQ29udGVudClcbiAgICBiYXJDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhcigpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmFyOyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGFjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhY3RQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBjb250YWN0UGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBjb250YWN0QWRkcmVzc1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBjb250YWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29udGFjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3Qtd3JhcHBlclwiKTtcbiAgICBjb250YWN0SW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaW1hZ2VcIik7XG5cbiAgICBjb250YWN0UGhvbmUudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlcjpcIjtcbiAgICBjb250YWN0UGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIjEyMy00NTYtNzg5XCI7XG4gICAgY29udGFjdEFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkFkZHJlc3M6XCI7XG4gICAgY29udGFjdEFkZHJlc3NQLnRleHRDb250ZW50ID0gXCIxMjMgZmFrZSBzdHJlZXQgTm9ydGggSG9sbHl3b29kLCBDQSA5MTYwNlwiO1xuXG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBob25lKVxuICAgIGNvbnRhY3RXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhY3RQaG9uZU51bWJlcilcbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcylcbiAgICBjb250YWN0V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzc1ApXG4gICAgY29udGFjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGFjdEltYWdlKVxuXG4gICAgcmV0dXJuIGNvbnRhY3RXcmFwcGVyXG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250ZW50XCIpXG4gICAgY29udGFjdENvbnRlbnQuZGF0YXNldC50YWJDb250ZW50ID0gXCJcIjtcbiAgICBjb250YWN0Q29udGVudC5pZCA9IFwiY29udGFjdFwiO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudClcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0OyIsImZ1bmN0aW9uIGNyZWF0ZUhlYWRsaW5lKCkge1xuICAgIGNvbnN0IGhvbWVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpW2RhdGEtdGFiLXRhcmdldD0nI21lbnUnXVwiKTtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGhvbWVIZWFkbGluZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZWFkbGluZVwiKVxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcIm1lbnUtYnRuXCIpXG5cbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQ09NRSBUUlkgVEhFIEJFU1RcXG5BTkQgTU9TVCBERUxJQ0lPVVNcXG5TVEVBSyBJTiBUT1dOXCI7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiUGVyZmVjdGx5IENvb2tlZCBFdmVyeSBUaW1lIVwiO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk9SREVSIE5PV1wiO1xuXG4gICAgYS5ocmVmID0gXCIjXCI7XG5cbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1lbnUuY2xpY2soKTtcbiAgICB9KVxuXG4gICAgaG9tZUhlYWRsaW5lLmFwcGVuZENoaWxkKGgxKVxuICAgIGhvbWVIZWFkbGluZS5hcHBlbmRDaGlsZChwKVxuICAgIGhvbWVIZWFkbGluZS5hcHBlbmRDaGlsZChhKVxuICAgIGEuYXBwZW5kQ2hpbGQobWVudUJ0bilcblxuICAgIHJldHVybiBob21lSGVhZGxpbmVcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZUltYWdlcygpIHtcbiAgICBjb25zdCBob21lSW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcXVhbGl0eVN0ZWFrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBiYXJIb21lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzcGVjaWFsdHlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImhvbWUtaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgcXVhbGl0eVN0ZWFrSW1nLmNsYXNzTGlzdC5hZGQoXCJxdWFsaXR5LXN0ZWFrXCIpO1xuICAgIGJhckhvbWVJbWcuY2xhc3NMaXN0LmFkZChcImJhci1ob21lXCIpO1xuICAgIHNwZWNpYWx0eUltZy5jbGFzc0xpc3QuYWRkKFwic3BlY2lhbHR5XCIpO1xuXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQocXVhbGl0eVN0ZWFrSW1nKVxuICAgIGhvbWVJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKGJhckhvbWVJbWcpXG4gICAgaG9tZUltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3BlY2lhbHR5SW1nKVxuXG4gICAgcmV0dXJuIGhvbWVJbWFnZXNDb250ZW50XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBob21lQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250ZW50XCIpXG4gICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIGhvbWVDb250ZW50LmRhdGFzZXQudGFiQ29udGVudCA9IFwiXCI7XG4gICAgaG9tZUNvbnRlbnQuaWQgPSBcImhvbWVcIjtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpXG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGxpbmUoKSlcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lSW1hZ2VzKCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZVN0ZWFrTWVudSgpIHsgXG4gICAgY29uc3Qgc3RlYWtNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51U3RlYWtIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3Qgc3RlYWtJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWszID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzdGVhazQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHN0ZWFrNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3RlYWs2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHN0ZWFrTWVudS5jbGFzc0xpc3QuYWRkKFwic3RlYWstbWVudVwiKTtcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInN0ZWFrLWltYWdlcy1jb250ZW50XCIpO1xuICAgIHN0ZWFrMS5jbGFzc0xpc3QuYWRkKFwic3RlYWsxXCIpO1xuICAgIHN0ZWFrMi5jbGFzc0xpc3QuYWRkKFwic3RlYWsyXCIpO1xuICAgIHN0ZWFrMy5jbGFzc0xpc3QuYWRkKFwic3RlYWszXCIpO1xuICAgIHN0ZWFrNC5jbGFzc0xpc3QuYWRkKFwic3RlYWs0XCIpO1xuICAgIHN0ZWFrNS5jbGFzc0xpc3QuYWRkKFwic3RlYWs1XCIpO1xuICAgIHN0ZWFrNi5jbGFzc0xpc3QuYWRkKFwic3RlYWs2XCIpO1xuXG4gICAgbWVudVN0ZWFrSGVhZGVyLnRleHRDb250ZW50ID0gXCJTdGVha3NcIjtcblxuICAgIHN0ZWFrTWVudS5hcHBlbmRDaGlsZChtZW51U3RlYWtIZWFkZXIpXG4gICAgc3RlYWtNZW51LmFwcGVuZENoaWxkKHN0ZWFrSW1hZ2VzQ29udGVudClcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWsxKVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazIpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrMylcbiAgICBzdGVha0ltYWdlc0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RlYWs0KVxuICAgIHN0ZWFrSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzdGVhazUpXG4gICAgc3RlYWtJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHN0ZWFrNilcblxuICAgIHJldHVybiBzdGVha01lbnVcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2FsYWRNZW51KCkge1xuICAgIGNvbnN0IHNhbGFkTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudVNhbGFkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IHNhbGFkSW1hZ2VzQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2FsYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzYWxhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgc2FsYWRNZW51LmNsYXNzTGlzdC5hZGQoXCJzYWxhZC1tZW51XCIpO1xuICAgIHNhbGFkSW1hZ2VzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic2FsYWQtaW1hZ2VzLWNvbnRlbnRcIik7XG4gICAgc2FsYWQxLmNsYXNzTGlzdC5hZGQoXCJzYWxhZDFcIik7XG4gICAgc2FsYWQyLmNsYXNzTGlzdC5hZGQoXCJzYWxhZDJcIik7XG5cbiAgICBtZW51U2FsYWRIZWFkZXIudGV4dENvbnRlbnQgPSBcIlNhbGFkc1wiXG4gICAgXG4gICAgc2FsYWRNZW51LmFwcGVuZENoaWxkKG1lbnVTYWxhZEhlYWRlcilcbiAgICBzYWxhZE1lbnUuYXBwZW5kQ2hpbGQoc2FsYWRJbWFnZXNDb250ZW50KVxuICAgIHNhbGFkSW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChzYWxhZDEpXG4gICAgc2FsYWRJbWFnZXNDb250ZW50LmFwcGVuZENoaWxkKHNhbGFkMilcblxuICAgIHJldHVybiBzYWxhZE1lbnVcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVzc2VydE1lbnUoKSB7XG4gICAgY29uc3QgZGVzc2VydE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVEZXNzZXJ0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IGRlc3NlcnRJbWFnZXNDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNzZXJ0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzc2VydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgZGVzc2VydE1lbnUuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQtbWVudVwiKTtcbiAgICBkZXNzZXJ0SW1hZ2VzQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydC1pbWFnZXMtY29udGVudFwiKTtcbiAgICBkZXNzZXJ0MS5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydDFcIik7XG4gICAgZGVzc2VydDIuY2xhc3NMaXN0LmFkZChcImRlc3NlcnQyXCIpO1xuXG4gICAgbWVudURlc3NlcnRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCJcbiAgICBcbiAgICBkZXNzZXJ0TWVudS5hcHBlbmRDaGlsZChtZW51RGVzc2VydEhlYWRlcilcbiAgICBkZXNzZXJ0TWVudS5hcHBlbmRDaGlsZChkZXNzZXJ0SW1hZ2VzQ29udGVudClcbiAgICBkZXNzZXJ0SW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0MSlcbiAgICBkZXNzZXJ0SW1hZ2VzQ29udGVudC5hcHBlbmRDaGlsZChkZXNzZXJ0MilcblxuICAgIHJldHVybiBkZXNzZXJ0TWVudVxufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbWVudUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKVxuICAgIG1lbnVDb250ZW50LmRhdGFzZXQudGFiQ29udGVudCA9IFwiXCI7XG4gICAgbWVudUNvbnRlbnQuaWQgPSBcIm1lbnVcIjtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU3RlYWtNZW51KCkpXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlU2FsYWRNZW51KCkpXG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGVzc2VydE1lbnUoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgbG9nb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxvZ29JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBjb25zdCBsaUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgbGlNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBhSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGFNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgYUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGFDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudUljb25MaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudUljb25MaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudUljb25MaW5lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsb2dvQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibG9nby1jb250ZW50XCIpXG4gICAgbG9nb0ljb24uY2xhc3NMaXN0LmFkZChcImxvZ28taWNvblwiKVxuICAgIHVsLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIilcbiAgICBsaUhvbWUuZGF0YXNldC50YWJUYXJnZXQgPSBcIiNob21lXCI7XG4gICAgbGlNZW51LmRhdGFzZXQudGFiVGFyZ2V0ID0gXCIjbWVudVwiO1xuICAgIGxpQmFyLmRhdGFzZXQudGFiVGFyZ2V0ID0gXCIjYmFyXCI7XG4gICAgbGlDb250YWN0LmRhdGFzZXQudGFiVGFyZ2V0ID0gXCIjY29udGFjdFwiO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWljb25cIilcbiAgICBtZW51SWNvbkxpbmUxLmNsYXNzTGlzdC5hZGQoXCJtZW51LWljb24tbGluZTFcIilcbiAgICBtZW51SWNvbkxpbmUyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWljb24tbGluZTJcIilcbiAgICBtZW51SWNvbkxpbmUzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWljb24tbGluZTNcIilcblxuICAgIGg0LnRleHRDb250ZW50ID0gXCJHUkVZJ1MgV09MRlwiO1xuICAgIGFIb21lLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gICAgYU1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgICBhQmFyLnRleHRDb250ZW50ID0gXCJCQVJcIjtcbiAgICBhQ29udGFjdC50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuXG4gICAgYUhvbWUuaHJlZiA9IFwiI1wiO1xuICAgIGFNZW51LmhyZWYgPSBcIiNcIjtcbiAgICBhQmFyLmhyZWYgPSBcIiNcIjtcbiAgICBhQ29udGFjdC5ocmVmID0gXCIjXCI7XG5cbiAgICBsb2dvQ29udGVudC5hcHBlbmRDaGlsZChsb2dvSWNvbilcbiAgICBsb2dvQ29udGVudC5hcHBlbmRDaGlsZChoNClcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nb0NvbnRlbnQpXG4gICAgbmF2LmFwcGVuZENoaWxkKHVsKVxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51SWNvbilcbiAgICBtZW51SWNvbi5hcHBlbmRDaGlsZChtZW51SWNvbkxpbmUxKVxuICAgIG1lbnVJY29uLmFwcGVuZENoaWxkKG1lbnVJY29uTGluZTIpXG4gICAgbWVudUljb24uYXBwZW5kQ2hpbGQobWVudUljb25MaW5lMylcbiAgICB1bC5hcHBlbmRDaGlsZChsaUhvbWUpXG4gICAgdWwuYXBwZW5kQ2hpbGQobGlNZW51KVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQmFyKVxuICAgIHVsLmFwcGVuZENoaWxkKGxpQ29udGFjdClcbiAgICBsaUhvbWUuYXBwZW5kQ2hpbGQoYUhvbWUpXG4gICAgbGlNZW51LmFwcGVuZENoaWxkKGFNZW51KVxuICAgIGxpQmFyLmFwcGVuZENoaWxkKGFCYXIpXG4gICAgbGlDb250YWN0LmFwcGVuZENoaWxkKGFDb250YWN0KVxuXG5cbiAgICByZXR1cm4gbmF2XG59XG5cbmZ1bmN0aW9uIG5hdlNsaWRlKCkge1xuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWljb25cIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtbGlua3NcIik7XG4gICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saW5rcyBsaVwiKTtcblxuICAgIFxuICAgIG1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWljb24tYWN0aXZlXCIpO1xuICAgICAgICAvL3RvZ2dsZSBuYXZcbiAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtYWN0aXZlXCIpO1xuXG4gICAgICAgIC8vQW5pbWF0ZSBsaW5rc1xuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYobGluay5zdHlsZS5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmFuaW1hdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaW5rLnN0eWxlLmFuaW1hdGlvbiA9IGBuYXZMaW5rRmFkZSAwLjVzIGVhc2UgZm9yd2FyZHMgJHtpbmRleCAvIDcgKyAwLjN9c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVudUljb24uY2xpY2soKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2YmFyLCBuYXZTbGlkZSB9OyIsImltcG9ydCB7IGNyZWF0ZU5hdmJhciwgbmF2U2xpZGUgfSBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGxvYWRCYXIgZnJvbSBcIi4vYmFyXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5cblxuXG5cblxuZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbilcbiAgICBcbiAgICBsb2FkSG9tZSgpXG4gICAgbG9hZE1lbnUoKVxuICAgIGxvYWRCYXIoKVxuICAgIGxvYWRDb250YWN0KClcblxuICAgIFxuICAgIG5hdlNsaWRlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdFdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdFdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiXG5cbmluaXRXZWJzaXRlKCk7XG5cbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtdGFiLXRhcmdldF1cIik7XG5jb25zdCB0YWJDb250ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YWItY29udGVudF1cIik7XG5cbnRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYi5kYXRhc2V0LnRhYlRhcmdldCk7XG4gICAgICAgIHRhYkNvbnRlbnRzLmZvckVhY2godGFiQ29udGVudCA9PiB7XG4gICAgICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfSlcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=