class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "green";
    this.life2 = "green";
    this.life3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(25);
    fill("white");
    text("Player", width - 1610, 40);
   //write a correct code to show lives as three green rectangles in a strainght line.
   fill(this.life1);
    rect(width - 1720, 50, 70, 30);
    fill(this.life2);
    rect(width - 1650, 50, 70, 30);
    fill(this.life3);
    rect(width - 1580, 50, 70, 30);
    pop();
  }

 


  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
