function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = '14'
        msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#f6e38c'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#c82601'
    } else {
        //Boa Noite
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#141821'
    }
}