/***
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
 */

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const PerchairWood = 3;
    const perTableWood = 10;
    const perBed = 50;

    const chairTotalWood = chairQuantity * PerchairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBed;

    const totalWood = chairTotalWood+tableTotalWood+bedTotalWood;

    return totalWood
}

const wood = woodQuantity(0,0,1)
console.log("Wood needed: ", wood + ' cft')