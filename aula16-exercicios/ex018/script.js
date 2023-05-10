let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res= document.querySelector('#res')
let valores = []

function inNumero (n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if (inNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido, ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function Finalizar() {
    if (valores.length == '') {
        alert('Adicione um valor antes de finalizar!') 
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} valores cadastrados. </p></br>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p></br>` 
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p></br>`
        res.innerHTML += `<p>Somando todos os valores, o total é ${soma}.</p></br>`
        res.innerHTML += `<p>A média entre os valores é ${media}.</p></br>`
    }
}