//problem 1 radiunTODegree----->okay




function radianToDegree (radian){
    const degree = radian * (180/3.1416);
     
    
    if(typeof radian === 'String'){
        return 'NaN'; 
    }
    
   
         
    
    return degree;

}

const applyRadian = 1;
const resultOfDegree = radianToDegree (applyRadian);
myDegree =parseFloat(resultOfDegree);
myDegree=resultOfDegree.toFixed(2);



console.log(myDegree);


    

