let currency = document.querySelectorAll(".currency")

fetch('https://www.frankfurter.app/currencies')
.then(res => res.json())
.then(res => displaydropdown(res))

function displaydropdown(res)
{
    let curr = Object.entries(res)
    for(let i=0;i<curr.length;i++)
    {
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        currency[0].innerHTML += opt
        currency[1].innerHTML += opt
    }
}

let btn = document.getElementById("btn")
let inp = document.getElementById("inp")
let out = document.getElementById("out")
btn.addEventListener("click",function(){
    let currency1 = currency[0].value
    let currency2 = currency[1].value
    let inpval = inp.value
    if(currency1 == currency2)
    {
        alert("Choose different currencies")
    }
    else{
        convert(currency1,currency2,inpval)
    }

    function convert(currency1,currency2,inpval){
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${inpval}&from=${currency1}&to=${currency2}`)
        .then(resp => resp.json())
        .then((data) => {
            out.value = Object.values(data.rates)
        });
    }
})