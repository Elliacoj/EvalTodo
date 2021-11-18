class ClearItems {
    constructor() {
        this.button = document.createElement("div");
    }

    init(container) {
        this.button.style.cssText = "width: 25rem; border: 2px solid #95d6b7; color: #95d6b7; text-align: center; padding: 1rem; margin: 5rem auto; cursor: pointer;";
        this.button.innerHTML = "Clear Items";
        this.button.id = "buttonClear";

        container.appendChild(this.button);
    }

    opacity() {
        this.button.addEventListener("mouseenter", function() {
            this.style.opacity = "0.7";
        })
        this.button.addEventListener("mouseout", function() {
            this.style.opacity = "initial";
        })
    }

    clear() {
        this.button.addEventListener("click", function () {
            let storage = Object.keys(localStorage);

            if(localStorage.length !== 0) {
                for(let x = localStorage.length; x >= 0; x--) {
                    if(localStorage.key(x) !== "deleteItem") {
                        localStorage.removeItem(localStorage.key(x));

                        if(localStorage.getItem("deleteItem")) {
                            let number = parseInt(localStorage.getItem("deleteItem")) + 1;
                            localStorage.setItem("deleteItem", number.toString());
                        }
                        else {
                            localStorage.setItem("deleteItem", "1");
                        }
                    }
                }

                if(document.getElementById("allItems")) {
                    document.getElementById("allItems").remove()
                }
            }
        })
    }
}

export {ClearItems};