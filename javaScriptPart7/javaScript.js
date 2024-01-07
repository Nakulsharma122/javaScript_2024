// THIS keyword refers to an object that is excuting the current piece of code ie (object that is calling the function their variable ) 
//  every fuctiion is called by the window objects 
 //const student ={
//     name : "nakul",
//     age : 23,
//     eng : 95, 
//     math : 93, 
//     phy : 97,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng + this.math+ this.phy)/3;
//         console.log(`${this.name} got avg marks = ${avg} `);
//     }

//         }
     
// function getAvg(){
//    console.log(this);
// }


// the TRY  statement allows you to define a block of code to be testef for errors while it is being executed .
// the CATCH statement allows you to define of code to be executed , if an error occurs in the try block.
// console.log("hello");
// console.log("hello");
// let a = 5; 
// try{
//     console.log(a);
//  } catch (err) {
//     console.log("caught an errr ");
//     console.log(error);
//  }
//  console.log("hello");
//  console.log("hello");

//                                                         Arrow function  
//  Syntax of arrow function const function =  (arg1 , arg2 )=> {function definition }
// const sum = (a,b) =>{
//         console.log(a+b);
// }

// const cube = n =>{
//     console.log(n * n *n );
// }

//                                          Implict (not telling ) return in arroew function 
// synatx  const func = (arg1 , arg 2) =>(value; )

// const mul = (a,b) => a*b;


//                      Set time out (1000ms = 1sec)
//  Synatx : setTimeout(function , timeout );   

// console.log("Hi there");

// setTimeout(()=>{
//     console.log("Hello from Timeout") ;
// }, 4);

// console.log("Welcome to ");
      

//          Set interval : it calls the function every interval of time .

// let id = setInterval (()=>{
//     console.log("Hello from Timeout") ;
// }, 2000);

// console.log(id);
// clearInterval(id); // to stop the function with given amount of time ,



//                This is Arrow function 
// In simple function the function checks which object has call me .
  // But In arrow function the function check the parenrt scope 


//   const student = {
//     name : "Nakul",
//     marks : 95,
//     prop : this , 
//     getName : function (){
//         console.log(this);
//         return this.name;
//     }, 
//     getMarks :()=>{
//         console.log(this);
//         return this.marks;     
//   }, 
// getInfo1 : function (){
//    setTimeout(()=>{
//     console.log("this "); // Student 
//    }, 2000);   
// }, 
// getInfo2 : function(){
   
//         setTImeout (() =>{
//             console.log("This"); // window 
//         }, 2000);
//     }
//   };

//         Practice question 
// Write an arrow function that return the sqaure of a number 'n'.
//  const square = n => 
//     n*n;
  
 
// Write an function that prints "Hello World" 5 times at intervals of 2s each .
//  let id = setInterval(()=>{
//   console.log("hello world");
//  }, 2000);

//  setTimeout(()=>{
//   clearInterval(id);
//  }, 10000);


// Write an arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers .
// const arrayAverage = (arr)=>{
//   let total =0 ;
//   for (let number of arr){
//     total += number;
//   }
//   return total / arr.length ;
// };
// let arr = [1, 3,2, 5,6];
// console.log(arrayAverage(arr));



//  Write an arrow function named isEven() that takes a single number as argument and return if it is even or not .
// const isEven = n =>{
//   if (n%2 == 0){
//     return true;
// } 
// else{
//   return false;
// }
// };

