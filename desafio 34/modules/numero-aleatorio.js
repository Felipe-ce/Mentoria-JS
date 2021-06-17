export default function initNumeroAleatorio() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  const inputnumero = document.querySelector('#numero')
  
  
  function numeroAleatorio() {
    // Pegando o numero selecionado
    const numeroSelecionado = +inputnumero.options[inputnumero.selectedIndex].text
    // Definindo de 1 a 5
    const numeroAleatorio = Math.random() * (5 - 1) + 1
    const numeroaleatorioInteiro = +numeroAleatorio.toFixed()

    if (numeroSelecionado === numeroaleatorioInteiro) {
      result.innerHTML = `<p>Numero gerado ${numeroaleatorioInteiro}</p> <h2>Acertou!</h2>`
    } else {
      result.innerHTML = `<p>Numero gerado ${numeroaleatorioInteiro}</p> <h2>Mais sorte da proxima!</h2>`
    }
  }

  // evento de click
  btn.addEventListener('click', numeroAleatorio)
}