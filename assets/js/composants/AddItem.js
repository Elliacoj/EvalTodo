class AddItem {
    constructor() {
        this.divP = document.createElement("div");
        this.inputAdd = document.createElement("input");
        this.button = document.createElement("div");
    }

    init(container) {
        this.divP.style.cssText = "width: 90%; margin: 1rem auto; display: flex; flex-wrap: nowrap;";
        this.inputAdd.type = "text";
        this.inputAdd.style.cssText = "width: 80%; padding: 1rem; border-color: #95d6b7; font-size: 2rem;";
        this.button.style.cssText = "width: 20%; border: 2px solid #95d6b7; text-align: center; color: #95d6b7; padding: 1rem 0; cursor: pointer;";
        this.button.innerHTML = "Add Item";

        this.divP.appendChild(this.inputAdd);
        this.divP.appendChild(this.button);
        container.appendChild(this.divP);
    }

    opacity() {
        this.button.addEventListener("mouseenter", function() {
            this.style.opacity = "0.7";
        })
        this.button.addEventListener("mouseout", function() {
            this.style.opacity = "initial";
        })
    }

    add(allItems, container, button) {
        this.button.addEventListener("click", () => {
            if(this.inputAdd.value.trim().length > 3) {
                localStorage.setItem(this.inputAdd.value.trim(), "0");
                this.inputAdd.value = "";
                allItems.init(container, button);
                allItems.check();
                allItems.delete();
                allItems.update();
            }
        })

    }
}

export {AddItem};