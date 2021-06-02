class Arrow {
    x_arrow;
    y_arrow;
    speed_arrow;
    score = 0;
    numar = 1;
    constructor(x_arrow, y_arrow, speed_arrow) {
        this.x_arrow = x_arrow;
        this.y_arrow = y_arrow;
        this.speed_arrow = speed_arrow;

    }

    creatArrow(ctx) {
        let imgArrow1 = document.getElementById("arrowimg");
        ctx.drawImage(imgArrow1, this.x_arrow, this.y_arrow, 100, 10)
    }
}
let arrRow = [];

function creatarrow() {
    if(!isPlaying || countTime < RELOAD )return;
    let arrow1 = new Arrow(x_arrow, y_crossbow + 60, speed_arrow);
    arrRow.push(arrow1);
    count++;
    countTime = 0;
    if(count > LIMIT){
        isPlaying = false;
    }

}

function movearrow() {
    for (let i = 0; i < arrRow.length; i++) {
        arrRow[i].x_arrow += arrRow[i].speed_arrow;
    }
}

function painRow() {

    for (let i = 0; i < arrRow.length; i++) {
        arrRow[i].creatArrow(ctx);
    }
}