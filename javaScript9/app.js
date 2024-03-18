//                     getElementById 

// Return the Elements as an object or null (if not found.) 




//                  getElementByClassName 
// let smallImages1 = document.getElementsByClassName("oldImg");
// console.dir(smallImages1);



//         getElementByTagName 

// Returns the elements as an HTML Collection or empty collection (if not found).


//                      Query Selectors 


// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a "));



//                  Setting Content in Objects 

//  inner text : Shows the visible text contained in a node .
 
// textContent : Shows all the full text (including all the hidden files). 
// innerHTML : Shows the full markup .



//                          getAttribute and setAttribute

// let img = document.querySelector('img');

// img.getAttribute('id');

// img.setAttribute('id','spidermanImg');


//               Manipulating Style (With style attributes).


// let links = document.querySelectorAll(".box a");


// for (link of links ){
//     link.style.color = 'purple';
// }


//                                      Manipulating - class List property 

//    
//       classList.add() to add new class .
//         classList.remove() to remove class .\
//         classList.contains() to check if class exists 
//          classList.toggle()  to toggle (switch between two option) between add and remove.


//                                       Navigation on page  



// parentElement : to determine the parent of the element  .
//  children : to determine the child of the element.
//  previousElementSibling /  nextElementSibling : to determine the previous sibling and next sibling element . 

// removeChild(element): 



//                      Practice question

// 1.    a <p>   wuth red text that says "Hey I'm red !"


// let para1 = document.createElement("p");
// para1.innerText= "Hey I'm red";
// document.querySelector("body").append(para1);

// para1.classList.add('red');

// 2. an <h3></h3>  with Blue text that says "I'm a blue h3!".

// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3!";
// document.querySelector("body").append(h3);
// h3.classList.add("red");


// 3 . a <div>  with a  black border and pink background color with the following elements inside of it :
            // 1. another <h1> that says  "I'm in a div"
            // 2. a <p> that says "Me too!"


// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");

// h1.innerText = "I'm in a div ";
// p.innerText = "Me too!";


// div.prepend(h1);
// div.prepend(p);
// div.classList.add("box2");

// document.querySelector("body").prepend(div);


// 4 .  Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;
// let input = document.createElement ("input");

// let button = document.createElement ("button");
// button.innerText="Click me ";



// Add following attributes to the element :
   // - Change placeholder value of input to “username”
     // - Change the id of button to “btn”
                             //  button.setAttributes("id", "btn");
                            //  input.setAttributes("placeholder","username");


    //  Access the btn using the querySelector and button id. Change the button
    //  background color to blue and text color to white


                // let btn = document.querySelector("#btn");
                // btn.classList.add("btnStyle");
     


//Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.


          // let p = document.createElement("p");

         // p.innerText = "Apna college <b>Delta </b> Practice ";
        // document.querySelector("body").append(p);
