// --------------------------------------------Scroll banner----------------------------------
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");
var bar = document.getElementById("bars");
var head = document.querySelector("header");
bar.addEventListener("click", () => {
  head.classList.toggle("navactive");
});
function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();

// --------------------------------Scroll banner-------------------------------------

// ------------------------------------------Review slider-------------------------------------
const testimonialData = [
  {
    avatar:
      "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
    name: "Simonette Lindermann",
    review:
      "Mind-blowing discovery! Changed my routine. Essential for everyone. A wise advice to all interested. Can't imagine without it!",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
    name: "Merilee Beal",
    review:
      "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer.",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
    name: "Suzi Lankester",
    review:
      "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
    name: "Gaston Cunnow",
    review:
      "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review:
      "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review:
      "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review:
      "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!",
  },
];

const slideHolder = document.getElementById("slideHolder");
testimonialData.forEach((item) => {
  slideHolder.innerHTML += `
      <div class="swiper-slide">
          <div class="ImgHolder"><img src="${item.avatar}" alt="${item.name}"></div>
          <div class="ContentHolder">
              <h3>${item.name}</h3>
              <p>${item.review}</p>
          </div>
      </div>`;
});

const swiper = new Swiper("#carouselContainer", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.3,
  loop: true,
  spaceBetween: 30,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    depth: 800,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1600,
  },
});

function queryResizer() {
  if (window.innerWidth < 501) {
    swiper.params.slidesPerView = 1;
  } else if (window.innerWidth < 724) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 2.3;
  }
  swiper.update();
}

window.addEventListener("resize", queryResizer);
queryResizer();
