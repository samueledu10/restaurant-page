export function menu() {
    const content = document.querySelector("#content");
    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");


    //---------------main course-----------------------

    const mainCourse = document.createElement("h2");
    mainCourse.textContent = "Main Course";
    mainCourse.classList.add("menu-header");

    const mainCourseContainer = document.createElement("div");

    for (let items = 0; items < 5; ++items ) {
        
        mainCourseContainer.append(item());
    }
    // ------------------------------------------------

    // ---------------Beverages------------------------
    const beverages = document.createElement("h2");
    beverages.textContent = "Beverages";
    beverages.classList.add("menu-header");

    const beveragesContainer = document.createElement("div");

    for (let items = 0; items < 3; ++items ) {
        beveragesContainer.append(item());
    }

    // ------------------------------------------------
    


    menuContainer.append(mainCourse);
    menuContainer.append(mainCourseContainer);
    menuContainer.append(beverages);
    menuContainer.append(beveragesContainer);
    contentBody.append(menuContainer);
    content.append(contentBody);
}


function item() {
    const item = document.createElement("div");
        item.classList.add("item");

        const itemInfoContainer = document.createElement("div");
        itemInfoContainer.classList.add("info-container");

        const itemName = document.createElement("p");
        itemName.classList.add("item-name");
        itemName.textContent = "Food name";


        const itemDescription = document.createElement("div");
        itemDescription.classList.add("item-description");
        itemDescription.textContent = "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore.";

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = "$10.99";

        itemInfoContainer.append(itemDescription);
        itemInfoContainer.append(itemPrice);

        item.append(itemName);
        item.append(itemInfoContainer);
        return item;
}