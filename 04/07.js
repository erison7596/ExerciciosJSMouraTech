function cifraCesar(s){
    let result = "";
    for(let i = 0; i < s.length; i++){
        if(s[i] == " "){
            result += "#";
        }else{
            result += String.fromCharCode(s[i].charCodeAt(0) + 3);
        }
    }
    return result;
}

console.log(cifraCesar("Foco e Simplicidade"));