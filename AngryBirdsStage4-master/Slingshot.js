class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.slingi = loadImage("sprites/sling1.png");
        this.slingo = loadImage("sprites/sling2.png");
        this.slingx = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
attach(body){
this.sling.bodyA=body


}
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.slingi,200,20)
        image(this.slingo,170,20)
       

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8);
        
            if (pointA.x<220) {
              strokeWeight(10);  
              line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
              line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
              image(this.slingx,pointA.x-30,pointA.y-10,15,30);

            } else {
                strokeWeight(3);
                line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
              line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
              image(this.slingx,pointA.x+25,pointA.y-10,15,30);
            }
        }
    }
    
}