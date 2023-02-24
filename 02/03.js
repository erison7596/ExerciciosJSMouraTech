function intervalo(n1, n2) {
    let array = [];
    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            array.push(i);
        }
        return array;
    }
    else {
        for (let i = n1; i >= n2; i--) {
            array.push(i);
        }
        return array;
    }
    
}