const al = require('./alunos_fake.json')

function estatistica_naturalidade(array){
    let obj = {};
    for(let i = 0; i < array.length; i++){
        let naturalidade = array[i].naturalidade;
        let existe = false;
        let cont = 0;
        for(let j = 0; j < array.length; j++){
            if(array[j].naturalidade == naturalidade){
                existe = true;
                cont++;
                obj[naturalidade] = cont;
            }
        }
        if(!existe){
            obj[naturalidade] = 1;
        }
    }
    
    return obj;
}

console.log(estatistica_naturalidade(al));