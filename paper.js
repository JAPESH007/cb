class paper{
constructor(x,y,r){
var options= {
isStatic:false,
"restitution":0.3,
"friction":0.3,
"density":1.2
    
}

this.body =Bodies.circle(x,y,r,options);
this.r =r
World.add(world,this.body)
}
display(){



    fill("red")
    circle(this.body.position.x,this.body.position.y,this.r)
}



}