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
    // setting-name: setting-value
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
