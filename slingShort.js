class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        
        this.sling3 = loadImage('images/sling3.png')
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ();
           
            stroke (48, 22, 8)
            if(pointA.x >150) {
                strokeWeight(7);
                line(pointA.x-10, pointA.y, pointB.x+30, pointB.y);
            pop ();
            }
        
        }

    
    }
    
}