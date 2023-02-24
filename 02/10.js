function febre(array){
    let tam = array.length;
    let result = []
    for(let i=0; i<tam; i++){
        if(array[i]>=41){
            result.push("Hipertermia")
        }else if(array[i]>=39.6 && array[i]<41){
            result.push("Febre Alta")
        }else if(array[i]>=37.8 && array[i]<39.6){
            result.push("Febre")
        }else if(array[i]>=35.1 && array[i]<37.7){
            result.push("Normal")
        }else if(array[i]<=35){
            result.push("Hipotermia")
        }
    }

    return result;
}
console.log(febre([ 43.41, 42.05, 43.66, 43.76, 37.45, 39.25, 36.43, 43.64, 41.53, 43.91 ]));
console.log(febre([ 37.59, 36.03, 40.05, 41.91, 43.2, 42.1, 38.57, 34.44, 40.57, 41.05 ]));
console.log(febre([ 34.28, 35.99, 40.4, 37.56, 42.63, 42.56, 34.48, 39.73, 33.55, 34.04 ]));
console.log(febre([ 35.84, 36.87, 36.78, 35.94, 39.53, 34.64, 41.32, 39.74, 36.22, 42.76 ]));
console.log(febre([ 35.41, 33.12, 41.06, 38.9, 40.22 ]));