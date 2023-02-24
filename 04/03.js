function palindromo(string){
    let palavra = string.toLowerCase();
    let tam = palavra.length;
    let palavraInvertida = "";
    palavraInvertidaNormal = "";
    let obj = []
    for(let i=tam-1; i>=0; i--){
        palavraInvertida += palavra[i];
        palavraInvertidaNormal += string[i];
    }
    if(palavra == palavraInvertida){
        return{"palindromo": true, "palavra": palavraInvertidaNormal}
    }else{
        return{"palindromo": false, "palavra": palavraInvertidaNormal}
        //obj.push({"palindromo": false, "palavra": palavraInvertidaNormal})
    }
    return obj;
}

console.log(palindromo("Ana"));