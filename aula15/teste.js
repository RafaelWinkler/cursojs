let num = [4, 5, 0, 7 , 8]
num.sort()
num.push(1)
console.log(num);
console.log(`O tamanho do meu vetor é ${num.length}`);
console.log(`O primeiro valor  na posição ${num[0]}`);
let pos = num.indexOf(11)
if (pos == -1) {
    console.log(`Esse valor não foi encontrado!`)
} else {
    console.log(`O valor 3 etsa na posição ${pos}`)
}

