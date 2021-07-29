#ifdef GL_ES
precision highp float;
#endif

uniform vec2 canvasResolution;
uniform float minI;
uniform float maxI;
uniform float minR;
uniform float maxR;
varying vec2 vPos;

// Thsse are passed in as a uniform from the sketch.js file
uniform vec2 p;
uniform float r;
uniform float angle;
const int I = 500;
const float offset = -0.25;

void main(){
    
    // fractal code
    vec2 vPos = vec2(
		gl_FragCoord.x * (maxR - minR) / canvasResolution.x + minR,
		gl_FragCoord.y * (maxI - minI) / canvasResolution.y + minI
	);
    vec2 c = p - (vPos) * r, z = c;
    float n = 0.0;
    
    for (int i = I; i > 0; i --) { 
      if(z.x*z.x+z.y*z.y > 4. ) { 
        n = float(i)/float(I); 
        break;
      } 
      z = vec2((z.x*z.x-z.y*z.y)+(0.7885 * cos(angle)), (2.0*z.x*z.y)-(sin(angle))); 
    } 
    gl_FragColor=vec4(0.5-cos(n*75.0)/2.0,0.5-cos(n* 120.0)/2.0,0.5-cos(n*165.0)/2.0,1.0);
}