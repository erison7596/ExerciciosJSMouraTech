const al = require('./alunos_fake.json')

function mudar_email(array){
    for(let i = 0; i < array.length; i++){
        array[i].email = array[i].email.replace("@discente.ifpe.edu.br", "@gmail.com");
    }
    return array;
}
console.log(mudar_email(al));