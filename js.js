function start() {
    location.href = "game.html";
}
var pics = ["stone2.png", "paper2.png", "scissor2.png"];
var my_pts=0
var bot_pts=0
function stone() {
    document.getElementById("yourimage").src = "stone1.png"
    var a = Math.floor(Math.random() * 3);
    document.getElementById("compimage").src = pics[a];
    if (a==0){
        document.getElementById("winlose").innerHTML = "Draw";
    }
    if (a==1){
        bot_pts+=1
        document.getElementById("winlose").innerHTML = "You Lose";
        document.getElementsByClassName("compresult")[0].innerHTML=bot_pts;
    }
    if (a==2){
        my_pts+=1
        document.getElementById("winlose").innerHTML = "You Win";
        document.getElementsByClassName("yourresult")[0].innerHTML=my_pts;
    } 
}
function paper() {
    document.getElementById("yourimage").src = "paper1.png"
    var a = Math.floor(Math.random() * 3);
    document.getElementById("compimage").src = pics[a];
    if (a==0){
        my_pts+=1;
        document.getElementById("winlose").innerHTML = "You Win";
        document.getElementsByClassName("yourresult")[0].innerHTML=my_pts;
        
    }
    if (a==1){
        document.getElementById("winlose").innerHTML = "Draw";
    }
    if (a==2){
        bot_pts+=1;
        document.getElementById("winlose").innerHTML = "You Lose";
        document.getElementsByClassName("compresult")[0].innerHTML=bot_pts;
    }
}
function scissor() {
    document.getElementById("yourimage").src = "scissor1.png"
    var a = Math.floor(Math.random() * 3);
    document.getElementById("compimage").src = pics[a];
    if (a==0){
        bot_pts+=1;
        document.getElementById("winlose").innerHTML = "You Lose";
        document.getElementsByClassName("compresult")[0].innerHTML=bot_pts;
    }
    if (a==1){
        my_pts+=1;
        document.getElementById("winlose").innerHTML = "You Win";
        document.getElementsByClassName("yourresult")[0].innerHTML=my_pts;
    }
    if (a==2){
        c=c+1;
        document.getElementById("winlose").innerHTML = "Draw";
    }
}

