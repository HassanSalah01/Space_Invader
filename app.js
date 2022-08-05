// Canvas setUp
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "black";

const arr = []
const player = new PShip({ x: 350, y: canvas.height - 100, Ctx: ctx });

//Creating The enemies Array
const enemies = ()=>{
  let arr = [];
  let posx = 0;
  let posy = 780;
  let s = 0;
  for (let i = 0 ; i < 6; i++){
    for (let j = 0 ; j<6-i ;j++){
      arr.push(new Ship({ x: 120+posx+s, y: canvas.height- posy,Ctx: ctx }))
      posx+=100;
    }
    posx =0;
    s+=50;
    posy-=80;
}
  return arr;
}
//enemies Array
const enemy = enemies();

// Trigger Game Loop
const main = () => {
    gameLoop();
};

// The Game Loop
const gameLoop = () => {
  window.requestAnimationFrame(gameLoop);
  ctx.clearRect(0, 0, canvas.height, canvas.width);
  player.draw();
  // Drawing The enemies ;
  for (let i of enemy){
    i.draw();
  }
 
  //drawing the bullet - Update it - Check For Collision
  if (arr.length != 0) {
    for (const i of arr) {
      if(i.boll){
        i.update();
        i.coll(enemy);
      }
    }
  }
};

// Key Code For Action 
window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    player.update(30);
  } else if (event.key == "ArrowLeft") {
    player.update(-30);
  } else if (event.key == "a") {
    arr.push(new Bullet(player.x, player.y, ctx));
  }
})

main();
