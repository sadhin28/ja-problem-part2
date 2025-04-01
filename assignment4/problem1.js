
function calculateTax(income, expenses) {
    if(income<=0 || expenses <= 0 || expenses>income){
        return "Invalid Input"  
    }
    const CostDifferentiation=income-expenses;
    const tax= (CostDifferentiation * 20)/100
    return tax;
}
console.log(calculateTax(5000,1500))