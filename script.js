const panels = document.querySelectorAll(".panel");
const container = document.querySelector(".container");
window.addEventListener("resize", () => {
  if (
    window.matchMedia("(max-width: 480px)").matches &&
    (panels[3].classList.contains("active") ||
      panels[4].classList.contains("active"))
  ) {
    removeActiveClasses();
    panels[2].classList.add("active");
  }
});

function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove("active"));
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
