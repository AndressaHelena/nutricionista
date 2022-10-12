let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value); 
    let pacientes = document.querySelectorAll(".paciente")

    if(this.value.length > 0){
        for(let i = 0; i<pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome")
            let nome = tdNome.textContent;

            /*O primeiro parâmetro é o padrão (o texto da expressão regular, 
            o que deve ser buscado) e o segundo parâmetro são uma ou mais flags 
            (representando como queremos que a expressão regular busque).*/
            let regex = new RegExp(this.value, "i")
            if(regex.test(nome)){
                paciente.classList.remove("invisivel");
            } else{
                paciente.classList.add("invisivel");
            }
        }
    } else{
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i]
            paciente.classList.remove("invisivel");
        }
    }
   
})