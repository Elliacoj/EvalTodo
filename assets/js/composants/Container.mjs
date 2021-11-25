import {AddItem} from "./AddItem.mjs";
import {ClearItems} from "./ClearItems.mjs";
import {AllItems} from "./AllItems.mjs";
import {ChartJs} from "./Chart.mjs";

class Container {

    /**
     * Constructor
     */
    constructor() {
        this.container = document.createElement("div");
        this.title = document.createElement("h1");
        this.addItem = new AddItem();
        this.clearItem = new ClearItems();
        this.allItems = new AllItems();
        this.chartJs = new ChartJs();
    }

    /**
     * Init the container
     * @param titleName
     */
    init(titleName) {
        this.container.style.cssText = 'width: 100%';
        this.title.style.cssText = "width: 100%; font-size: 4rem; text-align: center; padding: 2rem; color: #333333;";
        this.title.innerHTML = titleName;

        this.container.appendChild(this.title);
        document.body.appendChild(this.container);

        this.addItem.init(this.container);
        this.clearItem.init(this.container);
        this.allItems.init(this.container, this.clearItem.button);
        this.chartJs.init(this.container)

        this.addItem.opacity();
        this.clearItem.opacity();

        this.addItem.add(this.allItems, this.container, this.clearItem.button);
        this.clearItem.clear();
        this.allItems.check();
        this.allItems.delete();
        this.allItems.update();
    }
}

export {Container};