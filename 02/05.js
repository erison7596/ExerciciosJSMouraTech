function fatorial(n){
    let fat = 1;
    let string = n+"! = ";
    for(let i=n; i>=1; i--){
        fat *= i;
        if(i != 1){
            string += i + " X ";
        } else{
            string += + i;
        }
            
    }
    string += " = " + fat;
    return string;
}