export default function initNumeroAleatorio() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  function numeroAleatorio() {
    // Definindo de 0 a 10
    const numeroAleatorio = Math.random() * (1000 - 0) + 0

    result.innerHTML = numeroAleatorio.toFixed()/*Arredondando numero para inteiro*/
  }

  // evento de click
  btn.addEventListener('click', numeroAleatorio)
}