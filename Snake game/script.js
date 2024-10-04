var gameboard = document.getElementById("gameboard")
var btn = document.getElementById("btn")
var context = gameboard.getContext('2d');  //getContext is used to create color filling, drawing from canvas
var scoreval = document.getElementById("scoreval")
var score = 0

//width and height are stored in variables because it can be changed in html
const WIDTH = gameboard.width
const HEIGHT = gameboard.height
const UNIT = 25 //width and height of food and 25 is used because it is a factor of 500 which is height and width of gameboard
let foodx,foody

//object within array is used to store x and y of snake because it has more box
let snake = [
    {x:UNIT*3, y:0},
    {x:UNIT*2, y:0},
    {x:UNIT*1, y:0},
    {x:0, y:0}
]

// xVel,yVel is used for movement
let xVel = 25
let yVel = 0
let active = true //initially active is tre but whenever it reaches end of board it becames false and game ends
let started = false //it is used so whenever key is clicked, the game starts
let paused = false

//Here we change direction of snake based on keys pressed on keyboard(so window is used)
//key code for left-37, up-38, right-39, down-40
window.addEventListener("keydown",function (event){
    const SPACE = 32
    if(!started)
    {
        started = true
        nextTick()
    }
    if(event.keyCode == SPACE)
    {
        if(paused)
        {
            paused = false //the game is resumed here
            nextTick()
        }
        else{
            paused = true //the game is paused here
        }
    }
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40

    switch(true){
        case(event.keyCode == LEFT && xVel!=UNIT): //here xVel!=UNIT is used because the snake should not move LEFT when moving in RIGHT direction
            xVel = -UNIT
            yVel = 0
            break
        case(event.keyCode == RIGHT && xVel!= -UNIT): //here xVel!= -UNIT is used because the snake should not move RIGHT when moving in LEFT direction
            xVel = UNIT
            yVel = 0
            break
        case(event.keyCode == UP && yVel!=UNIT): //here xVel!=UNIT is used because the snake should not move UP when moving in DOWN direction
            yVel = -UNIT
            xVel = 0
            break
        case(event.keyCode == DOWN && yVel!= -UNIT): //here xVel!= -UNIT is used because the snake should not move DOWN when moving in UP direction
            yVel = UNIT
            xVel = 0
            break
    }
})

startgame()

function startgame(){
    context.fillStyle = '#212121'
    context.fillRect(0,0,WIDTH,HEIGHT) //the syntax for fillrect is fillrect(x-start, y-start, width, height), it is used to fill the rectangle
    createfood()
    displayfood()
    drawsnake()
}

function createfood(){
    foodx = Math.floor(Math.random()*WIDTH/UNIT) * UNIT   //WIDTH/UNIT will be 20 which multiplies with random value and floors and then UNIT(ie) 25 is multiplied to get value that is divisible by 5 between 0 to 500 
    foody = Math.floor(Math.random()*HEIGHT/UNIT) * UNIT  //HEIGHT/UNIT will be 20 which multiplies with random value and floors and then UNIT(ie) 25 is multiplied to get value that is divisible by 5 between 0 to 500 
}
function displayfood(){
    context.fillStyle = 'red'
    context.fillRect(foodx,foody,UNIT,UNIT)
}

function drawsnake(){
    context.fillStyle = 'aqua'
    context.strokeStyle = '#212121'
    snake.forEach((element) => {
        context.fillRect(element.x,element.y,UNIT,UNIT)
        context.strokeRect(element.x,element.y,UNIT,UNIT) //stoke is used to split each box
    })
}
function movesnake(){
    const head = {x:snake[0].x+xVel, y:snake[0].y+yVel} //head give the next square snake needs to move 
    snake.unshift(head) //unshift is used to add head in top of array
    if(snake[0].x==foodx && snake[0].y==foody)
    {
        createfood()
        score++
        scoreval.textContent = score
    }
    else{
        snake.pop() //it removes last element every time other than it eats food (ie) it does not remove when it eats food
    }
}
function clearboard(){
    context.fillStyle = '#212121'
    context.fillRect(0,0,WIDTH,HEIGHT)
}

//nextTick() is used to cal the function again and again
function nextTick(){
    if(active && !paused)
    {
        setTimeout(() => {
            clearboard()
            displayfood()
            movesnake()
            drawsnake()
            checkgameover()
            nextTick()
        },200)
    }
    else if(!active){
        clearboard()
        context.font = "bold 50px serif"
        context.textAlign = "center"
        context.fillStyle = "white"
        context.fillText("Game Over!!",WIDTH/2,HEIGHT/2)
    }
}

function checkgameover(){
    if(snake[0].x<0 || snake[0].x>=WIDTH || snake[0].y<0 || snake[0].y>=HEIGHT)
    {
        active = false
    }
}

btn.addEventListener("click",function(){
    location.reload()    //to reload page
})