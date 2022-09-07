// function maxnumber(num1: number, num2: number, num3?: number, num4?: number):number{
//     var max_numb:number=0;
//     if (num3 && num4) {
//             if (num1 > num2 && num1 > num3 && num1 > num4) {
//             max_numb =  num1
//             } else if (num2 > num1 && num2 > num3 && num2 > num4) {
//             max_numb =  num2
//             } else if (num3 > num1 && num3 > num2 && num3 > num4) {
//             max_numb =  num3
//             } else {
//             max_numb =  num4
//             }
//         }
//         return max_numb  ;
// }
// var Num1:string|null = prompt("Enter Number")
// var number1:number = Number(Num1)
// var Num2:string|null = prompt("Enter Number")
// var number2:number = Number(Num2)
// var Num3:string|null = prompt("Enter Number")
// var number3:number = Number(Num3)
// var Num4:string|null = prompt("Enter Number")
// var number4:number = Number(Num4)
// var result:number = maxnumber(number1, number2, number3, number4)
// console.log("The greatest number among ",number1, number2,number3, number4, "is",result)
function even_odd(number) {
    if (number % 2 == 0) {
        console.log("The number ", number, " is even");
    }
    else {
        console.log("The number ", number, " is odd");
    }
}
var userInput = prompt("Enter Number");
var numbers = Number(userInput);
even_odd(numbers);
