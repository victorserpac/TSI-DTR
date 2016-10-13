function areaQuadrado(lado) {
    return lado*lado;
}

function areaCirculo(raio) {
    return Math.PI*Math.pow(raio, 2);
}

function areaRetangulo(base, altura) {
    return base*altura;
}


console.log('Áreas');
console.log('Quadrado: ' + areaQuadrado(2));
console.log('Circulo: ' + areaCirculo(3));
console.log('Retangulo: ' + areaRetangulo(2, 3));
