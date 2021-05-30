export default function initOnload() {
  
}
const btn = document.querySelector('[data-button="btn"]')
const result = document.querySelector('#result')

function onload() {
  result.innerHTML = '<p>Esse texto foi inserido pelo JavaScript</p>'
}


btn.addEventListener('click', onload)