
const dadosPorcos = [
    { dia: 'Segunda-feira', peso: '20 kg', imagem: 'porco-dia1.jpg' },
    { dia: 'Terça-feira', peso: '22 kg', imagem: 'porco-dia2.jpg' },
    { dia: 'Quarta-feira', peso: '25 kg', imagem: 'porco-dia3.jpg' },
    { dia: 'Quinta-feira', peso: '27 kg', imagem: 'porco-dia4.jpg' },
    { dia: 'Sexta-feira', peso: '30 kg', imagem: 'porco-dia5.jpg' }
];

let indiceAtual = 0; // Índice da imagem atual

// Função para carregar a imagem e os dados do porco atual
function carregarPorco() {
    const porcoImagesDiv = document.getElementById('porco-images');
    const diaAtualSpan = document.getElementById('dia-atual');
    const pesoAtualSpan = document.getElementById('peso-atual');

    const porcoAtual = dadosPorcos[indiceAtual];
    porcoImagesDiv.innerHTML = ''; // Limpa o conteúdo anterior

    const imgElement = document.createElement('img');
    imgElement.src = `imagens/${porcoAtual.imagem}`;
    imgElement.alt = 'Porco do Dia ' + porcoAtual.dia;
    porcoImagesDiv.appendChild(imgElement);

    diaAtualSpan.textContent = porcoAtual.dia;
    pesoAtualSpan.textContent = porcoAtual.peso;
}

// Função para navegar para o porco anterior
function anteriorPorco() {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = dadosPorcos.length - 1;
    }
    carregarPorco();
}

// Função para navegar para o próximo porco
function proximoPorco() {
    indiceAtual++;
    if (indiceAtual >= dadosPorcos.length) {
        indiceAtual = 0;
    }
    carregarPorco();
}

// Carrega o primeiro porco ao carregar o documento
document.addEventListener('DOMContentLoaded', function() {
    carregarPorco();
});

