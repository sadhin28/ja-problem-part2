function multiply (num1, num2){
    if( typeof num1 !== 'number'|| typeof num2 !== 'number'  ){
        return 'Please Provide a number'
    }
    const mul = num1 * num2;
    return mul;
}
const result = multiply(5,5)
console.log(result);

function fullName(firstName, lastName){
    if(typeof firstName !== 'string' || typeof lastName !== 'string'){
        return 'Please provide a string'
    }
    const fullName= firstName + ' '+ lastName;
    return fullName

}
const full = fullName ('Taosif','Sadhin');
console.log(full)