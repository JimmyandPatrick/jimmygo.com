var clicks = 0;
function custom(num){
    switch(num){
        case 1:
        new JSAnimation(1, "font-size: 50px;", "bigBtn", true).runAnimation();
        document.getElementById('title').innerText = "Please turn your phone volume on.";
        document.getElementById('yes').onclick = function(){custom(2)};
        break;
        case 2:
        document.getElementById('title').innerText = "Woohoo!";
        new JSAnimation(1, "position: absolute;left: 300px;", "bigBtn", true).runAnimation();
        document.getElementById('yes').onclick = function(){custom(3)};
        break;
        case 3:
        new JSAnimation(1, "position: absolute;left: 20px;", "bigBtn", true).runAnimation();
        document.getElementById('title').innerText = "Happy birthday!";
        new JSAnimation(1, "font-size: 100px; text-align: center; position: absolute; top: 20%;", "title", true).runAnimation();
        document.getElementById('buttons').style.display = "none";
        setTimeout(() => {
        document.getElementById('ch').classList.add('rainbowFlash');
        }, 2000);
        setTimeout(() => {
        document.getElementById('ch').classList.remove('rainbowFlash');
        document.getElementById('title').classList.add('rainbowFlash2');
        }, 8000);
        setTimeout(() => {
        new JSAnimation(1.5, "font-size: 10px; text-align:center", "title", true).runAnimation();
        }, 15000);
        setTimeout(() => {
        new JSAnimation(1.5, "font-size: 20px; text-align:center", "title", true).runAnimation();
        document.getElementById('title').classList.remove('rainbowFlash2');
        }, 17000);
        setTimeout(() => {
        document.getElementById('confetti').style.display = "block";
        document.getElementById('confetti').style.top = "-20px";
        document.getElementById('confetti').width = window.innerWidth;
        document.getElementById('confetti').height = window.innerHeight;
        document.getElementById('confetti').play();
        document.getElementById('title').classList.add('rainbowFlash2');
        }, 22000);
        setTimeout(() => {
            window.location.replace('norashopping');
        }, 32000);
        break;
        case "norashopping":
            new JSAnimation(1, "transform:scale(25.0)rotateZ(50deg);", "nora", true).runAnimation();
            document.getElementById('ch').style.overflow = "hidden";
            setTimeout(() => {
               new JSAnimation(.5, "opacity: 0;", "nora", false).runAnimation();
            }, 1000);
            setTimeout(() => {
                document.getElementById('norashopping').classList.add('fade');
                document.getElementById('ch').style.overflow = "";
                document.getElementById('othn').style.display = "none";
                document.getElementById('norashopping').style.display = "block";
            }, 2000);
        break;
        case "money":
            document.getElementById('money').style.display = "block";
        break;
        case "m2":
            document.getElementById('m2').style.display = "block";
        break;
        case "nx":
            new JSAnimation(1, 'color:blue', 'nx', true).runAnimation();
            setTimeout(() => {
                document.getElementById('nx2').style.display = "block";
            }, 5000);
        break;
        case "addNx":
            if(clicks >= 10){
                window.location.replace('songend');
            }
            clicks++;
        break;
    }
}