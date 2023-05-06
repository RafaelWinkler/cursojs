function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        imagem.src = '../imagens/manha-p.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        imagem.src = '../imagens/tarde-p.png'
    } else {
        //Boa Noite
        imagem.src = '../imagens/noite-p.png'
    }
}