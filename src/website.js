import createNavbar from "./navbar";
import loadHome from "./home";
import loadMenu from "./menu";






function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild(createNavbar())
    content.appendChild(main)
    
    loadHome()
    loadMenu()
}

export default initWebsite;