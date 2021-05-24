export default function initSomar() {
  // Pegar dados
const input1 = document.querySelector('#n1')
const input2 = document.querySelector('#n2')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')

function somar() {
  // Verificar se algum campo esta vazio
  if(input1.value.length == 0 || input2.value.length == 0){
    result.innerHTML = `<p>[ERRO!] Verifique os dados</p>`
  }else{
    // Passar numeros para inteiro
    const n1 = Number(parseInt(input1.value))
    const n2 = Number(parseInt(input2.value))
    // Somar os numeros
    const soma = n1 + n2
    result.innerHTML = `<p> A soma é: ${soma} </p>`

    //limpar os input's
    input1.value = ''
    input2.value = ''
    // voltar para o primeiro input
    input1.focus()
  }
}

btn.addEventListener('click', somar)
}