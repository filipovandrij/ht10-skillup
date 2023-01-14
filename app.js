//add to card

let productsCountElement = document.getElementById("products-count");
// console.log(productsCountElement.innerHTML);
let addToCardBtns = document.querySelectorAll(".btn_add");

for (let i = 0; i < addToCardBtns.length; i++) {
  // console.log(i);
  addToCardBtns[i].addEventListener("click", function () {
    productsCountElement.innerHTML = +productsCountElement.innerHTML + 1;
  });
}
