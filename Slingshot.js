class Slingshot{

    constructor(body1,pointb){
        var options=
    {
        bodyA: body1,
        pointB: pointb,
        stiffness: 0.04,
        length: 10
    }
    
    this.Sling=Constraint.create(options);
    World.add(world,this.Sling); 
    }
    fly(){
        this.Sling.bodyA=null;
        
    }

    display(){
        if(this.Sling.bodyA){
        
        var A=this.Sling.bodyA.position;
        var B=this.Sling.pointB;
        console.log(B.x)
        line(A.x,A.y,B.x,B.y)
        }
    }
}
