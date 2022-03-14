function reflesh() {

    var msg = window.document.getElementById ('msg')
    var foto = window.document.getElementById ('foto')
    var msgBottom = window.document.getElementById ('msgBottom')

    var pegarhora = new Date()
    var hora = pegarhora.getHours()
    var minutos = pegarhora.getMinutes()

    msg.innerText = ('Hora atual ' + hora + ':' + minutos)

    if (hora >= 6 && hora < 12) {
        foto.src = 'dia.jpg'
        msgBottom.innerText = 'Status: dia'
    } 

    else if (hora < 18) {
        foto.src = 'tarde.jpg'
        msgBottom.innerText = 'Status: tarde'
    } 
    
    else if (hora >= 18) {
        foto.src = 'noite.jpg'
        msgBottom.innerText = 'Status: noite'
        document.body.style.background = '#011934'
    }

}



