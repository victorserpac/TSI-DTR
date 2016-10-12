function media(){
    var media = 0;
    var length = arguments.length;

    for (var i=0; i < length; i++) {
        media += arguments[i];
    }

    return media/length;
}

console.log(media(1, 2, 3));
console.log(media(6, 6));
console.log(media(10, 10, 0));
console.log(media(10, 10));
console.log(media(10, 5, 9, 8, 6, 4));
