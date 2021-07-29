# Julia set with GLSL shaders and P5JS

## This repository contains the code to render oscillating julia set using GLSL shaders which use GPU for faster computations.
----
![Julia Set Render](/render/julia-set-render-1280x720.gif)
----
## Pseudocode - Wikipedia
----
[Julia Set](https://en.wikipedia.org/wiki/Julia_set)

    R = escape radius  # choose R > 0 such that R**2 - R >= sqrt(cx**2 + cy**2)

    for each pixel (x, y) on the screen, do:   
    {
        zx = scaled x coordinate of pixel # (scale to be between -R and R)
           # zx represents the real part of z.
        zy = scaled y coordinate of pixel # (scale to be between -R and R)
           # zy represents the imaginary part of z.

        iteration = 0
        max_iteration = 1000

        while (zx * zx + zy * zy < R**2  AND  iteration < max_iteration) 
        {
            xtemp = zx * zx - zy * zy
            zy = 2 * zx * zy  + cy 
            zx = xtemp + cx

            iteration = iteration + 1 
        }

        if (iteration == max_iteration)
            return black;
        else
            return iteration;
    }

## How to
----
- Clone the repository.
- Start a local live server.
- Open the **index.html** file from the server.
- Main code for is in **script.js** file for reference or editing.
- The code for shaders in **assets/** folder. These shaders do the mathematical computations.

### [Link to a high-res render on youtube](https://youtu.be/IW83XP_MnRA)
