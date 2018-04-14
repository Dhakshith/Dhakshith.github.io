let angle = 0;
let w = 40;
let ma;
let maxD;
let heigh;

function setup() {
    createCanvas(windowWidth - 15, windowHeight - 15, WEBGL);
    ma = atan(1 / sqrt(4));
    maxD = dist(0, 0, 75, 75);
    heigh = w * 10;
}

function draw() {
    background(100);
    ortho(-1000, 1000, 1000, -1000, -2200, 2200);
    rotateX(QUARTER_PI);
    rotateY(-QUARTER_PI)﻿

    for (let z = 0; z < heigh; z += w) {
        for (let x = 0; x < heigh; x += w) {
            push();
            let d = dist(x, z, heigh / 2, heigh / 2);
            let offset = map(d, 0, maxD, -1, 1);
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, w * 5, w * 30));
            translate(x - heigh / 2, 0, z - heigh / 2);
            normalMaterial();
            noStroke();
            box(w, h, w);
            pop();
        }
    }
  
    angle -= 0.05;
}
