const amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;
    }
    
    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    document.getElementById("resultado").innerHTML = `O amigo sorteado foi: <strong>${sorteado}</strong>`;
    
    resetarJogo();
}

function resetarJogo() {
    amigos.length = 0;
    document.getElementById("listaAmigos").innerHTML = "";
}
