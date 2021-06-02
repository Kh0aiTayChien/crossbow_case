class Target {
    x_target;
    y_target;
    speed_target;
    radius;
    constructor(x_target, y_target, radius, speed_target) {
        this.x_target = x_target;
        this.y_target = y_target;
        this.speed_target = speed_target
        this.radius = radius;
    }

    createTarget(ctx) {
        ctx.beginPath();
        ctx.arc(this.x_target, this.y_target, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.lineWidth = 4;
        ctx.moveTo(1290, this.y_target - 100);
        ctx.lineTo(1290, this.y_target + 100);

        ctx.fillStyle = "white";
        ctx.strokeStyle = "brown"
        ctx.stroke();
        ctx.closePath()
    }
}
function creatcircle() {
    target = new Target(1300, y_target, 20, speed_target);
    target.createTarget(ctx)
}
function movetarget() {
    if (target.y_target > canvas.height - 20 || target.y_target < 20) {
        speed_target = -speed_target ;
    }
    y_target += speed_target ;
}