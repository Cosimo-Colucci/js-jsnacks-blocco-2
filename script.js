const array = []
let i = 0
while (array.length < 50) {
    const queryList = prompt("inserisci un numero");
    array.push(queryList)
    i++
}
console.log(array)