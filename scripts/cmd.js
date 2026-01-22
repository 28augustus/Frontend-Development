//Bronvermelding: Sanne 't Hooft geholpen met JavaScript 
// schrijven voor het uitklappen (animatie) van de Ga direct naar sectie

const localnavButton = document.querySelector(
  "main section:nth-of-type(1) button",
);
const localnav = document.querySelector("main section:nth-of-type(1) nav");

localnavButton.onclick = toggleLocalnav;

function toggleLocalnav() {
  //   subnavButton.classList.toggle("is-open");
  localnav.classList.toggle("is-open");
}
