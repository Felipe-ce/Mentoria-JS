export default function initDesconto() {
  // dados
  const numero1 = document.querySelector('#numero1')
  // const numero2 = document.querySelector('#numero2')
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  
  // função para desconto 
  function desconto() {
    const num1 = Number(numero1.value)
    // const num2 = Number(numero2.value)

  ( VTOTALLIQUIDO * DESCONTO1 ) / 100 
    return result.innerHTML = ((num1 * 5) / 100)
  }
  
  // evento de click
  btn.addEventListener('click', desconto)
}
