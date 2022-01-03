class Ground{
    constructor(x,y,width,height){
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.body)
    this.width = width
    this.height = height
    }

    show(){
        var pose = this.body.position
        fill ('red')
        rect(pose.x,pose.y,this.width,this.height)
    }
}