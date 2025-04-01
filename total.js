const products = [
    {name:'shampu', price:300,},
    {name:'Chiruni', price:100},
    {name:'shirt',price:700},
    {name:'pant',price:1200}
]

function getTotal(products){
    let sum=0;
    for(let pro of products){
        sum=sum+pro.price;
    }
    return sum;
}
console.log(getTotal(products));