const al = require('./alunos_fake.json')

function semestres_entrada(array){
    let semest = [];
    let semestres_contados = [];
    for(let i = 0; i < array.length; i++){
        let semestre_entrada = array[i].matricula.substring(0, 5);
        if (semestres_contados.indexOf(semestre_entrada) === -1) {
            semestres_contados.push(semestre_entrada);
            let entrada_ano = semestre_entrada.substring(0, 4);
            let entrada_semestre = semestre_entrada[4];
            let semestre_entrada_formatado = entrada_ano + "." + entrada_semestre;
            let cont = 0;
            for(let j = i; j < array.length; j++){
                let semestre_entrada_paraTeste = array[j].matricula.substring(0, 5);
                if(semestre_entrada_paraTeste == semestre_entrada){
                    cont++;
                }
            }
            semest.push({semestre: semestre_entrada_formatado, quantidade: cont, percentual: ((cont / array.length) * 100).toFixed(2) + " %"})
        }
    }
    semest.sort((a, b) => a.semestre - b.semestre);
    return semest;
}
console.log(semestres_entrada(al));
