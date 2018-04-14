var SNAKE;
var scl = 20;

var eatSound;
var startOverSound;
var changeDirectionSound;

var food;

function preload() {
    eatSound = loadSound("Sounds/Alert/Alert%20-%2006.mp3");
    startOverSound = loadSound("Sounds/Voice/Male/Cartoon%20Laugh%20-%2001.mp3");
    changeDirectionSound = loadSound("Sounds/Woosh/Woosh-Light-01.mp3");
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    changeDirectionSound.playMode('restart');
    SNAKE = new Snake();
    setVolume(0.1);
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
        eatSound.play();
        pickLocation();
    }

    for (var i = 0; i < SNAKE.tail.length; i++) {
        var pos = SNAKE.tail[i];
        var d = dist(SNAKE.x, SNAKE.y, pos.x, pos.y);

        if (d < 1) {
           startOverSound.play();
           SNAKE.x = 0;
           SNAKE.y = 0;
           SNAKE.xspeed = 1;
           SNAKE.yspeed = 0;
           SNAKE.total = 0;
           SNAKE.tail = [];
        }
    }

    SNAKE.update();
    SNAKE.show();

    fill(255, 0, 0);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        changeDirectionSound.play();
        SNAKE.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        changeDirectionSound.play();
        SNAKE.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        changeDirectionSound.play();
        SNAKE.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        changeDirectionSound.play();
        SNAKE.dir(-1, 0);
    }

    if (key === ' ') {
        SNAKE.total++;
    }
}
