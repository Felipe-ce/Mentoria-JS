export default function initContadorNumeroPar() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  function gerarRepeticao() {
    //Prevenir que duplique a lista ao aperta o botão
    result.innerHTML = '<p></p>'
    for (let i = 2; i <= 20; i+=2) {
      result.innerHTML += `<p>Numero ${i}</p>`
      console.log(i)
    }
  }
  // evento de click
  btn.addEventListener('click', gerarRepeticao)
}