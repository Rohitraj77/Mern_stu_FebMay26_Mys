//Breakpoint
//Inspect variable values
//View the call stack
//step through code line by line
//Evaluate expressions in the console
//Watch how the variables change during the execution
//To find logical errors
//Browser(debugger)
function caluclateTotal(prices){
    let total = 0;
    for(let i = 0;i<prices.length;i++){
        let price = prices[i];
        debugger;//It can be used to know the flow of the code
        total += price;
        
    }
    return total
}
let cart = [100,240,140,4700];
console.log("Total: ",caluclateTotal(cart));