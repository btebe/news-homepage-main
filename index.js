
const nav_toggle = document.getElementById("nav-toggle");
const primary_nav = document.getElementById("primary-nav");
const overlay = document.getElementById("overlay");

nav_toggle.addEventListener("click", () => {
  let toggle_val = nav_toggle.getAttribute("aria-expanded");

  if (toggle_val == "false") {
    toggle_val = true;
    overlay.style.display = "inherit";
    document.body.style.overflowY = 'hidden';
  } else {
    toggle_val = false;
    overlay.style.display = "none";
    document.body.style.overflowY = 'visible';
  }
  nav_toggle.setAttribute("aria-expanded", toggle_val);
  primary_nav.setAttribute("data-visible", toggle_val);
});

