export default function initrepeticao() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  // função para verificar se é maior de idade
  function gerarRepeticao() {
    return result.innerHTML =  `<p>Repetição</p>`
  }
  
  // evento de click
  btn.addEventListener('click', gerarRepeticao)
}
