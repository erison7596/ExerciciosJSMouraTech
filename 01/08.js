function preco_final(n,m){
    if(m==1){
        return (n*0.85).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }else if(m==2){
        return (n*0.9).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    else if(m==3){
        return (n*0.95).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    else{
        return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}
console.log(preco_final(100,4));