class PShip extends Ship{
    constructor(obj){
        super(obj);
        this.r = 80;
        this.color = "grey";
    }
    draw(){
        this.ctx.clearRect(this.x, this.y, this.r, this.r);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.r, this.r);
        this.ctx.strokeStyle = "blue";
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x + 40, this.y);
        this.ctx.lineTo(this.x + 40, this.y - 40);
        this.ctx.stroke();
    }


}