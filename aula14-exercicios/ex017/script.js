function Gerar() {
    let num = document.querySelector('#inum')
    let res = document.querySelector('#ires')
    if (num.value.length == '') {
        alert('[ERRO] É necessário digitar um número para gerar a tabuada!')
    } else {
        let c = 1
        let n = Number(num.value)
        let tab = 0
        res.innerHTML = ''
        for (c = 1 ; c <= 10; c++) {
            let tab = n * c
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${tab}`
            item.value =`res${c}`
            res.appendChild(item)
        }
    }
}