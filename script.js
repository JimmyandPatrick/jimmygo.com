class JSAnimation{
    constructor(duration, newCSS, elementId, replaceCSS){
        this.duration = duration;
        this.newCSS = newCSS;
        this.elementId = elementId;
        this.replaceCSS = replaceCSS;
    }
    runAnimation(){
        console.log(this.duration + this.newCSS + this.elementId + this.replaceCSS);
        switch(this.replaceCSS){
            case true:
            document.getElementById(this.elementId).style = this.newCSS;
            document.getElementById(this.elementId).style.transition += ` all ${this.duration}s`;
            break;
            case false:
            document.getElementById(this.elementId).style += this.newCSS;
            document.getElementById(this.elementId).style.transition += ` all ${this.duration}s`;
            break;
            default:
            console.error(`Please input either ${true} or ${false}. ${this.replaceCSS} is not possible`);
            break;
        }
    }
}
var c = 0;
var srcs = ["https://www.creativosonline.org/wp-content/uploads/2017/07/fondo-de-feliz-cumpleanos-con-tarta.jpg", "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg", "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/16714-birthday-cake-600x600.jpg?ext=.jpg", "https://cdn.shopify.com/s/files/1/0362/1653/files/Birthday_Cake_Square_5_grande.jpg?v=1505851987", "https://thenovicechefblog.com/wp-content/uploads/2013/08/Chocolate-and-Peanut-Butter-Dream-Cake-1-sm-500x750.jpg", "https://images.unsplash.com/photo-1610936534941-022318669958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aSUyMGxvdmUlMjB5b3V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"];
function changeCakes(){
    c++;
    document.getElementById('cake').src = srcs[c];
    if(c == srcs.length){
        c = 1;
    }
}
function playSong(){
    document.getElementById('vc').style.display = "none";
    var song = new Audio('https://www.jimmyandpatrick.github.io/retropuzzle.com/birthday.mp3');
    song.play();
}