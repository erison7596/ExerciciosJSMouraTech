function media_ponderada(n,m){
    let media;
    media = ((n*4)+(m*6))/10;

    if(media>=90){
        return "A";
    }
    else if(media>=75 && media<90){
        return "B";
    }
    else if(media>=60 && media<75){
        return "C";
    }
    else if(media>=40 && media<60){
        return "D";
    }else{
        return "E";
    }
}
console.log(media_ponderada(30,20));