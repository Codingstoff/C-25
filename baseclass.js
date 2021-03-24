class Baseclass 
{
  constructor(xpos,ypos,width1,height1)
  {
     var options = { 'restitution':0.8,
                    'friction':1.0,
                    'density':1.0}
     this.body = Bodies.rectangle(xpos,ypos,width1,height1,options);
     this.width = width1;
     this.height = height1;
     this.image = loadImage("sprites/base.png")
     World.add(world,this.body);
   
  }

display()
{
   var position =  this.body.position;
   var angle = this.body.angle;

  push();
   imageMode(CENTER);
   translate(position.x,position.y)
   rotate(angle);
   image(this.image, 0,0,this.width, this.height);
   pop();
}


}