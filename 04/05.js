function saque(n){
    let valor = n;
    let n100 = 0;
    let n50 = 0;
    let n20 = 0;
    let n10 = 0;
    let n5 = 0;
    if (valor == 0){
        return {};
    }
    while(valor >= 0){
        if(valor >= 100){
            n100++;
            valor -= 100;
        }
        else if(valor >= 50){
            n50++;
            valor -= 50;
        }
        else if(valor >= 20){
            n20++;
            valor -= 20;
        }
        else if(valor >= 10){
            n10++;
            valor -= 10;
        }
        else if(valor >= 5){
            n5++;
            valor -= 5;
        }
        else if(valor < 5 && valor > 0){
            return {};
        }
        else if(valor == 0){
            return{'R$100': n100, 'R$50': n50, 'R$20': n20, 'R$10': n10, 'R$5': n5};
        }
    }
}
console.log(saque(1290)); // { 'R$100': 12, 'R$50': 1, 'R$20': 2, 'R$10': 0, 'R$5': 0 }
