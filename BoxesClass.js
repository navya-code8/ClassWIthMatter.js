
class Boxes{

    constructor(x,y,width,height){
        this.color = "yellow";
        this.body = body.rectangle(x,y,width,height, {restitution:1});
        world.add(abWorld, this.body);
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color)
        rect(pos.x, pos.y, this.width, this.height);
        

    }
}