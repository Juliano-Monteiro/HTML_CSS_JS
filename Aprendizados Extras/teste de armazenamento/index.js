document.querySelector("#sessionBtn").addEventListener("click",()=>{
    const input = document.querySelector("#session");
    const key = document.querySelector("#sessionKey").value;
    sessionStorage.setItem(key,input.value);
    input.value = '';

})
document.querySelector("#sessionBtnRevelar").addEventListener("click",()=>{
    const key = document.querySelector("#sessionKey").value;
    if(key==''){
        alert("Escreva a chave");
    }else{
        const informacao = sessionStorage.getItem(key);
        document.querySelector(".resultadoSession").innerText = informacao;
    }
    
})

document.querySelector("#localBtn").addEventListener("click",()=>{
    const input = document.querySelector("#local");
    const key = document.querySelector("#localKey").value;
    localStorage.setItem(key,input.value);
    input.value = '';

})
document.querySelector("#localBtnRevelar").addEventListener("click",()=>{
    const key = document.querySelector("#localKey").value;
    if(key==''){
        alert("Escreva a chave");
    }else{
        const informacao = localStorage.getItem(key);
        document.querySelector(".resultadolocal").innerText = informacao;
    }
    
})
document.querySelector("#cookieBtn").addEventListener("click",()=>{
    const input = document.querySelector("#cookie");
    //Para salvar uma informação no cookie:
    // nomeCookie = value;
    //expires=UTCStringDate; - permite que o cookie seja apagado, que tenha uma data de validade
    //path=/caminho onde ele sera armazenado
    const cookie = 'infoCookie='+input.value+';';
    const expiration = 'expires='+new Date(2024,12,10)+";";
    const local = "path=/;" //Disponivel em qualquer pagina presente na pasta
    document.cookie = cookie+expiration+local;
    input.value = '';
    console.log(document.cookie)

})
document.querySelector("#cookie2Btn").addEventListener("click",()=>{
    const input = document.querySelector("#cookie2");
    const cookie2 = 'infoCookie2='+input.value+';';
    const expiration = 'expires='+new Date(2024,12,10)+";";
    const local = "path=/;" //Disponivel em qualquer pagina presente na pasta
    document.cookie = cookie2+expiration+local;
    input.value = '';
    console.log(document.cookie)

})