var ultraBall = document.getElementById('ultraBall');
var chosenBird = "";
var chosenBall = "";
var ballPoint = 1;
var yCur = 0;
var birdPic = document.getElementById('bird');
var hitbox = document.getElementById('hitbox');
var birdPosition = 1;
var chances = 0.3;
var hitboxInt;
var c = function(){
    if(chosenBird === "" || chosenBall === ""){
    document.getElementById('noBird').style.display = "block";
    }
    if(chosenBird != "" && chosenBall != ""){
    work();
    document.getElementById('sp').style.display = "none";
    document.getElementById('trayb').style.display = "none";
    document.getElementById('tray').style.display = "none";
    }
};
function changeBird(bird){
    chosenBird = bird;
    switch(bird){
        case "articuno":
        document.getElementById('birdText').innerText = ` Articuno / CP ${Math.floor(Math.random() * 3000) + 10}`;
        birdPic.src = "https://static.wikia.nocookie.net/pokemongo/images/c/cb/Articuno_galarian.png/revision/latest";
        birdPic.style = "position: absolute; left: 50%; top: 28%; transform: translate(-50%, -50%)";
        break;
        case "zapdos":
        document.getElementById('birdText').innerText = ` Zapdos / CP ${Math.floor(Math.random() * 3000) + 10}`;
        birdPic.src = "https://static.wikia.nocookie.net/pokemongo/images/0/00/Zapdos_galarian.png/revision/latest";
        birdPic.style = "position: absolute; left: 50%; top: 51%; transform: translate(-50%, -50%)scale(1.2)";
        break;
        case "moltres":
        document.getElementById('birdText').innerText = ` Moltres / CP ${Math.floor(Math.random() * 3000) + 10}`;
        birdPic.src = "https://static.wikia.nocookie.net/pokemongo/images/c/c8/Moltres_galarian.png/revision/latest";
        birdPic.style = "position: absolute; left: 50%; top: 25%; transform: translate(-50%, -50%)";
        break;
    }
    displayHitbox(bird);
}
function changeBall(ball){
    chosenBall = ball;
    switch (ball){
    case "poke":
    ultraBall.src = "https://static.wikia.nocookie.net/pokemongo/images/8/87/Pok%C3%A9_Ball.png/revision/latest/scale-to-width-down/150?cb=20170620234713";
    chances = 1;
    break;
    case "great":
    ultraBall.src = "https://static.wikia.nocookie.net/pokemongo/images/4/45/Great_Ball.png/revision/latest/scale-to-width-down/150?cb=20170620234738";
    chances = 1.5;
    break;
    case "ultra":
    ultraBall.src = "https://static.wikia.nocookie.net/pokemongo_gamepedia_en/images/3/34/Ultra_Ball.png/revision/latest?cb=20160714140747";
    chances = 2;
    break;
}
}
function work(){
document.addEventListener('mousedown', mouseDown);
function mouseDown(){
    document.addEventListener('mousemove', movePKBall);
}
document.addEventListener('mouseup', function upCatch(){
    ballThrow();
    document.removeEventListener('mousedown', mouseDown);
    document.removeEventListener('mousemove', movePKBall);
    document.removeEventListener('mouseup', upCatch);
});
function ballThrow(){
    let int = setInterval(() => {
        if(ballPoint >= 750 && ballPoint < 980){
            console.log('Excellent throw range');
        }
        ultraBall.style.transform = `scale(${ballPoint})rotateZ(${yCur * 12 + Math.PI}deg)translateX(${yCur /25}px)`;
        ultraBall.style.top = parseInt(ultraBall.style.top) + ballPoint * 12 + "px";
        if(ballPoint <= 0.40){
            clearInterval(int);
            ballPoint = 1;
            if(parseInt(ultraBall.style.left) >= parseInt(bird.style.left) / 2 && 
            parseInt(ultraBall.style.top) >= parseInt(bird.style.top) / 2 && 
            parseInt(ultraBall.style.left) <= parseInt(bird.style.left) * 5 && 
            parseInt(ultraBall.style.top) <= parseInt(bird.style.top) * 8){
                ballShake();
            }
            else{
                ballMiss();
            }
        }
        ballPoint-= 0.05;
        yCur++;
    }, 20);
}
function movePKBall(e){
    e.preventDefault();
    yCur = e.pageX + e.pageY / 2;
    ultraBall.style.top = e.pageY - 100 + "px";
    ultraBall.style.left = e.pageX / 5 + "px";
    ultraBall.style.transform = `rotateZ(${e.pageY * 4}deg)translate(${e.pageX / 150}px)`;
}
}
function displayHitbox(bird){
    hitbox.style.display = "block";
    let hd = 0;
    hitboxInt = setInterval(() => {
       hitbox.style.width = birdPic.width - hd - 24 + "px";
       hitbox.style.height = birdPic.height - hd - 24 + "px";
       hitbox.style.left = birdPic.style.left;
       hitbox.style.top = birdPic.style.top;
       hd++;
       if(hd > 210){
        hd = 0;
       }
    }, 10);
    document.getElementById('hitbox2').style = `width: ${birdPic.width - 24 + "px"};
    height: ${birdPic.height - 24 + "px"};
    left: ${birdPic.style.left};
    top: ${birdPic.style.top}`;
    hitbox.style.top = birdPic.style.top;
    hitbox.style.left = birdPic.style.left;
}
document.addEventListener('keydown', (e) => {
    if(e.key === "Backspace"){
    c();
    }
});
document.getElementById('sp').addEventListener('click', c);
function ballShake(){
    document.getElementById('hitbox2').style.display = "none";
    hitbox.style.display = "none";
    birdPic.style.display = "none";
    document.getElementById('birdText').style.display = "none";
    clearInterval(hitboxInt);
    ultraBall.style = "position: absolute; left: 50%; top: 85%;";
    let hd = 1;
    let int = setInterval(() => {
        ultraBall.style.transform = `scale(${hd})translate(-50%, -50%)`;
        if(hd > 1.25){
            clearInterval(int);
        }
        hd += 0.01;
    }, 10);
    let rolls = 0;
    let ballRoll = () => {
        let int2;
        if(Math.random() * 2.84 < chances){
        setTimeout(() => {ultraBall.style.border = "1px solid red";ultraBall.style.borderRadius = "50px";}, 10);
        setTimeout(() => {ultraBall.style.border = "";ultraBall.style.borderRadius = "";}, 150);
        int2 = setTimeout(ballRoll, 2000);
        rolls++;
        }
        else{
            clearTimeout(int2);
            document.getElementById('runScreen').style.display = "block";
            birdPic.style.display = "block";
        }
        if(rolls >= 3){
            setTimeout(() => {
                alert('Caught!');
                clearTimeout(int2);
            }, 200);
        }
    };
    setTimeout(ballRoll, 2000);
}
function ballMiss(){
    let roll = 8;
    let int = setInterval(() => {
        ultraBall.style.transform = `scale(0.0${roll * 1.5})rotateZ(${roll}deg)`;
        roll--;
    }, 18);
    setTimeout(() => {
        clearInterval(int);
        ultraBall.style = "";
        work();
    }, 150);
}
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
document.getElementById('trayb').addEventListener('click', () => {
    document.getElementById('tray').style.display = "block";
});
function feedBerry(berry){
    switch(berry){
        case "razz":
        chances * 1.5;
        break;
        case "nana":
        chances * 0.4;
        break;
        case "gold":
        chances * 2.5;
        break;
    }
    chances * 1.7;
    document.getElementById('tray').style.display = "none";
    document.getElementById('trayb').style.display = "none";
}