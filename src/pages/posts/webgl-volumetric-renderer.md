---
title: WebGL Volumetric Renderer
date: "2012-09-20"
tags: ["code"]
---

![WebGL Volumetric Renderer](/portfolio/volumetric.png)

- Live code: https://www.iamnop.com/WebGL-Volumetric/
- Video: http://www.youtube.com/watch?v=VPhnwOpmUqY
- GitHub: https://github.com/nopjia/WebGL-Volumetric

As a small side project, I implemented volumetric ray casting in WebGL. The idea is to ray cast a 3D texture, which should be very fast since OpenGL texture lookups are highly optimized; however, this is not doable since 3D textures are not allowed in WebGL.

During SIGGRAPH 2012, I met Luis Kabongo from VICOMTech, who showed me their [implementation](http://demos.vicomtech.org/volren/) of a WebGL volume renderer, which they use for medical imaging. They made it possible by, instead of using a 3D texture, using a 2D texture atlas, which is made up of 2D texture slices. This is a very simple solution. I immediate took this idea and implemented my own version.

VICOMTech's volume renderer is for simply viewing 3D datasets, so they implemented it using alpha compositing with no lighting.

I took it a step further for my own renderer and implemented physically-based volume rendering. The lighting model is based on light transmittance. I introduced multiple lights into the scene and use exponential fall-off to calculate transmittance.

As a result, the renderer features physically-based lighting, volumetric shadows, and support for multiple lights. The results turned out very nicely.
