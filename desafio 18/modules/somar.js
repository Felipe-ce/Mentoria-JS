export default function initSomar() {

  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  
  // função para somar 
  function restoDivisao() {
    // (18) Exiba o 'resto' da seguinte divisão: (5 / 2)
    const restoDivisao = 50 % 11
    return result.innerHTML = restoDivisao
  }
  
  // evento de click
  btn.addEventListener('click', restoDivisao)
}

