const btn = document.getElementById("btn");
const lbl = document.getElementById("lbl");
const min=1, max=6;
let rng1,rng2,rng3;


btn.onclick = function() {
    rng1=Math.floor(Math.random()*max) + min;
    rng2=Math.floor(Math.random()*max) + min;
    rng3=Math.floor(Math.random()*max) + min;

    lbl1.textContent=rng1;
    lbl2.textContent=rng2;
    lbl3.textContent=rng3;
}
