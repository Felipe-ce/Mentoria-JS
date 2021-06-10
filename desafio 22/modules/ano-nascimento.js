export default function initAnoNascimento() {
  // dados
  const inputAnoNascimento = document.querySelector('#anonascimento')
  const result = document.querySelector('#result')
  const btn = document.querySelector('#btn')


  // função para verificar se é maior de idade
  function maiorDeIdade() {
    const anoNascimento = +inputAnoNascimento.value
    
    // Data Atual
    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()
    
    // Verificar se ano é valido
    if (anoNascimento > anoAtual) {
      return alert `ERRO: Ano de nascimento maior que ano atual`
    } else {
      //condition ? expr1 : expr2 
      anoAtual - anoNascimento >= 18 ? result.innerHTML="Maior de idade" : result.innerHTML="Menor de idade" 
    }
  }
  
  // evento de click
  btn.addEventListener('click', maiorDeIdade)
}
