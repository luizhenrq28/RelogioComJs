var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let data = new Date();
    let hrs = data.getHours();
    let min = data.getMinutes();
    let s = data.getSeconds();

    if(hrs < 10){
        horas.textContent = '0'+hrs
    }else{
        horas.textContent = hrs;
    }
    if(min<10){
        minutos.textContent = '0'+min;
    }else{
        minutos.textContent = min;
    }
    if(s<10){
        segundos.textContent = '0'+s;
    }else{
        segundos.textContent = s;
    }

}) 

