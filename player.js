class Player{
  constructor(x,y,width,height){
      var options={
          isStatic:true,
          
  }
  this.body = Bodies.rectangle(x,y,width,height,options)
  this.image = loadImage("images/boy2.png");
  this.width = width;
  this.height = height;
  World.add(world,this.body)
  }
  display(){
      imageMode(CENTER);
      var pos = this.body.position
      image(this.image,pos.x,pos.y,this.width,this.height)


  }

  
}
      
