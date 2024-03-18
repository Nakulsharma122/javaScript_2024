// const p1 = new Promise ((resolve , reject)=>{
//     setTimeout(() => reject("P1 Sucess"), 3000);
// });

// const p2 = new Promise ((resolve , reject)=>{
//     setTimeout(() => resolve("P2 Sucess"), 2000);
// });

// const p3 = new Promise ((resolve , reject)=>{
//     setTimeout(() => resolve("P3 Sucess"), 1000);
// });

// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err);
// });


// const obj2 = {
//     a : 20,
//     x: function(){
//         const y = () =>{
//             console.log(this);
//         };
//         y(); 
//     }
// }

// obj2.x();


// const message=  "Hello World";
// const object = {
//     message : "Hello World",
//     logMessage(){
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);


// let length = 4;
// function callBack(){
//     console.log(this.length);
// }

// const object = {
//     length : 5 ,
//     method(callBack){
//         callBack();
//     }
// };
// object.method(callBack,1,2);

let name = {
    firstName : "Akshay",
    lastName : "Saini",
}
let printFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName +" from " + hometown + " ," + state);

}
printFullName.call(name,"Dehradun","Uttarakhand");

let name2 ={
    firstName: "Sachin",
    lastName: "Tehdulkar"
}

printFullName.call(name2, "Mumbai","Maharashtra");

printFullName.apply(name2,["Mumbai","Maharashtra"]);

let printMyName = printFullName.bind(name2,["mumbai","Maharashtra"]);
 console.log(printMyName());



let student ={
    firstName : "Nakul",
    lastname : "Sharma"
}
printStudentName = function (className,section){
    console.log("Full Name"+ this.firstName +"     "    +"last name"+this.lastname+ "    " +"class"+className+"section"+ "     "+section);

}

printStudentName.call(student,2,"A");
printStudentName.apply(student,[3,"b"]);
let student1=printStudentName.bind(student,4,"c");
student1();