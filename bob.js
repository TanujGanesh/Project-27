class Bob{
    constructor(x,y,rd){
        var opt={
           //isStatic:false, 
           //restitution:0.1,
           //friction:2.5,
           //density:0.6
        }
        
        this.rd = rd;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x,y,rd/2);
        World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        push();
        fill("pink");
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.rd);
        //circle(0,0,this.rd);
        pop();
    }
}