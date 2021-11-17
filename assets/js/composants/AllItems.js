class AllItems {
    constructor() {
        this.containerAll = document.createElement("div");
    }

    init(container, buttonClear) {
        this.containerAll.id = "allItems";
        this.containerAll.innerHTML = "";
        this.containerAll.style.cssText = "width: 90%; margin: 3rem auto;"
        let storage = Object.keys(localStorage);

        for(let x = 0; x < localStorage.length; x++) {
            let divContainer = document.createElement("div");
            let divContent = document.createElement("div");
            let divI = document.createElement("div");
            let check = document.createElement("i");
            let update = document.createElement("i");
            let sup = document.createElement("i");

            divContainer.style.cssText = "width: 100%; display: flex; flex-wrap: nowrap;";
            divContent.style.cssText = "width: 80%; padding: 1rem; color: #333333; font-weight: bold;";
            divI.style.cssText = "width: 20%; display: flex; flex-wrap: nowrap;";
            check.style.cssText = "width: 33.3%; text-align: center; cursor: pointer;";
            sup.style.cssText = "width: 33.3%; text-align: center; cursor: pointer; color: #dc5350";
            update.style.cssText = "width: 33.3%; text-align: center; cursor: pointer; color: #45bfe7";



            check.className = "far fa-check-circle";
            update.className = "far fa-edit";
            sup.className = "far fa-times-circle";

            divContent.innerHTML = localStorage.getItem(storage[x]);
            divContainer.appendChild(divContent);
            divContainer.appendChild(divI);
            divI.appendChild(check);
            divI.appendChild(update);
            divI.appendChild(sup);
            this.containerAll.appendChild(divContainer);
        }

        container.insertBefore(this.containerAll, buttonClear);
    }
}

export {AllItems};