const botao = document.getElementById('botao')
var pontostela = document.getElementById('pontos')
var salvar = document.getElementById('salvar')
var pontos = 0

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
        pontostela.innerHTML = `Pontos: ${pontos}`;
    }
});

// Função para salvar os pontos no localStorage
salvar.addEventListener('click', function() {
    if (pontos > 0) {
        localStorage.setItem('pontos', pontos);
        alert(`Pontos salvos: ${pontos}`);
    } else {
        alert('Nenhum ponto para salvar.');
    }
})

// 