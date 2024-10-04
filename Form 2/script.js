//checking
var usernamecheck = false
var phonecheck = false
var emailcheck = false
var passwordcheck = false
var conpasswordcheck = false

//selecting every containers
var usernamecontainer = document.querySelector(".usernamecontainer")
var phonecontainer = document.querySelector(".phonecontainer")
var emailcontainer = document.querySelector(".emailcontainer")
var passwordcontainer = document.querySelector(".passwordcontainer")
var conpasswordcontainer = document.querySelector(".conpasswordcontainer")

//selecting input
var username = document.getElementById("username")
var phone = document.getElementById("phone")
var email = document.getElementById("email")
var password = document.getElementById("password")
var conpassword = document.getElementById("conpassword")

//selecting icon
var usernameicon = usernamecontainer.querySelector("i")
var phoneicon = phonecontainer.querySelector("i")
var emailicon = emailcontainer.querySelector("i")
var passwordicon = passwordcontainer.querySelector("i")
var conpasswordicon = conpasswordcontainer.querySelector("i")

//selecting label
var usernamelabel = usernamecontainer.querySelector("label")
var phonelabel = phonecontainer.querySelector("label")
var emaillabel = emailcontainer.querySelector("label")
var passwordlabel = passwordcontainer.querySelector("label")
var conpasswordlabel = conpasswordcontainer.querySelector("label")

username.addEventListener("keyup",function(){
    var entervalue = username.value
    if(entervalue == "")
    {
        usernamelabel.style.visibility = "visible"
        usernameicon.style.visibility = "hidden"
        usernamecheck = false
    }
    else{
        usernamelabel.style.visibility = "hidden"
        usernameicon.style.visibility = "visible"
        usernamecheck = true
    }
})

phone.addEventListener("keyup",function(){
    var entervalue = phone.value
    if((entervalue.length < 10) || (entervalue.length >10))
    {
        phonelabel.style.visibility = "visible"
        phoneicon.style.visibility = "hidden"
        phonecheck = false
    }
    else{
        phonelabel.style.visibility = "hidden"
        phoneicon.style.visibility = "visible"
        phonecheck = true
    }
})

email.addEventListener("keyup",function(){
    var entervalue = email.value
    if(entervalue == "")
    {
        emaillabel.style.visibility = "visible"
        emailicon.style.visibility = "hidden"
        emailcheck = false
    }
    else{
        emaillabel.style.visibility = "hidden"
        emailicon.style.visibility = "visible"
        emailcheck = true
    }
})

var entervalue_password = ""
password.addEventListener("keyup",function(){
    entervalue_password = password.value
    if(entervalue_password == "")
    {
        passwordlabel.style.visibility = "visible"
        passwordicon.style.visibility = "hidden"
        passwordcheck = false
    }
    else{
        passwordlabel.style.visibility = "hidden"
        passwordicon.style.visibility = "visible"
        passwordcheck = true
    }
})

conpassword.addEventListener("keyup",function(){
    var entervalue = conpassword.value
    if((entervalue == "") || (entervalue != entervalue_password))
    {
        conpasswordlabel.style.visibility = "visible"
        conpasswordicon.style.visibility = "hidden"
        conpasswordcheck = false
    }
    else{
        conpasswordlabel.style.visibility = "hidden"
        conpasswordicon.style.visibility = "visible"
        conpasswordcheck = true
    }
})

//selecting submit and popup
var submit = document.getElementById("submit")
var popup = document.querySelector(".popup")
submit.addEventListener("click",function(){
    event.preventDefault()
    if((usernamecheck == true) && (phonecheck == true) && (emailcheck == true) && (passwordcheck == true) && (conpasswordcheck == true))
    {
        popup.style.backgroundColor = "#6be9fb"
        popup.textContent = "Form submitted successfully"
        popup.style.top = "10px"
    }
    else{
        popup.style.backgroundColor = "red"
        popup.textContent = "Please fill the form"
        popup.style.top = "10px"
    }

    setTimeout(
        function(){
            popup.style.top = "-90px"
        },2000)
})