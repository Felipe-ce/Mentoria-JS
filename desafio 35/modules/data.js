export default function initData() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')

  
  
  function data() {
    const dataAtual = new Date()


    const dia = dataAtual.getDate()
    const mes = dataAtual.getMonth() + 1/*adicionando mais 1 pois começa em  zero*/
    const ano = dataAtual.getFullYear()

    result.innerHTML = `Data Atual: <h2> ${dia}/${mes}/${ano} </h2>`

  }
  // evento de click
  btn.addEventListener('click', data)
}