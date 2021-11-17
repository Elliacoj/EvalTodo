class AllItems {
    constructor() {
        this.container = document.createElement("div");
    }

    init(container, buttonClear) {
        this.container.id = "allItems";
        this.container.innerHTML = "";
        let storage = Object.keys(localStorage);

        for(let x = 0; x < localStorage.length; x++) {
            let divContainer = document.createElement("div");
            let divContent = document.createElement("div");
            let check = document.createElement("i");
            let update = document.createElement("i");
            let sup = document.createElement("i");

            divContent.innerHTML = localStorage.getItem(storage[x]);
            divContainer.appendChild(divContent);
            divContainer.appendChild(check);
            divContainer.appendChild(update);
            divContainer.appendChild(sup);
            this.container.appendChild(divContent);
        }

        container.insertBefore(this.container, buttonClear);
    }
}

export {AllItems};