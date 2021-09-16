import createNavbar from "./navbar";
import loadHome from "./home";
import loadMenu from "./menu";
import loadBar from "./bar";
import loadContact from "./contact";






function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild(createNavbar())
    content.appendChild(main)
    
    loadHome()
    loadMenu()
    loadBar()
    loadContact()
}

export default initWebsite;