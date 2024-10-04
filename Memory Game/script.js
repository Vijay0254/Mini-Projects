var cards = [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    }
]
let flippedcards = []
let matchcount = 0
var gameboard = document.getElementById("gameboard")

shufflecards()
displaycards()

function shufflecards(){
    for(let i=cards.length-1;i>=0;i--)
    {
        let randindex = Math.floor(Math.random()*i);
        [cards[i],cards[randindex]] = [cards[randindex],cards[i]]
    }
}

function displaycards(){
    cards.forEach((element,index) =>{
        var create = document.createElement("div")
        create.setAttribute("id",index)   //setting id to each div with a name from 0 to ...(ie) index
        create.classList.add("cardback")  //adding class named cardback to every div
        create.classList.add("active")
        gameboard.append(create)
        
        create.addEventListener("click",function(){
            if(flippedcards.length<2 && this.classList.contains("active"))
            {
                let cardid = this.getAttribute("id")  //it gets id of card that is flipped
                flippedcards.push(this) //it pushs card to the array flippedcards
                this.classList.remove("cardback") //it removes the card that is clicked
                this.innerHTML = cards[cardid].icon
                if(flippedcards.length == 2)
                {
                    setTimeout(checkmatch,1000)     //checking two cards are same
                }
            }
        })
    })
}

function checkmatch(){
    var card1id = flippedcards[0].getAttribute("id")
    var card2id = flippedcards[1].getAttribute("id")
    if(cards[card1id].name == cards[card2id].name)
    {
        flippedcards[0].style.border = 'none'
        flippedcards[0].style.backgroundColor = '#f5e8ba'
        flippedcards[0].innerHTML = ''
        flippedcards[1].style.border = 'none'
        flippedcards[1].style.backgroundColor = '#f5e8ba'
        flippedcards[1].innerHTML = ''
        flippedcards[0].classList.remove("active")
        flippedcards[1].classList.remove("active")
        matchcount++
        if(matchcount==cards.length/2)
        {
            gameboard.innerHTML = "YOU WON"
            gameboard.classList.add("won")
        }
    }
    else{
        flippedcards[0].innerHTML = ''
        flippedcards[0].classList.add('cardback')
        flippedcards[1].innerHTML = ''
        flippedcards[1].classList.add('cardback')
    }
    flippedcards = []
}