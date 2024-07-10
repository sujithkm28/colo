const btn=document.querySelector("button");
const bdy=document.querySelector("body");

const color=['red','yellow','orange','violet','blue','green']

bdy.style.backgroundColor='pink';

btn.addEventListener('click',function(){
    
    const index=parseInt(Math.random()*color.length);
    bdy.style.backgroundColor=color[index];


})