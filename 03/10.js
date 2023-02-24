const al = require('./alunos_fake.json')

function pesquisar_nome(string, array){
    let nome = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let obj = [];
    let cont = 0;
    for(let i = 0; i < array.length; i++){
        let nome_aluno = array[i].nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
        if(nome_aluno.includes(nome)){
            obj.push(array[i]);
        }
    }
    return obj;
}

console.log(pesquisar_nome("JÉ", al));

// let a = "Alice Jéssica Giovanna Vieira";
// let b = a.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
// console.log(b);
