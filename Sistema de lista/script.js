let inputList = document.querySelector("#inputList"); // input de entrada de dados
let btnAdd = document.querySelector("#btnAdd"); //botaõ de adicionar itens
let resposta = document.querySelector("ul"); //A ul
let divSaida = document.querySelector(".saida"); //refere-se a div que contem a ul

divSaida.style.visibility = "hidden";//por padrão a div de saida é invisivel
let count = 0; //Para saber a quantidade de itens na lista

btnAdd.addEventListener("click",()=>{
    //Aqui é acionado quando o botão é clicado, chamando a função que adiciona o elemento na lista
    let conteudo = inputList.value;
    if(conteudo!=""){
        addLista(conteudo); 
    }
})

function addLista(conteudo){
    //função que adiciona elementos na lista
    count++;
    console.log(count);
    divSaida.style.visibility="visible";
    let item = document.createElement("li");
    item.textContent = conteudo;
    resposta.appendChild(item);

    let btnRemove = document.createElement("button");
    btnRemove.textContent = "Apagar";
    btnRemove.classList.add('btnRemover');
    item.appendChild(btnRemove);


    btnRemove.addEventListener("click",()=>{
        //função que retira ps elementos da lista
        resposta.removeChild(item);
        count--;
        if(count==0){ //se não tiver mais nenhum item, a div de saida deve ficar invisivel
            divSaida.style.visibility = "hidden";
        }
    });
    
}