// Arrays Functions
// push = add value in end
// pop = deletes value from end
// unshift = add value in start
// shift = deletes value from start
// splice = push + pop + unshift + shift
// it uses 3 arguments 
// first for where to start deletion, second for how many will be deleted and third will add the argment in array
// // 1. Write a ts program to read and print elements of array.
// var elements = ["Umer", "Rafay", "Haseeb", "Sohaib", "Anas"]
// console.log(elements[0])
// // 2. Write a ts program to print all negative elements in an array.
// var elements = [1, 4, -5, -7, 3, -8]
// console.log(elements)
// for (let index = 0; index < elements.length; index++) {
//     var neg = elements[index]
//     // console.log(neg)
//     // if (neg < 0) {
//     //     console.log(neg)
//     // }
// }
// console.log(neg)
// // 3. Write a ts program to find sum of all array elements. 
// var elements = [1, 4, 5, 7, 3, 8]
// var num
// var sum:number = 0
// // console.log(elements)
// var add 
// for (let index = 0; index < elements.length; index++) {
//     add = elements[index]
//     // console.log(add)
//     while (add) {
//         num = add % 10
//         sum = sum + num
//         add = Math.floor(add/10)
//     }
// }
// console.log(`The sum of "${elements}" is "${sum}"`)
// // 4. Write a ts program to find maximum and minimum element in an array.
// var elements = [4, 500, 3, 1, 5, 100]
// // console.log(elements)
// var unsortArr = elements
// var sortedArr = elements.sort((a, b) => a-b)
// // console.log(sortedArr[0])
// var mini = sortedArr[0]
// var max
// for (let index = 0; index < sortedArr.length; index++) {
//     max = sortedArr[index] 
//     // console.log(mini)
// }
// console.log(`The maximum element is "${max}" and minimum element is "${mini}"`)
// // 5. Write a ts program to find second largest element in an array.
// var elements = [485, 56, 1, 55, 600]
// // console.log(elements)
// var unsortArr = elements
// var sortedArr = elements.sort((a, b) => a-b)
// sortedArr.pop()
// var max
// for (let index = 0; index < sortedArr.length; index++) {
//     max = sortedArr[index] 
//     // console.log(max)
// }
// console.log(`The second largest element is "${max}"`)
// // 6. Write a ts program to count total number of even and odd elements in an array.
// var numbers = [1,2,3,5,6,8,7,4,1,9,6,2,5,4,8,5,2,1,4,5,8]
// // console.log(numbers.length)
// var oddCount = 0
// var evenCount = 0
// for (let index = 0; index < numbers.length; index++) {
//     // console.log(numbers[index])
//     if ((numbers[index] % 2 == 0)) {
//         evenCount++
//     }else if (!(numbers[index] % 2 == 0)) {
//         oddCount++
//     }
// }
// console.log(`There are "${evenCount}" even and "${oddCount}" odd numbers`)
// // 7. Write a ts program to count total number of negative elements in an array.
// var numbers = [1,2,3,5,6,8,7,4,-1,9,6,2,-5,4,8,-5,2,-1,4,5,-8]
// // console.log(numbers.length)
// var negCount = 0
// for (let index = 0; index < numbers.length; index++) {
//     // console.log(numbers[index])
//     if ((numbers[index] < 0)) {
//         negCount++
//     }
// }
// console.log(`There are "${negCount}" negative numbers`)
// // 8. Write a ts program to copy all elements from an array to another array.
// var array1 = [1,2,3,4,5]
// var array2 = [6,7,8,9,10]
// // for (var i of array2) {
// //     array1.push(i)
// // }
// console.log(array1.concat(array2)) 0..0  ..
// // 9. Write a ts program to insert an element in an array.
// var array3 = [2,3,5,6,8]
// // console.log(array3)
// array3.splice(0,0,1)
// // console.log(array3)
// array3.splice(3,0,4)
// // console.log(array3)
// array3.splice(6,0,7)
// console.log(array3)
// // 10. Write a ts program to delete an element from an array at specified position.
// var array6 = [1,2,2,3,4,5,5,6]
// array6.splice(2,1)
// console.log(array6)
// array6.splice(5,1)
// console.log(array6)
// // 17. Write a ts program to put even and odd elements of array in two separate array.
// var numbers = [1,2,3,5,6,8,7,4,1,9,6,2,5,4,8,5,2,1,4,5,8]
// // console.log(numbers.length)
// var oddCount = 0
// var evenCount = 0
//     if ((numbers[numbers.length] % 2 == 0)) {
//         evenCount++
//     }else if (!(numbers[numbers.length] % 2 == 0)) {
//         oddCount++
//     }
// console.log(evenCount)
// for (let index = 0; index < numbers.length; index++) {
//     // console.log(numbers[index])
//     if ((numbers[index] % 2 == 0)) {
//                evenCount = numbers[index]
//     }else if (!(numbers[index] % 2 == 0)) {
//         oddCount = numbers[index]
//     }
//     console.log(evenCount)
//     console.log(oddCount)
// }
// console.log(`There are "${evenCount}" even numbers`)
// // 11. Write a ts program to count frequency of each element in an array.
var arra7 = [1, 2, 4, 4, 4, 4, 4, 5, 6, 5, 5, 5, 2, 2, 2, 1, 1];
var counts = {};
for (var _i = 0, arra7_1 = arra7; _i < arra7_1.length; _i++) {
    var num = arra7_1[_i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    // console.log(counts[num])
}
console.log(counts[1]);
// // 19. Write a ts program to sort array elements in ascending or descending order.
// var array8 = [12,1,2,5,4,8,9,7,3,6,10,11]
// array8.sort((a,b) => a-b)
// console.log(array8)
// array8.sort((a,b) => b-a)
// console.log(array8)
// // 
// var studentan_day_naam:string[]= ["Umer", "rafay", "sohaib", "anas", "haseeb", "hanzala", "usman", "talha", "usama", "huzaifa", "muavia", "ali"]
// for (let index = 0; index < 12; index++) {
//     console.log(studentan_day_naam[index]);
// }
// studentan_day_naam.push("Mujahid")
// console.log("Names of students after push ", studentan_day_naam)
// studentan_day_naam.pop()
// console.log("Names of students after pop ", studentan_day_naam)
// studentan_day_naam.unshift("someone")
// console.log("Names of students after unshift ", studentan_day_naam)
// studentan_day_naam.shift()
// console.log("Names of students after shift ", studentan_day_naam)
// studentan_day_naam.splice(2, 1)
// console.log("Names of students after splice ", studentan_day_naam)
// var studentName:string[]=["Naveed", "rafay", "sohaib", "anas", "haseeb", "hanzala", "usman", "talha", "usama", "huzaifa", "muavia", "ali"]
// function gratitude(student:string[]) {
//     for (let student = 0; student < studentName.length; student++) {
//         if (studentName[student] == "Naveed") {
//             console.log("Hi ",studentName[student], "You are the top scorer of the university, Welcome to the university")
//         }else{
//             console.log("Hi ",studentName[student], "Welcome to the university")
//         } 
//     }
// }
// gratitude(studentName)
