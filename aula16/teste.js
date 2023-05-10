function ParImpar(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = ParImpar(8)
console.log(`O número digitado é ${res}`);