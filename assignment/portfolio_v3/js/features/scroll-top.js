function setupScrollTop(){

const btn = document.getElementById("scroll-top");

if(!btn){
console.log("Scroll button not found");
return;
}

window.addEventListener("scroll",function(){

if(window.scrollY > 300){
btn.classList.remove("hidden");
}else{
btn.classList.add("hidden");
}

});

btn.addEventListener("click",function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

setupScrollTop();