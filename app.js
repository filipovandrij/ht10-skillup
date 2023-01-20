//add to card

let productsCountElement = document.getElementById("products-count");

let addToCardBtns = document.querySelectorAll(".btn_add");

for (let i = 0; i < addToCardBtns.length; i++) {
  addToCardBtns[i].addEventListener("click", function () {
    productsCountElement.innerHTML = +productsCountElement.innerHTML + 1;
  });
}

let likeBtns = document.querySelectorAll(".click-like");

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    e.target.classList.toggle("liked");
  })
);

let detailsBtns = document.querySelectorAll(".btn_info");

let modalWindow = document.querySelector(".modal");

let closeBtn = document.querySelector(".btn-close");

detailsBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    modalWindow.classList.add("show");
  })
);

closeBtn.addEventListener("click", function () {
  modalWindow.classList.remove("show");
});

// close modal when click background

modalWindow.addEventListener("click", function (e) {
  if (e.target === modalWindow) {
    modalWindow.classList.remove("show");
  }
});

// slider

$(document).ready(function () {
  $(".sliders").slick({
    dots: true,
  });
});

function showModalByScroll() {
  if (scrollY >= document.body.scrollHeight / 2) {
    modalWindow.classList.add("show");
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

// work on lesson and add counter of cards

const incrementBtns = document.querySelectorAll(".increment-btn");
const decrementBtns = document.querySelectorAll(".decrement-btn");
const productsCount = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = +this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 0;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

let basicArrayOfCounters = [];

productsCount.forEach(
  (item, i) =>
    (basicArrayOfCounters[i] = new Counter(
      incrementBtns[i],
      decrementBtns[i],
      item
    ))
);

const counter1 = new Counter(incrementBtns, decrementBtns, productsCount);
