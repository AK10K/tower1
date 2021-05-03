class slingshot {

    constructor(bodyAvalue,pointBvalue){

        var option = {

            bodyA:bodyAvalue ,
            pointB:pointBvalue ,
            stiffness:0.04,
            length:10,
        }
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.chain = Constraint.create(option)
        World.add(world,this.chain)
    }
    display(){
        //image(this.sling1,200,20)
        //image(this.sling2,170,20)
        if(this.chain.bodyA){
        strokeWeight(5)
        stroke(48,22,8)
        line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.chain.pointB.x-10,this.chain.pointB.y)
        //line(this.chain.bodyA.position.x-20,this.chain.bodyA.position.y,this.chain.pointB.x+30,this.chain.pointB.y-3)
    
    }
    }
    fly(){
        this.chain.bodyA=null
    }
}
