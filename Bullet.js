class Bullet {
  static s = 0;
  constructor(x, y, ctx) {
    this.ship1 = x;
    this.ship2 = y;
    this.v = 0;
    this.boll = true;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(this.ship1 + 40, this.ship2 - this.v);
    this.ctx.lineTo(this.ship1 + 40, this.ship2 - 30 - this.v);
    this.ctx.stroke();
  }
  update() {
    //console.log(`This ship1 = ${this.ship1} This ship2 = ${this.ship2-this.v}`)
    if (this.ship2 - this.v > 0) {
      this.v += 5;
      this.draw();
    } else {
      this.boll = false;
     
    }
  }
  coll(enemies){
    for(let i of enemies){
      if(this.ship1 >=i.x-40 && this.ship1 <=i.x && this.ship2-this.v <=i.y+70){
        this.boll=false;
        i.x = 0-40;
        i.y = 0-40;
        Bullet.s+=1;
        console.log(Bullet.s)
      }
    }
  }
}
