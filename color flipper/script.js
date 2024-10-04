//selecting button,index using math random and color code
var btn = document.getElementById("btn")
var color = document.getElementById("color")
var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
var code = ""
btn.addEventListener("click",function(){
    for(let i=0;i<6;i++)
    {
        var index = Math.floor(Math.random()*16)
        code += hex[index]
    }
    color.textContent = "#" + code
    
    //using color code to display the color
    var btncon = document.getElementById("btn-container")
    btncon.style.backgroundColor = color.textContent
    code = ""
})

