/** Functions
* ------------------------------------------ */

function restrict(o, p) {
    for (var variable in o) {
        if (!p.hasOwnProperty(variable)) {
            delete o[variable];
        }
    }

    return o;
}

function substract(o, p) {
    for (var variable in o) {
        if (p.hasOwnProperty(variable)) {
            delete o[variable];
        }
    }

    return o;
}

function union(o, p) {
    var obj = {};

    for (var variable in o) {
        obj[variable] = o[variable];
    }

    for (var variable in p) {
        if (!obj.hasOwnProperty(variable)) {
            obj[variable] = p[variable];
        }
    }

    return obj;
}

function intersection(o, p) {
    var obj = {};
    for (var variable in o) {
        obj[variable] = o[variable];
    }

    for (var variable in o) {
        if (!p.hasOwnProperty(variable)) {
            delete obj[variable];
        }
    }

    return obj;
}

function keys(o) {
    return Object.keys(o);
}



/** Examples
* ------------------------------------------ */


var pessoa = {
    nome: 'Victor',
    sobrenome: 'Serpa do Carmo',
    idade: 21,
}

var pessoa2 = {
    nome: 'Milene',
    sobrenome: 'Vieira Lacerda',
    idade: 19,
    veiculo: 'HB 20',
}




console.log(restrict(pessoa2, pessoa));
console.log(substract(pessoa2, pessoa));
console.log(union(pessoa, pessoa2));
console.log(intersection(pessoa2, pessoa));
console.log(keys(pessoa2));
