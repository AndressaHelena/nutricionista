let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value); 
    let pacientes = document.querySelectorAll("#paciente")
    for(let i = 0; i<pacientes.length; i++){
        let paciente = pacientes[i];
        let tdNome = document.querySelector(".info-nome")
        let nome = paciente.textContent;
        console.log(nome);
    }
})