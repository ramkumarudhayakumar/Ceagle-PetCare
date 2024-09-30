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

  const bannerImage = document.querySelector(".original");
  switch (index) {
    case 1:
      bannerImage.src = "/Images/serviceBanner/petWalking.jpg";
      break;
    case 2:
      bannerImage.src = "/Images/serviceBanner/petSitting.jpg";
      break;
    case 3:
      bannerImage.src = "/Images/serviceBanner/petBathing.jpg";
      break;
    case 4:
      bannerImage.src = "/Images/serviceBanner/petBoarding.jpg";
      break;
    case 5:
      bannerImage.src = "/Images/serviceBanner/petTaxi.jpg";
      break;
    default:
      bannerImage.src = "/Images/banner service.jpg";
  }

  const buttons = document.querySelectorAll(".frame .div");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttons[index - 1].classList.add("active");
}
