class StaticRect{
    constructor(x,y){
      var options = {
         isStatic: true
      }
        this.body = Bodies.rectangle(x,y,600,30,options);
        this.width = 600;
        this.height = 30;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("#3ddcc6");
        rect(pos.x, pos.y, this.width,this.height);
    }
};