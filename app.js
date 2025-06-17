let btn=document.querySelector('button');
let box=document.querySelector("#box");
btn.addEventListener("click",function () {
    let h1=document.querySelector('h1');
    let color=genrate();
    h1.innerText=color;
    box.style.backgroundColor=color;
});

// window.onload=function(){
//     setInterval(function(){
//         btn.click();

//     },1000);
// }



function genrate(box) {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
 let b=Math.floor(Math.random()*255);
 let color=`rgb(${r},${g},${b})`;
return color;
}