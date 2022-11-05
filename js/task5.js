alert("Task5");
var number=[231209];
function evenDigits(num){
    var count=0;
    var numArray=num.toString().split("");
    for(var i=0; i<numArray.length;i++){
        if(number(numArray[i]%2==0)){
            count++;
        }
    }
    return count;
}
console.log(evenDigits(number));