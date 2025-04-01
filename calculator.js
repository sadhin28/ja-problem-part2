function add (num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}
function modulas(num1,num2){
    return num1%num2;
}
function calculato(a,b, operation){
    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a,b);
        return result;
    }
    else if(operation === 'mul'){
        const result = mul(a,b);
        return result;
    }
    else if(operation === 'div'){
        const result = div(a,b);
        return result;
    }
    else if(operation === 'modulas'){
        const result = modulas(a,b);
        return result;
    }
    else{
        return "Only 'add', 'sub','mul','div ',modulas operation are allowed "
    }
}

console.log(calculato(7,5,'add'))
console.log(calculato(7,5,'sub'))
console.log(calculato(7,5,'div'))
console.log(calculato(7,5,'mul'))
console.log(calculato(7,5,'modulas'))