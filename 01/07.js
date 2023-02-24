function imc(n, m){
    let x;
    x = m/(n*n);
    console.log(x);
    if(x<18.5){
        return "Baixo peso";
    }else if(x>=18.5 && x<25){
        return "Peso normal";
    }else if(x>=25 && x<30){
        return "Excesso de peso";
    }else if(x>=30 && x<35){
        return "Obesidade";
    }else if(x>=35){
        return "Obesidade extrema";
    }
}