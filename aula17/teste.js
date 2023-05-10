let amigo = {nome: 'josé',
    sexo: 'M',
    peso: 90,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso+= p
    }
}
amigo.engordar(7)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`);