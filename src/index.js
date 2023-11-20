import { pageLoad } from "./page-load";
import { home } from "./home";
import './styles.css';

function main() {
    pageLoad();
    
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const contactBtn = document.querySelector(".contact");

    homeBtn.classList.add("selected");
    home();

    homeBtn.addEventListener("click", () => {
        const contentBody = document.querySelector(".content-body");
        homeBtn.classList.add("selected");

        if (contentBody) {
            contentBody.remove();
        }
        if(menuBtn.classList.contains("selected")) {
            menuBtn.classList.toggle("selected");
        } else if(contactBtn.classList.contains("selected")) {
            contactBtn.classList.toggle("selected");
        }
        home();
    });

    menuBtn.addEventListener("click", () => {
        const contentBody = document.querySelector(".content-body");
        menuBtn.classList.add("selected");
        

        if (contentBody) {
            contentBody.remove();
        }
        if(homeBtn.classList.contains("selected")) {
            homeBtn.classList.toggle("selected");
        } else if(contactBtn.classList.contains("selected")) {
            contactBtn.classList.toggle("selected");
        }

    });

    contactBtn.addEventListener("click", () => {
        const contentBody = document.querySelector(".content-body");
        contactBtn.classList.add("selected");

        if (contentBody) {
            contentBody.remove();
        }
        if(homeBtn.classList.contains("selected")) {
            homeBtn.classList.toggle("selected");
        } else if(menuBtn.classList.contains("selected")) {
            menuBtn.classList.toggle("selected");
        }

    });
}

main();