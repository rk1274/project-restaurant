import "./menu_page.css";

const container = document.getElementById("content");

class item {
    constructor(name, description, cost, src) {
        this._name = name;
        this._description = description;
        this._cost = cost;
        this._src = src;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get cost() {
        return `£${this._cost.toFixed(2)}`;
    }

    get src() {
        return src;
    }
}

const starters = [
    new item('Smoky Roasted Tomato Bisque', 'Fire-roasted tomatoes blended with fresh basil and a hint of thyme, served with a parmesan crisp.', 9),
    new item('Charred Brussels & Honey', 'Crispy charred Brussels sprouts drizzled with hot honey and topped with toasted almonds.', 10),
]
const mains = [
    new item('Wood-Fired Herb Chicken', 'Juicy chicken breast marinated in thyme and garlic, served with charred lemon and rosemary potatoes.', 22),
    new item('Ember-Grilled Ribeye', '12oz ribeye, flame-grilled to perfection, topped with thyme butter, served with truffle mashed potatoes.', 34),
    new item('Cedar-Planked Salmon', 'Wild-caught salmon, slow-roasted on a cedar plank with a citrus-thyme glaze, served with roasted root vegetables.', 28),
]
const desserts = [
    new item('Burnt Honey Crème Brûlée ', 'Silky vanilla custard infused with thyme and finished with a caramelized sugar crust.', 11),
    new item('Dark Chocolate & Smoked Sea Salt Tart', 'Decadent dark chocolate ganache with a hint of smoked sea salt in a buttery crust.', 12),
]

export const load = () => {
    let menuPage = createDiv('menu-page');

    let startersContainer = createDiv('starters');
    addMenuItems(startersContainer, starters);

    let mainsContainer = createDiv('mains');
    addMenuItems(mainsContainer, mains);

    let dessertsContainer = createDiv('desserts');
    addMenuItems(dessertsContainer, desserts);

    container.append(menuPage);
    menuPage.append(startersContainer);
    menuPage.append(mainsContainer);
    menuPage.append(dessertsContainer);
}

const addMenuItems = (itemContainer, items) => {
    for (var i = 0; i < items.length; i++) {
        let item = createItem(items[i])
        itemContainer.append(item);
    }
}

const createItem = (menuItem) => {
    let itemContainer = createDiv('itemContainer')

    itemContainer.append(createDiv('name', menuItem.name));
    itemContainer.append(createDiv('description', menuItem.description));
    itemContainer.append(createDiv('cost', menuItem.cost));

    return itemContainer
}

const createDiv = (className, textContent) => {
    let div = document.createElement("div");
    div.className = className;
    div.textContent = textContent;

    return div
}
