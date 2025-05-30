const botao = document.getElementById('botao')
var upgrade1 = document.getElementById('upgrade1')
var upgrade2 = document.getElementById('upgrade2')
var upgrade3 = document.getElementById('upgrade3')
var pontostela = document.getElementById('pontos')
var salvar = document.getElementById('salvar')
var pontos = 0
var autoClicker = false;

// Contador de pontos
botao.addEventListener('click', function() {
    pontos++;
    pontostela.innerHTML = `Pontos: ${pontos}`;
    })

//Carregar pontos do localStorage
window.addEventListener('load', function() {
    const pontosSalvos = localStorage.getItem('pontos');
    if (pontosSalvos) {
        pontos = parseInt(pontosSalvos, 10);
        autoClicker = localStorage.getItem('autoClicker') === 'true';
        if (autoClicker) {
            iniciarAutoClicker();
        }
        pontostela.innerHTML = `Pontos: ${pontos}`;
    }
});

// Função para salvar os pontos no localStorage
salvar.addEventListener('click', function() {
    if (pontos > 0); {
        localStorage.setItem('pontos', pontos);
        localStorage.setItem('autoClicker', autoClicker);
        alert(`Jogo salvo com sucesso!`);
    }
})

upgrade1.addEventListener('click', function() {
    if (pontos >= 10) {
        pontos -= 10;
        autoClicker = true;
        iniciarAutoClicker();
        pontostela.innerHTML = `Pontos: ${pontos}`;
        alert('Auto Clicker comprado!');
    } else {
        alert('Pontos insuficientes para o Auto Clicker.');
    }
});

function iniciarAutoClicker() {
    if (autoClicker) {
        setInterval(function() {
            pontos = pontos + 0.1;
            pontostela.innerHTML = `Pontos: ${pontos.toFixed(1)}`;
        }, 1000); // Incrementa 1 ponto a cada segundo
    }
};