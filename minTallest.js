const heights = [65,66,68,72,78,60]
function getMin(numbers){
    let min =  numbers[0];
    for(let number of numbers){
        if(number < min){
            min=number;
        }
    }
    return min;
}

const min = getMin(heights);
console.log('Min value is : ', min);