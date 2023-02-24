function estatistica(n){

    let tam = n.length;
    let menor = n[0];
    let maior = 0;
    let media = 0;

    for(let i=0; i<tam; i++){
        if(n[i] < menor){
            menor = n[i];
        }
        if(n[i] > maior){
            maior = n[i];
        }
        media += n[i];
    }
    media = media/tam;
    return [maior, menor, media];
}
