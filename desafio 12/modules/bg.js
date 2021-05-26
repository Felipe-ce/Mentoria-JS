export default function initBg() {
}

// Pegar Dados
const result = document.querySelector('#result')
const btnVerde = document.querySelector('#btn-verde')
const btnVermelho = document.querySelector('#btn-vermelho')

// função bg Verde 
function bgVerde() {
  result.classList.remove('vermelho')
  result.classList.add('verde')
}
// função bg Vermelho 
function bgVermelho() {
  result.classList.remove('verde')
  result.classList.add('vermelho')
}

// evento de click
btnVerde.addEventListener('click', bgVerde)
btnVermelho.addEventListener('click', bgVermelho)