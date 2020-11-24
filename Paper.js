class Paper {  
    constructor(x, y, r){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':5.0,
            'isStatic' : false
        }
        this.x=x;
        this.y=y;
         this.r = r;

        this.body = Bodies.circle(this.x, this.y, (this.r-20), options);
        this.image=loadImage("sprites/paper.png");
        World.add(world, this.body);
        
        
   }
   display(){
    //fill("black");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    var paperpos=this.body.position;
    push();
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER);
    fill(255,0,255);
    imageMode(CENTER)
    image(this.image,0,0,50,50);
    pop();
   }
}
