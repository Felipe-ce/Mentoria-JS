export default function initData() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')

  
  
  function data() {
    const dataAtual = new Date()

    const mes = dataAtual.getMonth() + 2/*adicionando mais 2 pois começa em  zero, e adiocionando mais 1 para saber o proximo mês*/


    result.innerHTML = `Proximo mês sera: <h2>${mes}</h2>`

  }
  // evento de click
  btn.addEventListener('click', data)
}