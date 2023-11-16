import './styles.css';

export function pageLoad() {
    const content = document.querySelector("#content");

    const header = document.createElement("div");
    header.classList.add("header");

    const logo = document.createElement("h1");
    logo.textContent = "Sam's Pizza";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("btns");

    // buttons for tabbed browsing
    const home = document.createElement("button");
    home.classList.add("home");
    home.textContent = "Home";
    const menu = document.createElement("button");
    menu.classList.add("menu");
    menu.textContent = "Menu";
    const contact = document.createElement("button");
    contact.classList.add("contact");
    contact.textContent = "Contact";

    buttonsContainer.append(home);
    buttonsContainer.append(menu);
    buttonsContainer.append(contact);

    header.append(logo)
    header.append(buttonsContainer);

    content.appendChild(header);
}