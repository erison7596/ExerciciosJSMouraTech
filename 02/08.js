function fibonacci(n){
    let fib = "";
    let anterior = 0;
    let atual = 0;
    let proximo = 1;
    for(let i=0; i<n; i++){
        if(i != n-1){
            fib += atual + ", ";
        } else{
            fib += atual + "...";
        }
        atual = proximo;
        proximo = anterior + proximo;
        anterior = atual;
        
    }
    return fib;
}
console.log(fibonacci(3));