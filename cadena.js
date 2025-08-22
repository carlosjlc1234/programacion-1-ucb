function ContarVocales(texto){
    var contarVocales = 0;
    palabra.split('').forEach(element => {    
        if("aeiouAEIOU".includes(element)){
            contarVocales++;
        }
    });
    return contarVocales;
}

function ContarPalabras(texto){
    if(texto.trim() === "") return 0; // Evitar contar vacío
    var contar = 0;
    texto.trim().split(/\s+/).forEach(() => {
        contar++;    
    });
    return contar;
}

function ContarCaracteres(texto){
    return texto.length;
}
