function primo(n){
    let cont = 0;
    for(let i=1; i<=n; i++){
        if(n%i == 0){
            cont++;
        }
    }
    if(cont == 2){
        return true;
    } else{
        return false;
    }
}
console.log(primo(1));