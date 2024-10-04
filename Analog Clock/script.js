var hrs = document.querySelector(".hrs")
var mins = document.querySelector(".mins")
var secs = document.querySelector(".secs")

setInterval(updatetime,1000)
function updatetime(){
    const time = new Date()
    //here time is converted to angle
    var sec = time.getSeconds()/60 
    var min = (sec+time.getMinutes())/60
    var hr = (min+time.getHours())/12
    hrs.style.transform = `rotate(${hr*360}deg)`
    mins.style.transform = `rotate(${min*360}deg)`
    secs.style.transform = `rotate(${sec*360}deg)`
}

updatetime()