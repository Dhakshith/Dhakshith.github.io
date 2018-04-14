var SNAKE;
var scl = 20;

var food;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    SNAKE = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(51);

    if (SNAKE.eat(food)) {
        pickLocation();
    }

    SNAKE.death();
    SNAKE.update();
    SNAKE.show();

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        SNAKE.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        SNAKE.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        SNAKE.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        SNAKE.dir(-1, 0);
    }
}