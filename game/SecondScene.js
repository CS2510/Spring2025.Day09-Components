//Game-specific classes
class SecondScene extends Scene {
    

  start() {
      this.gameObjects.push(new PlayerGameObject("Player Game Object"))
      this.gameObjects.push(new GuardGameObject("Guard Game Object", 200))
      this.gameObjects.push(new GuardGameObject("Guard Game Object", 250))
      this.gameObjects.push(new GuardGameObject("Guard Game Object", 300))
      this.gameObjects.push(new ScoreGameObject("Score Game Object"))
      this.gameObjects.push(new LevelNumberGameObject("Level Number Game Object", 2))
      this.gameObjects.push(new ControllerGameObject2("Controller Game Object 2"))

      for(let gameObject of this.gameObjects){
          gameObject.start()
      }
  }

  update() {

      for(let gameObject of this.gameObjects){
          gameObject.update()
      }


  }
  draw() {

      //Engine drawing code
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for(let gameObject of this.gameObjects){
          gameObject.draw()
      }

  }
}