function createMenu() {

}

function createMenuImages() {
    const menuImagesContent = document.createElement("div");
    const steak1 = document.createElement("div");
    const steak2 = document.createElement("div");
    const steak3 = document.createElement("div");
    const steak4 = document.createElement("div");
    const steak5 = document.createElement("div");
    const steak6 = document.createElement("div");

    menuImagesContent.classList.add("menu-images-content");
    steak1.classList.add("steak1");
    steak2.classList.add("steak2");
    steak3.classList.add("steak3");
    steak4.classList.add("steak4");
    steak5.classList.add("steak5");
    steak6.classList.add("steak6");

    menuImagesContent.appendChild(steak1)
    menuImagesContent.appendChild(steak2)
    menuImagesContent.appendChild(steak3)
    menuImagesContent.appendChild(steak4)
    menuImagesContent.appendChild(steak5)
    menuImagesContent.appendChild(steak6)

    return menuImagesContent
}

function loadMenu() {
    const main = document.querySelector("main");
    const menuContent = document.createElement("div");

    menuContent.classList.add("menu-content")
    menuContent.dataset.tabContent = "";
    menuContent.id = "menu";

    main.appendChild(menuContent)
    menuContent.appendChild(createMenuImages())
}

export default loadMenu;