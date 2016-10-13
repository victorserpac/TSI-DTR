var a = [
    123,
    423,
    1233
];
var b = [
    123,
    423,
    1233,
];

console.log(comparaVetores(a, b));

function comparaVetores(vet1, vet2) {
    var length = vet1.length;

    if (length != vet2.length) {
        return false;
    }

    for (var i=0; i < length; i++) {
        if (vet1[i] !== vet2[i]) {
            return false;
        }
    }

    return true;
}
