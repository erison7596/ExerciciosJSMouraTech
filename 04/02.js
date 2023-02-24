function rgbToHexa(n1, n2, n3){
    let r = n1.toString(16);
    let g = n2.toString(16);
    let b = n3.toString(16);
    if(r.length == 1){
        r = "0"+r;
    }
    if(g.length == 1){
        g = "0"+g;
    }
    if(b.length == 1){
        b = "0"+b;
    }
    return "#"+r+g+b;
}

console.log(rgbToHexa(50,175,104));