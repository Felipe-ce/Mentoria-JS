export default function initOlaMundo() {
  function olamundo() {
    window.alert('Olá Mundo')
  }
  
  const btn = document.querySelector('#btn')
  btn.addEventListener('click', olamundo)
}