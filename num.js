let Ph;
let Cn;
let tem;
let Mp;

document.getElementById("RanButton").onclick= function(){


    Ph = Math.floor(Math.random()*14);
    Cn = Math.floor(Math.random()*60) +1;
    tem = Math.floor(Math.random()*100);
    Mp = Math.floor(Math.random()*10);

    document.getElementById("xlabel").innerHTML = Ph;
    document.getElementById("ylabel").innerHTML = Cn;
    document.getElementById("zlabel").innerHTML = tem;
    document.getElementById("mlabel").innerHTML = Mp;
    
    console.log(Ph,Cn,tem,Mp);
}

const ResultElement1 = document.getElementById("ResultElement1");
const ResultElement2 = document.getElementById("ResultElement2");
const ResultElement3 = document.getElementById("ResultElement3");
const ResultElement4 = document.getElementById("ResultElement4");
const RanButton1 = document.getElementById("RanButton1");

RanButton1.onclick = function(){
    if( Ph>5 && Ph<=8){
        ResultElement1.textContent="PH level is optimal";
    }

     else if(Ph<5)   {
    ResultElement1.textContent = "Ph level is too acidic";
     }

      else if(Ph>8)   {

    ResultElement1.textContent = "Ph level is too basic";

    }

    if(Cn == 30){

        ResultElement2.textContent="C:N ratio is normal";
    }

    else if(Cn > 30) {
        ResultElement2.textContent="C:N ratio is too high";
    
    }
    else{
        ResultElement2.textContent="C:N ratio is too low";
    }

    if(tem<= 71 && tem >= 49){
        ResultElement3.textContent="Temperature is suitable";
    }

    else if(tem > 71){
        ResultElement3.textContent="Temperature is too high";
    }
    else{
        ResultElement3.textContent="Temperature is too low";
    }

    if(Mp>= 4 && Mp <= 6){

        ResultElement4.textContent="Moisture percentage is perfect, within optimal range";
    }

    else if(Mp < 4){
        ResultElement4.textContent="It is too dry, needs more moisture";
    }
    else{
        ResultElement4.textContent="Moisture found in excess";
    }

}
