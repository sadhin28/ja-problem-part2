function number(num1,num2){
   sum=0;
    for(let i of arguments){
        if(i === 17){
            break;
        }
        console.log(i)
        sum=sum+i;
        
    }
    console.log("sum of Number: ", sum)
}
number(12,13,14,15,16,17,18,19)