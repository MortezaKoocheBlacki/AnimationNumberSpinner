let x = 0,
output = document.querySelector('.output'),
meter = document.querySelector('#meter'),
minusBtn = document.querySelector('.minus'),
plusBtn = document.querySelector('.plus');

output.innerHTML = x;

function plus(){
    if(x >= 10){
        return false
    }
    if(x >= 6){
        meter.style.background = 'var( --danger-color)';
        meter.style.filter = "drop-shadow(0 0 2.5px var(--danger-color)) drop-shadow(0 0 10px var(--danger-color))"
    }
    output.innerHTML = ++x;
    meter.style.height = x*10+'%'
};
function minus(){
    if(x <= 0){
        return false
    }
    if(x <= 7){
        meter.style.background = 'var(--success-color)';
        meter.style.filter = "drop-shadow(0 0 2.5px var(--success-color)) drop-shadow(0 0 10px var(--success-color))"
    }
    output.innerHTML = --x;
    meter.style.height = x*10+'%'
};

minusBtn.addEventListener('click', minus);
plusBtn.addEventListener('click', plus);