// Função para adicionar números ou operadores ao display
function adicionarValor(valor) {
    document.getElementById('display').value += valor;
}

// Função para limpar o display
function limparDisplay() {
    document.getElementById('display').value = '';
}

// Função para calcular a expressão no display
function calcular() {
    let resultado = document.getElementById('display').value;
    try {
        // Avalia a expressão inserida no display
        document.getElementById('display').value = eval(resultado);
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}
