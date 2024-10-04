function updatetime(){
    const currentyear = new Date().getFullYear()
    const newyear = new Date(`January 1 ${currentyear+1} 00:00:00`)
    const currentdate = new Date()

    const diff = newyear-currentdate
    var day = Math.floor(diff/(24*1000*60*60))
    var hr = Math.floor((diff/(1000*60*60))%24)
    var min = Math.floor((diff/(1000*60))%60)
    var sec = Math.floor((diff/1000)%60)

    var days = document.getElementById("days")
    var hrs = document.getElementById("hrs")
    var mins = document.getElementById("mins")
    var secs = document.getElementById("secs")

    if(day<10)
    {
        day = "0"+day
    }
    if(hr<10)
    {
        hr = "0"+hr
    }
    if(min<10)
    {
        min = "0"+min
    }
    if(sec<10)
    {
        sec = "0"+sec
    }

    days.innerHTML = day
    hrs.innerHTML = hr
    mins.innerHTML = min
    secs.innerHTML = sec
}

setInterval(updatetime,1000)