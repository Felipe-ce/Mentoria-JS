export default function initSomar() {
  // Array com imputs
  const numeros = document.querySelectorAll('#numero')
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  
  // função para somar 
  function somar() {
  let soma = 0
  numeros.forEach((item) =>{
    soma += Number(item.value)
  })
  return result.innerHTML = soma
  }
  
  // evento de click
  btn.addEventListener('click', somar)
}
