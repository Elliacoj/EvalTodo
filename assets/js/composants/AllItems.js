import "@fortawesome/fontawesome-free/js/all.js";

class AllItems {

    /**
     * Constructor
     */
    constructor() {
        this.containerAll = document.createElement("div");
    }

    /**
     * Init all items
     * @param container
     * @param buttonClear
     */
    init(container, buttonClear) {
        this.containerAll.id = "allItems";
        this.containerAll.innerHTML = "";
        this.containerAll.style.cssText = "width: 90%; margin: 3rem auto;"
        let storage = Object.keys(localStorage);

        for(let x = 0; x < localStorage.length; x++) {
            if(localStorage.key(x) !== "deleteItem") {
                let divContainer = document.createElement("div");
                let divContent = document.createElement("div");
                let divI = document.createElement("div");
                let divCheck = document.createElement("div");
                let divUpdate = document.createElement("div");
                let divSup = document.createElement("div");
                let check = document.createElement("i");
                let update = document.createElement("i");
                let sup = document.createElement("i");

                divContainer.style.cssText = "width: 100%; display: flex; flex-wrap: nowrap;";
                divContent.style.cssText = "width: 80%; padding: 1rem; color: #333333; font-weight: bold;";
                divI.style.cssText = "width: 20%; display: flex; flex-wrap: nowrap;";
                divCheck.style.cssText = "width: 33.3%; text-align: center; cursor: pointer; color: #333333";
                divSup.style.cssText = "width: 33.3%; text-align: center; cursor: pointer; color: #dc5350";
                divUpdate.style.cssText = "width: 33.3%; text-align: center; cursor: pointer; color: #45bfe7";
                check.style.cssText = "width: 100%;";
                sup.style.cssText = "width: 100%;";
                update.style.cssText = "width: 100%;";

                if(localStorage.getItem(storage[x]) === "1") {
                    divCheck.style.color = "#95d6b7";
                }

                divCheck.className = "check";
                divUpdate.className = "update";
                divSup.className = "delete";
                check.className = "far fa-check-circle";
                update.className = "far fa-edit";
                sup.className = "far fa-times-circle";

                divContent.innerHTML = localStorage.key(x);

                divContainer.appendChild(divContent);
                divContainer.appendChild(divI);
                divI.appendChild(divCheck);
                divI.appendChild(divUpdate);
                divI.appendChild(divSup);
                divCheck.appendChild(check);
                divUpdate.appendChild(update);
                divSup.appendChild(sup);
                this.containerAll.appendChild(divContainer);
            }
        }

        container.insertBefore(this.containerAll, buttonClear);
    }

    /**
     * Change color for button check
     */
    check() {
        let check = document.querySelectorAll(".check");
        check.forEach(function (e) {
            e.addEventListener("click", function () {

                if(e.style.color === "rgb(51, 51, 51)") {
                    e.style.color = "#95d6b7";
                    localStorage.setItem(e.parentElement.parentElement.firstChild.innerHTML, "1");
                }
                else {
                    e.style.color = "rgb(51, 51, 51)";
                    localStorage.setItem(e.parentElement.parentElement.firstChild.innerHTML, "0");
                }
            })
        })
    }

    /**
     * Delete a item
     */
    delete() {
        let deleteE = document.querySelectorAll(".delete");
        deleteE.forEach(function (e) {
            e.addEventListener("click", function () {
                localStorage.removeItem(e.parentElement.parentElement.firstChild.innerHTML);

                if(localStorage.getItem("deleteItem")) {
                    let number = parseInt(localStorage.getItem("deleteItem")) + 1;
                    localStorage.setItem("deleteItem", number.toString());
                }
                else {
                    localStorage.setItem("deleteItem", "1");
                }

                if(document.getElementById("allItems")) {
                    e.parentElement.parentElement.remove()
                }
            })
        })
    }

    /**
     * Update a item
     */
    update() {
        let updateE = document.querySelectorAll(".update");

        updateE.forEach(function (e) {
            e.addEventListener("click", function () {
                let contentDiv = e.parentElement.parentElement.firstChild;
                let contentI = e.parentElement;

                contentI.style.cssText = "display: none";

                let input = document.createElement("input");
                let button = document.createElement("div");
                button.innerHTML = "Ok";
                let content = contentDiv.innerHTML;
                contentDiv.innerHTML = "";
                contentDiv.style.display = "flex";
                contentDiv.style.flexWrap = "nowrap";

                input.style.cssText = "width: 80%; padding: 0.5rem; border-color: #95d6b7; font-size: 2rem;";
                button.style.cssText = "width: 20%; border: 2px solid #95d6b7; text-align: center; color: #95d6b7; padding: 0.5rem 0; cursor: pointer;";

                input.value = content;

                contentDiv.appendChild(input);
                contentDiv.appendChild(button);

                button.addEventListener("click", function () {
                    localStorage.removeItem(content);
                    content = input.value;
                    contentDiv.innerHTML = content;
                    localStorage.setItem(content, "0");
                    contentI.style.cssText = "width: 20%; display: flex; flex-wrap: nowrap;";
                })
            })
        })
    }
}

export {AllItems};