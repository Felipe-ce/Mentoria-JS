export default function initrepeticao() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  function gerarRepeticao() {
    //Prevenir que duplique a lista ao aperta o botão
    result.innerHTML = '<p></p>'
    let contador = 1
    while (contador <= 5) {
      result.innerHTML += '<p>Teste</p>'
      contador++
    }
  }
  
  // evento de click
  btn.addEventListener('click', gerarRepeticao)
}
