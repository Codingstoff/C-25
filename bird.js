class Bird extends Baseclass
{
    constructor (birdx,birdy)
    {
      super(birdx,birdy, 50, 50);
      this.image = loadImage("sprites/bird.png");
         
        
    }
    
    display()
    {
      super.display()
      var position = this.body.position;
      position.x = mouseX;
      position.y = mouseY;


    }
}