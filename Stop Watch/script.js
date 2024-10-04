var start = document.getElementById("start")
var stopp = document.getElementById("stop")
var reset = document.getElementById("reset")
var hrs = document.getElementById("hrs")
var mins = document.getElementById("mins")
var secs = document.getElementById("secs")
var milsecs = document.getElementById("milsecs")

let hour=0,minute=0,second=0,millisec=0
let starttime

start.addEventListener("click",function(){
    start.classList.add('start-active')

    starttime = setInterval(() => {
        millisec++
        displaytime()
        if(millisec==100)
        {
            second++
            millisec = 0
        }
        if(second==60)
        {
            minute++
            second = 0
        }
        if(minute==60)
        {
            hour++
            minute = 0
        }
    },10)
})

stopp.addEventListener("click",function(){
    clearInterval(starttime) //it stops setInterval
    start.classList.remove('start-active')
})

reset.addEventListener("click",function(){
    hour=0
    minute=0
    second=0
    millisec=0
    clearInterval(starttime)
    start.classList.remove('start-active')
    displaytime()
})

function displaytime(){
    //ternary operator - condition ? true:false
    //we use phour, pminute, psecond, pmillisec for padding
    phour = hour<10 ? '0'+hour:hour
    pminute = minute<10 ? '0'+minute:minute
    psecond = second<10 ? '0'+second:second
    pmillisec = millisec<10 ? '0'+millisec:millisec

    hrs.innerHTML = phour
    mins.innerHTML = pminute
    secs.innerHTML = psecond
    milsecs.innerHTML = pmillisec
}