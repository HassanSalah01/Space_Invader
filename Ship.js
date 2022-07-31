class Ship {

  constructor(ob) {
    this.x = ob.x;
    this.y = ob.y;
    this.r = ob.r;
    this.ctx = ob.Ctx;
  }

  draw() {
    this.ctx.clearRect(this.x, this.y, this.r, this.r);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.r, this.r);
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 20, this.y);
    this.ctx.lineTo(this.x + 20, this.y - 20);
    this.ctx.stroke();
  }

  update(xSpeed) {
    this.ctx.clearRect(this.x, this.y, this.r, this.r);
    this.x += xSpeed;
    this.draw();
  }
}