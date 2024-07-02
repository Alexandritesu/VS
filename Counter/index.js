const increasebt = document.getElementById(`increasebt`);
const resetbt = document.getElementById(`resetbt`);
const decreasebt = document.getElementById(`decreasebt`);
const clabel = document.getElementById(`clabel`)
let count = 0;

document.getElementById("myh1").textContent= `COUNTER`;

increasebt.onclick = function(){ 
    count++
    clabel.textContent = count;

}

decreasebt.onclick = function(){ 
    count--
    clabel.textContent = count;

}

resetbt.onclick = function(){ 
    count=0
    clabel.textContent = count;

}