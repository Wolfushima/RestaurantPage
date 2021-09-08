import createNavbar from "./navbar";

function initWebsite() {
    const content = document.getElementById("content");
    const main = document.createElement("main");

    content.appendChild(createNavbar())
    content.appendChild(main)
}

export default initWebsite;