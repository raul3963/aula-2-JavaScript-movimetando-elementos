const div1 = document.getElementById("div-1");
const passo = 25;
let direcao = "right";

function mover(){
    let posicaoX = div1.style.left;
    let posicaoY = div1.style.top;

    if(direcao == "right"){
        posicaoX = Number(posicaoX.replace("px", ""));
        posicaoX = (posicaoX + passo) + "px";
    }
    if(direcao == "left"){
        posicaoX = Number(posicaoX.replace("px", ""));
        posicaoX = (posicaoX - passo) + "px";
    }
    if(direcao == "up"){
        posicaoY = Number(posicaoY.replace("px", ""));
        posicaoY = (posicaoY - passo) + "px";
    }
    if(direcao == "down"){
        posicaoY = Number(posicaoY.replace("px", ""));
        posicaoY = (posicaoY + passo) + "px";
    }

    div1.style.left = posicaoX;
    div1.style.top = posicaoY;
    
}

setInterval(mover, 100);

document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if(event.key == "ArrowLeft"){
        direcao = "left";
    }
    if(event.key == "ArrowRight"){
        direcao = "right";
    }
    if(event.key == "ArrowUp"){
        direcao = "up";
    }
    if(event.key == "ArrowDown"){
        direcao = "down";
    }
});