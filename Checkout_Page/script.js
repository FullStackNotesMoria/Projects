const conteinerRight = document.querySelector(".conteiner_right");
const product12 = document.querySelectorAll(".product");
const tax = 0.18;
const shippings = (15.000000001).toFixed(2);
let subtotalPrice = document.querySelector(".subtotal_price");
let taxPrice = document.querySelector(".tax_price");
let shippingPrice = document.querySelector(".shipping_price");
let totalPrice = document.querySelector(".total_price");

const productCurrentPrice0 = document.querySelector(`.product_currentPrice0`);
const urunMiktari0 = document.querySelector(`.urunMiktari0`);
const product_totalPrice0 = document.querySelector(".product_totalPrice0");
urunMiktari0.innerText = 1;
productCurrentPrice0.innerText = 25.99;
const productCurrentPrice1 = document.querySelector(`.product_currentPrice1`);
const urunMiktari1 = document.querySelector(`.urunMiktari1`);
const product_totalPrice1 = document.querySelector(".product_totalPrice1");
urunMiktari1.innerText = 1;
productCurrentPrice1.innerText = 34.99;
const productCurrentPrice2 = document.querySelector(`.product_currentPrice2`);
const urunMiktari2 = document.querySelector(`.urunMiktari2`);
const product_totalPrice2 = document.querySelector(".product_totalPrice2");
urunMiktari2.innerText = 1;
productCurrentPrice2.innerText = 74.99;

let products = JSON.parse(localStorage.getItem("products")) || [];

window.addEventListener("load", () => {
  productTotal();
});

const product0 = {
  id: "product1",
  currentPrice: +productCurrentPrice0.innerText,
  productEa: 1,
  suptotal: +productCurrentPrice0.innerText,
  removed: false,
};
const product1 = {
  id: "product2",
  currentPrice: +productCurrentPrice1.innerText,
  productEa: 1,
  suptotal: +productCurrentPrice1.innerText,
  removed: false,
};
const product2 = {
  id: "product3",
  currentPrice: +productCurrentPrice2.innerText,
  productEa: 1,
  suptotal: +productCurrentPrice2.innerText,
  removed: false,
};
const productsTotalInfo = {
  subtotal: 0,
  tax:0,
  shipping: 15.00,
  total:0,
};
products.push(product0, product1, product2, productsTotalInfo);
localStorage.setItem("products", JSON.stringify(products));

// const getProductsFromLocalStorage = () => {
//   products.forEach((product) => {
//     //createproduct(product);
//     product
//   });
// };

conteinerRight.addEventListener("click", (e) => {
  const idAttr = e.target.closest(".product").getAttribute("id");
  if (e.target.className == "negativeButton") {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      productTotal();
      products = products.filter((product) =>
        product.id == idAttr ? product.productEa-- : 1
      );
      products = products.filter((product) =>
        product.id == idAttr
          ? (product.suptotal = product.currentPrice * product.productEa)
          : 1
      );
      localStorage.setItem("products", JSON.stringify(products));
    }
  }
  if (e.target.className == "plusButton") {
    if (e.target.previousElementSibling.innerText >= 0) {
      e.target.previousElementSibling.innerText++;
      productTotal();
      products = products.filter((product) =>
        product.id == idAttr ? product.productEa++ : 1
      );
      products = products.filter((product) =>
        product.id == idAttr
          ? (product.suptotal = product.currentPrice * product.productEa)
          : 1
      );
      localStorage.setItem("products", JSON.stringify(products));
    }
  }
  if (e.target.className == "btn_remove"){
    let sameDivProductTotal = Number(
      e.target.parentElement.nextElementSibling.children[0].innerText
    );
    let l = subtotalPrice.innerText - sameDivProductTotal;
    let productTax = sameDivProductTotal * tax - sameDivProductTotal;
    taxPrice.innerText -= +productTax.toFixed(2);
    subtotalPrice.innerText = l;
    e.target.closest(".product").remove();
    productTotal();
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
    let x = +(price1 * quantity1).toFixed(2);
    ProductTotal.innerText = x;
    y += x;
  }
  subtotalPrice.innerText = y;

  let z = +(y * tax).toFixed(2);
  taxPrice.innerText = z;
  productsTotalInfo.tax = z;

  shippingPrice.innerText = shippings;
  productsTotalInfo.shipping = shippings;
  let k = +(z + y + Number(shippings)).toFixed(2);
  totalPrice.innerText = k;
  productsTotalInfo.total = k.toFixed(2);
};

localStorage.setItem("products", JSON.stringify(products));
// localStorage.setItem("products", JSON.stringify(products));
