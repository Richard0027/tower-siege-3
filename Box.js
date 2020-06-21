class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.Visiblity = 255;
  }
  
  score(){
    console.log(this.Visiblity);
    if(this.Visiblity < 0 && this.Visiblity > -1005){
     score = score + 1;
    }
  }

  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 4.5){
    super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
    }
    
  }
};
