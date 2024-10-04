var inp = document.getElementById("inp")
var btn = document.getElementById("btn")
var out = document.getElementById("out")
btn.addEventListener("click",function(){
    if(inp.value<=3)
    {
        out.value = 5.8 + "%"
    }
    else if(inp.value>3 && inp.value<=6)
    {
        out.value = 6.5 + "%"
    }
    else if(inp.value>6 && inp.value<=9)
    {
        out.value = 6.8 + "%"
    }
    else{
        out.value = 7 + "%"
    }
})