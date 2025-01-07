
export function calculate(){
    const saida = document.querySelector(".saida");
    const input = document.querySelector("#input_entrada");

    saida.innerHTML = 'ERROR';
    saida.classList.add("error");
    const result = eval(input.value);//Essa função eval executa um codigo JS, nesse caso estamos usando ela para fazer calculos matematicos como se fosse no console 
    saida.innerHTML = result;
    saida.classList.remove("error");
}