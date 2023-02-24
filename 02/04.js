function agrupamento(array){
    let tam = array.length;
    let ate25 = 0;
    let ate50 = 0;
    let ate75 = 0;
    let ate100 = 0;
    for (let i=0; i<tam; i++){
        if(array[i] >=0 && array[i] <= 25){
            ate25++;
        }
        else if(array[i]>25 && array[i] <= 50){
            ate50++;
        }
        else if(array[i]>50 && array[i] <= 75){
            ate75++;
        }
        else if(array[i]>75 && array[i] <= 100){
            ate100++;
        }
    }
    return [ate25, ate50, ate75, ate100];
}