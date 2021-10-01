// var canvas;
// var h1;

// var x = 100;
// var y = 100;
// function setup(){
//     canvas = createCanvas(200, 200);
//     canvas.position(400, 500);
//     createP("My favorite color is purple.");
    // h1 = createElement("h1", "My favorite number is below");
    // h1 = createElement("h1", "Waiting.");
    //h1.position(400, 600);
// }
// function mousePressed() {
//     h1.html("Now I will show you my favorite number.");
//     createP("My favorite number is " + random(0, 10));
// }
// function draw(){
//     // clear();
//     background(200);
//     fill(255, 0, 0);
//     rect(x, y, 50, 50);
//     h1.position(x, y);
//     x = x + random(-5, 5);
// }

var bgcolor;

function setup(){
    canvas = createCanvas(200, 200);
    bgcolor= color(200);
    button = createButton('go go go');
    button.mousePressed(changeColor);
}

function changeColor() {
    bgcolor = color(random(255));
}

// function mousePressed(){
    // bgcolor = color(random(255));
//     changeColor();
// }

function draw(){
    background(bgcolor);
    fill(255, 0, 175);
    rect(100, 100, 50, 50);
}