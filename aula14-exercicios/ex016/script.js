function Contar() {
    let ini = document.getElementById('inicio') 
    let fim = document.getElementById('ifim')
    let passo = document.querySelector('#ipasso') 
    let res = document.querySelector('#res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<strong>Impossível contar</strong>'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = '<strong>Contando...</strong></br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c+=p) {
            res.innerHTML += `${c} \u{1F449}`
            }
        } else if (i > f){
            //contagem regressiva
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}