// JavaScript Document
console.log("hi");

//Bronvermelding Roos Buskermolen: deNav
const deMenuButton = document.querySelector("button");
const deNav = document.querySelector("nav");

const deHeadersubmenu = document.querySelector('button[aria-label="toggle headersubmenu"]');
const deHeadersubnav = document.querySelector('section[aria-label="nav headersubmenu"]');

const subnavButton = document.querySelector('button[aria-label="subnavKnop"]');
const desubNav = document.querySelector('section[aria-label="subnav"]');

// 2
const headerElem = document.querySelector("header");

/* set the offset on which the hide effect has to wait */
const scrollOffset = 200;

//1
deMenuButton.onclick = toggleMenu;
deHeadersubmenu.onclick = toggleheadersub;
subnavButton.onclick = togglesubMenu;


function toggleMenu() {
  deMenuButton.classList.toggle("is-open");
  deNav.classList.toggle("geopend");
}

function toggleheadersub() {
  deHeadersubmenu.classList.toggle("is-open");
  deHeadersubnav.classList.toggle("geopend");
}

function togglesubMenu() {
  subnavButton.classList.toggle("is-open");
  desubNav.classList.toggle("geopend");
}

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