let bloco = document.querySelectorAll(".bloco");
let jogador = "x";
let jogadores = document.querySelectorAll(".players");
let popup = document.querySelector(".popup");
let btn_reinicio = document.querySelector("#btn_reinicio");
//
////
////// alert(jogadores[0].firstElementChild)
let cont = 0;
let vitoria = "";
//
////
////// Eu estou pegando tudo em forma de array simples, mas para fazer uma verificação melhro, tenho que colocar tudo em uma matriz
let matriz = [
    ["","",""],
    ["","",""],
    ["","",""]
];
//
////
////// Quando o jogo acabar, poder reiniciar a partida atravez do acionamento do botão do popup
btn_reinicio.addEventListener("click",()=>{
    // Zera a matriz
    for(let i = 0 ; i <3 ; i++){
        for(let j = 0 ; j <3 ; j++){
            matriz[i][j] = "";
        }
    }
    // deixa o popup invisivel
    popup.style.visibility = "hidden";
    // Altera a imagem de todos os blocos
    for(let i in bloco){
        bloco[i].setAttribute("src","imgs/-.png");
    } 
});
//
////
////// Adicionando os elementos a matriz
function inicia(i,element){
    switch(i){
        case "0":
            matriz[0][0] = element;
        break;
        case "1":
            matriz[0][1] = element;
        break;
        case "2":
            matriz[0][2] = element;
        break;
        case "3":
            matriz[1][0] = element;
        break;
        case "4":
            matriz[1][1] = element;
        break;
        case "5":
            matriz[1][2] = element;
        break;
        case "6":
            matriz[2][0] = element;
        break;
        case "7":
            matriz[2][1] = element;
        break;
        default:
            matriz[2][2] = element;
    }
}
//
////
////// Pegando todos os blocos do jogo da velha
for(let i in bloco){
        bloco[i].addEventListener("click",()=>{
        let fundo = bloco[i];
        if(fundo.getAttribute("src")==="imgs/-.png"){
            if(jogador==="x"){
                fundo.setAttribute("src","imgs/x.png");
                jogador = "o";
                jogadores[0].firstElementChild.classList.remove("payervez");
                jogadores[1].firstElementChild.classList.add("payervez");
            }
            else{
                fundo.setAttribute("src","imgs/o.png");
                jogador = "x";
                jogadores[1].firstElementChild.classList.remove("payervez");
                jogadores[0].firstElementChild.classList.add("payervez");
            }
        }
        inicia(i,bloco[i].getAttribute("src"));
        vitoria=verificaVitoria();
        if(vitoria!=""){
            let venceu  = "";
            vitoria==="imgs/x.png"?venceu="X":venceu="O";
            popup.firstElementChild.lastElementChild.innerHTML = "Jogador "+venceu;
            popup.style.visibility = "visible";
        }   
    });
    
}
//
////
////// Verificação de vitoria
function verificaVitoria(){
        for(let f=0;f<3;f++){
            //verifica linhas
            if(matriz[f][0]===matriz[f][1]&&matriz[f][0]===matriz[f][2]&&matriz[f][0]!=""){
                return matriz[f][0];
            }
            //verifica colunas
            if(matriz[0][f]===matriz[1][f]&&matriz[0][f]===matriz[2][f]&&matriz[0][f]!=""){
                return matriz[0][f];
            }
        }
        //verifica diagonais
        if(matriz[0][0]===matriz[1][1]&&matriz[0][0]===matriz[2][2]&&matriz[0][0]!=""){
            return matriz[0][0];
        }
        if(matriz[0][2]===matriz[1][1]&&matriz[0][2]===matriz[2][0]&&matriz[0][2]!=""){
            return matriz[0][2];
        }
        //se nada for verdade ele só retorna o vazio
        return "";
}
//
////
////// Recomeço do jogo
