alert("Task2");
let typeIn = prompt("Type in your word");
Task2(typeIn);
function Task2(word) {
  if (word.substring(0, 4) === "New" || word == null || undefined) {
    alert("word");
  } else {
    alert(`New ${word}`);
  }
}
