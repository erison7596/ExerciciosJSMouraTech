function volleyball(string){
    let vitoria = 0;
    let derrota = 0;
    let setVencidos = 0;
    let setPerdidos = 0;
    let palavra = string.split(",");
    console.log(palavra);
    for(let i=0; i<palavra.length; i++){
        let [casa,fora]= palavra[i].split("x");
        casa = parseInt(casa);
        fora = parseInt(fora);
        if(casa > fora){
            vitoria++;
            setVencidos += casa;
            setPerdidos += fora;
        }else{
            derrota++;
            setVencidos += casa;
            setPerdidos += fora;
        }
    }
    return [vitoria,derrota,setVencidos,setPerdidos];
    
}

console.log(volleyball("3x1,3x0,2x3,3x0,1x3,3x1"));