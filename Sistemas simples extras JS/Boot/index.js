
document.firstChild = main();
function main(){
    let btn = document.querySelectorAll(".btn");
    let btn_enviar = document.querySelector("#btn_enviar");
    let boot = document.querySelector("img");
    let texto = document.querySelector(".Texto");
    let campo = document.querySelector(".conteudo"); 
    let selected = document.querySelector(".div_input");
    
    let count = 0;
    //caso aceite
    btn[0].addEventListener("click",()=>{
        boot.src = "imagens/img (7).jpg";
        texto.innerHTML = "Aaee você aceitou!";
        count+=2;
        setTimeout(() => {
            boot.src = "imagens/img (6).jpg";
            campo.lastElementChild  .style.visibility = "hidden";
            texto.innerHTML = "O que quer falar comigo? <br /><br /> <ul><li>1 Tudo bem Osvaldo?</li><li>2 Como foi o seu dia?</li><li>3 Me conta um segredo?</li><li>0 Tchau Osvaldo</li></ul>";
            selected.style.visibility = "visible";
        }, 1000);
        btn_enviar.addEventListener("click",()=>{
            let pergunta = document.querySelector("#selected");
            if(pergunta.value == 1){
                setTimeout(() => {
                    boot.src = "imagens/img (1).jpg";
                    texto.innerHTML = "Eu estou otimo! <br /><br /> <ul><li>1 Tudo bem Osvaldo?</li><li>2 Como foi o seu dia?</li><li>3 Me conta um segredo?</li><li>0 Tchau Osvaldo</li></ul>";

                }, 1000);
            }
            if(pergunta.value == 2){
                setTimeout(() => {
                    boot.src = "imagens/img (2).jpg";
                    texto.innerHTML = "Hoje eu tive que colocar olho em minhas engrenajens, foi bem complicado, mas foi bomm! <br /><br /> <ul><li>1 Tudo bem Osvaldo?</li><li>2 Como foi o seu dia?</li><li>3 Me conta um segredo?</li><li>0 Tchau Osvaldo</li></ul>";
                }, 500);
            }
            if(pergunta.value == 3){
                setTimeout(() => {
                    boot.src = "imagens/img (7).jpg";
                    texto.innerHTML = "Ferlandia, o Juliano está muito afim de você, você é incrivel e ele quer que vocês dêen certo! Ei ele te acha muito gatinha também rsrs<br /><br /> <ul><li>1 Tudo bem Osvaldo?</li><li>2 Como foi o seu dia?</li><li>3 Me conta um segredo?</li><li>0 Tchau Osvaldo</li></ul>";
                }, 500);
            }
            if(pergunta.value == 0){
                setTimeout(() => {
                    boot.src = "imagens/img (4).jpg";
                    texto.innerHTML = "Tudo bem então :(";
                    campo.style.visibility = "hidden";
                }, 500);
            }
        });
    });

    // ----------------------------------------- 

    //caso rejeite
    btn[1].addEventListener("click",()=>{
        count++;
        if(count===1){  
            boot.src = "imagens/img (4).jpg";
            texto.innerHTML = "Tudo bem então :(";
            campo.style.visibility = "hidden";
        }
    });
}
