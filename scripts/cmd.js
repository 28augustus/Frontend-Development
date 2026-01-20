const localnavButton = document.querySelector(
  "main section:nth-of-type(1) button",
);
const localnav = document.querySelector("main section:nth-of-type(1) nav");

localnavButton.onclick = toggleLocalnav;

function toggleLocalnav() {
  //   subnavButton.classList.toggle("is-open");
  localnav.classList.toggle("is-open");
}
