import { load as loadMenu } from "./menu_page.js";
import "./home_page.css";

const container = document.getElementById("content");

export const load = () => {
    let homePage = document.createElement("div");
    homePage.id = 'home-page';

    let name = document.createElement("div");
    name.className = 'name';
    name.textContent = 'Ember & Thyme'

    let slogan = document.createElement("div");
    slogan.className = 'slogan';
    slogan.textContent = 'Where every bite tells a story.'

    let menuButton = document.createElement("BUTTON");
    menuButton.className = 'menu';
    menuButton.textContent = 'view menu'
    menuButton.onclick = () => {
        container.innerHTML = "";

        loadMenu();
    }
    container.append(homePage);
    homePage.append(name);
    homePage.append(slogan);
    homePage.append(menuButton);
}

