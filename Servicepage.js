var bar = document.getElementById("bars");
var head = document.querySelector("header");
bar.addEventListener("click", () => {
  head.classList.toggle("navactive");
});
function showContent(index) {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    content.style.display = "none";
  });

  const selectedContent = document.getElementById(`content-${index}`);
  if (selectedContent) {
    selectedContent.style.display = "flex";
  }
}
