// Modal feedback
const feedbackLink = document.querySelector(".button-feedback");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback");
const feedbackName = feedbackPopup.querySelector(".name");
const feedbackEmail = feedbackPopup.querySelector(".email");
const feedbackComment = feedbackPopup.querySelector(".comment");

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("modal-show");
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!feedbackName.value || !feedbackEmail.value || !feedbackComment.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    }
  }
});

//Modal map
const mapLink = document.querySelector(".button-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

//Modal success cart
const buyButton = document.querySelector(".catalog-button-buy");
const messagePopup = document.querySelector(".modal-success-cart");
const messageClose = messagePopup.querySelector(".modal-close");

buyButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.add("modal-show");
});

messageClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  messagePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (messagePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      messagePopup.classList.remove("modal-show");
    }
  }
});
