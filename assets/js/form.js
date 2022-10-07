botaoAdicionar.addEventListener("click", adicionarPaciente);

function adicionarPaciente(event){
    event.preventDefault()

    let form = document.querySelector("#form-adiciona");
    let paciente = dadosPacienteDoFormulario(form);
    let pacienteTr =  montaTr(paciente);

    let erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0){
       exibeMensagensDeErro(erros);
        return
    }

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);



    form.reset();
    let limpaMensagemDeErro = document.querySelector("#mensagens-erro");
    limpaMensagemDeErro.innerHTML = "";
}

function exibeMensagensDeErro(erros){
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    for(let i = 0; i < erros.length; i++){
        let erro = erros[i]
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    }
}


function dadosPacienteDoFormulario(form){
    let paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");//cria tr
    pacienteTr.classList.add("paciente");//monta classe
   
    //cria td com suas classes
    let nomeTd = montaTd(paciente.nome,"info-nome");
    let pesoTd = montaTd(paciente.peso,"info-peso");
    let alturaTd = montaTd(paciente.altura,"info-altura");
    let gorduraTd = montaTd(paciente.gordura,"info-gordura");
    let imcTd = montaTd(paciente.imc,"info-imc");


    //adiciona td como filha de tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
        
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválido");
        
    }
    if(paciente.gordura.length == 0){
        erros.push("A porcentagem de gordura não pode ser em branco");
    }

    return erros;
    
}