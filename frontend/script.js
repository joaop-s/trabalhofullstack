document.getElementById('pessoaForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    try {
        const response = await fetch('http://localhost:3000/api/pessoas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, cpf, telefone }),
        });

        if (response.ok) {
            alert('Pessoa cadastrada com sucesso!');
            carregarPessoas(); // Recarrega a lista após o cadastro
        } else {
            const error = await response.json();
            alert(`Erro: ${error.details}`);
        }
    } catch (error) {
        alert('Erro ao conectar com o servidor.');
        console.error(error);
    }
});

async function carregarPessoas() {
    try {
        const response = await fetch('http://localhost:3000/api/pessoas');
        const pessoas = await response.json();
        const lista = document.getElementById('listaPessoas');
        lista.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

        pessoas.forEach(pessoa => {
            const li = document.createElement('li');
            li.textContent = `${pessoa.nome} - ${pessoa.cpf} - ${pessoa.telefone}`;
            lista.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao carregar pessoas:', error);
    }
}

// Carrega a lista de pessoas ao iniciar
carregarPessoas();
