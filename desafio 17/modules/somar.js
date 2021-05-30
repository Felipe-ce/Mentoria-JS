export default function initSomar() {
  // Array com imputs
  const numero1 = document.querySelector('#numero1')
  const numero2 = document.querySelector('#numero2')
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  
  // função para somar 
  function somar() {
    const num1 = Number(numero1.value)
    const num2 = Number(numero2.value)

    if (Number(numero1.value) === 0 || Number(numero2.value) ===0) {
      result.innerHTML = 0
    } else {
      const soma = (num1 + num2)
      result.innerHTML = soma
    }
  }
  
  // evento de click
  btn.addEventListener('click', somar)
}
