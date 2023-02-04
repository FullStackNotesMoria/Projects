const btn = document.querySelector(".btn");
const password = document.querySelector("p");
const sembol1 = "!@#$%^&*()_+~|";
const sembol2 = "}{[]:;?><,./-=\\";
const kucukHarf1 = "abcdefghijklm";
const kucukHarf2 = "nopqrstuvwxyz";
const buyukHarf1 = 'ABCDEFGH';
const buyukHarf2 = 'IJKLMNOP'
const buyukHarf3 = 'QRSTUVWXYZ'
const rakam1 = "012";
const rakam2 = "345";
const rakam3 = "6789";
const rHarf = [
  kucukHarf1[Math.floor(Math.random() * 13)],
  kucukHarf2[Math.floor(Math.random() * 13)]
];
const rRakam = [
  rakam1[Math.floor(Math.random() * 3)],
  rakam2[Math.floor(Math.random() * 3)],
  rakam3[Math.floor(Math.random() * 4)],
];
const rSembol = [
  sembol1[Math.floor(Math.random() * 14)],
  sembol2[Math.floor(Math.random() * 15)],
];
const rHarfB = [
  buyukHarf1[Math.floor(Math.random() * 8)],
  buyukHarf2[Math.floor(Math.random() * 8)],
  buyukHarf3[Math.floor(Math.random() * 10)],
];
let rpassword = `${rHarfB[0]}${rSembol[0]}${rRakam[0]}${rHarf[0]}${rSembol[1]}${rRakam[1]}${rHarfB[1]}${rHarf[1]}${rRakam[2]}${rHarfB[2]}`;
let erypswrd = rpassword.split(``)
let rps = [];
for (i = 9; i >= 0; i--) {
  let a1 =(erypswrd[Math.floor(Math.random() * i)]);
  console.log(a1);
  rps.push(a1)
  let sy = erypswrd.indexOf(`${a1}`);
    erypswrd = erypswrd.filter(x => x!=a1)
}
let son = rps.join("")
btn.addEventListener("click", ()=>{
  password.innerText = son
  setTimeout(sil,3000)
})
const sil=()=>{
  password.innerText = ''
  window.location.reload()
}

