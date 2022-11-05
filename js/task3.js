alert("Task3");
function frontback(str) {
  if (str.length >= 3) {
    str_length = 3;
    back= str.substring(str.length-3);
    return back +str +back;
  }
  else
  return false;
}
console.log(frontback("jaj"));
console.log(frontback("ja"));
console.log(frontback("jale"));
