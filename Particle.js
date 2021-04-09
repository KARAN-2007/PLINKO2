class Particle{
    constructor(x,y){
        var options={
            isStatic:false
        }
        this.radius=10
        this.body=Bodies.rectangle(x,y,this.radius,options)
        
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0,0,this.radius)
        pop()
    }
}