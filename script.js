function reflesh() {

    var msg = window.document.getElementById ('msg')
    var foto = window.document.getElementById ('foto')
    var msgBottom = window.document.getElementById ('msgBottom')

    var pegarhora = new Date()
    var hora = pegarhora.getHours()
    var minutos = pegarhora.getMinutes()

    //configuração para solucionar o problema de minutos '14:5' para deixar com o zero na frente '14:05'.

    if (minutos < 10) {
        msg.innerText = ('Hora atual ' + hora + ':' + '0' + minutos)
    }

    else {
        msg.innerText = ('Hora atual ' + hora + ':' + minutos)
    }

    //troca de imagens conforme horario

    if (hora >= 6 && hora < 12) {
        foto.src = 'imagens/dia.jpg'
        msgBottom.innerText = 'Status: dia'
    } 

    else if (hora < 18) {
        foto.src = 'imagens/tarde.jpg'
        msgBottom.innerText = 'Status: tarde'
    } 
    
    else if (hora >= 18) {
        foto.src = 'imagens/noite.jpg'
        msgBottom.innerText = 'Status: noite'
        document.body.style.background = '#011934'
    }

}



