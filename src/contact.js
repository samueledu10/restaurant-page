export function contact() {
    const content = document.querySelector("#content");
    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const schedule = document.createElement("p");
    schedule.textContent = "Mon-Sun: 8:00am-10:00pm";

    const phone = document.createElement("p");
    phone.textContent = "Call us at (111) 111 - 1111";

    const address = document.createElement("p");
    address.textContent = "Visit us at 111 Lorem Ipsum Ave, Lr 11111";


    contactContainer.append(schedule);
    contactContainer.append(phone);
    contactContainer.append(address);
    contentBody.append(contactContainer);
    content.append(contentBody);
}