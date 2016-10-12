var Pessoa = {
    primeiroNome: 'Victor',
    ultimoNome: 'do Carmo',
    altura: 165,
    peso: 58,
    sexo: 'M',
};

Pessoa.nomeCompleto = function() {
    return this.primeiroNome + ' ' + this.ultimoNome;
}

Pessoa.imc = function() {
    var altura = this.altura/100;
    var imc = this.peso/Math.pow(altura, 2);
    var indexes = IMC.indexes[this.sexo];

    for (var i in indexes) {
        for (var j in indexes[i]) {
            if (imc > j && imc <= indexes[i][j]) {
                return IMC.conditions[i];
            } else {
                if (indexes[i][j] == 0) {
                    return IMC.conditions[i];
                }
            }
        }
    }
}

var IMC = {
    conditions: [
        'abaixo do peso',
        'no peso normal',
        'marginalmente acima do peso',
        'acima do peso ideal',
        'obeso',
    ],
    indexes: {
        'F': [
            {0: 19.1},
            {19.1: 25.8},
            {25.8: 27.3},
            {27.3: 32.3},
            {32.3: 0},
        ],
        'M': [
            {0: 20.7},
            {20.7: 26.4},
            {26.4: 27.8},
            {27.8: 31.1},
            {31.1: 0},
        ],
    }
};

console.log(Pessoa.nomeCompleto());
console.log(Pessoa.imc());
