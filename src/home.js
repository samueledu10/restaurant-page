
export function home() {
    const content = document.querySelector("#content");
    const contentBody = document.createElement("div");
    contentBody.classList.add("content-body");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const headline = document.createElement("h2");
    headline.classList.add("headline");
    headline.textContent = "Best Pizza Experience!";

    homeContainer.append(headline);
    contentBody.append(homeContainer);
    content.append(contentBody);
}