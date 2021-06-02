function playfly() {
    let audio = document.getElementById("fly");
    audio.play();
}
function playtarget() {
    let audio = document.getElementById("target");
    audio.play();
}
function checkcrash() {

    for (let i = 0; i < arrRow.length; i++) {
        if(arrRow[i].x_arrow >= 1220 && arrRow[i].y_arrow < y_target+20 && arrRow[i].y_arrow > y_target -20  ) {
            arrRow[i].speed_arrow = 0;
            arrRow[i].y_arrow += speed_target;
            arrRow[i].score = 10
            arrRow[i].numar = -1 ;



        }else if(arrRow[i].x_arrow >= 1220 && arrRow[i].y_arrow < y_target+45 && arrRow[i].y_arrow >  y_target -45  ) {
            arrRow[i].speed_arrow = 0;
            arrRow[i].y_arrow += speed_target;
            arrRow[i].score = 8
            arrRow[i].numar = -1;
        }
        else if(arrRow[i].x_arrow >= 1220 && arrRow[i].y_arrow < y_target+70 && arrRow[i].y_arrow > y_target -70  ) {
            arrRow[i].speed_arrow = 0;
            arrRow[i].y_arrow += speed_target;
            arrRow[i].score = 6
            arrRow[i].numar = -1;
        }
        else if(arrRow[i].x_arrow >= 1220 && arrRow[i].y_arrow < y_target+100 && arrRow[i].y_arrow > y_target -100  ) {
            arrRow[i].speed_arrow = 0;
            arrRow[i].y_arrow += speed_target;
            arrRow[i].score = 4
            arrRow[i].numar = -1;
        }
        else {arrRow[i].numar = -1
            arrRow[i].score = 0
        }
    }


}

function score2() {
    let numar = 0;
    let score = 0;
    for (let i = 0; i < arrRow.length; i++) {
        score += arrRow[i].score;
    }
    //check level
    if(score>0){
        speed_arrow = 40
        level = 1;
        numar = 5;
    }
    if(score>40){
        speed_arrow = 20
        level = 2;
        numar = 10;
    }
    if(score>80){
        speed_arrow = 10
        level = 3;
        numar = 15;
    }
    if(score>140){
        speed_arrow = 3
        level = 4;
        numar = 20;
    }



    for (let i = 0; i < arrRow.length; i++) {
        numar += arrRow[i].numar;
    }


    document.getElementById('numar').innerText = 10+numar;
    document.getElementById('score').innerText = score;
    document.getElementById('speed').innerText = speed_arrow;
    document.getElementById('level').innerText = level;

    if(10+numar < 1){
        window.location.href = "index.html";
        alert('GAME OVER');
        alert("BẠN ĐÃ ĐẠT " + score);


    }
}


function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    creatcircle()
    movetarget()
    creatcrossbow()
    movecrossbow()
    // creatarrow()
    movearrow()
    painRow();
    checkcrash()
    score2();



}


window.addEventListener("keypress", creatarrow );
window.addEventListener("keypress", playfly);
setInterval(move, 10);