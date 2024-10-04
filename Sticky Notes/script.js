var con = document.getElementById("con")
var btn = document.getElementById("btn")

function getAppStorage(){
    return JSON.parse(localStorage.getItem("Vijay") || "[]")
}
getAppStorage().forEach(element => {
    const textElement=createTextElement(element.id,element.content)
    con.insertBefore(textElement,btn)
});

function createTextElement(id,content){
    const textElement = document.createElement("textarea")
    textElement.classList.add("sticky")
    textElement.value = content
    return textElement
}
btn.addEventListener("click",function(){
    var notes = getAppStorage()
    var noteObject = {
        id:Math.floor(Math.random()*100),
        content:""
    }
    const textElement = createTextElement(noteObject.id,noteObject.content)
    con.insertBefore(textElement,btn)
    notes.push(noteObject)
    saveNotes()
})

function saveNotes(notes){
    localStorage.setItem("Vijay",JSON.stringify(notes))
}