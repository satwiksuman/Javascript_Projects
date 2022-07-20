let hr=0;
let min=0;
let sec=0;
let count=0;

let timer=false;

function start(){
timer=true;
stopwatch();
}

function stop(){
timer=false;
}

function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
     count=0;
     document.getElementById("count").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    //Here passed "00" as string not as number(00) because if we will pass 00 as number then it will show only a single 0 not 00
}

function stopwatch(){
 if(timer == true){
    count=count+1; 

    if(count==100){
        sec=sec+1;
        count=0;
    }

    if(sec==60){
        min=min+1;
        sec=0;
    }

    if(min==60){
        hr=hr+1;
        min=0;
    }

    let hrstring=hr;
    let minstring=min;
    let secstring=sec;
    let countstring=count;

    if(hr<10){
        hrstring="0"+hrstring;
    }

    if(min<10){
        minstring="0" + minstring
    }

    if(sec<10){
        secstring="0" + secstring
    }

    if(count<10){
        countstring="0" + countstring
    }
    document.getElementById("count").innerHTML=countstring;
    document.getElementById("sec").innerHTML=secstring;
    document.getElementById("min").innerHTML=minstring;
    document.getElementById("hr").innerHTML=hrstring;
    setTimeout("stopwatch()",10);
    //Added a settimeout function by passing 10ms because after 10ms count will increase by 1. so, when count wll be 100 means 1000 millisecond passed(since 1 count increased after 10ms) tyen make sec=1
    //Similarly when sec=60 made min=1 and when min=60 then made hr=1
 }
}