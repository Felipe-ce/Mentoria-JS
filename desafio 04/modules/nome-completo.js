export default function initNomeCompleto() {
  // Pegar dados
  const nomeInput = document.querySelector('#nome')
  const sobreNomeInput = document.querySelector('#sobrenome')
  const btn = document.querySelector('#btn')

  function nomeCompleto() {
    // Verificar se algum campo esta vazio
    if(nomeInput.value.length == 0 || sobreNomeInput.value.length == 0){
      alert(`[ERRO!] Verifique os dados`)
    }else{
      const nome = nomeInput.value
      const sobreNome = sobreNomeInput.value
      alert(`Nome Completo: ${nome} ${sobreNome}`)

      //limpar os input's
      nomeInput.value = ''
      sobreNomeInput.value = ''
      // voltar para o primeiro input
      nomeInput.focus()
    }
  }

  btn.addEventListener('click', nomeCompleto) 
}