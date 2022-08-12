//problem-3------>okay

function oilPrice(digelPrice,petrolPrice,octanePrice){
    const priceOfDigel =114;
    const priceOfPetrol = 130;
    const priceOfOctane =135;


    const myDigelPrice = digelPrice * priceOfDigel;
    const myPetrolPrice = petrolPrice * priceOfPetrol;
    const myOctanePrice = octanePrice * priceOfOctane;
    const totalOilPrice = myDigelPrice + myOctanePrice + myPetrolPrice; 
    if(typeof oilPrice === String){
        return 'please enter valid data.'
    }

return totalOilPrice;
    
}
const totalOilPrice = oilPrice('k','l','m');
console.log(totalOilPrice);


