function iniciarCalculadora() {
    document.getElementById('display').value = '0';
}

function adicionarAoDisplay(valor) {
    var display = document.getElementById('display');
    var displayValue = display.value;

    // Remover o zero inicial ao digitar um valor
    if (displayValue === '0') {
        displayValue = '';
    }

    display.value = displayValue + valor;
}

function limparDisplay() {
    document.getElementById('display').value = '0';
}

function retroceder() {
    var valorDisplay = document.getElementById('display').value;
    document.getElementById('display').value = valorDisplay.slice(0, -1);
}

function calcular() {
    var valorDisplay = document.getElementById('display').value;
    var resultado = eval(valorDisplay);
    document.getElementById('display').value = resultado;
}

function adicionarPorcentagem() {
    var valorDisplay = document.getElementById('display').value;
    var valorNumerico = parseFloat(valorDisplay);
    var porcentagem = valorNumerico / 100;
    var resultado = porcentagem.toFixed(2); // Limita o resultado a duas casas decimais
    document.getElementById('display').value = resultado;
}
