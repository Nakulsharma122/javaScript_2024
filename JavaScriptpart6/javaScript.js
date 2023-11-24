// function printInfo(name, age){
//     console.log(`${name}'s age is ${age}`);

// }

// printInfo("nakul", 21);
// printInfo("Akshra");



// function average(a,b,c ){
//     console.log(`the average of three numbers is ${(a+b+c)/3}`);

// }

// average(23,45,67.23);

// function printTable(n){
//   for (let i = n ; i<= n*10;i+=n){
//     console.log(i);
//   }

// }
 

// printTable(2)  ; 


// function sum (a,b){
//    console.log("hello");
//    console.log("hello");
//    return a+b;
// }
// console.log(sum(sum(2,3),5));
// console.log(sum(sum(2,3),5));

// function sum (n){
//     let sum =0;
//     for (let i = 1; i<=n;i++){
//             sum+=i;
// }
//       return sum ;
// }
// console.log(sum(20));


// let str = ["hi", "namaste", "hello", "bye"];
// function concat(str){
//     let result = "";
//     for (let i =0 ; i <str.length; i++){
//         result += str[i];        
// }
//         return result;

// }

// Global Scope 
// let sum = 54;

// function calSum (a,b){
//    // let sum = a+b;
//      console.log(sum);
// }
// calSum(1,2);
   

//    block scope 
// {
//     let sum = 10;
// }
//  console.log(sum); 

//  const sum = function (a,b){
//         console.log(a+b);
// }
// sum (2,3)


//       Function expression 

// const hello = function (){
//   console.log("namaste");
// }
// hello();
 
//              Higher order function 
        //  takes one or multiple function as arguments 
    // function multipleGreet(func, count ){
    //         for (let i = 1; i<=count ; i++){
    //            func();
    //         }
    //     }
    // let greet = function (){
    //     console.log("hello");
    // }

    // multipleGreet(function(){console.log("namaste india ");}
    // , 34);


    //  Point 2 : Return as function 

//     function oddOrEvenfactory (request){
//         if (request == "odd"){
//             return function (n){
//                 console.log(!(n%2 == 0));
//             }
//         }
//         else if (request == "even"){
//             return function (n){
//                 console.log(n%2 == 0);
//             }
//              }

             
//              else{
//                 console.log("wrong request");
//              }
//    }
//    let request = "even";


//                  Methods in objects  

// const calculator = {
//     add (a,b){
//         return a+b;
//     },
//     sub (a,b){
//         return a-b;
//     },
//     mutiple(a,b){
//         return a*b;
//     }
// }


// // function oddOrEvenfactory(request){
//     if (request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }
//     else if ( request = "even"){
        
//        return function (n){
//         console.log(n%2 == 0);
//        } 
// }
// else{
//     console.log("wrong request");
// }
//     }




            //  Assignment 6 
// ques 1 Write a JavaScript function that returns array elements larger than a number. 
// 
// let arr = [2,3,4,5,6,100,19];
// function largerNo(arr){
//     let larger = 99 ;
//     for (let i = 0; i < arr.length; i++){
//             if (arr[i] > larger ){
//                 console.log(arr[i]);
//             }
// }

// }


// largerNo(arr);



// Ques 2 . Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

// let str = "abcdabcdefggh";
//  function  uniquecharacter(str){
//   let ans ="";
//   for (let i = 0 ;i<str.length ; i++){
//     let curr = str[i];
//             if(ans.indexOf(curr) == -1){
//                 ans += curr;
//             }
// }
// return ans ;
// }
//  console.log(uniquecharacter(str));

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America.


// country = ["Australia", "Germany", "United States of America"];
// function countryName  (country){
//     let ansIdx = 0;
//     for (let i = 0 ; i < country.length ; i++ ){
//         let ansLen = country[ansIdx].length;
//         let currentLen = country[i].length;
//         if (ansLen < currentLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }

    

// console.log(countryName(country));


// Write a JavaScript function to count the number of vowels in a String argument.
// let str = "ilovemyindia";
// function countVowel(str){
//     let count = 0;
//     for (let i = 0 ; i< str.length; i++ ){
//         if (
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) ==  "o"  ||
//             str.charAt(i) == "u"
//             ) {
//                 count ++;
//             }
//     }
//     return count ;
// }

// console.log(countVowel(str));



// Write a JavaScript function to generate a random number within a range (start,
//     end).

let start = 200;
let end = 400;
for (let i = start ; i<=end ; i++){
  Math.random()
}