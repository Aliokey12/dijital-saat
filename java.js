function getTime(){
    var now = new Date();
    var hour= now.getHours();
    var minute = now.getMinutes();
var second = now.getSeconds()
    var day = now.getDate()
    var month = now.getMonth()+1;
    var year = now.getFullYear()
    
   if(hour<10){
    document.getElementById("hour").innerText='0'+hour;
   }
    
   
   
   
    document.getElementById("minute").innerText=minute;
    document.getElementById("second").innerText=second;
    
    document.getElementById("date").innerText=date;
    
    
    }


setInterval(function(){getTime()},1000)
