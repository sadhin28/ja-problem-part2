function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily === true){
        finalScore+=20;
    }
    if(finalScore >=80){
        return true;
    }else{
        return false;
    }
     
}

let student1={
    name: "Rajib",
    testScore: 40, 
    schoolGrade: 25,
    isFFamily : true 
 }
 let student2={
    name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false 
 }

 console.log(calculateFinalScore(student1))
 console.log(calculateFinalScore(student2))
 console.log(calculateFinalScore(student2))
 console.log(calculateFinalScore('sadhin'))