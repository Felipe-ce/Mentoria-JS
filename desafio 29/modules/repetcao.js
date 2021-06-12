export default function initrepeticao() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  function gerarRepeticao() {
    //Prevenir que duplique a lista ao aperta o botão
    result.innerHTML = '<p></p>'
    for (let i = 1; i <= 10; i++) {
      result.innerHTML += `<p>Contador: ${i}</p>`
    }
  }
  // evento de click
  btn.addEventListener('click', gerarRepeticao)
}
