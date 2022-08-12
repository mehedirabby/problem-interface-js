//problem-4 -------->okay
function isBestFriend(friend1,friend2){
    if (typeof friend1 !== 'object'|| typeof friend2 !== 'object' ){
        return 'please enter an object or valid data';
    }
    if(friend1.name === friend2.friend && friend2.name === friend1.friend){
        return true;
    }
    else{
        return false;
    }
}

//variable declare
const freind1 = {
    name: 'rabby',
    friend : 'karlo'
};
 

const friend2 = {
    name: 'karlo',
    friend : 'rabby'
}


console.log(isBestFriend(freind1,friend2));