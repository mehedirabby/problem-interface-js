//problem 2-------->okay
function isJavaScriptFile(fileName)
{
     if(fileName.endsWith('.js') !== true ){
       return 'enter a valid file name';
    }

    if(fileName.endsWith('.js')){
        return true;
    }
   
    else{
        return false;
    }
  
}
let myFileName = 'index.css';
const fileName = isJavaScriptFile(myFileName);
console.log(fileName);
