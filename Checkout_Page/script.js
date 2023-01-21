const conteinerRight = document.querySelector(".conteiner_right");
const product12 = document.querySelectorAll(".product");
const tax = 1.18;
const shipping = "15.00";
let subtotalPrice = document.querySelector(".subtotal_price");
let taxPrice = document.querySelector(".tax_price");
let shippingPrice = document.querySelector(".shipping_price");
let totalPrice = document.querySelector(".total_price");
document.querySelector(`.product_currentPrice0`).innerText = 25;
document.querySelector(`.product_currentPrice1`).innerText = 48;
document.querySelector(`.product_currentPrice2`).innerText = 75;
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
    let a = Number(
      e.target.parentElement.nextElementSibling.children[0].innerText
    );
    console.log(a);
    let l =subtotalPrice.innerText - a
    subtotalPrice.innerText = l
    e.target.closest(".product").remove();
    
  }
});

let productTotal = () => {
  let y = 0;
  for (i = 0; i < product12.length; i++) {
    let price1 = Number(
      document.querySelector(`.product_currentPrice${i}`).innerText
    );
    let quantity1 = Number(
      document.querySelector(`.urunMiktari${i}`).innerText
    );
    let ProductTotal = document.querySelector(`.product_totalPrice${i}`);
    let x = +(price1 * quantity1)
    ProductTotal.innerText = x;
    y += x;
  }

  subtotalPrice.innerText = +y

  let z = +(y * tax - y)
  taxPrice.innerText = z.toFixed(2);
  
  shippingPrice.innerText = shipping;
  let k = +(z  + y + 15.00)
  totalPrice.innerText = k;
 k.parseFloat().toFixed(2)
};



// const product = {
//   suptotal:
//   completed : false,
//   text:,}

localStorage.setItem("products", JSON.stringify(products));
