---
title: WebGL GPU Particles
date: "2014-06-08"
tags: ["code"]
---

Weekend project I started about a month ago, a WebGL GPU particle simulator, simulating 1 million particles at 60 fps!

![WebGL GPU Particles](/portfolio/webglparticles_1.png)

- Live code: http://iamnop.com/particles-mrt/
  - Click to set the gravity point. Hold Alt for Maya camera controls.
  - (Requires webgl_draw_buffers extension. More info on how to enable.)
- Video: https://www.youtube.com/watch?v=IyM0YxizdnY
- GitHub: https://github.com/nopjia/particles-mrt

## Technical Details

This demo can be broken into two parts: 1) the compute and 2) the view.

The compute part is where most of the work happens to simulate the particles. There are three textures representing each of the particles states: position, velocity, and color. Each particle is then represented by a UV coordinate into these textures, essentially a pixel, where its states are stored. A point to note here is that the position and velocity textures have to be float textures in order to represent the large range of numbers. At first I tried scaling up the range of a regular byte texture but there just wasn't enough resolution for the simulation.

The heavy lifting is done through a GLSL shader which I use as a compute shader. It reads in the three state textures (nearest filtering of course, wouldn't make sense otherwise) and performs a simulation step. Then it writes the results back to the corresponding framebuffers, all at once thanks to the webgl_draw_buffers extension. Because OpenGL doesn't allow writing to the same textures that you are reading from, I needed a duplicate set of framebuffers/textures to swap between every frame.

The view part is responsible for the actual drawing of the particles onto the screen. The number of particles is determined by the size of the compute textures (e.g., 1024x1024 textures would give us ~1 million particles!) As mentioned earlier, each particle is represented only by a pixel location in the state textures, so all I had to do for each vertex is to submit a UV coordinate. Then in the vertex shader, I simply use the UV to look up its position from the position texture and its color from the color texture. (The velocity texture is only used by the compute shader to run the simulation and isn't used here.)

In order to ensure smoothness, the simulation runs on a different loop than the rendering. The simulation step has to run at a fixed time step, independent of the frame rate, otherwise a variable time step would introduce irregularities in the simulation, which becomes quite apparent when there are a million particles. Putting the simulation on a fixed update step not only produces smooth results but also allows for consistent results no matter the frame rate.

## WIP!

This is a work in progress, and I'm planning to add more features. Most important is to add support for not having the webgl_draw_buffers extension so any up-to-date browser can run this. Then I'm planning to add a few post-processing effects like ghost trails and bloom to make it look even more awesome. Finally, I'll need better UI to expose more settings to play with!

## Note on Live Demo

It is not guaranteed to work on all machines! The demo is using a draft extension which might not be supported on your hardware. Here's how to try to get it to work:

- Get the latest version of Chrome
- Go to chrome://flags/
- Enable "WebGL Draft Extensions" (chrome://flags/#enable-webgl-draft-extensions)
- For Windows, you might also need to enable D3D11 (chrome://flags/#enable-d3d11)
- If it doesn't work, try again with Firefox? I'm sorry but I promise I will add support for no extension soon!
