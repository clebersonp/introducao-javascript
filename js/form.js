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

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        removerMensagensErro();

        exibeMensagensErro(erros);
        return;
    }

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
    novaTr.appendChild(criaTdBotaoRemoverPaciente("acao"));

    return novaTr;
}

function criaTdBotaoRemoverPaciente(classe) {
    var td = document.createElement("td");
    var button = document.createElement("button");
    var span = document.createElement("span");

    td.classList.add("acao");
    button.classList.add("btn", "btn-default");
    span.classList.add("glyphicon", "glyphicon-trash");

    button.appendChild(span);
    td.appendChild(button);

    return td;
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

    // limpar as mensagens de erro
    removerMensagensErro();
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não poder sem em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido!");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida!");
    }

    return erros;
}

function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagens-erro");

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function removerMensagensErro() {
    var mensagensErro = document.querySelector("#mensagens-erro");
    // limpar as mensagens de erro antigas
    mensagensErro.innerHTML = "";
}