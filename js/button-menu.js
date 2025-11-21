const buttonMenu = document.getElementById("button-menu");
const divMenu = document.getElementById("menu-nav-links");
const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const dialog = document.querySelector("dialog");
const buttonClose = document.getElementById("button-close-menu");

buttonMenu.addEventListener("click", (e) => {
  const screenWidth = e.view.screen.availWidth;
  if (parseFloat(screenWidth) < 1024) {
    // divMenu.style.display = "grid";

    body.classList.add("no-scroll");
    main.setAttribute("inert", "");
    footer.setAttribute("inert", "");

    dialog.show();
  }
});

buttonClose.addEventListener("click", () => {
  body.classList.remove("no-scroll");
  main.removeAttribute("inert");
  footer.removeAttribute("inert");

  dialog.close();
});

const mediaQuery = window.matchMedia("(min-width: 1023px)");

function handleChange(e) {
  if (e.matches && dialog.open) {
    body.classList.remove("no-scroll");
    main.removeAttribute("inert");
    footer.removeAttribute("inert");

    dialog.close();
  }
}

mediaQuery.addEventListener("change", handleChange);
