let input = document.getElementById(`box`);
let button = document.getElementById(`btn`);
let p = document.getElementById(`guess`);
let number = Math.floor(Math.random() * 100);
let span = document.getElementById(`span`);
let counter = 4;
console.log(number);

button.addEventListener("click", () => {
  console.log(input.value);

  if (counter > 0) {
    if (number > input.value) {
      span.innerText = `guess the bigger number than ${input.value},number of attempts ${counter}`;
      counter--;
    } else if (number < input.value) {
      span.innerText = `guess the smaller number than ${input.value},number of attempts ${counter}`;
      counter--;
    } else {
      span.innerText = `congratulations,you entered ${
        5 - counter
      } the correct number ${input.value}`;
    }
    input.focus();
    input.value = "";
  } else if (counter == 0) {
    p.innerText = `Game Over`;
    
  }
});
window.addEventListener("load", () => {
  input.focus();
});
