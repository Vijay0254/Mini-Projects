var conn = document.getElementById("conn")
var btnleft = document.getElementById("button-left")
var btnright = document.getElementById("button-right")

var image = ["slider-one","slider-two","slider-three"] //storing images in array
var index = 0

btnleft.addEventListener("click",function(){
    index--
    if(index < 0)
    {
        index = image.length-1
    }
    conn.style.backgroundImage = `url("others/${image[index]}.jpg")`      
})

btnright.addEventListener("click",function(){
    index++
    if(index==image.length)
    {
        index = 0
    }
    conn.style.backgroundImage = `url("others/${image[index]}.jpg")`
})