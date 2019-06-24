function randomizar_inteiro(maximo, minimo){
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
};

function randomizar_palavra(maximo, minimo){
    let texto = "";
    let letras = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "r", "t", "u", "v", "x", "y", "w", "z"
    ];
    for(let i = minimo; i < maximo; i++){
        texto += randomizar_lista(letras, randomizar_inteiro(1, 0));
    }
    return texto;
};


function randomizar_lista(lista, tamanho){
    if(tamanho == 0){
        return lista[Math.floor(Math.random() * lista.length)].toLowerCase();
    }
    else if(tamanho == 1){
        return lista[Math.floor(Math.random() * lista.length)].toUpperCase();
    }
    else{
        return lista[Math.floor(Math.random() * lista.length)];
    }
};