class Snow{
    constructor(x,y,img){
    var options = {
        airFriction: 0.02
    }
    this.x = x;
    this.y = y;
    this.img = img;
    this.body = Bodies.rectangle(x,y,20,20,options);
    World.add(world,this.body);
    }

display(){
    var pos = this.body.position;
    imageMode(CENTER)
    image(this.img,pos.x,pos.y,20,20);
    
}

}