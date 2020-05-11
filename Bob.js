class Bob{
    constructor(x,y){
      var options = {
         restitution: 1,
         gravity: 10
      }
        this.body = Bodies.circle(x,y,90,options);
        this.radius = 90;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("#3ddcc6");
        ellipse(pos.x, pos.y, this.radius);
    }
};