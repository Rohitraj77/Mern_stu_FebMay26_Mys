//IIFE immediately Function Expression(IIFE)
//W/O parameters
(function(appName,version){
    console.log("Basic IIFE excecuted Immediately");
})("NodeJs","V22.22.0");//here we don't give name to the func just closed the brackets() for the function.

//with parameters
(function(appName,version){
    console.log("App:"+appName+"Version: "+version);
})("NodeJs","V22.22.0");//here we don't give name to the func just closed the brackets() for the function.

//with return value
const result = (function(){
    const a = 10,b = 20;
    return a+b;
})();
console.log("sum is,"+result);