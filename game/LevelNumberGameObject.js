class LevelNumberGameObject extends GameObject {

  constructor(name, levelNumber) {
    super(name)
    this.levelNumber = levelNumber
  }
  start() {
    
  }
  update() {

  }
  draw() {
    ctx.fillStyle = "black"
    ctx.font = "30px Times New Roman"
    ctx.fillText("Level: " + this.levelNumber, 0, 20)
  }
}