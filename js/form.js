var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionarPaciente);

botaoAdicionarPaciente.addEventListener("click", function (event) {
    // desabilitar o submit padrao do botao
    event.preventDefault();
    adicionarPacienteNaTabela();
});

function adicionarPacienteNaTabela() {
    // recupera o elemento formulario
    var form = document.querySelector("#form-adiciona");

    // extrai os dados do formulario e cria um objeto paciente com os valores
    var paciente = obtemPacienteDoFormulario(form);
    
    // recupera a tabela de pacientes
    var tbPacientes = document.querySelector("#tabela-pacientes");

    // cria o elemento html com a linha
    var linhaDaTabela = criaLinhaDaTabela(paciente);

    // appenda a nova linha criada a tabela já existente
    tbPacientes.appendChild(linhaDaTabela);

    // limpar o formulario para um proximo cadastro
    limparFormulario(form);  
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value) 
    }
    return paciente;
}

function criaLinhaDaTabela(paciente) {
    var novaTr = document.createElement("tr");
    novaTr.classList.add("paciente");

    novaTr.appendChild(criaTd(paciente.nome, "info-nome"));
    novaTr.appendChild(criaTd(paciente.peso, "info-peso"));
    novaTr.appendChild(criaTd(paciente.altura, "info-altura"));
    novaTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    novaTr.appendChild(criaTd(paciente.imc, "info-imc"));

    return novaTr;
}

function criaTd(valor, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;

    return td;
}

function limparFormulario(form) {
    // resetar o form
    form.reset();
    form.nome.focus();
}