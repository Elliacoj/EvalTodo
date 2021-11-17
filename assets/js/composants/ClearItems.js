class ClearItems {
    constructor() {
        this.button = document.createElement("div");
    }

    init(container) {
        this.button.style.cssText = "width: 25rem; border: 2px solid #95d6b7; color: #95d6b7; text-align: center; padding: 1rem; margin: 5rem auto; cursor: pointer;";
        this.button.innerHTML = "Clear Items";

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
}

export {ClearItems};