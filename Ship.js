class Ship {

  constructor(ob) {
    this.x = ob.x;
    this.y = ob.y;
    this.r = 40;
    this.ctx = ob.Ctx;
    this.color = "red";
    this.r = 40;
  }

  draw() {
    this.ctx.clearRect(this.x, this.y, this.r, this.r);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.r, this.r);
  }

  update(xSpeed) {
    this.ctx.clearRect(this.x, this.y, this.r, this.r);
    this.x += xSpeed;
    this.draw();
  }
}