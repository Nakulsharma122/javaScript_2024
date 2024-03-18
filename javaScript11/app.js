            // CALL STACK 
//  Each time the function is called . Its  function call is stored in the stack.
// Once the call (or the function is executed ) is compeleted , stack pop out the function .


// function hello (){
//     console.log("inside hello fnx");
// }
 
// function demo (){
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done, bye !");

//                                Visualizing call Stack 

// function one (){
//     return 1 ;
// }

// function two(){
//     return one () + one ();
// }

// function three (){
//     let ans = two() + one ();
//     console.log(ans);
// }

// three();


//                                         JS  is single threaded 
 
// setTimeout(function(){
//     console.log("apna college");
// },2000);
// setTimeout(function(){
//     console.log("apna college");
// },2000);
// console.log("hello ...");


// js is single thread language in which one set of work is done at  one time only . The setTimeout and setIntervals function are deal by browsers which are capable of doing mutliple tasks at one time only . So they  wait for the function to be complete simultaneously they do other tasks also . As function complete  they push the function at the top of call stack for the js to be executed .

// Asynchronous nature of js script means non blocking architecture , so the execution of one tasks is not dependent on another  tasks can be simultaneously.


 //                          Call back hull : execution of call back inside the another call back hull .

// h1 = document.querySelector("h1");

// function changeColor(color, delay , nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     },delay);
// }
// changeColor("red", 1000, ()=>{
//     changeColor("orange",1000);
// })

//   Promise : Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value .
// Promise contain resolve and reject which indicate the sucesss and reject respectively.

// function savetoDb (data){
//     return new Promise ((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() * 10) +1;
//         if (internetSpeed > 4){
//             success(  "sucess : data was saved");
//         }
//         else{
//             failure("failure : weak connection");
//         }
//     } );
 

// }

// savetoDb("Apna college");

                                                             // Example 1  
// const cart = ['shoes', 'pants','kurta'];
// createOrder(cart).then((orderId)=>{
//   return orderId;
// })
// .catch((err)=>{
//   console.log(err.message);
// })
// .then((orderId)=>{
//   return  proceedTopayment(orderId);
// })
// .then((paymentInfo)=>{
//  console.log(paymentInfo);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// function createOrder(cart){
//          return  new Promise (function (resolve, reject ){
//             if(!validateCart(cart)){
//               const err = new Error ("cart is not valid");
//               reject(err);
//             }
//             const orderId="12345";
//             if(orderId){
//               resolve(orderId);
//             }
//           })
// };
// function validateCart(){
//   return false ;
// }

// function proceedTopayment(orderId){
//   return new Promise((resolve, reject)=>{
//     resolve("Payment Sucessfull");
//   })
// }
  
                                //    Example 3 

// const student = ["nakul", "Akshra","Arpit"];
// function dob(num){
//  return new Promise ((resolve, reject)=>{
//     if (num>12){
//       resolve("Approved");
//     }
//     reject("Not approved");
//   })
// }


// function upClass(date){
// return   new Promise ((resolve, reject)=>{
//     if (date.length>4){
//       resolve("Promoted");
//     }
//     reject("Not Promoted");
//   })
// }

// function money(){
//  return  new Promise ((resolve, reject)=>{
//     if (money>4){
//       resolve("Poor");
//     }
//     reject("Rich");
//   })
// }

// dob(14).then((date)=>{
//   console.log(date);
//   return date;

// })
// .then((date)=>{
//  return console.log(upClass(date));
 
// })



//                                    Await and async 


// const p1 = new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Promise Resolved Value");
//   },10000)
// });

// const p2 = new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Promise2 Resolved Value");
//   },20000)
// });


// async function handlePromise(){
//   console.log("Hello World");
  
//     const val = await p1;
//     console.log("Namaste India");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste India2");
//     console.log(val2);
// }

// handlePromise();














