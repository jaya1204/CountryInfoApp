const darkLight = document.querySelector(".dark-light");
function changeTheme() {
  darkLight.querySelector("i").classList.toggle("fa-moon");
  darkLight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("light");
}

window.addEventListener("load", () => {
  if (document.body.classList.contains("light")) {
    darkLight.querySelector("i").classList.add("fa-moon");
  } else {
    darkLight.querySelector("i").classList.add("fa-sun");
  }
});
