export default function initLampada() {
  // Pegar dados
  const lampada = document.querySelector('[data-img="lampada"]')
  function acenderLampda() {
    lampada.setAttribute('src', 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg')
    }
    lampada.addEventListener('mouseover', acenderLampda) 
}