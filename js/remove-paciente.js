var tabelaPaciente = document.querySelector("#tabela-pacientes");

//console.log(tabelaPaciente);

tabelaPaciente.addEventListener("click", function (event) {
    //console.log(event);
    //console.log(event.target.parentNode);
    //event.target.parentNode.remove();

    // recupera o target (quem foi clicado)
    var className = event.target.className;
    if (className == "glyphicon glyphicon-trash" || className == "btn btn-default") {
        removePaciente(event);
    }
});

function removePaciente(event) {
    console.log(event);
    var no = event.target.parentNode;
    console.log(no);
    var className = no.className;
    console.log(className);

    while (className != "paciente" && className != "paciente paciente-invalido") {
        no = no.parentNode;
        className = no.className;
        console.log(className);
    }

    no.classList.add("fadeOut");

    setTimeout(function () {
        no.remove();
    }, 600);
}