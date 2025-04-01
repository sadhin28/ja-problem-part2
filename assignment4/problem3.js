
function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for(let i of name){
        if(i>='0'&& i<='9'){
            return true;
        }
    }
    return false;
  
}


console.log(checkDigitsInName(54484))