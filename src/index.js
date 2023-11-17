import { pageLoad } from "./page-load";
import { home } from "./home";
import './styles.css';

function main() {
    pageLoad();

    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const contactBtn = document.querySelector(".contact");

    homeBtn.classList.add("selected");

    homeBtn.addEventListener("click", () => {
        homeBtn.classList.add("selected");

        if(menuBtn.classList.contains("selected")) {
            menuBtn.classList.toggle("selected");
        } else if(contactBtn.classList.contains("selected")) {
            contactBtn.classList.toggle("selected");
        }
    });

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.add("selected");

        if(homeBtn.classList.contains("selected")) {
            homeBtn.classList.toggle("selected");
        } else if(contactBtn.classList.contains("selected")) {
            contactBtn.classList.toggle("selected");
        }
    });

    contactBtn.addEventListener("click", () => {
        contactBtn.classList.add("selected");

        if(homeBtn.classList.contains("selected")) {
            homeBtn.classList.toggle("selected");
        } else if(menuBtn.classList.contains("selected")) {
            menuBtn.classList.toggle("selected");
        }
    });
}

main();