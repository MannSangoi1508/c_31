class DustBin {  
    constructor( x, y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=100;
        this.dustbinHeight=106;
        this.wallThickness=1;
        this.image=loadImage("sprites/dustbingreen.png");

this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness, this.dustbinWidth,{isStatic:true})
this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness, this.dustbinHeight,{isStatic:true})
World.add(world,this.bottomBody)
World.add(world,this.leftWallBody)
World.add(world,this.rightWallBody)

        // this.bodyb = Bodies.rectangle(x,y, width, height, );
	    // World.add(world, this.bodyb);
	    // this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,);
	    // World.add(world, this.bodyl);
        // this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,);
        // World.add(world, this.bodyr);
        // this.bodyb.width = width
        // this.bodyb.height = height 
        
        
   }
   display() { 
       var posBottom=this.bottomBody.position; 
       var posLeft=this.leftWallBody.position; 
       var posRight=this.rightWallBody.position; 
       push() 
       translate(posLeft.x, posLeft.y); 
       rectMode(CENTER) 
       strokeWeight(4); 
       angleMode(RADIANS) 
       fill(255) 
       rotate(this.angle)
       rect(0,0,this.wallThickness, this.dustbinHeight); 
       pop() 
       push() 
       translate(posRight.x, posRight.y); 
       rectMode(CENTER) 
       strokeWeight(4); 
       angleMode(RADIANS) 
       fill(255) 
       rotate(-1*this.angle) 
       rect(0,0,this.wallThickness, this.dustbinHeight); 
       pop() 
       push() 
       translate(posBottom.x, posBottom.y+10); 
       rectMode(CENTER) 
       strokeWeight(4); 
       angleMode(RADIANS)
        fill(255) 
        imageMode(CENTER);
         image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight) 
         rect(0,0,this.dustbinWidth, this.wallThickness); 
         pop()
        
         } 
        }
//    display(){
//        fill("white");
//        rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
//        rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
//        rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
//        push();
//     imageMode(CENTER)
//     image(this.image,0,0,this.width,this.height);
//     pop();
//    }
