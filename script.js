class Veiculo {
    constructor(marca, modelo, ano, cor, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
}

class Cliente {
    constructor(nome, telefone, endereco, id) {
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.id = id;
    }
}

class Loja {
    constructor() {
        this.estoque = [];
        this.clientes = [];
    }

    adicionarVeiculo(veiculo) {
        this.estoque.push(veiculo);
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

    listarVeiculos() {
        return this.estoque;
    }

    listarClientes() {
        return this.clientes;
    }
}

const loja = new Loja();

function cadastrarVeiculo() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const preco = document.getElementById("preco").value;

    const veiculo = new Veiculo(marca, modelo, ano, cor, preco);
    loja.adicionarVeiculo(veiculo);
    exibirVeiculos();
}

function cadastrarCliente() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const id = document.getElementById("id").value;

    const cliente = new Cliente(nome, telefone, endereco, id);
    loja.adicionarCliente(cliente);
    exibirClientes();
}

function exibirVeiculos() {
    const listaVeiculos = document.getElementById("veiculos-lista");
    listaVeiculos.innerHTML = "";

    loja.listarVeiculos().forEach(veiculo => {
        const li = document.createElement("li");
        li.textContent = `${veiculo.marca} ${veiculo.modelo} - ${veiculo.ano} - ${veiculo.cor} - R$ ${veiculo.preco}`;
        listaVeiculos.appendChild(li);
    });
}

function exibirClientes() {
    const listaClientes = document.getElementById("clientes-lista");
    listaClientes.innerHTML = "";

    loja.listarClientes().forEach(cliente => {
        const li = document.createElement("li");
        li.textContent = `${cliente.nome} - ${cliente.telefone} - ${cliente.endereco} - ${cliente.id}`;
        listaClientes.appendChild(li);
    });
}

// Exibir os veículos/usuarios disponiveis ao carregar a página
// OBS: Essa funcionalidade é provisória até conseguimos implementar o banco de dados.
window.onload = function() {
    exibirVeiculos();
    exibirClientes();
};
// Script da tela de login. 
// OBS: Os dados de login tambem serão adicionados ao banco de dados.
// LEMBRAR: Ciar tela de cadastro de usuario, e armazenar os dados no banco de dados.
// Após a implantação do BD os dados de login serão consultado a partir de la
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de login bem-sucedido
    if (username === "admin" && password === "123") {
        document.getElementById("login-form").reset(); // Limpar campos do formulário
        window.location.href = "inicio.html"; // Redirecionar para a tela inicial
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
});
// metodo para direcionar para tela de login após Login bem-sucedido
document.getElementById("logoff-btn").addEventListener("click", function(event) {
    event.preventDefault();
    // Redirecionar para a página de login
    window.location.href = "login.html";
});
