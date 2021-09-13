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

export default createNavbar;