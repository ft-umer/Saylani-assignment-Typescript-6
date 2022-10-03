// // 1. Write a ts program to print all natural numbers from 1 to n. - using while loop
// // alert("program to print all natural numbers from 1 to n.")
// var num:number = 1
// var numbers:string|null=prompt("Enter Number")
// var number:number= Number(numbers)
// var number:number= 10
// while (num < number) {
//     num++
//     console.log(num)
// }
// // 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
// how to get product of number
// // alert("program to print all natural numbers in reverse (from n to 1).")
// var numbers:string|null=prompt("Enter Number")
// var number:number= Number(numbers)
// var number:number= 10
// while (number >= 1) {
//     console.log(number)
//     number--
// }
// // 3. Write a ts program to print all alphabets from a to z. - using while loop
// // alert("program to print all alphabets from a to z.")
// var char:number = 97
// while (char<=122) {
//     console.log(String.fromCharCode(char))
//     char++    
// }
// // 4. Write a ts program to print all even numbers between 1 to 100. - using while loop
// // alert("program to print all even numbers between 1 to 100.")
// var num:number=1
// while (num <= 100) {
//     if (num%2==0) {
//         console.log(num)
//     }
//     num++
// }
// // 5. Write a ts program to print all odd number between 1 to 100.
// // alert("program to print all odd number between 1 to 100")
// var num: number = 1
// while(num <= 100) {
//     if (!(num % 2 == 0)) {
//     }
//     num++
// }
// // 6. Write a ts program to find sum of all natural numbers between 1 to n.
// // alert("program to find sum of all natural numbers between 1 to n")
// var num: number = 1
// var sum:number = 0
// // var numbers: string | null = prompt("Enter Number")
// // var number: number = Number(numbers)
// var number: number = 10
// while (num <= number) {
//     sum +=num
//     num++ 
// }
// console.log(`The sum of first ${number} natural numbers is ${sum}`)
// // 7. Write a ts program to find sum of all even numbers between 1 to n.
// // alert("program to find sum of all even numbers between 1 to n")
// var num: number = 1
// var sum:number = 0
// // var numbers: string | null = prompt("Enter Number")
// // var number: number = Number(numbers)
// var number: number = 10
// while (num <= number) {
//     if (num%2==0) {
//         sum +=num
//     }
//     num++ 
// }
// console.log(`"The sum of even numbers from first ${number} natural numbers is ${sum}`) 
// // 8. Write a ts program to find sum of all odd numbers between 1 to n.
// // alert("program to find sum of all odd numbers between 1 to n")
// var num: number = 1
// var sum:number = 0
// // var numbers: string | null = prompt("Enter Number")
// // var number: number = Number(numbers)
// var number: number = 10
// while (num <= number) {
//     if (!(num%2==0)) {
//         sum +=num
//     }
//     num++ 
// }
// console.log(`"The sum of odd numbers from first ${number} natural numbers is ${sum}`)
// // 9. Write a ts program to print multiplication table of any number.
// // alert("program to print multiplication table of any number")
// var numbers: string | null = prompt("Enter Number")
// var a: number = Number(numbers)
// // var a:number = 8
// var b:number= 1
// while (b <=10) {
//     console.log(`${a} * ${b} = ${a*b}`)
//     b++
// }
// // 20. Write a ts program to print all ASCII character with their values
// var char:number = 97
// while (char<=122) {
//     console.log(String.fromCharCode(char), "=",char)
//     char++    
// }
// // 10. Write a ts program to count number of digits in a number.
// // alert("program to count number of digits in a number")
// var numbers: string | null = prompt("Enter Number")
// var number: number = Number(numbers)
// // var number:number = 2132
// var num = number.toString()
// console.log(num.length)
// // 11. Write a ts program to find first and last digit of a number.
// var number:number = 2132
// var num = number.toString()
// var num1 = num.charAt(0)
// console.log(num1)
// var num1 = num.
// // 14. Write a ts program to calculate sum of digits of a number.
// var number:number = 2132
// var sum:number = 0
// var digit
// while (number) {
//    digit = number % 10
//    sum = sum + digit
//    number = Math.floor(number/10) 
// }
// console.log(`The sum of digits is ${sum}`)
// // 15. Write a ts program to calculate product of digits of a number.
// var number: number = 1555
// var multi = number.toString()
// var constant: number = 1
// var num: number = 0
// var final = multi.split("")
// var product
// for (let index = 0; index < final.length; index++) {
//     product = multi.charAt(index)
//     constant = constant * product
// console.log(product) 
// }   
// // 16. Write a ts program to enter a number and print its reverse.
var number = 15554;
var numToString = number.toString();
var charArr = numToString.split('');
// console.log(charArr)
var reverse = charArr.reverse();
// console.log(reverse)
var reversedArr = reverse.join("");
// var exactNumber = parseFloat(reversedArr)
console.log("The number \"".concat(number, "\" is reversed  as \"").concat(reversedArr, "\""));
// var nums:number = 12121515
// var numsToStrimg = nums.toString().split('')
// var reverse:number = 1
// var remainder
// while (nums!=0) {
//     remainder = nums % 10
//     reverse = reverse * 10 + remainder
//     nums /= 10
// }
// console.log(reverse)
// var getIndex
// for (let index = charArr.length; index > 1 ; index--) {
//         getIndex = numToString.charAt(index)
//         console.log(getIndex)
// }
// console.log(`The reverse of the given number "${numToString}" is ${reversedArr}`)
// var number:number = 10
// var padstrat = number.toString()
// var pod = padstrat.split("")
// while (number >= 1) {
//     console.log(number)
//     number--
// }
// // 18. Write a ts program to find frequency of each digit in a given integer.
var number = 1234556553225;
