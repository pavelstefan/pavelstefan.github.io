window.addEventListener("load", function(){
    loadImages(["i1", "i2"]);
    main();
    document.getElementById("aaa").innerHTML = "Mutari: " + games;
});

window.addEventListener("resize", function(){
    setResolution();
    main();
});

function tapEv(){
    if(!play)
        return;
    if(games > 0){
        games--;
        generateGame();
        play = false;

        /*Start Loop*/
        document.getElementById("aaa").innerHTML = "Mutari: " + games;
        loopID = setInterval(Loop, 60/1000);
        setTimeout(function(){
            gameStop = true;
        }, 1000);
    }else{
        location.reload();
    }
}

window.addEventListener("keypress", function(){
    if(!play)
        return;
    if(games > 0){
        games--;
        play = false;
        generateGame();
        
        /*Start Loop*/
        document.getElementById("aaa").innerHTML = "Mutari: " + games;
        loopID = setInterval(Loop, 60/1000);
        setTimeout(function(){
            gameStop = true;
        }, 1000);
    }else{
        location.reload();
    }
});

function generateGame(){
    prize = -1;
    stop = [false, false, false, false, false];
    gameStop = false;
    var length = 3,
        t = [];
    for(var i = 0; i < 3; i++){
        t[i] = Math.floor(Math.random(99999) * 10) % 3;
    }
    if(t[1] == t[0] && t[1] == t[2]){
        prize = t[1];
    }
    ticket = t;
}

function setResolution(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function loadImages(imgs){
    for(var i = 0; i < imgs.length; i++){
        images[i] = document.getElementById(imgs[i]);
    }
}

function main(){
    canvas = document.createElement("canvas");
    canvas.setAttribute("id", "game");
    document.body.appendChild(canvas);
    
    canvas = document.getElementById("game");
    canvas.addEventListener("touchstart", tapEv, false);
    ctx = canvas.getContext("2d");
    setResolution();
    ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    drawPrizes(0, 0, dy1);
    drawPrizes(300, 0, dy2);
    drawPrizes(600, 0, dy3);
    drawSquares();
}

function drawSquares(){
    var w = 300,
        h = 500,
        offsetX = (canvas.width - 3 * w) / 2,
        offsetY = (canvas.height - h) / 2;
    ctx.rect(offsetX, offsetY, w, h);
    ctx.rect(offsetX + w, offsetY, w, h);
    ctx.rect(offsetX + 2 * w, offsetY, w, h);
    ctx.stroke();
}

function drawPrizes(x, y, dy){
    var offsetX = (canvas.width - 3 * 300) / 2,
        offsetY = (canvas.height - 500) / 2,
        sw = 300, sh = 500,
        dx = 0,
        dw = 300, dh = 500,
        maxH = 2000;
    if(dy > maxH){
        ctx.drawImage(images[1], dx, 0, dw, dh, offsetX + x, offsetY + (2500 - dy), sw, dy - maxH);
    }
    ctx.drawImage(images[1], dx, dy, dw, dh, offsetX + x, offsetY + y, sw, sh);
}


function Loop(){
    ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
    
    if(!stop[0]){
        dy1 += speed;
        if(gameStop){
            var dif = Math.abs(dy1 - ticket[0] * 500);
            if(dif <= speed){
                dy1 = ticket[0] * 500;
                stop[0] = true;
            }
                
        }
    }
    
    if(!stop[1]){
        dy2 += speed;
        if(gameStop){
            var dif = Math.abs(dy2 - ticket[1] * 500);
            if(dif <= speed){
                dy2 = ticket[1] * 500;
                stop[1] = true;
            }
                
        }
    }
    
    if(!stop[2]){
        dy3 += speed;
        if(gameStop){
            var dif = Math.abs(dy3 - ticket[2] * 500);
            if(dif <= speed){
                dy3 = ticket[2] * 500;
                stop[2] = true;
            }
                
        }
    }
    
    dy1 %= 2500;
    dy2 %= 2500;
    dy3 %= 2500;
    
    drawPrizes(0, 0, dy1);
    drawPrizes(300, 0, dy2);
    drawPrizes(600, 0, dy3);
    drawSquares();
    
    if(stop[0] && stop[1] && stop[2]){
        clearInterval(loopID);
        if(prize >= 0)
            alert("ai castiga " + premii[prize]);
        else
            alert("mai incearca");
        play = true;
    }
}