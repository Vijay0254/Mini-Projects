var inp = document.getElementById("inp")
var out = document.getElementById("out")
var btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    var val = inp.options[inp.selectedIndex].value //selectedIndex gives value of selected option
    switch(val)
    {
        case 'Chennai':
            Population = 46464664
            literacy = 90
            language =  'Tamil'
            break;
        case 'Bangalore':
            Population = 32019283
            literacy = 85
            language =  'Kanadam'
            break;
        case 'Madurai':
            Population = 2029102
            literacy= 82
            language =  'Tamil'
            break;
        case 'Coimbatore':
            Population = 2345567
            literacy= 80
            language =  'Tamil'
            break;
    }
    var msg = `The Indian city of ${val} has a population of ${Population}. Language spoken is ${language} and Literacy rate is ${literacy}`
    out.innerHTML = msg
})