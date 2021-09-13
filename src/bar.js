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

export default loadBar;