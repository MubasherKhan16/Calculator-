const display=document.querySelector(".input input");
const buttons=document.querySelectorAll(".buttons-1 button");

buttons.forEach(button=>{
  button.addEventListener("click",()=>{
   const buttonValue=button.textContent;

   if(buttonValue==="AC"){
    display.value="";
   }

   else if(buttonValue==="DEL"){
    display.value=display.value.slice(0,-1);
   }

   else if(buttonValue==="="){
    try{
      display.value=eval(display.value);
    }
    catch{
      display.value="ERROR";
    }
   }
   else{
    display.value+=buttonValue;
   }
  })
})










































// const display = document.getElementById("display");
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.textContent;

//     if (value === "AC") {
//       display.value = "";
//     } else if (value === "DEL") {
//       display.value = display.value.slice(0, -1);
//     } else if (value === "=") {
//       try {
//         display.value = eval(display.value);
//       } catch {
//         display.value = "Error";
//       }
//     } else {
//       display.value += value;
//     }
//   });
// });
