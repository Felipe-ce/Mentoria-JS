export default function initArray() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')

  const deuses = ['Aegir', 'Aud', 'Balder']
  
  function array() {
    result.innerHTML = `O Array tem comprimento de: ${deuses.length}`

  }
  // evento de click
  btn.addEventListener('click', array)
}