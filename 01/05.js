function ordenar_3_numeros(n,m,o){
    if(n>m && n>o && m>o){
        return[n,m,o];
    }
    else if(n>m && n>o && m<o){
        return [n,o,m];
    }
    else if(n<m && n<o && m>o){
        return [m,o,n];
    }
    else if(n<m && n<o && m<o){
        return [o,m,n];
    }
    else if(n>m && n<o && m<o){
        return [o,n,m];
    }
    else if(n<m && n>o && m>o){
        return [m,n,o];
    }
}