let position = 0;
let julia;
let minI = -1.0;
let maxI = 1.0;
let minR = -1.5;
let maxR = 1.5;

let p5Canvas;

function preload() {
  julia = loadShader("assets/julia.vert", "assets/julia.frag");
}

function setup() {
  p5Canvas = createCanvas(1920, 1080, WEBGL);
  noStroke();
}

function draw() {
  //Set Canvas Coordinates
  julia.setUniform("minI", minI);
  julia.setUniform("maxI", maxI);
  julia.setUniform("minR", minR);
  julia.setUniform("maxR", maxR);
  // 'iResolution sets the GLSL canvas resolution'
  julia.setUniform("canvasResolution", [width, height]);
  // 'p' is the center point of the Mandelbrot image
  julia.setUniform("p", [0, 0]);
  // 'r' is the size of the image in Mandelbrot-space
  julia.setUniform("r", 1.75);
  // 'angle' sets the coordinate at which julia set is computed
  julia.setUniform("angle", position);
  quad(-1, -1, 1, -1, 1, 1, -1, 1);
  shader(julia);

  position += 0.01;

  if (pos > TWO_PI) {
    noLoop();
  }
}
