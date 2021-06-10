export default function initrepeticao() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  function gerarRepeticao() {
    //Prevenir que duplique a lista ao aperta o botão
    result.innerHTML = ''
    const contador = [1,2,3,4,5]
    contador.forEach((item) =>{
      result.innerHTML += `<p> Repetição ${item}</p>`
    })
  }
  
  // evento de click
  btn.addEventListener('click', gerarRepeticao)
}
