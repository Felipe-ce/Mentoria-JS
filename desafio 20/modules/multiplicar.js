export default function initmultiplicar() {
  // dados
  const numero1 = document.querySelector('#numero1')
  const numero2 = document.querySelector('#numero2')
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  
  // função para multiplicar 
  function multiplicar() {
    const num1 = Number(numero1.value)
    const num2 = Number(numero2.value)

    return result.innerHTML = num1 * num2
  }
  
  // evento de click
  btn.addEventListener('click', multiplicar)
}
