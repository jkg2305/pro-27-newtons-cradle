class Roof{
    constructor(x,y,r)
    {
        var options={
'restitution':1.4,
'friction':1.0,
'density':1.0
        }

this.x=x;
this.y=y;
this.r=r;
this.body.Bodies.rectangle(this,x,this.y,options)
World.add(world,this.body);

    }
    display()
    {
var roof =this.body.position;
push()
translate(roof.x,roof.y)
rectMode(CENTER)
fill();
pop()
    }
}