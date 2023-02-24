const al = require('./alunos_fake.json')

function ordenar_nascimento(array){
    return array.sort( (a,b) => a.nascimento.split("/")[2] - b.nascimento.split("/")[2] || a.nascimento.split("/")[1] - b.nascimento.split("/")[1] || a.nascimento.split("/")[0] - b.nascimento.split("/")[0]);
}

console.log(ordenar_nascimento(al));