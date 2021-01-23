class Chain {
constructor(bodyA,bodyB){
    var options = {bodyA:bodyA,
    bodyB: bodyB,
    length: 50,
    stiffness:0.5
    }
this.chain = Constraint.create(options)
World.add(world,this.chain)
}
display(){
line(this.chain.bodyA.postion.x,this.chain.bodyA.position.y,this.chain.bodyB.postion.x,this.chain.bodyB.position.y)
}

}