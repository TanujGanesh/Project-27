class Rope{
    constructor(bodyA,bodyB,osx,osy){
        this.osx=osx;
        this.osy=osy;
       
        var props={
            bodyA:bodyA,
            bodyB:bodyB,
            //pointB:{x:this.osx,y:this.osy},
        }
       
        this.rp=Constraint.create(props);
        World.add(world,this.rp);
    }
    display(){
        var pointA=this.rp.bodyA.position;
        var pointB=this.rp.bodyB.position;
       
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x+this.osx,pointB.y+this.osy);
        pop();
    }
}