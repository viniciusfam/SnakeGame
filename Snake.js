let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32
let snake = []
let pontos = 0
let ponto = document.getElementById('ponto')
let nome = window.prompt ('qual seu nome?')
let carinha = ':('
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let comida = {
    x: Math.floor(Math.random() * 15  + 1) * box,
    y: Math.floor(Math.random() * 15  + 1) * box
}

let movimento = 'right'
function criarBG() {
    context.fillStyle = 'purple'
    context.fillRect(0, 0, 16 * box, 16 * box)
}



function criarcobra() {
    for (i = 0; i < snake.length; i++) {
       
        context.fillStyle = 'black'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function criarcomida(){
    context.fillStyle = 'red'
    context.fillRect(comida.x, comida.y, box, box)

}


document.addEventListener('keydown', update)

function update(event) {
    if (event.keyCode == 37 && movimento != 'right') {
        movimento = 'left'
    }
    if (event.keyCode == 38 && movimento != 'down') {
        movimento = 'up'
    } if (event.keyCode == 39 && movimento != 'left') {
        movimento = 'right'
    } if (event.keyCode == 40 && movimento != 'up') {
        movimento = 'down'
    }
}

function iniciarJogo() {

    


    if(snake[0].x > 15 * box && movimento == 'right'){
        snake[0].x = 0
    }if(snake[0].x < 0 && movimento == 'left'){
        snake[0].x = 16 * box
    } 
   if(snake[0].y > 15 * box && movimento == 'down') {
        snake[0].y =0
    }if(snake[0].y < 0 && movimento == 'up') {
        snake[0].y =16 * box
    }

    for (i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){ 
            
            
            clearInterval(jogo)
            alert(`você perdeu ${nome} e fez ${pontos} pontos :D `)
        }
    }


    criarBG()
    criarcobra()
    criarcomida()
 
    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (movimento == 'right') {
        snakeX += box

    } if (movimento == 'left') {
        snakeX -= box
    } if (movimento == 'up') {
        snakeY -= box
    } if (movimento == 'down') {
        snakeY += box
    }if (snakeX != comida.x || snakeY != comida.y){
        snake.pop() 
    
    }else{
        x: comida.x = Math.floor(Math.random() * 15  + 1) * box
        y: comida.y = Math.floor(Math.random() * 15  + 1) * box
        pontos++
        ponto.innerHTML = pontos
    }

   
    let head = {
        x: snakeX,
        y: snakeY


    

    }

    snake.unshift(head)
}


let jogo = setInterval(iniciarJogo, 100)



