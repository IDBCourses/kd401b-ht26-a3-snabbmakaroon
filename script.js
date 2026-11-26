const link = document.querySelector("#palette");
const button = document.querySelector("#theme");

const typeLink = document.querySelector("#type");
const typeButton = document.querySelector("#reading");

button.addEventListener("click", function () {
  const dark = link.getAttribute("href") === "dark.css";
  link.setAttribute("href", dark ? "light.css" : "dark.css");
  if (dark) {
    button.textContent = "Dark mode";
  } else {
    button.textContent = "Light mode";
  }
});

typeButton.addEventListener("click", function () {
  const read = typeLink.getAttribute("href") === "reading.css";
  typeLink.setAttribute("href", read ? "type.css" : "reading.css");
  if (read) {
    typeButton.textContent = "Reading mode off";
  } else {
    typeButton.textContent = "Reading mode on";
  }
});
