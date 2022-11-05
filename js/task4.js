alert("Task4");
let a = prompt("Type in the first number");
let b = prompt("Type in the second number");
Task4(a, b);
function Task4(num1, num2) {
  if (100 - num1 < 100 - num2) {
    alert("The first number is the nearest to 100");
  } else {
    alert("The second number is the nearest to 100");
  }
}
