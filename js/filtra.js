var campoFiltro = document.querySelector("#filtrar-tabela");

// criar um evento de digitar no campoFiltro
campoFiltro.addEventListener("input", filtraPacientes); 
    

function filtraPacientes() {
    var valorDigitado = document.querySelector("#filtrar-tabela").value;
    // recuperar todos os trs para filtrar a tabela
    var pacientes = document.querySelectorAll(".paciente");

    if (valorDigitado.length > 0) {
        console.log("valor digitado: " + valorDigitado);

        pacientes.forEach(function(paciente) {
            tdNome = paciente.querySelector(".info-nome");
            nome = tdNome.textContent;
            console.log("Nome: " + nome);

            if (nome != valorDigitado) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(function(paciente) {
         paciente.classList.remove("invisivel");
        });
    }
}