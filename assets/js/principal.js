// let titulo = document.querySelector(".titulo");
// titulo.textContent = "Aparecida Nutricionista"

/*acessou o id na tr, acessou a td peso e altura 
e o textContent retornou o valor das duas*/
let pacientes = document.querySelectorAll(".paciente");


for(i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i]; 
    
    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let tdImc = paciente.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("testClass");
    }
    else if(!alturaEhValida){
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("testClass");
    }else{
        let imc =calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso /(altura  * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 300){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}