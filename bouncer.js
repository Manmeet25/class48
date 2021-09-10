class Bouncer{
    constructor(x,y,r1){
        var options={
            isStatic: true,
        }
        this.body= Bodies.circle(x,y,r1,options);
        this.r1 = r1
        this.image=loadImage("images/trampo.png")
        
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position
       image(this.image,pos.x,pos.y,this.r1,this.r1-40);

    }

}