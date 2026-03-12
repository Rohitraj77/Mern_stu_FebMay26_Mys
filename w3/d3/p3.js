for(let i=0;i<5;i++){ //forward loop
    if(i===2){//it compares the data type and values also
        console.log("i",i);
        break;
    }
}

console.log("continue");

for(let i=0;i<5;i++){ //forward loop
    if(i===2){//it compares the data type and values also
        // console.log("i",i);
        continue;//it is used to skip the iteration
    }
    console.log("i",i)
}