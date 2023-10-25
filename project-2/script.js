let count_display = document.getElementById('count');


let count = 0; 

function Increment() {
count++;
count_display.innerHTML=count;
}
function Decrement() {
    count--;
    count_display.innerHTML=count;
}
function Reset() {
    count=0;
    count_display.innerHTML=0;
}
