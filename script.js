const botao = document.getElementById('botao')
var upgrade1 = document.getElementById('upgrade1')
var upgrade2 = document.getElementById('upgrade2')
var upgrade3 = document.getElementById('upgrade3')
var pontostela = document.getElementById('pontos')
var salvar = document.getElementById('salvar')
var limpar = document.getElementById('limpar')
// Variáveis para o jogo
var pontos = 0
var autoClicker = false;
var quantia_upgrade1 = 0;
var limpou = false;
// Variáveis para upgrades

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
        localStorage.setItem('quantia_upgrade1', quantia_upgrade1);
        // Salvar outros upgrades aqui, se necessário
        alert(`Jogo salvo com sucesso!`);
    }
})

function limparDados() {
    // Limpar os dados do localStorage e reiniciar as variáveis
    localStorage.removeItem('pontos');
    localStorage.removeItem('autoClicker');
    localStorage.removeItem('quantia_upgrade1');
    // Remover outros upgrades aqui, se necessário
    pontos = 0;
    autoClicker = false;
    quantia_upgrade1 = 0;
    pontostela.innerHTML = `Pontos: ${pontos}`;
    alert('Dados limpos com sucesso!');
    }


// Função limpar os dados salvos (localStorage)
limpar.addEventListener('click', function() {
    if (confirm('Você tem certeza que deseja limpar os dados?')) {
        limparDados();
    }
});


upgrade1.addEventListener('click', function() {
    if (pontos >= 10) {
        pontos -= 10;
        autoClicker = true;
        iniciarAutoClicker();
        quantia_upgrade1++;
        pontostela.innerHTML = `Pontos: ${pontos}`;
        upgrade1.innerHTML = `Upgrade 1 (Quantidade: ${quantia_upgrade1}) - Custo: 10 Pontos`;
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
        }, 1000);
        if (quantia_upgrade1 > 1) {
            setInterval(function() {
                pontos += quantia_upgrade1 * 0.1; // Aumenta a quantidade de pontos por segundo com base no upgrade
                pontostela.innerHTML = `Pontos: ${pontos.toFixed(1)}`;
            }, 1000);
        } // Incrementa 1 ponto a cada segundo
    }
};