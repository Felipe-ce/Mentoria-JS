export default function initImparPar() {
  // Array com imputs
  const numero1 = document.querySelector('#numero1')
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')
  
  // função para somar 
  function imparPar() {
    const num1 = Number(numero1.value)
    const restoDivisao = (num1 % 2)

    //Operador ternario
    restoDivisao === 0 ? result.innerHTML =  `<p> Numero Par </p>` : result.innerHTML =  `<p> Numero Impar </p>`
  }
  
  // evento de click
  btn.addEventListener('click', imparPar)
}
