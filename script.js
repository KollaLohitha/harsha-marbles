
document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.left = "14px";
    nav.style.right = "14px";
    nav.style.flexDirection = "column";
    nav.style.padding = "18px";
    nav.style.background = "#1d1d1b";
  }
});
