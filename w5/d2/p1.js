// Introduction to callback function
function greetUser(name,callback){
    console.log("Hello,"+name);
// The callback function is excecuted only after the excecution of current function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete");
}
greetUser("Raj",showCompletionMessage);