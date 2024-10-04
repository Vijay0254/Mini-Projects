var inp = document.getElementById("inp")
var btn = document.getElementById("btn")
var out = document.getElementById("out")
btn.addEventListener("click",function(){
    var words = inp.value.split(" ") //converting string to array, it is done to count it as words
    out.value = words.length
})