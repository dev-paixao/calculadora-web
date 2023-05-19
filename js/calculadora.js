function iniciarCalculadora() {
    document.getElementById('display').value = '0';
  }
  
  function adicionarAoDisplay(valor) {
    var display = document.getElementById('display');
    var displayValue = display.value;
  
    // Verificar se o último caractere no display é um operador
    var ultimoCaractere = displayValue.slice(-1);
    var operadores = ['+', '-', '*', '/'];
    if (operadores.includes(ultimoCaractere) && operadores.includes(valor)) {
      // Substituir o operador anterior pelo novo operador
      display.value = displayValue.slice(0, -1) + valor;
    } else {
      // Adicionar o valor normalmente
      display.value = displayValue + valor;
    }
  
    // Remover o zero inicial ao digitar um valor
    if (displayValue === '0') {
      display.value = valor;
    }
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
    var resultado;
  
    try {
      resultado = math.evaluate(valorDisplay);
    } catch (error) {
      // Lidar com erros de expressões inválidas
      resultado = 'Erro';
    }
  
    document.getElementById('display').value = resultado;
  }
  
  function adicionarPorcentagem() {
    var valorDisplay = document.getElementById('display').value;
    var valorNumerico = parseFloat(valorDisplay);
    var porcentagem = valorNumerico / 100;
    var resultado = porcentagem.toFixed(2); // Limita o resultado a duas casas decimais
    document.getElementById('display').value = resultado;
  }
  
  iniciarCalculadora();
  