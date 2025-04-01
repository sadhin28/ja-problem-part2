/**
 * shirt price --> 500
 * pant price --> 300 
 * shoes price --> 900
 */
function shopingBd(shirtQuantity,pantQuantity,shoesQuantity){
    const shirts= 500;
    const pants = 300
    const shoes= 900;
    const shirtTotalPrice = shirts * shirtQuantity;
    const pantTotalPrice  = pants * pantQuantity;
    const shoesTotalPrice = shoes * shoesQuantity;

    const totalMRP = shirtTotalPrice+pantTotalPrice+shoesTotalPrice;
    return totalMRP;
}

const shoping=shopingBd(0,0,2)
console.log('Your Total Bill : ',shoping+' Taka')