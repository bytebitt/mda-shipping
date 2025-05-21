const mobileMenu = document.getElementById("mobileMenu");
const burgerButton = document.getElementById("burgerButton");
const exitButton = document.getElementById("exitButton");

burgerButton.addEventListener("click", () => {
  mobileMenu.classList.remove("left-[-100%]");
  burgerButton.classList.remove("hidden");
  mobileMenu.classList.add("left-0");
});

exitButton.addEventListener("click", () => {
  exitButton.classList.add("hidden");
  mobileMenu.classList.add("left-[-100%]");
  mobileMenu.classList.remove("left-0");
});
