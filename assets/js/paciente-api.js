fetch(`https://api-pacientes.herokuapp.com/pacientes`).then((response) => {
        return response.json()
}).then((result) =>{
        console.log( result); 

        

        result.forEach(function(paciente){
                adicionarPacienteTabela(paciente);
        });
    })
