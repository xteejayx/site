var curday;var secTime;var ticker;function getSeconds(){var nowDate=new Date();var dy=4;var countertime=new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate(),20,30,0);var curtime=nowDate.getTime();var atime=countertime.getTime();var diff=parseInt((atime-curtime)/1000);if(diff>0){curday=dy-nowDate.getDay()}
else{curday=dy-nowDate.getDay()-1}
if(curday<0){curday+=7;}
if(diff<=0){diff+=(86400*7)}
startTimer(diff);}
function startTimer(secs){secTime=parseInt(secs);ticker=setInterval("tick()",1000);tick();}
function tick(){var secs=secTime;if(secs>0){secTime--;}
else{clearInterval(ticker);getSeconds();}
var days=Math.floor(secs/86400);secs%=86400;var hours=Math.floor(secs/3600);secs%=3600;var mins=Math.floor(secs/60);secs%=60;document.getElementById("days").innerHTML=curday;document.getElementById("hours").innerHTML=((hours<10)?"0":"")+hours;document.getElementById("minutes").innerHTML=((mins<10)?"0":"")+mins;document.getElementById("seconds").innerHTML=((secs<10)?"0":"")+secs;if(curday==1){document.getElementById("days_text").innerHTML="Day"}}