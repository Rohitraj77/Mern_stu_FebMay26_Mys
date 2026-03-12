const container = document.getElementById("container");
//positions:
//beforebegin
//afterbegin
//beforeend
//afterend
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("afterend","<p>Dynamically inserted</p>");
});