export default function initContarCaractere() {
  // Pegar dados
  const nomeInput = document.querySelector('#nome')
  const btn = document.querySelector('#btn')

  function contarCaractere() {
    // Verificar se algum campo esta vazio
    if(nomeInput.value.length == 0){
      alert(`[ERRO!] Verifique os dados`)
    }else{
      const nome = nomeInput.value
      const totalCaractere = nome.length
      alert(`A palavra contem: ${totalCaractere}`)

      //limpar os input's
      nomeInput.value = ''
      // voltar para o primeiro input
      nomeInput.focus()
    }
  }
  btn.addEventListener('click', contarCaractere) 
}