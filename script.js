const button=document.querySelector("button");//entire body selection
const body=document.querySelector("body");
const color=["violet","blue","red","yellow","skyblue","orange","black","light green","grey"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
})