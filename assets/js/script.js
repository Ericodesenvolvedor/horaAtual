// PEGANDO ELEMENTOS NO HTML
const msg = window.document.getElementById ('msg')
const foto = window.document.getElementById ('foto')
const msgBottom = window.document.getElementById ('msgBottom')

// FUNÇÃO PARA DEIXAR O RELÓGIO NO AUTOMATICO SEM PRECISAR RECARREGAR PÁGINA
const relogio = setInterval(function time() {
    let pegarhora = new Date()
    let hora = pegarhora.getHours()
    let minutos = pegarhora.getMinutes()

    // CONFIGURAÇÃO PARA COLOCAR O NÚMERO '0' NA FRENTE QUANDO FOR < 10 
    msg.innerText = `Agora são ${String(hora).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`

    //TROCA DE IMAGENS CONFORME O HORÁRIO FORNECIDADO
    if (hora >= 6 && hora < 12) {
        foto.src = 'assets/imagens/dia.jpg'
        msgBottom.innerText = 'Status: dia'
    } 

    else if (hora < 18) {
        foto.src = 'assets/imagens/tarde.jpg'
        msgBottom.innerText = 'Status: tarde'
    } 
    
    else if (hora >= 18) {
        foto.src = 'assets/imagens/noite.jpg'
        msgBottom.innerText = 'Status: noite'
        document.body.style.background = '#011934'
    }
})