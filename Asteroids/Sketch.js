var ship;
var asteroids = [];
var lasers = [];
var Score = 0;

function setup() {
 	var canv = createCanvas(windowWidth, windowHeight);
 	canv.position(0, 0);

 	ship = new Ship();
 	
 	for (var i = 0; i < 5; i++) {
    	asteroids.push(new Asteroid());
  	}
}

function draw() {
  	background(0);

  	for (var i = 0; i < asteroids.length; i++) {
	    asteroids[i].render();
	    asteroids[i].update();
	    asteroids[i].edges();
  	}

    CheckHit();

  	for (var i = lasers.length - 1; i >= 0; i--) {
    	lasers[i].render();
    	lasers[i].update();

    	if (lasers[i].offscreen()) {
      		lasers.splice(i, 1);
    	} else {
      		for (var j = asteroids.length - 1; j >= 0; j--) {
        		if (lasers[i].hits(asteroids[j])) {
      				Score += 100;

          			if (asteroids[j].r > 20) {
            			var newAsteroids = asteroids[j].breakup();
            			asteroids = asteroids.concat(newAsteroids);
          			}

          			asteroids.splice(j, 1);
          			lasers.splice(i, 1);
          			break;
        		}
      		}
    	}
  	}

  	ship.render();
  	ship.turn();
  	ship.update();
  	ship.edges();

  	push();

	textSize(50);
	fill(0, 255, 0);
	text("Score : " + Score, 10, 50);

	pop();

	if (asteroids.length <= 8) {
        for (var b = asteroids.length - 1; b >= 0; b--) {
            if (asteroids[b].r > 20) {
                var EighthNewAsteroid = asteroids[b].breakup();
                asteroids = asteroids.concat(EighthNewAsteroid);
            }
        }
	}

    if (asteroids.length <= 4) {
        asteroids.push(new Asteroid());
    }
}

function CheckHit() {
    for (var i = 0; i < asteroids.length; i++) {
        if (ship.hits(asteroids[i])) {
            if (Score > 0) {
                Score -= 1;
            }
        }
    }
}

function keyReleased() {
 	ship.setRotation(0);
 	ship.boosting(false);
}

function keyPressed() {
 	if (key == ' ') {
    	lasers.push(new Laser(ship));
  	} else if (keyCode == RIGHT_ARROW) {
    	ship.setRotation(0.026);
  	} else if (keyCode == LEFT_ARROW) {
    	ship.setRotation(-0.026);
  	} else if (keyCode == UP_ARROW) {
    	ship.boosting(true);
  	}
}
