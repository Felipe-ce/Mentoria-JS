export default function initverificarDota() {
  // dados
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  function verificarDota() {
    //Prevenir que duplique a lista ao aperta o botão
    result.innerHTML = '<p></p>'

    // pegando o sinal e numero selecionado
    const selectNumero = document.querySelector("#numero")
    // pegando o index do input para decidir o switch
    const numero = +selectNumero.options[selectNumero.selectedIndex].index
    const texto = selectNumero.options[selectNumero.selectedIndex].text

    switch (numero) {
      case 0:

        if (texto.indexOf('Dota') > -1 /*esse -1 é para retornar true ou false*/) {
          result.innerHTML += `<p>Verdadeiro</p>`
        }
        break;

      case 1:
        if (texto.indexOf('Lol') > -1) {
          result.innerHTML += `<p>Falso</p>`
        }
        break

    
      default:
        break;
    }
  }
  // evento de click
  btn.addEventListener('click', verificarDota)
}