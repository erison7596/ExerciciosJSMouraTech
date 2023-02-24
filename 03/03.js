function email(array){
    let ema = "";
    for(let i = 0; i < array.length; i++){
        if(i == array.length - 1){
            ema += array[i].email;
        }else{
            ema += array[i].email + ";";
        }
    }
    return ema;
}

