// JavaScript Document
console.log("hi");

const deMenuButton = document.querySelector("button");

deMenuButton.onclick = toggleMenu;

function toggleMenu() {
  deMenuButton.classList.toggle("is-open");
}
