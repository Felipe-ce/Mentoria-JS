export default function initLampada() {
  // Pegar dados
  const lampada = document.querySelector('[data-img="lampada"]')
  function apagarLampda() {
    lampada.setAttribute('src', 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada.jpg')
    }
    lampada.addEventListener('mouseout', apagarLampda) 
}