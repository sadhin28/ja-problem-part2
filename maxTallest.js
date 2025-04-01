const heights = [65,66,68,72,78,60]
function getMax(numbers){
    let max =  numbers[0];
    for(let number of numbers){
        if(number > max){
            max=number;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('Max value is : ', max);