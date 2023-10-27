function verificar() {

    
    var email = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var cep = document.getElementById("cep").value;
    var telefone = document.getElementById("telefone").value;
    var datanasc = document.getElementById("datanasc").value;
    var cidade = document.getElementById("cidade").value;
    var numero = document.getElementById("numero").value;
    var estado = document.getElementById("estado").value;
    var rua = document.getElementById("rua").value;
    var senha = document.getElementById("senha").value;
    var repetir_senha = document.getElementById("repetir_senha").value;

    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ${response.status}`)
            }
            return response.json()
        })
        .catch(error => {
            alert(error.message);
        })
        .then(response => {
            document.getElementById('rua').value = response.logradouro
            document.getElementById('estado').value = response.uf
            document.getElementById('cidade').value = response.localidade
        })
    }

    if(!email || !nome || !cep || !telefone || !datanasc || !cpf || !cidade|| !numero || !estado || !rua || !senha || !repetir_senha ) {
        alert('O formulário apresenta error');
    } else {
        if(senha === repetir_senha) {
            alert('Cadastro Feito!');
        } else { alert('Digite as senha iguais') }
    }
};