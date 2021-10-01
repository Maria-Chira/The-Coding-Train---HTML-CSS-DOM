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
var slider;
var nameInput;
var nameP;

function setup(){
    canvas = createCanvas(200, 200);
    canvas.mouseOver(overPara);
    canvas.mouseOut(outPara);
    canvas.mousePressed(changeColor);

    bgcolor= color(200);
    nameP = createP("Your name!");

    button = createButton('go');
    button.mousePressed(changeColor);
    slider = createSlider(10, 100, 47);
    nameInput = createInput("type your name");

    
    nameP.mouseOver(overPara);
    nameP.mouseOut(outPara);

    nameInput.changed(updateText);
}

function updateText(){
    nameP.html(nameInput.value());
}

function overPara(){
    nameP.html("your mouse is over me!");
}

function outPara(){
    nameP.html("your mouse is out");
}
function changeColor() {
    bgcolor = color(random(255));
}


function draw(){
  background(bgcolor);
  fill(255, 0, 175);
  ellipse(100, 100, slider.value(), slider.value());
  // nameP.html(nameInput.value());
  text(nameInput.value(), 10, 10);
}