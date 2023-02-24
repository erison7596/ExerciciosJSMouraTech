function pa(n1,n2,n3){
    let string = "";

    for(let i =0; i<n3; i++){
        if(i != n3-1){
            string += n1 + ", ";
        }else{
            string += n1 + "...";
        }
        n1 += n2;

    }
    return string;
}
console.log(pa(4,3,5));
console.log(pa(100,-2,4));
console.log(pa(3,3,3));