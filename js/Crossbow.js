class Crossbow {
    x_crossbow;
    y_crossbow;
    speed_crossbow;
    arrows;
    constructor(x_crossbow, y_crossbow, speed_crossbow) {
        this.x_crossbow = x_crossbow;
        this.y_crossbow = y_crossbow;
        this.speed_crossbow = speed_crossbow;
        this.reloadTime = 10;
        this.count = 0;
        this.arrows = [];
    }

    creatCrossbow(ctx) {
        let imgCrossbow1 = document.getElementById("crossbowimg");
        ctx.drawImage(imgCrossbow1, this.x_crossbow, this.y_crossbow, 100, 100)
    }

}
crossbow1 = new Crossbow(1, y_crossbow, speed_crossbow);


function creatcrossbow() {
    crossbow1.y_crossbow = y_crossbow;
    crossbow1.creatCrossbow(ctx);
}
function movecrossbow() {
    if (crossbow1.y_crossbow > canvas.height-60|| crossbow1.y_crossbow < 10) {
        speed_crossbow = -speed_crossbow;
    }
    y_crossbow += speed_crossbow
    countTime++;
}