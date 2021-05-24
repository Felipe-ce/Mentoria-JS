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
    const n1 = Number(parseInt(input1.value))
    const n2 = Number(parseInt(input2.value))
    const soma = n1 + n2
    result.innerHTML = `A soma é: ${soma}`

  }
}

btn.addEventListener('click', somar)