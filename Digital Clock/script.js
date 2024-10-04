let hrs = document.getElementById("hrs")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let ampm = document.getElementById("ampm")

function displaytime(){
    let datetime = new Date() //getting date and time 
    
    let hr = datetime.getHours()
    let min = padzero(datetime.getMinutes())
    let sec = padzero(datetime.getSeconds())

    if(hr>12)  //changing to 12 hr format
    {
        hr=hr-12
        ampm.innerHTML = 'PM'
    }
    hrs.innerHTML = padzero(hr)
    minute.innerHTML = min
    second.innerHTML = sec
}
//adding zero for single digit number
function padzero(num){
    if(num<10)
    {
        num = "0"+num
    }
    return num
}

setInterval(displaytime,500)