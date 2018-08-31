---
title: CUDA Path Tracer
date: "2013-07-25"
tags: ["code"]
---

My last school project, ever! (Hopefully!)

![CUDA Path Tracer](/portfolio/cudatracer_1.jpg)

- GitHub: https://github.com/nopjia/tracer
- Video: http://www.youtube.com/watch?v=mbpqxlJHaBE

This was my first ever attempt at writing a path tracer, and of course, making things real-time (or at least somewhat) is always more fun. It was something I've always wanted to do. I learned a whole lot about physically based rendering, for obvious reasons. But I also learned a lot about coding in CUDA and its in's and out's, which involved writing a lot of pure C code and writing nifty inline structs and functions for both host and device uses.

Although, the renderer doesn't have fancy features, I'm quite happy with it. Despite the lack of acceleration structures, it still runs at ~20fps, and converges around 30 seconds, on my laptop. The next area of improvement would definitely be adding a kd-tree, in order to support larger scenes.

Finally, as usual, I decided to make things interesting by making it interactive. Being able to easily modify the scene on the fly really makes it more fun and creates lots of interesting images.

- Interactive real-time path tracer in CUDA
- Advanced Rendering Seminar
- University of Pennsylvania, Spring 2013
