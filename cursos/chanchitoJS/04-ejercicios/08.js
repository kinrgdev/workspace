let array = [{
    id: 1,
    name: 'Goku',
}, {
    id: 2,
    name: 'Vegeta',
}, {
    id: 3,
    name: 'C18',
}];

let pares = [
    [1, { id: 1, name: 'Goku'}],
    [2, { id: 2, name: 'Vegeta'}],
    [3, { id: 3, name: 'C18'}],
];

function toPairs(arr) {
    let pairs = []
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);