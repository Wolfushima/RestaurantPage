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

export default loadContact;