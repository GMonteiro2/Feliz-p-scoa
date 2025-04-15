const bunnyContainer = document.getElementById('bunny-container');

function createBunny() {
    const bunny = document.createElement('div');
    bunny.classList.add('bunny');

    // Define a posição aleatória para o coelho
    bunny.style.left = Math.random() * 100 + 'vw'; // Posição horizontal
    bunny.style.top = Math.random() * 100 + 'vh'; // Posição vertical

    // Adiciona o coelho ao contêiner
    bunnyContainer.appendChild(bunny);

    // Remove o coelho após um tempo
    setTimeout(() => {
        bunny.remove();
    }, 5000); // O coelho desaparece após 5 segundos
}

// Cria vários coelhinhos
for (let i = 0; i < 20; i++) { // Aumente o número de coelhinhos
    createBunny();
}