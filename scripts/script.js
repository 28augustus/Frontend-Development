// JavaScript Document
console.log("hi");

const deMenuButton = document.querySelector("button");

// 2
const headerElem = document.querySelector("header");

/* set the offset on which the hide effect has to wait */
const scrollOffset = 200;

//1
deMenuButton.onclick = toggleMenu;

function toggleMenu() {
  deMenuButton.classList.toggle("is-open");
}

//Bronvermelding sticky header: https://johandejong.dev/blog/sticky-header-with-show-hide-on-scroll

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
