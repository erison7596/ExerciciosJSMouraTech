function media_idade(array) {
    let media = 0;
    for (let i = 0; i < array.length; i++) {
        let [dia, mes, ano] = array[i].nascimento.split("/");
        let aniversario = new Date(ano, mes-1, dia);
        let hj = new Date();
        let idade = hj.getFullYear() - aniversario.getFullYear();
        let diferencaMes = hj.getMonth() - aniversario.getMonth();
        if (diferencaMes < 0 || (diferencaMes == 0 && hj.getDate() < aniversario.getDate())) {
            idade--;
        }
        media += idade;
    }

    return Math.floor(media / array.length);
}
const al = require('./alunos_fake.json')
const al2 = require('./alunos_fake3.json')
const al3 = require('./alunos_fake2.json')
 console.log(media_idade(al));
// console.log(media_idade(al2));
// console.log(media_idade(al3));