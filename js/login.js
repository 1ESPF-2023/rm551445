"use strict";

let usuario = "";
let senha = "";

const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("Click",()=>{
    
    const inputUser = document.querySelector("input[name='nmuser']");
    const inputPass = document.querySelector("input[name='pass']");
    
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");
    
    if(inputUser.value.lengh > 3 && inputPass.value.lengh > 3){
        
        labelUser.setAttribute("style", "outline:#00ff00")
        labelPass.setAttribute("style", "outline:#00ff00")
    }
});