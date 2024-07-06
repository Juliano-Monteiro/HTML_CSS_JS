const grid = document.querySelector(".subContainer");
let tentativas = document.querySelector(".dados").firstElementChild;
let numtentativas = 0;
const personagens = [
    "frente 1",
    "frente 2",
    "frente 3",
    "frente 4",
    "frente 5",
    "frente 6",
    "frente 7",
    "frente 8"
];
const criarElemento = (tag,className)=>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
let primeira = '';
let segunda = '';
const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.desailitado');
  
    if (disabledCards.length === 16) {
      window.location.reload(true);
    }
  }
const verificaCarta = ()=>{
    const primeiroPersonagem = primeira.getAttribute('data-personagem');
    const segundoPersonagem = segunda.getAttribute('data-personagem');
    console.log(primeiroPersonagem,segundoPersonagem);
    if(primeiroPersonagem===segundoPersonagem){
        primeira.firstElementChild.classList.add("desailitado");
        segunda.firstElementChild.classList.add("desailitado");
        primeira = '';
        segunda = '';
        checkEndGame();
    }

    else{
        setTimeout(()=>{
            primeira.classList.remove('flip');
            segunda.classList.remove('flip');
            primeira = '';
            segunda = '';
        },1000);
    }
    numtentativas++;
    tentativas.innerHTML = "Tentativas: "+numtentativas;
}
const criarCarta = (personagem)=>{
    const card = criarElemento('div','card');
    const card_inner = criarElemento('div','card-inner');
    const front = criarElemento('div','card-front');
    const back = criarElemento('div','card-back');
    
    card.appendChild(card_inner);
    card_inner.appendChild(front);
    card_inner.appendChild(back);
    console.log("Esse: "+personagem)
    front.style.backgroundImage = `url('img/${personagem}.jpg')`;
    card_inner.setAttribute('data-personagem',personagem);
    card.addEventListener("click",()=>{
        if(card_inner.className.includes('flip')){
            return;
        }
        if(primeira === ''){
            card_inner.classList.add("flip");
            primeira = card_inner;
        }
        else if(segunda === ''){
            card_inner.classList.add("flip");
            segunda = card_inner;
            verificaCarta();
        }
    });
    return card;
}

const loadGame = ()=>{
    const duplicarArray = [ ...personagens,...personagens ];
    const embaralhar = duplicarArray.sort(() => Math.random() - 0.5); //serve para ordenar os itens de um array conforme o retorno de uma função
    
    embaralhar.forEach((personagem)=>{
        const card = criarCarta(personagem);
        grid.appendChild(card);
    });
}
loadGame();