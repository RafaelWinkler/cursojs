function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //Bebê
                img.setAttribute('src', 'imagens/bebe-menino.png')
            }else if (idade > 5 && idade < 10) {
                //Criança
                img.setAttribute('src','imagens/menino.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/moco.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 5){
                //Bebê
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade > 5 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','imagens/moca.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src','imagens/mulher.png')
            } else {
                //Idoso
                img.setAttribute('src','imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
} 