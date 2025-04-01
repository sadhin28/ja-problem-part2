function  waitingTime(waitingTimes, serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' &&  waitingTimes<=serial){
    return "Invalid Input "
  }
  let totalTime = 0;
    for (let time of waitingTimes) {
        totalTime += time;
       
    }
    let averageTime =Math.round( totalTime / waitingTimes.length);
    let remain=(serialNumber-1)-waitingTimes.length;
    let remainingTime=remain*averageTime;
    return remainingTime;
}
let arr=[13,2,6,7,10]
let serial = 6;
console.log(waitingTime(arr,serial))