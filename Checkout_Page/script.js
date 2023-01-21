
const conteinerRight = document.querySelector(".conteiner_right");
const product12 = document.querySelectorAll(".product");
const tax = 1.18;
const shipping = "15.00";
document.querySelector(`.product_currentPrice0`).innerText=25.98
document.querySelector(`.product_currentPrice1`).innerText=48.9
document.querySelector(`.product_currentPrice2`).innerText=75.2
let products = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", () => {
  getProductsFromLocalStorage();
  productTotal();
});
const getProductsFromLocalStorage = () => {
  products.forEach((product) => {
    createproduct(product);
  });
};

conteinerRight.addEventListener("click", (e) => {
  if (e.target.className == "negativeButton") {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      productTotal();
    }
  }
  if (e.target.className == "plusButton") {
    if (e.target.previousElementSibling.innerText >= 0) {
      e.target.previousElementSibling.innerText++;
      productTotal();
    }
  }
  if (e.target.className == "btn_remove") {
    e.target.closest(".product").remove();
  }
  e.target.closest(`.product_currentPrice`).innerText=0;
});

let productTotal = () => {
  let y = 0
  for (i = 0; i < product12.length; i++) {
    let price1 = Number(
      document.querySelector(`.product_currentPrice${i}`).innerText
    );
    let quantity1 = Number(
      document.querySelector(`.urunMiktari${i}`).innerText
    );
    let ProductTotal = document.querySelector(`.product_totalPrice${i}`);
    let x = +(price1 * quantity1).toFixed(2);
    ProductTotal.innerText = x;
    y+=x
  }
  let subtotalPrice = document.querySelector(".subtotal_price")
  subtotalPrice.innerText =+y.toFixed(2)
  let z = +((y*tax)-y).toFixed(2)
  let taxPrice = document.querySelector(".tax_price")
  taxPrice.innerText = z
  let shippingPrice = document.querySelector(".shipping_price")
  shippingPrice.innerText = shipping
let totalPrice = document.querySelector(".total_price")
let k = +(z+y+15).toFixed(2)
totalPrice.innerText =k


};

// const product = {
//   suptotal:,
//   completed : false, 
//   text:,}
// localStorage.setItem("products",JSON.stringify(products))