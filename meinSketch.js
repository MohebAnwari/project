const stepSize = 10;
let halfWidth, halfHeight;
let myText = "dies ist ein text: ";

function setup() {
    createCanvas(windowWidth, windowHeight);
    halfWidth = width / 2;
    halfHeight = height / 2;
    rectMode(CENTER);
}


function draw() {
    background("#00ff00");
    //rect(width / 2, height / 2, 300 , 100);
    
    for (let i = 0; i < 10; i++) {
        rect(halfWidth + i * stepSize, halfHeight + i * stepSize, 300 , 100);
        text(myText + i, halfWidth, (i + 1 ) * stepSize);
        push();
        myShape(i * 20, i * 20);
        pop();
    }

    push();
    rectMode(CENTER);
    fill("red");
    translate(width / 2, height / 2);
    square(0, 0, 100);
    pop();
}

windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
    halfWidth = width / 2;
    halfHeight = height / 2;
};

function myShape(offsetX, offsetY) {
    translate(offsetX, offsetY);
    beginShape();
    vertex(20, 20);
    vertex(100, 20);
    vertex(100, 100);
    vertex(60, 80);
    vertex(20, 80);
    endShape(CLOSE);
}  