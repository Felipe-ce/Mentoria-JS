export default function initDesconto() {
  // dados
  const numero1 = document.querySelector('#numero1')
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  
  // função para desconto 
  function desconto() {
    const num1 = Number(numero1.value)
    const valorDesconto = ((num1 * 5) / 100)

    // Converter o valor em Real Brasileiro
    const valorDescontoReal = valorDesconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    return result.innerHTML = valorDescontoReal
  }
  
  // evento de click
  btn.addEventListener('click', desconto)
}
