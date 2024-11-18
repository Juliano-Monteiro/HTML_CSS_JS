//
//// - Array de objetos das contas bancarias
let contas = [];
//
//// - Opções de escolha de menu declaradas e zeradas
let opc = "";
let opc2 = "";
//
//// - Variavel de cunho global que armazena a conta que está sendo acessada no momento da operação
let elementoLogado;
//
//// - Variáveis sobre componentes do formulário de criação de conta e de logar na conta
let linkCriarConta = document.querySelector('#ciarContaLink');
let linkLogar = document.querySelector('#logar');
let paginaLogar = document.querySelector(".form1");
let paginaCriar = document.querySelector(".form2");
let btnLogar = document.querySelector("#entrarSistema");
let btnCriar = document.querySelector("#criarConta");
paginaCriar.firstElementChild.style.boxShadow = "-5px 0px 50px rgba(0, 0, 0, 0.406)"; 
paginaLogar.firstElementChild.style.boxShadow = "-5px 0px 50px rgba(0, 0, 0, 0.406)";
//
//// - botão que fica resposavel por levar o usuario para a pagina de criar conta
linkCriarConta.addEventListener("click", () => {

    
    if (paginaCriar.getAttribute("id") == "open") {
        paginaCriar.setAttribute("id", "");
        paginaCriar.firstElementChild.setAttribute("class", "sub_form animado1");
        setTimeout(()=>{
            paginaCriar.firstElementChild.style.transform = "translateX(-100%)"; 
            paginaLogar.firstElementChild.style.transform = "translateX(-100%)"; 
            paginaCriar.firstElementChild.style.boxShadow = "-5px 0px 50px rgba(0, 0, 0, 0.406)"; 
            paginaLogar.firstElementChild.style.boxShadow = "-5px 0px 50px rgba(0, 0, 0, 0.406)"; 
            paginaCriar.firstElementChild.style.borderRadius = "50px 0px 0px 50px"; 
        },1500)
        resetForms(paginaLogar);
        paginaLogar.setAttribute("id", "open");
        
    }
});
//
//// - botão que fica resposavel por levar o usuario para a pagina de logar na conta
linkLogar.addEventListener("click", () => {
    if (paginaLogar.getAttribute("id") == "open") {
        paginaLogar.setAttribute("id", "");
        paginaLogar.firstElementChild.setAttribute("class", "sub_form animado2");
        setTimeout(()=>{
            paginaCriar.firstElementChild.style.transform = "translateX(0%)"; 
            paginaLogar.firstElementChild.style.transform = "translateX(0%)";
            paginaCriar.firstElementChild.style.boxShadow = "5px 0px 50px rgba(0, 0, 0, 0.617)"; 
            paginaLogar.firstElementChild.style.boxShadow = "5px 0px 50px rgba(0, 0, 0, 0.617)"; 
            paginaLogar.firstElementChild.style.borderRadius = "0px 50px 50px 0px"; 
        },1500)
        resetForms(paginaCriar);
        paginaCriar.setAttribute("id", "open");
    }
});
//
//// - Botão que chama a função que cria uma conta
btnCriar.addEventListener("click", () => {
    criarConta();
    return true;
});
//
//// - Botão que aciona a função que loga na conta já registrada
btnLogar.addEventListener("click", () => {
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    logarConta(email, senha); // --> Chamando a função de logar passando o email e senha como argumento para que a função use os parametros com o objetivo de achar a conta no array de contas
})
//
//// - Função que reseta dados de qualquer formulário
const resetForms = (formCamp) => {
    let resetValues = formCamp.getElementsByTagName("input");
    for (let i = 0; i < resetValues.length; i++) {
        resetValues[i].value = "";
    }
}
//
//// Função que verifica a existencia de algum campo vazio no formulario
const camposVazios = (container) => {
    let campVazios = 0;
    document.querySelectorAll(container).forEach(input => {
        if (input.value == "") {
            campVazios++;
            alert("Existe um campo de entrada vazio");
        }
    });
    return campVazios;
}
//
//// - Verifica se é possivel cadastrar uma nova conta com esses dados, ele olha o array e vê se já existe alguma conta cadastrada com os mesmos valores 
const verificaPossibilidadeCadastral = (cpf, email) => {
    let retorno = 0;
    contas.forEach((elemento) => {
        if (elemento.cpf == cpf || elemento.email == email) {
            retorno++;
            alert("Já existe uma conta com esse CPF ou com esse email!");
        }
    });
    return retorno;
}
//
//// - Função que cria uma conta
const criarConta = () => {
    let nome = document.querySelector("#nome").value;
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    let cpf = document.querySelector("#cpf").value;
    let email = document.querySelector("#emailCriado").value;
    let data = document.querySelector("#data").value;
    let salario = document.querySelector("#salario").value;
    let senha = document.querySelector("#senhaCriada").value;
    let senha2 = document.querySelector("#outraSenha").value;
    let saldo = 0.00;
    let chavesPix = [];
    if (senha != senha2) {
        alert("Senhas estão diferentes, arrume para criar sua conta");
    } else {
        //
        //// - Numero aleatorio para o codigo da conta 
        const codigo = Math.floor(Math.random() * (10000000 - 1000000) + 1000000);
        if (camposVazios(".dadosInput") == 0 && verificaPossibilidadeCadastral(cpf, email) == 0) {
            let dados = { nome, cpf, email, data, salario, senha, saldo, codigo, chavesPix};
            contas.push(dados);
            resetForms(paginaCriar);
            alert("Conta criada!");
            console.table(dados);
            console.table(contas);
        }
    }
}
//
//// - Função que executa e entrada na conta cadastrada
const logarConta = (email, senha) => {
    let contaEncontrada = false;
    contas.forEach((e) => {
        if (e.email == email && e.senha == senha) {
            document.querySelector(".containerConta").setAttribute("id", "");
            document.querySelector(".containerFormulario").setAttribute("id", "open");
            document.querySelector(".nomeConta").firstElementChild.innerHTML = e.nome;
            document.querySelector(".valorConta").firstElementChild.innerHTML = e.saldo;
            resetForms(paginaLogar);
            elementoLogado = e;
            contaEncontrada = true;
        }
    });
    if (!contaEncontrada) alert("Email ou senha incorreto");
};
//
//// - Visibilidade de saldo da conta
document.querySelector(".olho").firstElementChild.addEventListener("click",()=>{
    if(document.querySelector(".valorConta").getAttribute("id")=="open"){
        document.querySelector(".olho").firstElementChild.setAttribute("src","imgs/visivel.png");
        document.querySelector(".valorConta").setAttribute("id","");
    }
    else{
        document.querySelector(".valorConta").setAttribute("id","open");
        document.querySelector(".olho").firstElementChild.setAttribute("src","imgs/invisivel.png")
    }
})
//
//// - Botão de sair da conta
document.querySelector(".logout").addEventListener("click", () => {
    document.querySelector(".containerConta").setAttribute("id", "open");
    document.querySelector(".containerFormulario").setAttribute("id", "");
    elementoLogado = null;
});
//
////Botão que dá acesso a pagina de deposito de capital
document.querySelector(".depositar").addEventListener("click", () => {
    document.querySelector(".bodyConta").setAttribute("id", "open");
    document.querySelector(".depositarConta").setAttribute("id", "");
});
//
//// - Botão que deposita o valor inserido 
document.querySelector(".btnDepositar").addEventListener("click", () => {
    let valor = parseFloat(document.querySelector("#valorDepositar").value);
    if (!isNaN(valor)) {
        elementoLogado.saldo += valor;
        document.querySelector(".valorConta").firstElementChild.innerHTML = elementoLogado.saldo; // ---> Mostra o novo valor da conta no header
    }

});
//
////Botão que dá acesso a pagina de desconto de capital
document.querySelector(".sacar").addEventListener("click", () => {
    document.querySelector(".bodyConta").setAttribute("id", "open");
    document.querySelector(".sacarConta").setAttribute("id", "");
});
//
//// - Botão que sacar o valor inserido
document.querySelector(".btnSacar").addEventListener("click", () => {
    let valor = parseFloat(document.querySelector("#valorSacar").value);
    if (!isNaN(valor)) {
        elementoLogado.saldo -= valor;
        document.querySelector(".valorConta").firstElementChild.innerHTML = elementoLogado.saldo;
    }
});
//
////Botão que dá acesso a pagina de transferencia de capital
document.querySelector(".transferir").addEventListener("click", () => {
    document.querySelector(".transferirConta").setAttribute("id", "");
    document.querySelector(".bodyConta").setAttribute("id", "open");
});
//
//// - Botão que transfere o valor inserido
document.querySelector(".btnTransfer").addEventListener("click", () => {
    let valor = parseFloat(document.querySelector("#valorTransfer").value);
    let codigoPesquisado = document.querySelector("#codigoContaPesquisado").value;
    if (!isNaN(valor)) {
        elementoLogado.saldo -= valor;
        document.querySelector(".valorConta").firstElementChild.innerHTML = elementoLogado.saldo;
        contas.forEach((e) => {
            if (codigoPesquisado == e.codigo) {
                e.saldo += valor;
            }
        });
    }
});
//
//// - Botão que dá acesso a pagina de pix
document.querySelector(".pix").addEventListener("click", () => {
    document.querySelector(".pixPage").setAttribute("id", "");
    document.querySelector(".bodyConta").setAttribute("id", "open");
});
//
//// - Botão que dá acesso a pagina de criarção de chave pix
document.querySelector(".criarChave").addEventListener("click", () => {
    document.querySelector(".pixPageCriarChave").setAttribute("id", "");
    document.querySelector(".pixPage").setAttribute("id", "open");
});
//
//// - Todos os botões de voltar pagina do sistema acessados por id e redirecionando para as devidas paginas anteriores a eles
let btnClosePages = document.querySelectorAll(".btnClosePage");
btnClosePages.forEach(btnClosePage => {
    btnClosePage.addEventListener("click", () => {
        const id = btnClosePage.getAttribute("id");
        if (id === "closeTransferir") {
            document.querySelector("#valorTransfer").value = "";
            document.querySelector(".bodyConta").setAttribute("id", "");
            document.querySelector(".transferirConta").setAttribute("id", "open");
        }
        if (id === "closeSacar") {
            document.querySelector("#valorSacar").value = "";
            document.querySelector(".bodyConta").setAttribute("id", "");
            document.querySelector(".sacarConta").setAttribute("id", "open");
        }
        if (id === "closeDepositar") {
            document.querySelector("#valorDepositar").value = "";
            document.querySelector(".bodyConta").setAttribute("id", "");
            document.querySelector(".depositarConta").setAttribute("id", "open");
        }
        if (id === "closePix") {
            document.querySelector(".bodyConta").setAttribute("id", "");
            document.querySelector(".pixPage").setAttribute("id", "open");
        }
        if (id === "closePixCriar") {
            document.querySelector("#NovaChave").value = "";
            document.querySelector(".pixPage").setAttribute("id", "");
            document.querySelector(".pixPageCriarChave").setAttribute("id", "open");
        }
        if (id === "closeTypeKeyInserted") {
            document.querySelector(".PagarPix").setAttribute("id","open");
            document.querySelector(".pixPage").setAttribute("id", "");
        }
        if (id === "closeKeyInserted") {
            document.querySelector("#chavePesquisada").value = "";
            document.querySelector(".tipoChaveInserida").setAttribute("id","");
            document.querySelector(".inserirChave").setAttribute("id","open");
        }
        if (id === "closePagarPix") {
            document.querySelector("#valorDoPix").value = "";
            document.querySelector(".inserirChave").setAttribute("id","");
            document.querySelector(".pagarPorPixFinal").setAttribute("id","open");
        }
    });
});
//
//// - Função que analisa o tipo de chave escolhida
function escolhido() {
    let res = '';
    const items = document.getElementsByName('tipoChave');
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            res = items[i].value;
            break;
        }
    }
    return res;
}
//
//// - Função que verifica a possibilidade de cadastrar uma chave Pix analisando as chaves já cadastradas de todas as contas bancárias
const verificaPossibilidadeCadastralDePixPropio = (typeKey, keyInput) => {
    let cadastrado = 0;
    contas.forEach(conta => {
        conta.chavesPix.forEach(chave => {
            if (chave.typeKey === typeKey && chave.key === keyInput) {
                cadastrado++;
            }
        });
    });
    return cadastrado;
};
//
//// - Função que gera letras aleatórias com a quantidade informada por argumento
function gerarLetrasAleatorias(quantidade) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let resultado = "";
    for (let i = 0; i < quantidade; i++) {
        resultado += alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
    }
    return resultado;
}
//
//// - Função que cria a chave Pix depois das verificações
const criarChavePix = () => {
    let typeKey = escolhido();
    let keyInput = document.querySelector("#NovaChave").value;
    if (typeKey && keyInput) {
        if (verificaPossibilidadeCadastralDePixPropio(typeKey, keyInput) === 0) {
            let dadosPix = { typeKey, key: keyInput };
            elementoLogado.chavesPix.push(dadosPix);
            console.log("Chave PIX cadastrada:", dadosPix);
        } else {
            console.log("Chave já está cadastrada");
        }
    } else {
        console.log("Possui campo vazio");
    }
};
//
//// - Desabilita o campo de inserir uma chave Pix e adiciona um texto no campo da chave aleatória criada
document.querySelectorAll(".subOpcTypeKey")[3].addEventListener("click", () => {
    document.querySelector("#NovaChave").disabled = true;
    document.querySelector("#NovaChave").value = gerarLetrasAleatorias(4) + (Math.floor(Math.random() * (10000 - 1000) + 1000)) + gerarLetrasAleatorias(5);
});
//
//// - Habilita o campo de inserir uma chave Pix e apaga a chave aleatória gerada
for (let i = 0; i <= 2; i++) {
    document.querySelectorAll(".subOpcTypeKey")[i].addEventListener("click", () => {
        document.querySelector("#NovaChave").disabled = false;
        document.querySelector("#NovaChave").value = "";
    });
}
//
//// - Botão que chama a função de criar uma chave Pix
document.querySelector("#cadastrarPix").addEventListener("click", () => {
    criarChavePix();
});
//
//// - Cria uma página que mostra todas as chaves Pix cadastradas naquela conta
document.querySelector(".minhasChaves").addEventListener("click", () => {
    document.querySelector(".pixPageChavesCadastradas").setAttribute("id", "");
    document.querySelector(".pixPage").setAttribute("id", "open");

    // ---> Limpa o conteúdo de .pixPageChavesCadastradas para evitar duplicações
    document.querySelector(".pixPageChavesCadastradas").innerHTML = "";

    elementoLogado.chavesPix.forEach(chave => {
        const divAreaChave = document.createElement("div");
        divAreaChave.setAttribute("class", "areaDaChavePix");

        const paragrafoTipoChave = document.createElement("p");
        let conteudoTextoTipo = document.createTextNode(chave.typeKey);
        paragrafoTipoChave.appendChild(conteudoTextoTipo);
        paragrafoTipoChave.setAttribute("class", "tipoDeChaveCadastrada");

        const subBlocoChaves = document.createElement("div");
        subBlocoChaves.setAttribute("class", "subBlocoCHavesCadastradas");

        const conteudoChave = document.createElement("p");
        conteudoChave.appendChild(document.createTextNode(chave.key));
        conteudoChave.setAttribute("class", "textoChavePix");

        const btnCopy = document.createElement("button");
        btnCopy.setAttribute("type", "button");
        btnCopy.setAttribute("class", "btnCopy");

        const imgBtn = document.createElement("img");
        imgBtn.setAttribute("src", "imgs/copy.png");
        imgBtn.setAttribute("class", "imgCopiar");
        btnCopy.appendChild(imgBtn);

        subBlocoChaves.appendChild(conteudoChave);
        subBlocoChaves.appendChild(btnCopy);

        divAreaChave.appendChild(paragrafoTipoChave);
        divAreaChave.appendChild(subBlocoChaves);

        document.querySelector(".pixPageChavesCadastradas").appendChild(divAreaChave);
    });

    const btnClosePageTag = document.createElement("button");
    btnClosePageTag.setAttribute("type", "button");
    btnClosePageTag.setAttribute("class", "btnClosePage");
    btnClosePageTag.setAttribute("id", "closePixChavesCadastradas");
    btnClosePageTag.appendChild(document.createTextNode("Voltar"));

    document.querySelector(".pixPageChavesCadastradas").appendChild(btnClosePageTag);

    btnClosePageTag.addEventListener("click", () => {
        document.querySelector(".pixPage").setAttribute("id", "");
        document.querySelector(".pixPageChavesCadastradas").setAttribute("id", "open");
    });

    document.querySelectorAll(".btnCopy").forEach((button, i) => {
        button.addEventListener("click", async () => {
            let text = document.querySelectorAll(".textoChavePix")[i].textContent;
            await navigator.clipboard.writeText(text);
        });
    });
});
//
//// - Página para pagamento com Pix
document.querySelectorAll(".btnTypekeyInserted").forEach(e => {
    e.addEventListener("click", () => {
        let typeKeyAnalise = e.value;
        document.querySelector(".tipoChaveInserida").setAttribute("id", "open");
        document.querySelector(".inserirChave").setAttribute("id", "");

        // Limpa event listeners duplicados de ".continuarParaPix"
        document.querySelector(".continuarParaPix").replaceWith(document.querySelector(".continuarParaPix").cloneNode(true));
        
        document.querySelector(".continuarParaPix").addEventListener("click", () => {
            let keyInserted = document.querySelector("#chavePesquisada").value;
            let chaveEncontrada = false;

            contas.forEach(conta => {
                conta.chavesPix.forEach(chave => {
                    if (chave.typeKey === typeKeyAnalise && chave.key === keyInserted) {
                        chaveEncontrada = true;
                        document.querySelector(".inserirChave").setAttribute("id", "open");
                        document.querySelector(".pagarPorPixFinal").setAttribute("id", "");
                        document.querySelector(".nomePessoaPix").innerHTML = conta.nome;

                        // Limpa event listeners duplicados de ".btnPagarPix"
                        document.querySelector(".btnPagarPix").replaceWith(document.querySelector(".btnPagarPix").cloneNode(true));

                        document.querySelector(".btnPagarPix").addEventListener("click", () => {
                            let valorDoPix = parseFloat(document.querySelector("#valorDoPix").value);
                            if (!isNaN(valorDoPix) && elementoLogado.saldo >= valorDoPix) {
                                elementoLogado.saldo -= valorDoPix;
                                conta.saldo += valorDoPix;
                                document.querySelector(".valorConta").firstElementChild.innerHTML = elementoLogado.saldo;
                                alert("Pix realizado com sucesso!");
                            } else {
                                alert("Saldo insuficiente ou valor inválido");
                            }
                        });
                    }
                });
            });
            if (!chaveEncontrada) {
                alert("Não existe essa chave ou erro de dados informados");
            }
        });
    });
});


//// - Leva para a página de pagamento definitivo do Pix
document.querySelector(".pixPagar").addEventListener("click", () => {
    document.querySelector(".PagarPix").setAttribute("id", "");
    document.querySelector(".pixPage").setAttribute("id", "open");
});
//
//// - Pagina de receber pix - gerador de QR
document.querySelector(".pixReceber").addEventListener("click", () => {
    document.querySelector(".pixPage").setAttribute("id", "open");
    document.querySelector(".receberPix").setAttribute("id", "");
    document.querySelector(".receberPix").innerHTML = ""; // Limpa o conteúdo para evitar duplicações

    elementoLogado.chavesPix.forEach(chave => {
        const div_qr = document.createElement("div");
        div_qr.setAttribute("class", "div_qr");

        const img_qr = document.createElement("img");
        img_qr.setAttribute("class", "qr_gerado");
        img_qr.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${chave.key}`);

        const chavePix_qr = document.createElement("p");
        chavePix_qr.setAttribute("class", "chavePixReferente");
        chavePix_qr.appendChild(document.createTextNode(chave.key));

        div_qr.appendChild(img_qr);
        div_qr.appendChild(chavePix_qr);

        document.querySelector(".receberPix").appendChild(div_qr);
    });

    const btnClosePagePixQr = document.createElement("button");
    btnClosePagePixQr.setAttribute("type", "button");
    btnClosePagePixQr.setAttribute("class", "btnClosePage");
    btnClosePagePixQr.setAttribute("id", "closePagePixChavesQR");
    btnClosePagePixQr.appendChild(document.createTextNode("Voltar"));
    document.querySelector(".receberPix").appendChild(btnClosePagePixQr);
    btnClosePagePixQr.addEventListener("click", () => {
        document.querySelector(".pixPage").setAttribute("id", "");
        document.querySelector(".receberPix").setAttribute("id", "open");
    });
});
//
//// - Função criada para atuvar "false" ou desativar "true" campos inputs do popup
const ativarCamposPopup = (comand)=>{
    document.querySelector("#nomePopup").disabled = comand;
    document.querySelector("#cpfPopup").disabled = comand;
    document.querySelector("#emailPopup").disabled = comand;
    document.querySelector("#salarioPopup").disabled = comand;
    document.querySelector("#senhaPopup").disabled = comand;
}
//
//// - Quando você aperta o botão X de sair do popup ele da um display none no popup e desabilita os campos
document.querySelector(".blocoClosePopup").firstElementChild.addEventListener("click",()=>{
    document.querySelector(".popup").setAttribute("id","open");
    ativarCamposPopup(true);
})
//
//// - Aqui quando o botão salvar for clicado ele salva todas as alterações feitas inserindo os valores dos campos e armazenando no objeto conta criado
document.querySelector(".SalvarAlteracoes").addEventListener("click",()=>{
    elementoLogado.nome = document.querySelector("#nomePopup").value;
    elementoLogado.cpf = document.querySelector("#cpfPopup").value;
    elementoLogado.email = document.querySelector("#emailPopup").value;
    elementoLogado.salario = document.querySelector("#salarioPopup").value;
    elementoLogado.senha = document.querySelector("#senhaPopup").value;
    document.querySelector(".nomeConta").firstElementChild.innerHTML = elementoLogado.nome;
    document.querySelector(".popup").setAttribute("id","open");
    console.log("Alterações realizadas");
    ativarCamposPopup(true);
})
//
//// - Acesso as informações da conta e alteração da mesma
document.querySelector(".perfil").addEventListener("click",()=>{
    document.querySelector(".popup").setAttribute("id","");
    document.querySelector("#nomePopup").value = elementoLogado.nome;
    document.querySelector("#cpfPopup").value = elementoLogado.cpf;
    document.querySelector("#emailPopup").value = elementoLogado.email;
    document.querySelector("#salarioPopup").value = elementoLogado.salario;
    document.querySelector("#senhaPopup").value = elementoLogado.senha;
    document.querySelector("#codigoPopup").value = elementoLogado.codigo;
})
//
//// - abilita apenas o campo que for clicado para edição
let btnsPopup = document.querySelectorAll(".btneditar");
for(let i in btnsPopup){
    btnsPopup[i].addEventListener("click",()=>{
        if(i==0){document.querySelector("#nomePopup").disabled = false;}
        if(i==1){document.querySelector("#cpfPopup").disabled = false;}
        if(i==2){document.querySelector("#emailPopup").disabled = false;}
        if(i==3){document.querySelector("#salarioPopup").disabled = false;}
        if(i==4){document.querySelector("#senhaPopup").disabled = false;}
    });
}







