// Assignment 5
// Write a ts program to find maximum between two numbers.

// var num1: number = 6
// var num2: number = 4

// if (num1 > num2) {
//     console.log(num1 + " is maximum")
// } else if (num2 > num1) {
//     console.log(num2 + " is maximum")
// }

// Write a ts program to find maximum between three numbers.

// var num1: number = 2
// var num2: number = 4
// var num3: number = 5

// if (num1 > num2) {
//     console.log(num1 + " is maximum")
// } else if (num2 > num3) {
//     console.log(num2 + " is maximum")
// } else {
//     console.log(num3 + " is maximum")
// }

// Write a ts program to check whether a number is negative, positive or zero.

// var number : string|null = prompt("Enter the Number")
// var num: number = Number(number)
// if (num > 0) {
//     console.log("The number is positive")
// } else if (num < 0) {
//     console.log("The number is negative")
// } else {
//     console.log("The number is zero")
// }

// Write a ts program to check whether a number is divisible by 5 and 11 or not.

// var number:string|null = prompt("Enter the number")
// var num: number = Number(number)
// if (num % 5 == 0) {
//     console.log(num + " is divisible by 5")
// } else if (num % 11 == 0) {
//     console.log(num + " is divisible by 11")
// } else {
//     console.log("The number is not divisile by 5 or 11")
// }

// Write a ts program to check whether a number is even or odd.

// var number : string|null = prompt("Enter Number")
// var num: number = Number(number)
// if (num % 2 == 0) {
//     console.log(num + " is even")
// } else {
//     console.log(num + " is odd")
// }

// Write a ts program to check whether a year is leap year or not.

// var years:string|null = prompt("Enter year")
// var year: number = Number(years)
// if (year % 4 == 0) {
//     console.log(year + " is a leap year")
// } else {
//     console.log(year + " is not a leap year")
// }

// Write a ts program to check whether a character is alphabet or not.
// var character:string = "A"
// if (character) {
//     console.log(character+ " is an alphabet")
// }else {
//     console.log(character+ " is not an alphabet")
// }


// Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var total_num: string | null = prompt("Enetr Total Marks")
// var obt_num: string | null = prompt("Enetr Obtained Marks")
// var total_marks :number = Number(total_num)
// var obt_marks:number = Number(obt_num)
// var percentage: number = obt_marks / total_marks * 100

// console.log("The percentage is " + percentage + " %")
// console.log("and")
// if (percentage >= 90) {
//     console.log("Grade A")
// } else if (percentage >= 80) {
//     console.log("Grade B")
// } else if (percentage >= 70) {
//     console.log("Grade C")
// } else if (percentage >= 60) {
//     console.log("Grade D")
// } else if (percentage >= 40) {
//     console.log("Grade E")
// } else if (percentage < 40) {
//     console.log("Grade F")
// }

// Write a ts program to check whether a character is uppercase or lowercase alphabet.

// var userInput: string | null = prompt("Please enter the alphabet");
// var letter: string = String(userInput)
// if (letter >= "a" && letter <= "z") {
//     alert("The alphabet is lowecase");
// }
// else {
//     alert("The alphabet is upercase");
// }

// Write a ts program to calculate profit or loss.


// var sell: string | null = prompt("Enter the selling price")
// var cost: string | null = prompt("Enter the cost price")

// var selling_price: number = Number(sell)
// var cost_price: number = Number(cost)

// var profit = selling_price - cost_price
// var loss = cost_price - selling_price

// if (selling_price > cost_price) {
//     console.log("The profit is " + profit)
// } else {
//     console.log("the loss is " + loss)
// }

// Write a ts program to input angles of a triangle and check whether triangle is valid or not.

// var first_angle:string | null = prompt("Enter the first angle")
// var second_angle:string | null = prompt("Enter the second angle")
// var third_angle:string | null = prompt("Enter the third angle")

// var a: number = Number(first_angle)
// var b: number = Number(second_angle)
// var c: number = Number(third_angle)

// if (a == 90 && b == 90 && c == 90) {
//     console.log("The Triangle is valid")
// } else {
//     console.log("The Triangle is not valid")
// }

// Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// var userInput: string | null = prompt("enter units")
// var units = Number(userInput)
// // var units :number = 56
// var bill = 0
// if (units <= 50) {
//     bill = ((units * 0.50) / 100) * 20 + units * 0.50
//     console.log("For first 50 units the bill is " + bill + "Rs")
// }
// else if (units <= 150) {
//     bill =(((50 * 0.50 + (units - 50) * 0.75) / 100) * 20) + 50 * 0.50 + (units - 50) * 0.75
//     console.log("For next 100 units the bill is " + bill + "Rs")
// }
// else if (units <= 250) {
//     bill = (((50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20) / 100) * 20) + 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20
//     console.log("For next 100 to 100 units the bill is " + bill + "Rs")
// }
// else if (units > 250) {
//     bill = (((50 * 0.50 + 100 * 0.75 + 150 * 1.20 + (units - 250) * 1.50) / 100) * 20) + 50 * 0.50 + 100 * 0.75 + 150 * 1.20 + (units - 250) * 1.50
//     console.log("For above 250 units the bill is " + bill + "Rs")
// }

