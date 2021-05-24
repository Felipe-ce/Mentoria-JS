export default function initSomar() {

}
const btn = document.querySelector('#btn')
const numero = Number(document.querySelector('input').value)
const result = document.querySelector('#result')

function somar() {
  console.log(numero)
  console.log('teste')
}

btn.addEventListener('click', somar)