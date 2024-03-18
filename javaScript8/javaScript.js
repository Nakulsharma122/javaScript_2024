  //                  ARR.FOREACH FUNCTION 

// let arr = [1,3,4,5,6];
// let  print= function(el){
//     console.log(el);
// }

// arr.forEach(print); 

// arr.forEach(function (el){
//     console.log(el);
// });

// let arr = [
//   {
//     name : "aman",
//     marks: 95 ,

//   }, 
//   {
//     name : "shradha", 
//     marks : 94.4,
//   },
//   {
//     name : "rajat",
//     marks: 92,
//   },
// ];

// arr.forEach((student)=>{
//   console.log(student.marks);
// });

//                                   MAPS AND FILTER FUNCTION OF ARRAYS 


                        // MAP FUNCTION 
//  let num = [1,2,3,4];

//  let double = num.map ((el) =>{
//   return el*el; 
//  });
   
                      // Filter Function 

// let nums = [2, 4,6,7, 8, 9, 10];
// let even = nums.filter((el)=>{
//   return !(el % 2 == 0)
// });


//                    Every   Function -  acts as a logical and 


//  let nums =[2,4,6, 7, 10].every((el) => el%2 == 0);
//  console.log(nums);

//                          FINDING MAXIMUM IN AN ARRAY USING FILTER METHODS .
 

// let nums = [2,3,4, 5, 3, 4, 7, 8, 1, 2];

// let result = nums.reduce ((max,el)=>{
//   if (el > max ){
//     return el ;
//   }
//   else{
//     return max;
//   }
// });
// console.log(result);


//                              PRACTICE QUESTION 
//                                         CHECK IF ALL NUMBERS IN OUR ARRAY ARE MULTIPLES OF 10 OR NOT .
//  let nums = [10 , 20 , 30].every((el)=> el % 10 ==0);
//  console.log(nums);   

//                                        CREATE A FUNCTION TO FIND THE MIN NUMBER IN AN ARRAY.
 
// let nums = [2,45, 432, 23,12];
// let result = nums.reduce((min , el)=>{
//   if (min>el){
//     return el;
//   }
//   else {
//     return min ;
//   }
// })
// console.log(result); 

//                     Some function acts as a logical or .
//  let num =[2,4,6, 7, 10].some((el) => el%2 == 0);
//  console.log(num);

 //                     REDUCE METHOD OF ARRAYS 


// let nums = [1,2, 3, 4];
// let finalVal = nums.reduce((res, el) =>{
//   console.log(res);
//   return res + el ;

// });

// console.log(finalVal);



  



 //                                 DEFAULT PARAMETERS

// Syntax : function func(a,b =2){
    // Do something 
//   };

// function sum (a , b= 2 ){
//   return a+b ;
// }
// console.log(sum(2,7));  


// function sum (a=2 , b ){
//   return a+b ;
// }
// console.log(sum(2)); // a =2 , b = undefined   


//                                          Spread = Expands an iterable into mutiple values .
// function func (...arr){
//   // do something
// }
// 


 //                               Spread (Array literals )

//  let odd = [1, 3, 5,7, 9];
//  let even = [2,4,6,8,10];
//  console.log( [...even,...odd]);


//                                Spread (object literals)
//  const data = {
//   email : "ironman@gmail.com",
//   password : 'abcd',
//  };
//  const dataCopy = { ...data, id : 123, country: "India"};
//  let arr = [1,2,3,4,5];
//  let obj1 = { ...arr };
//  let obj2 = {..."hello"}; 



//                            REST: Allows a function to take an infinite number of argumentys and bunfle them in an array.


// function sum (...args){
//   return args.reduce((sum,el) => sum + el);
// }

// function max (...args){
//   return args.reduce((max,el)=>{
//     if (max>el){
//       return max;
//     }
//     else{
//       return el;
//     }
//   });
// }
// 

//                                DESTRUCTING (OBJECTS)
  



// const student ={
//   name : "karan",
//   age : 14 , 
//   class : 9 ,
//   subjects : ["hindi", "english", "math", "science"],
//   username : "karan@123",
//   password: "abcd",
// };
// let {username : user, password: secret , city :place= "Mumbai"}= student ;

// const student=  {
//   name : "Nakul Sharma", 
//   class : "Btech - cs",
//   rollno : "44",
// };
// let {name : ganaster, class: kasha, city:place ="Mathura"}= student ;




//                                         DESTRUCTING  : STORING VALUES OF ARRAY INTO MULTIPLE VARIABLES



//let names = ["Tony","bruce", "peter", "steve", 'abc', 'xyz', 'pyq'];
// let winner = names[0];
// let runnerUp = names [1];
// let secondRunnerup = names [2];


// let [winner, runnerUp , secondRunnerup , ...others]= names; 



//                            Practice question 

//              Square and sum the array elements using the arrow function and then find the average of the array.
 

// let nums = [1,2,3,4,5];
// let double = nums.map((el)=>{
//   return el * el;
// })
// console.log (double);

// let sums = double.reduce((max,el)=>{
//   return max+el;
// })
// console.log(sums);
// let average = sums /5;
// console.log(average);

// Create a new array using the map function whose each element is equal to the original element plus 5
//      let nums = [1,2,3,4,5];
//    let addition = nums.map((el) =>{
//     return el +5;
//     })
//     console.log(addition);

//  Create a new array whose elements are in uppercase of words present in the original array.

// let strings = ["adam", "bob", "catlyn", "donald", "eve"];
// console.log(strings.map((strings)=>{
//    return strings.toUpperCase();
// }))


// Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args)=>[
  
//    ...arr,
//    ...args.map((args)=> args  *2)
// ];
// console.log(doubleAndReturnArgs([1,2,3],4,4));

// Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object

const mergeObject = (objects1 , objects2)=>(


  {...objects1 , ...objects2}
);
mergeObject({ a: 1, b: 2 }, { c: 3, d: 4 });