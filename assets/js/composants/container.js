import {AddItem} from "./AddItem";

class Container {
    constructor() {
        this.container = document.createElement("div");
        this.title = document.createElement("h1");
        this.addItem = new AddItem();
    }

    init(titleName) {
        this.container.style.cssText = 'width: 100%';
        this.title.style.cssText = "width: 100%; font-size: 4rem; text-align: center; padding: 2rem; color: #333333;";
        this.title.innerHTML = titleName;

        this.container.appendChild(this.title);
        document.body.appendChild(this.container);

        this.addItem.init(this.container);
    }
}

export {Container};