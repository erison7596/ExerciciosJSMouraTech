function ipv4_bits(string){
    let array = string.split(".");
    let binario = 0;
    let bin = "";
    let part1 = array[0].toString(2);
    let part2 = array[1].toString(2);
    let part3 = array[2].toString(2);
    let part4 = array[3].toString(2);
    let array2 = ["0","0","0","0","0","0","0","0"];
    let cont = 7;
    //converter pra binario 
    while(part1>0){
        if(part1%2 == 0){
            array2[cont] = "0";
        }else{
            array2[cont] = "1";
        }
        part1 = Math.floor(part1/2);
        cont--;
    }
    bin += array2.join("");
    array2 = ["0","0","0","0","0","0","0","0"];
    cont = 7;
    while(part2>0){
        if(part2%2 == 0){
            array2[cont] = "0";
        }else{
            array2[cont] = "1";
        }
        part2 = Math.floor(part2/2);
        cont--;
    }
    bin += array2.join("");
    array2 = ["0","0","0","0","0","0","0","0"];
    cont = 7;
    while(part3>0){
        if(part3%2 == 0){
            array2[cont] = "0";
        }else{
            array2[cont] = "1";
        }
        part3 = Math.floor(part3/2);
        cont--;
    }
    bin += array2.join("");
    array2 = ["0","0","0","0","0","0","0","0"];
    cont = 7;
    while(part4>0){
        if(part4%2 == 0){
            array2[cont] = "0";
        }else{
            array2[cont] = "1";
        }
        part4 = Math.floor(part4/2);
        cont--;
    }
    bin += array2.join("");
    return bin;
}
console.log(ipv4_bits("172.16.0.254"));