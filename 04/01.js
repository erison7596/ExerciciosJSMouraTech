function cambio(array){
    let obj = [];
    for(let i = 0; i < array.length; i++){
        let valor = array[i];
        let valor_real = valor*5.042;
        valor_real = valor_real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        obj.push(valor_real);
    }
    return obj;
}

console.log(cambio( [ 100, 50, 199.90, 32, 999.90 ]));