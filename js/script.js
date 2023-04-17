//recuperando o botão com o getelement
const botao = document.getElementById("btn-1")

//RECUPERANDO UM ITEM ESPECÍFICO COM A FUNÇÃO querySelector(parâmetro)
const seletor = document.querySelector("li")
console.log(seletor.textContent)

//RECUPERAR UMA LISTA DE ELEMENTOS COM A FUNÇÃO querySelectorAll
const seletores = document.querySelectorAll("li")

seletores.forEach((item)=>{
    
    if(item.textContent == "item-3") {
        let meuItem = item;
        console.log (`Itens selecionados : ${item.textContent}`);
        meuItem.textContent = "Ta Dominado!!!"
    }
})

//setImOut
//SetInterval
//Random
//Math.Ceil
//Math.Random
//Math.floor
