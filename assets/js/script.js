// PEGANDO ELEMENTOS NO HTML
const msg = window.document.getElementById ('msg')
const foto = window.document.getElementById ('foto')
const msgBottom = window.document.getElementById ('msgBottom')

// FUNÇÃO PARA DEIXAR O RELÓGIO NO AUTOMATICO SEM PRECISAR RECARREGAR PÁGINA
const relogio = setInterval(function time() {
    let pegarHoraCompleta = new Date().toLocaleTimeString()
    let pegarHora = new Date().getHours()
    msg.innerText = pegarHoraCompleta

    //TROCA DE IMAGENS CONFORME O HORÁRIO FORNECIDO
    if (pegarHora >= 6 && pegarHora < 12) {
        foto.src = 'assets/imagens/dia.jpg'
        msgBottom.innerText = 'Status: dia'
    } 

    else if (pegarHora < 18) {
        foto.src = 'assets/imagens/tarde.jpg'
        msgBottom.innerText = 'Status: tarde'
    } 
    
    else if (pegarHora >= 18) {
        foto.src = 'assets/imagens/noite.jpg'
        msgBottom.innerText = 'Status: noite'
        document.body.style.background = '#011934'
    }
})