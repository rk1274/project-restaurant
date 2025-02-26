import { load as loadHome } from "./home_page.js";
import { load as loadMenu } from "./menu_page.js";
import { load as loadAbout } from "./about_page.js";
import "./styles.css";


const container = document.getElementById("content");

document.addEventListener("DOMContentLoaded", () => {
    loadHome();
});

const clearDOM = () => {
    container.innerHTML = "";
}

window.switchToHome = () => {
    clearDOM();

    loadHome();
}

window.switchToMenu = () => {
    clearDOM();
    
    loadMenu();
}

window.switchToAbout = () => {
    clearDOM();
    
    loadAbout();
}

