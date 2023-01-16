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
// for (let i = 0; i < likeClick.length; i++) {
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

//ht-18 js likes↓↓↓↓↓

let likeBtns = document.querySelectorAll(".click-like");
console.log(likeBtns);

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    // if (btn.classList.contains("liked")) {
    //   btn.classList.remove("liked");
    // } else {
    //   btn.classList.add("liked");
    // }
    btn.classList.toggle("liked");
  })
);
