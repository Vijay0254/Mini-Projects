//selecting overlay, popup

var ola = document.querySelector(".overlay")
var box = document.querySelector(".popup")
var addpopup = document.getElementById("add-popup")

addpopup.addEventListener("click",function(){
    ola.style.display = "block"
    box.style.display = "block"
})

//selecting cancel button

var cancelbutton = document.getElementById("cancel-book")
cancelbutton.addEventListener("click",function(){
    event.preventDefault()
    ola.style.display = "none"
    box.style.display = "none"
})

//selecting container, add-book, book-title-input, book-author-input, short-description-input

var container = document.querySelector(".container")
var addbutton = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var shortdescription = document.getElementById("short-description-input")

addbutton.addEventListener("click",function(){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${shortdescription.value}</p>
    <button onclick="del(event)">Delete</button>`
    container.append(div)
})

//delete button

function del(event)
{
    event.target.parentElement.remove()
}