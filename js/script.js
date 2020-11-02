const loginLink = document.querySelector(".login-link");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const loginForm = loginPopup.querySelector(".login-form");
const loginLogin = loginPopup.querySelector(".login-icon-user");
const loginPass = loginPopup.querySelector(".modal-icon-pass");
const mapLink = document.querySelector(".google-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");
const writeUs = document.querySelector(".btn-feedback");
const writePopup = document.querySelector(".modal-feedback");
const writeClose = writePopup.querySelector(".modal-close");
const writeForm = writePopup.querySelector(".feedback-form");
const nameLogin = writePopup.querySelector(".feedback-input");


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginLogin.value = storage;
    loginPass.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal-show");

  if (storage) {
    nameLogin.value = storage;
    loginPass.focus();
  } else {
    loginLogin.focus();
}
});

writeClose.addEventListener("click", function () {
  writePopup.classList.remove("modal-show");
});

writeForm.addEventListener("submit",function (evt) {
  if (!nameLogin.value || !loginLogin.value) {
        evt.preventDefault();
        console.log("Отправляем форму");
        writePopup.classList.remove("modal-error");
        writePopup.offsetWidth = writePopup.offsetWidth;
        writePopup.classList.add("modal-error");
      } else {
        localStorage.setItem("name", nameLogin.value);
  }
      });

loginForm.addEventListener("submit", function (evt) {
    if (!loginLogin.value || !loginPass.value) {
        evt.preventDefault();
        console.log("Отправляем форму");
        loginPopup.classList.remove("modal-error");
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        loginPopup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", loginLogin.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});



/* slider */

// const btnLeft = document.querySelector(".btn-previous"),
// const btnRight = document.querySelector(".btn-next"),
// const dots = document.querySelectorAll(".slider-controls"),
// const firstSlides = document.querySelector(".slider-item"),
// const secondSlides = document.querySelector(".slider-next"),
// const slaidesWrapper = document.querySelector(".slider-container");
// const firstSlide = document.querySelector(".first-slide"),
// const secondSlide = document.querySelector(".second-slide"),


// btnRight.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log("Клик по слайдеру")
//   firstSlides.classList.remove("slide-current");
//   secondSlides.classList.add("slide-current");
//   firstSlide.classList.remove("current");
//   secondSlides.classList.add("current");

// });


// btnLeft.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   console.log("Клик по слайдеру")
//   firstSlides.classList.remove("slide-current");
//   secondSlides.classList.add("slide-current");
//   firstSlide.classList.remove("current");
//   secondSlides.classList.add("current");

// });
