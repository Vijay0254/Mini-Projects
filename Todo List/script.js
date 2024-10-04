var btn = document.getElementById("btn")
var inp = document.getElementById("inp")
var list = document.getElementById("list")
// let arr = []
btn.addEventListener("click",function(){
    let create = document.createElement("p")
    create.innerHTML = inp.value
    list.append(create)
    //to store in local storage
    // arr.push(create.innerHTML)
    // localStorage.setItem("Todos",JSON.stringify(arr))

    inp.value = ""
    create.addEventListener("click",function(){
        create.style.textDecoration = "line-through"
    })
    create.addEventListener("dblclick",function(){
        create.remove()
    })
    
})
