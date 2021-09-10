class Stone extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("images/stone1.png");
    }
    
  
    display() {
     
      super.display();
      Matter.Body.setStatic(this.body,false)
      Matter.Body.setVelocity(this.body,{x:-50,y:20})
  
    }
  }
  