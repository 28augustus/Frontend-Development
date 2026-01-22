// JavaScript Document
console.log("hi");

//Bronvermelding Roos Buskermolen: deNav
const deMenuButton = document.querySelector("button");
const deNav = document.querySelector("nav");

const deSearchbutton = document.querySelector('button[aria-label="zoekbalk: gesloten"]');
const deFrom = document.querySelector("form")

const headerElem = document.querySelector("header");
const bodyElem = document.body;

const deHeadersubmenuButtons = document.querySelectorAll("header nav button");

// hamburger
deMenuButton.onclick = toggleMenu;

// search button
deSearchbutton.onclick = toggleSearch

function toggleMenu() {
  deMenuButton.classList.toggle("is-open");
  deNav.classList.toggle("geopend");
  bodyElem.classList.toggle("hidden");
}

//Search button
function toggleSearch() {
  deSearchbutton.classList.toggle("is-open");
  deFrom.classList.toggle("geopend");
}


//Bronvermelding: Sanne 't Hooft geholpen met JavaScript 
// schrijven voor het uitklappen hamburgermenu
// submenu
deHeadersubmenuButtons.forEach(function (deHeadersubmenuButton) {
  deHeadersubmenuButton.onclick = toggleheadersub;
});

function toggleheadersub(event) {
  let deButton = event.currentTarget;
  let deNav = deButton.nextElementSibling;

  deButton.classList.toggle("is-open");
  deNav.classList.toggle("geopend");
}

/* set the offset on which the hide effect has to wait */
const scrollOffset = 200;

//Bronvermelding sticky header: https://johandejong.dev/blog/sticky-header-with-show-hide-on-scroll + Sanne 't Hooft

/* get the current page position */
let prevScrollpos = window.pageYOffset;

/* monitor when the page is being scrolled */
window.addEventListener("scroll", () => {
  /* check if the scroll offset is passed */
  if (window.pageYOffset > scrollOffset) {
    /* get the new page position after scrolling */
    let currentScrollPos = window.pageYOffset;
    /* check the new page position with the old position */
    if (prevScrollpos > currentScrollPos) {
      /* if scrolling UP, show the sticky element */
      headerElem.classList.remove("foetsie");
    } else {
      /* if scrolling DOWN, hide the sticky element */
      headerElem.classList.add("foetsie");
    }
    /* set the page position, so it can be checked the next time */
    prevScrollpos = currentScrollPos;
  }
});
