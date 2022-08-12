
//5th problem------>okay

//function declare
function publicBusFare(totalPople){

    const busFare = 250;
    //error detection
    if(typeof totalPople !== 'number'){
        return 'please enter valid data';
    }
     else if(totalPople % 50 !== 0){
        const microRest = totalPople % 50;
        if (microRest == totalPople % 11 !==0){
           const  restPublic = microRest %11;
           const totalCost = restPublic * busFare;
           return totalCost;
        }
     }
     
}

const peopleFare = publicBusFare(365);
console.log(peopleFare);