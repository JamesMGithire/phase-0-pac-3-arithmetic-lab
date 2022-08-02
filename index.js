function add(a, b){
    parseInt(a,10);
    parseInt(b,10);
    return(a += b);
}

function subtract(a, b){
    parseInt(a,10);
    parseInt(b,10);
    return(a -= b);
}

function multiply(a, b){
    parseInt(a,10);
    parseInt(b,10);
    return(a *= b);
}

function divide(a, b){
    parseInt(a,10);
    parseInt(b,10);
    return(a /= b);
}

function increment(n){
    return(++n);
}

function decrement(n){
    return(--n);
}

function makeInt(n){
    n=`${n}`;
    let k=parseInt(n,10);
    return(k);
}

function preserveDecimal(n){
    return(parseFloat(n));
}