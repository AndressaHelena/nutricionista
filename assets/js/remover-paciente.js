pacientes = document.querySelectorAll(".paciente");


//dblclick no pai
let tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    confirme = confirm("Para excluir Paciente clique OK")
        if(confirme){
            console.log("true");
            let alvoEvento = event.target; //TD
            let paiDoAlvo = alvoEvento.parentNode; //TR = paciente = remover
            
            setTimeout(function(){
                //aguarda um pouco antes de remover
                paiDoAlvo.remove();
            }, 300)
    }else{
        console.log("false");
    }
    //event.target.parentNode.remove() tudo em uma linha funciona normalmente
})


/*dblclick (duplo clique) para o filho
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("duplo");
        this.remove()
    });
});*/