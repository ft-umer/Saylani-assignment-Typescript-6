// // // 1. Write a ts program to find length of a string.
// alert("ts program to find length of a string")
// var userInput:string | null = prompt("find length of a string")
// var para:string = String(userInput)
// var para:string = "Im a Muslim"
// var index
// for (index = 0; index < para.length; index++) {
// }
// console.log(`The Length of the string "${para}" is "${index}"`)
// console.log(`The length of the string "${para}" is ${paralength}`)
// // // 2. Write a ts program to copy one string to another string.
// alert("ts program to  copy one string to another string")
// var userInput:string | null = prompt("first string")
// var para1 :string = String(userInput)
// var userInput4:string | null = prompt("second string")
// var para :string = String(userInput4)
// var para2 = para1.concat(para)
// console.log(`The strings "${para1}" and "${para}" are copied to another string results "${para2}"`)
// // // 3. Write a ts program to concatenate two strings.
// alert("ts program to concatenate two strings")
// var userInput:string | null = prompt("first string")
// var para1 :string = String(userInput)
// var userInput3:string | null = prompt("second string")
// var para3 :string = String(userInput3)
// var concat = para1.concat(para3)
// console.log(concat)
// // // 4. Write a ts program to compare two strings.
// alert("ts program to compare two strings")
// var userInput:string | null = prompt("first string")
// var para1 :string = String(userInput)
// var userInput2:string | null = prompt("second string")
// var para4 :string = String(userInput2)
// // var para4 :string = "1234"
// if (para1 === para4) {
//     console.log("Strings are equal")
// }else{
//     console.log("Strings are not equal")
// }
// // // 5. Write a ts program to convert lowercase string to uppercase.
// alert("ts program to convert lowercase string to uppercase")
// var userInput:string | null = prompt("convert lowercase string to uppercase")
// var para:string = String(userInput)
// var paratolower = para.toLowerCase()
// console.log(paratolower)
// // // 6. Write a ts program to convert string to uppercase.
// alert("ts program to convert string to uppercase")
// var userInput:string | null = prompt("convert string to uppercase")
// var para:string = String(userInput)
// var paratoupper = para.toUpperCase()
// console.log(paratoupper)
// // 7. Write a ts program to toggle case of each character of a string.
// function toggle(paras) {
//   for (let index = 0; index < paras.length; index++) {
//     var str = ""
//     var alpha = paras.charCodeAt(index)
//    if (alpha >= 60 && alpha <= 90) {
//     var lower = String.fromCharCode(alpha).toLowerCase()
//     str = lower
//     result = result + str
//     // console.log(lower.toString()
//    } else if (alpha >= 97 && alpha <= 122) {
//     var upper = String.fromCharCode(alpha).toUpperCase()
//     str = upper
//     result = result + str
//     // console.log(upper.toString())
//    }else if (paras[index] == " ") {
//     str = paras[index]
//     result = result + str
//    }
// }
// console.log(result)
// }
// var paras= "hEyyy wHO aRe You"
// var result = ""
// toggle(paras)
// console.log((paras))   
// // 8. Write a ts program to find total number of alphabets digits or special character in a string
// function toggle(paras) {
//   for (let index = 0; index < paras.length; index++) {
//     var str 
//     var alpha = paras.charCodeAt(index)
//     if ((alpha >= 67 && alpha <= 90) || (alpha >= 97 && alpha <= 122)) {
//       var alphabets = String.fromCharCode(alpha)
//       str = alphabets
//       resultOfAlpha = resultOfAlpha + str
//     }else if (alpha >= 48 && alpha <= 57) {
//       var digits = String.fromCharCode(alpha)
//       str = digits
//       resultOfDigit = resultOfDigit + str
//     }else if ((alpha >= 33 && alpha <= 47) || (alpha >= 58 && alpha <= 64) || (alpha >= 91 && alpha <= 96) || (alpha >= 123 && alpha <= 126)) {
//       var special = String.fromCharCode(alpha)
//       str = special
//       resultOfSpecial = resultOfSpecial + str
//     }
//   }
//   console.log(`There are '${resultOfAlpha.length}' number of aplhabets, '${resultOfDigit.length}' number of digits and '${resultOfSpecial.length}' number of Special characters in the given string "${paras}"`)
//   // console.log(resultOfDigit.length)
//   // console.log(resultOfSpecial.length)
// }
// var paras = "hEyyy wHO aRe You 87878 +(*)**&^$%#@"
// var resultOfAlpha = ""
// var resultOfDigit = ""
// var resultOfSpecial = ""
// toggle(paras)
// // 11. Write a ts program to find reverse of a string.
// // var paragraph:string = "efil uoy rof llufesu era hcihw sesoprup nwo ruoy rof ti esu ot evah uoy fi emit hcum erom si erehT"
// // console.log(paragraph.split('').reverse().join(""))
// // 9. Write a ts program to count total number of vowels and consonants in a string.
// function findVowels(para) {
//   for (let index = 0; index < para.length; index++) {
//     var str
//     // var alpha = para.charCodeAt(index)
//     if (para == "A" || para == "E" || para == "I" || para == "O" || para == "U") {
//       var vowel = para.length
//       str = vowel
//       resultOfConsonent = resultOfConsonent + str
//     }
//   }
//   console.log(resultOfConsonent)
// }
// var para = "E"
// var resultOfVowel = ""
// var resultOfConsonent = ""
// // findVowels()
// // conditional operators programming exercises
// // 1. Write a ts program to find maximum between two numbers using conditional operator.
// var num1:number = 23
// var num2:number = 58
// var result = num1 > num2 ? `The number ${num1} is greater than ${num2}`:`The number ${num2} is smaller than ${num1}`
// console.log(result)
// // 2. Write a ts program to find maximum between three numbers using conditional operator.
// var num1: number = 23
// var num2: number = 558
// var num3: number = 520
// if (num1 > num2 && num1 > num3) {
//   var result = (num1 > num2 && num1 > num3) ? `The number ${num1} is greater` : `The number ${num1} is not greater`
//   console.log(result)
// }else if (num2 > num1 && num2 > num3) {
//   var result = (num2 > num1&& num2 > num3) ? `The number ${num2} is greater` : `The number ${num2} is not greater`
//   console.log(result)
// }else {
//   var result = (num3 > num1&& num3 > num1) ? `The number ${num3} is greater` : `The number ${num3} is not greater`
//   console.log(result)
// }
// // List of switch case programming exercises
// // 1. Write a ts program to print day of week name using switch case.
// var week: string = "monday"
// switch (week) {
//   case "Monday"&&"monday":
//     console.log("The day of monday is day 1")
//     break;
//   case "Tuesday"&&"tuesday":
//     console.log("The day of tuesday is day 2")
//     break;
//   case "Wednesday"&&"wednesday":
//     console.log("The day of wednesday is day 3")
//     break;
//   case "Thursday"&&"thursday":
//     console.log("The day of thursday is day 4")
//     break;
//   case "Friday"&&"friday":
//     console.log("The day of friday is day 5")
//     break;
//   case "Saturday"&&"saturday":
//     console.log("The day of saturday is day 6")
//     break;
//   case "Sunday"&&"sunday":
//     console.log("The day of sunday is day 7")
//     break;
// }
// // 2. Write a ts program print total number of days in a month using switch case.
// var month: string = "june"
// switch (month) {
//   case "January" && "january":
//     console.log("January has 31 days")
//     break;
//   case "February" && "february":
//     console.log("February has 30 days")
//     break;
//   case "March" && "march":
//     console.log("March has 30 days")
//     break;
//   case "April" && "april":
//     console.log("April has 30 days")
//     break;
//   case "May" && "may":
//     console.log("May has 30 days")
//     break;
//   case "June" && "june":
//     console.log("June has 30 days")
//     break;
//   case "July" && "july":
//     console.log("July has 30 days")
//     break;
//   case "August" && "august":
//     console.log("August has 30 days")
//     break;
//   case "September" && "september":
//     console.log("September has 30 days")
//     break;
//   case "October" && "october":
//     console.log("October has 30 days")
//     break;
//   case "November" && "november":
//     console.log("November has 30 days")
//     break;
//   case "December" && "december":
//     console.log("December has 30 days")
//     break;
// }
// // 8. Write a ts program to create Simple Calculator using switch case.
var Number1 = prompt("Enter Number");
var operator = prompt("Enter Operater");
var Number2 = prompt("Enter Number");
var num1 = Number(Number1);
var num2 = Number(Number2);
var Calculator = String(operator);
switch (Calculator) {
    case "+":
        var result = num1 + num2;
        console.log(result + " by the addition of numbers " + num1 + " and " + num2);
        break;
    case "-":
        var result = num1 - num2;
        console.log(result + " by the substraction of numbers " + num1 + " and " + num2);
        break;
    case "*":
        var result = num1 * num2;
        console.log(result + " by the multiplication of numbers " + num1 + " and " + num2);
        break;
    case "/":
        var result = num1 / num2;
        console.log(result + " by the division of numbers " + num1 + " and " + num2);
        break;
}
