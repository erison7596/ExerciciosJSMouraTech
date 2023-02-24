function recruta(s){
    let valor = ["Norte", "Sul", "Leste", "Oeste"];
    let inicio = 360;
    for(let i = 0; i < s.length; i++){
        if(inicio == 360 && s[i]=="D"){
            inicio = 0;
        }
        if(inicio == 0 && s[i]=="E"){
            inicio = 360;
        }
        if(s[i]=="E"){
            inicio -= 90;
        }
        if(s[i]=="D"){
            inicio += 90;
        }
    }
    if(inicio == 360 || inicio == 0){
        return "Norte";
    }else if(inicio == 270){
        return "Oeste";
    }else if(inicio == 180){
        return "Sul";
    }else if(inicio == 90){
        return "Leste";
    }
}

console.log(recruta("EEED")); // Oeste
