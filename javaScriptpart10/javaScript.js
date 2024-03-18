//                  DOM Events

//  let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.onmouseenter  = function (){
//         console.log("you entered a button");
//     }
//     btn.onclick = sayhello;
// }

// function sayhello(){
//      alert("Hello !");
// }



//                                  addeventsListener
 
// let btns = document.querySelectorAll("button");

// for(btn of btns ){
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName );
// }

// function sayHello (){
//     alert("Hello !");
// }

// function sayName (){
//     alert("Apna college !");
// }


//                          this is Event Listener 


// When "this " is used in a callback of event handler of something , it refers to that something .

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }
// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);



// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event){
//     console.log(event);
//     console.log("button clicked");
// });



// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function (event){
//     console.log(event);
//     console.log("button clicked");
// });




//                              Keyboard Events 
 
// let input = document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("Key was pressed");
// })


// input.addEventListener("keydown",function(event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log("Key was pressed ");

// });


// input.addEventListener("keydown",function(event){
//          console.log("code =", event.code);  // ArrowUp, ArrowDown,ArrowLeft, ArrowRight 
//        if(event.code == "ArrowUp"){
//         console.log("Character moves forward  ");
//        }
//        if(event.code == "ArrowDown"){
//         console.log("Characater moves backward  ");

//        }

//        if(event.code == "ArrowLeft"){
//         console.log("Characater moves left  ");

//        }
//        if(event.code == "ArrowRight"){
//         console.log("Characater moves right ");

//        }

       
       
    
//      });



//                                    FORM EVENTS 


// let form = document.querySelector("form");
// form.addEventListener("submit", function (event){
//     event.preventDefault();
//     alert("form Submitted");
// });



// let form = document.querySelector("form");
// form.addEventListener("submit", function (event){
//     event.preventDefault();
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
//                  or other ways 
//    let user = this.elements[0];
//    let pass = this.elements[1];

    
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`hi ${user.value}, your password is set to ${pass.value}`);
// });



//                  More Events (change events and input event)



// change event :  the change event ocuurs when the value of an element has been changed (only works on <input>, <textarea>,and < select> elements).

// input event : the input event fires when the value of an <input>  , < select >, or textarea elements has been changed .


// let user = document.querySelector("#user");
// user.addEventListener("change", function (){
//     console.log("change  event ");
//     console.log("final value =", this.value);

// });


// user.addEventListener("input", function (){
//     console.log("input changed");
//     console.log("final value =", this.value);

// });


// let inp = document.querySelector ("#text");
// let p = document.querySelector("p");
// inp.addEventListener("input", function (){
//     console.log(inp.value);
//     p.innerText = inp.value;
// })


//      let inp = document.querySelector ("#text");

//      inp.addEventListener("load", (event) => {
//               alert("scrolling");
//         });

                // Create a button on the page using JavaScript. Add an event listener to the button
                 // that changes the button’s color to green when it is clicked.
// let button =document.querySelector("button");
// button.addEventListener("click",function(){
//     button.style.backgroundColor="blue";
// })

// Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

// let input = document.querySelector("#text");
// let h1 = document.querySelector("h1");
// input.addEventListener("input",function(){
//     h1.innerText = input.value;
// })

