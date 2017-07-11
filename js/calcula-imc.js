var titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Aparecida Nutricionista";

var tabelaPaciente = document.querySelector("#tabela-pacientes");
var pacientes = tabelaPaciente.getElementsByTagName("tr");

console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    console.log("O paciente é: " + paciente);
    console.log("A lista de classes css: " + paciente.classList);
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var imc = calcularImc(peso, altura);

    var isPesoValido = true;
    var isAlturaValida = true;
    // validação

    if (peso <= 0 || peso >= 500) {
        isPesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        isAlturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.style.backgroundColor = "orange";
    }

    if (isPesoValido && isAlturaValida) {
        tdImc.textContent = imc;
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}