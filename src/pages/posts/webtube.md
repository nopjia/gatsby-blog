---
title: WebTube
date: "2013-05-16"
tags: ["code"]
---

Here is a long overdue post that I finally got around to write now that school is over! Over the weekend of January 18-20th, I attended the [Spring 2013 PennApps Hackathon](http://2013s.pennapps.com), the largest student-run hackathon on the east coast, organized by no other than the University of Pennsylvania. Since this was to be my last PennApps Hackathon (this being my 5th time), I decided to have fun over the weekend, hang out with people, and do something fun.

I made WebTube, a fun little web app that lets you browse the internet through the comfort of an old-school CRT TV.

The reception turned out much better than I had expected. I came into the hackathon only to have some fun and not expecting anything. In the end, WebTube won 3rd place overall and Audience Choice Award!

- Video: http://www.youtube.com/watch?v=8ZUCyN6yvps
- Live code: https://www.iamnop.com/webtube/ (must enable CSS Shaders flag in Chrome)

![WebTube](/portfolio/webtube_1.jpg)

## Technical Details

The core component of this web app is CSS Shaders, which allows access to programmable vertex and fragment shaders for HTML DOM elements. CSS Shaders are an extension to CSS Filters, which are a set of image filters available for CSS, such as grayscale, sepia, brightness/contrast, hue/saturation, etc. CSS Shaders are essentially custom filters that can be controlled through vertex and fragment shaders. This allows for a much greater freedom and very interesting CSS animations and CSS transitions. (See CSS FilterLab for live examples.) Please see related links below for more information related to CSS Shaders.

With understanding of CSS Shaders, WebTube is a very simple app. It has one main DOM for the screen, which allows for different modes, including web and SSH terminal. Multiple CSS transition rules are applied to the screen using CSS Shaders. The vertex shader warps the screen to produce the curvature and the fragment shader applies TV-like effects on the screen.

## Links

- http://www.adobe.com/devnet/html5/articles/css-shaders.html
- http://html.adobe.com/webplatform/graphics/customfilters/cssfilterlab/
- http://alteredqualia.com/css-shaders/article/
- https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html#shading-language
