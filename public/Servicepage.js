var bar = document.getElementById("bars");
var head = document.querySelector("header");
bar.addEventListener("click", () => {
  head.classList.toggle("navactive");
});
