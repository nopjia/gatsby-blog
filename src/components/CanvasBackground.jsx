/* globals THREE */

import React from "react";

class CanvasBackground extends React.Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.update = this.update.bind(this);

    this.bgColor = 0xffffff;
  }

  componentDidMount() {
    this.container = document.getElementById("canvas-wrap");
    this.canvas = document.getElementById("canvas");

    this.w = this.container.clientWidth;
    this.h = this.container.clientHeight;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      stencil: false,
      antialias: false,
    });
    this.renderer.setSize(this.w, this.h);
    this.renderer.setClearColor(this.bgColor);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.w / this.h, 0.01, 100);

    this.camera.position.z = 10;
    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial()
    );
    this.scene.add(this.mesh);

    this.start();
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.update);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(this.update);
  }

  render() {
    return (
      <div id="canvas-wrap">
        <canvas id="canvas" />
      </div>
    );
  }
}

export default CanvasBackground;
