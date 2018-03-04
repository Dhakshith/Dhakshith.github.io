function Laser(spaceShip) {
  	this.ToBeDrawn = true;

  	if (this.ToBeDrawn) {
	  	this.pos = createVector(spaceShip.pos.x + spaceShip.heading, spaceShip.pos.y);
		this.vel = p5.Vector.fromAngle(spaceShip.heading);
	  	this.vel.mult(7.5);

	  	if (this.ToBeDrawn) {
		  	this.update = function() {
		    	this.pos.add(this.vel);
		  	}
		  
		  	this.render = function() {
			  	if (this.ToBeDrawn) {
			    	push();

				    stroke(255, 0, 0);
				    strokeWeight(4);
				    point(this.pos.x, this.pos.y);

				    pop();
				}
		  	}

		  	this.hits = function(asteroid) {
		    	var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);

		    	for (var i = 0; i < asteroid.offset.length; i++) {
		    		if (d < asteroid.r + asteroid.offset[i]) {
		    			return true;
		    	    } else {
		    			return false;
		    		}
		    	}
		  	}

		  	this.offscreen = function() {
		    	if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
		      		return true;
		    	}

		    	return false;
		  	}
		}
	}
}
