function Clockstart()
{
    let date=new Date();
    let hours=date .getHours();
    let minutes=date .getMinutes();
    let seconds=date .getSeconds();
    if(hours>12){
        hours=hours-12;
        let am = document.getElementById("am");
        am.innerText="PM";
    }
    else{
        let am = document.getElementById("am");
        am.innerText="AM";
    }
    let hrs=document.getElementById("hrs");
    hrs.innerText=hours;
    let mins=document.getElementById("mins");
    mins.innerText=minutes;
    let secs =document.getElementById("sec");
    secs.innerText=seconds;
}
setInterval(()=>{
    Clockstart();

},1000);