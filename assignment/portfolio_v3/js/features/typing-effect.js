function setupTypingEffect(){

const text = "Full-Stack Developer | MERN Enthusiast | Competitive Programmer";

const element = document.getElementById("typing-text");

if(!element){
console.log("Typing element not found");
return;
}

let index = 0;

function type(){

if(index < text.length){

element.textContent += text.charAt(index);

index++;

setTimeout(type,40);

}

}

type();

}

setupTypingEffect();