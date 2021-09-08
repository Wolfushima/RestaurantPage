import createNavbar from "./navbar";
import loadHome from "./home";

function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild(createNavbar())
    content.appendChild(main)
    
    loadHome()
}

export default initWebsite;