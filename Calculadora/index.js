const calculadora =  document.querySelector(".calculadora");
const root = document.querySelector(":root");
const input = document.querySelector("#input_entrada");
const saida = document.querySelector(".saida");
const keysValidas = ["1","2","3","4","5","6","7","8","9","0",".","/","%","*","+","-","=","(",")"];

input.addEventListener("keydown",(ev)=>{
    ev.preventDefault();
    if(keysValidas.includes(ev.key)){
        input.value+=ev.key;
        return;
    }
    if(ev.key==="Backspace"){
        input.value=input.value.slice(0,-1);
    }
    console.log(ev.key);
    if(ev.key==="Enter"){
        calculate();
    }
})
const calculate = ()=>{
    saida.innerHTML = 'ERROR';
    saida.classList.add("error");
    const result = eval(input.value);//Essa função eval executa um codigo JS, nesse caso estamos usando ela para fazer calculos matematicos como se fosse no console 
    saida.innerHTML = result;
    saida.classList.remove("error");
}
document.querySelectorAll(".charKey").forEach((charkeyBtn)=>{
    charkeyBtn.addEventListener("click",()=>{
        const value = charkeyBtn.dataset.value //Dataset é para conseguir acessar os atributos do tipo data 
        input.value+=value;        
    })
})
document.querySelector("#clear").addEventListener("click",()=>{
    input.value='';
    input.focus();
})
document.querySelector(".equal").addEventListener("click",calculate);
let tema = document.querySelector(".tema");
tema.addEventListener("click",()=>{
    if(tema.id=="dark"){
        tema.id = "light";
    }
    else{
        tema.id = "dark";
    }
    if(calculadora.dataset.theme === "dark"){
        root.style.setProperty('--dark-color', '#FFFAFB');
        root.style.setProperty('--primary-color-tres', '#FFFAFB');
        root.style.setProperty('--dark-color-two', '#339989');
        root.style.setProperty('--clear-color', '#131515');
        calculadora.dataset.theme = "light"       
    }
    else{
        root.style.setProperty('--dark-color', '#131515');
        root.style.setProperty('--primary-color-tres', '#02ceac');
        root.style.setProperty('--dark-color-two', '#2B2C28');
        root.style.setProperty('--clear-color', '#FFFAFB');
        calculadora.dataset.theme = "dark" 
    }
})