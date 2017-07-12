var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pac1111ientes");

    xhr.addEventListener("load", function () {

        var mensagemErro = document.querySelector("#mensagemErro");

        if (this.status == 200) {

            mensagemErro.classList.add("invisivel");

            var resposta = this.responseText;
            console.log(resposta);
            console.log(typeof resposta);

            var pacientes = JSON.parse(resposta);

            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach(function (paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            console.log("Status de resposta " + this.status);
            mensagemErro.classList.remove("invisivel");
            console.log(mensagemErro);
        }

    });

    xhr.send();

});