
function calculateTax(income, expenses) {
    if (income <= 0 || expenses <= 0 || expenses > income) {
        return "Invalid Input"
    }
    const CostDifferentiation = income - expenses;
    const tax = (CostDifferentiation * 20) / 100
    return tax;
}


function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    const [userName, domainName] = email.split('@');
    return `${userName} sent you an email from ${domainName}`
}

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let i of name) {
        if (i >= '0' && i <= '9') {
            return true;
        }
    }
    return false;

}


function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return "Invalid Input";
    }
    let finalScore = obj.testScore + obj.schoolGrade;
    if (obj.isFFamily === true) {
        finalScore += 20;
    }
    if (finalScore >= 80) {
        return true;
    } else {
        return false;
    }

}


function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' && waitingTimes <= serial) {
        return "Invalid Input "
    }
    let totalTime = 0;
    for (let time of waitingTimes) {
        totalTime += time;

    }
    let averageTime = Math.round(totalTime / waitingTimes.length);
    let remain = (serialNumber - 1) - waitingTimes.length;
    let remainingTime = remain * averageTime;
    return remainingTime;
}