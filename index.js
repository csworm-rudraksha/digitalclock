let time;
setInterval(() => {
    let mydate= new Date();
    let hr=mydate.getHours();
    let sec = mydate.getSeconds();
    let min = mydate.getMinutes();
    if (sec<10) {
        sec='0'+sec ;
    }
    let h;
    if (hr>=12) {
        h="pm"
    }
    else{
        h="am"
    }
    if(min<10){
        min ="0"+min;
    }
    time =  (hr%12)+":"+ min+":"+sec+" "+h;
    document.getElementById('time').innerHTML=time;
}, 1000);
let mydate= new Date();
arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
day = mydate.toLocaleDateString();
document.getElementById('date').innerHTML= day;
document.getElementById('days').innerHTML=arr[mydate.getDay()];
