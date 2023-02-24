function bhaskara(ax2,bx,c){
    let delta = (bx**2)-4*ax2*c;
    if(delta<0){
        return [];
    }else if(delta==0){
        return [-bx/(2*ax2)];
    }
    let x = (-bx+Math.sqrt(delta))/(2*ax2);
    let y = (-bx-Math.sqrt(delta))/(2*ax2);
    return [x,y];
}