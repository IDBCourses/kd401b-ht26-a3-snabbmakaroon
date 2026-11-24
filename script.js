const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

button.addEventListener("click", function() {
    const dark = link.getAttribute("href") === "dark.css";
    link.setAttribute("href", dark ? "style.css" : "dark.css");
    if (dark) {
        button.textContent = "Dark mode"
    } else {
        button.textContent = "Light mode"
    }
});