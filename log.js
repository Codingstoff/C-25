class Log extends Baseclass
{
 constructor(logX,logY,height,angle)
  {
    super(logX,logY,20,height)
    Matter.Body.setAngle(this.body,angle)
    this.image=loadImage("sprites/wood2.png")
  }
 
}