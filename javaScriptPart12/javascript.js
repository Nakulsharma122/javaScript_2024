// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) =>{
//     return res.json();
// })
// .then ((data) =>{
//     console.log(data.fact);
//     return fetch (url);
// }).then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log("Error -", err);
// }) 


//     Above code using async and await function 

// async function getFacts(){
//     try{
//         let res= await fetch (url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch (url);
//         let data2 = await res2.json();
//         console.log(data.fact);
//     }
//     catch(e){
//         console.log(e);
//     }
// }





//                  javaScript part -13 (The end )

// let btns = document.querySelector("button");
// btns.addEventListener('click',async ()=>{
//     let fact = await getFacts();
//     console.log(fact) ;
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })
// async function getFacts(){
//     try{
//         let res= await axios.get(url);
//         return (res.data.fact);
      
//     }
//     catch(e){
//     return " No fact found"; 
//     }
// }


let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click",async()=>{ 
  
   let country = document.querySelector("input").value;
    console.log(country); 
   let colArr = await getColleges(country);
  console.log(colArr); 
  show (colArr);
});
function show (colArr){
    let list = document.querySelector(" #list");
    list.innerText = "";
    for (col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText  = col.name;
        list.appendChild(li); 
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+ country);
       return (res.data);
    }
    catch(e){
        console.log("error",e);
        return [];
    }
}