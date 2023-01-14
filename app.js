//add to card

let productsCountElement = document.getElementById("products-count");
// console.log(productsCountElement.innerHTML);
let addToCardBtns = document.querySelectorAll(".btn_add");

for (let i = 0; i < addToCardBtns.length; i++) {
  addToCardBtns[i].addEventListener("click", function () {
    productsCountElement.innerHTML = +productsCountElement.innerHTML + 1;
  });
}

// let pointLike = document.querySelectorAll(".likes");

// let likeClick = document.querySelectorAll(".click-like");
// console.log(likeClick);
// console.log(likeClick[2] + "-tyt");
// for (let i = 0; i < likeClick.length; i++) {
//   console.log(likeClick[i]);
//   likeClick[i].addEventListener("click", function () {
//     for (let i = 0; i < pointLike.length; i++) {
//       if (pointLike[i].getAttribute("src") == "img/like.png") {
//         pointLike[i].setAttribute("src", "img/like_white.png");
//       } else {
//         pointLike[i].setAttribute("src", "img/like.png");
//       }
//     }
//   });
// }

let pointLike1 = document.querySelector(".likes1");
let likeClick1 = document.querySelector(".click-like1");

likeClick1.addEventListener("click", function () {
  if (pointLike1.getAttribute("src") == "img/like.png") {
    pointLike1.setAttribute("src", "img/like_white.png");
  } else {
    pointLike1.setAttribute("src", "img/like.png");
  }
});
let pointLike2 = document.querySelector(".likes2");
let likeClick2 = document.querySelector(".click-like2");
likeClick2.addEventListener("click", function () {
  if (pointLike2.getAttribute("src") == "img/like.png") {
    pointLike2.setAttribute("src", "img/like_white.png");
  } else {
    pointLike2.setAttribute("src", "img/like.png");
  }
});
let pointLike3 = document.querySelector(".likes3");
let likeClick3 = document.querySelector(".click-like3");
likeClick3.addEventListener("click", function () {
  if (pointLike3.getAttribute("src") == "img/like.png") {
    pointLike3.setAttribute("src", "img/like_white.png");
  } else {
    pointLike3.setAttribute("src", "img/like.png");
  }
});
let pointLike4 = document.querySelector(".likes4");
let likeClick4 = document.querySelector(".click-like4");
likeClick4.addEventListener("click", function () {
  if (pointLike4.getAttribute("src") == "img/like.png") {
    pointLike4.setAttribute("src", "img/like_white.png");
  } else {
    pointLike4.setAttribute("src", "img/like.png");
  }
});
let pointLike5 = document.querySelector(".likes5");
let likeClick5 = document.querySelector(".click-like5");
likeClick5.addEventListener("click", function () {
  if (pointLike5.getAttribute("src") == "img/like.png") {
    pointLike5.setAttribute("src", "img/like_white.png");
  } else {
    pointLike5.setAttribute("src", "img/like.png");
  }
});
let pointLike6 = document.querySelector(".likes6");
let likeClick6 = document.querySelector(".click-like6");
likeClick6.addEventListener("click", function () {
  if (pointLike6.getAttribute("src") == "img/like.png") {
    pointLike6.setAttribute("src", "img/like_white.png");
  } else {
    pointLike6.setAttribute("src", "img/like.png");
  }
});
let pointLike7 = document.querySelector(".likes7");
let likeClick7 = document.querySelector(".click-like7");
likeClick7.addEventListener("click", function () {
  if (pointLike7.getAttribute("src") == "img/like.png") {
    pointLike7.setAttribute("src", "img/like_white.png");
  } else {
    pointLike7.setAttribute("src", "img/like.png");
  }
});
let pointLike8 = document.querySelector(".likes8");
let likeClick8 = document.querySelector(".click-like8");
likeClick8.addEventListener("click", function () {
  if (pointLike8.getAttribute("src") == "img/like.png") {
    pointLike8.setAttribute("src", "img/like_white.png");
  } else {
    pointLike8.setAttribute("src", "img/like.png");
  }
});
let pointLike9 = document.querySelector(".likes9");
let likeClick9 = document.querySelector(".click-like9");
likeClick9.addEventListener("click", function () {
  if (pointLike9.getAttribute("src") == "img/like.png") {
    pointLike9.setAttribute("src", "img/like_white.png");
  } else {
    pointLike9.setAttribute("src", "img/like.png");
  }
});
