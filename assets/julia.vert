#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aPosition;
varying vec2 vPos;
// Always include this to get the position of the pixel and map the shader correctly onto the shape

void main(){
    
    // Send the vertex information on to the fragment shader
    gl_Position=vec4(aPosition,1.);
    
    vPos=gl_Position.xy;
    
}