export default function initTabuada() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  function gerarRepeticao() {
    //Prevenir que duplique a lista ao aperta o botão
    result.innerHTML = '<p></p>'

    // pegando o sinal e numero selecionado
    const selectSinal = document.querySelector("#sinal")
    const selectNumero = document.querySelector("#numero")

    // pegando o index do sinal para decidir onde entra no Swich case
    const sinal = +selectSinal.options[selectSinal.selectedIndex].index

    // pegando o texto do input para fazer o loop
    const numero = +selectNumero.options[selectNumero.selectedIndex].text
    const contador = [1,2,3,4,5,6,7,8,9,10]

    switch (sinal) {
      case 0:
        for (let multiplicador = 1; multiplicador <= contador.length; multiplicador++) {
          let total = numero + multiplicador
          result.innerHTML += `<p>${numero} + ${multiplicador} = ${total}</p>`
        }
        break;

      case 1:
        for (let multiplicador = 1; multiplicador <= contador.length; multiplicador++) {
          let total = numero * multiplicador
          result.innerHTML += `<p> ${multiplicador} * ${numero} = ${total}</p>`
        }
        break

      case 2:
        // Implementar Divisão
        break

      case 3:
        // Implementar Subtração
        break
    
      default:
        break;
    }
  }
  // evento de click
  btn.addEventListener('click', gerarRepeticao)
}