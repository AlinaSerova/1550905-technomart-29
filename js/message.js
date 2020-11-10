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
