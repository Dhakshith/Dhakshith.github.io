function Firework() {
	colorMode(HSB);
	
	this.Hueeeeee = random(360);
	this.Firework = new Particle(random(width), height, this.Hueeeeee, true);
	this.Exploded = false;
	this.Particls = [];

	this.done = function() {
		if (this.Exploded && this.Particls.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	this.update = function() {
		if (this.Exploded == false) {
			this.Firework.applyForce(Gravity);
			this.Firework.update();

			if (this.Firework.vel.y >= random(0.25)) {
				this.Exploded = true;
				this.Explode();
			}
		}

		for (var i = this.Particls.length - 1; i >= 0; i--) {
			this.Particls[i].applyForce(Gravity);
			this.Particls[i].update();

			if (this.Particls[i].done()) {
				this.Particls.splice(i, 1);
			}
		}
	}

	this.Explode = function() {
		// Blast.play();
		
		for (var i = 0; i < 100; i++) {
			 colorMode(HSB);
		     var p = new Particle(this.Firework.pos.x, this.Firework.pos.y, this.Hueeeeee);
		     this.Particls.push(p);
		}
	}

	this.show = function() {
		if (this.Exploded == false) {
			this.Firework.show();
		}

		for (var i = 0; i < this.Particls.length; i++) {
			this.Particls[i].show();
		}
	}
}