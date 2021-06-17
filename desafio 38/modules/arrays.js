export default function initArray() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')

  const deuses = ['Aegir', 'Aud', 'Balder']
  
  function array() {
    result.innerHTML += `<p>Os Deuses são:</p>`
    deuses.forEach((deus)=>{
      result.innerHTML += `<h2>${deus}</h2>`
    })
  }
  // evento de click
  btn.addEventListener('click', array)
}