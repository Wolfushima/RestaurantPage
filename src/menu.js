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

export default loadMenu;