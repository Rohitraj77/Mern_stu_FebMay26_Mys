// try catch finally with async/await
function processPayment(isSucceded){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceded){
                resolve("Payment processed successfully.");
            }
            else{
                reject("Payment could'nt be processed successfully.")
            }
        },700);
    });
}

async function runPaymentLow(isSucceded) {
    try{
        const result = await processPayment(isSucceded);
        console.log("Success",result);
    }
    catch(error){
        console.log("Failure: ",error);
    }
    finally{
        console.log("Payment flow completed.");
    }
}

runPaymentLow(false).then(function(){
    return runPaymentLow(true);
});