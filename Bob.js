class Bob {
    constructor(x,y,radius) {
      var options ={
         isStatic: false,
         restitution:1.0,
         friction: 5,
         density:0.9
      }
         this.body= Bodies.circle(x,y,radius,options);
         this.width=width;
         this.height=height;
         this.radius=radius;
         
         World.add(world,this.body);
    }
  
    display() {
         var pos= this.body.position;
      push();
         ellipseMode(RADIUS);
       
         fill(1,247,223);
         ellipse(pos.x,pos.y,this.radius,this.radius);
      pop();
     }
  }