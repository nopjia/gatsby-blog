/* globals THREE */

import React from "react";

// constants
const _CAM_FOV = 45;
const _CAM_Z = 12;
const _BBOX_HSIZE = new THREE.Vector3(10, 10, 10);
const _GEO_URL = `${__PATH_PREFIX__}/models/icosahedron.json`;
const _MESH_COUNT = 20;
const _AVEL_RANGE = 1.0;
const _VEL_RANGE = 1.0;
const _SCROLL_SPEED = 0.01;

class CanvasBackground extends React.Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.update = this.update.bind(this);

    this.colorMain = 0x0;
    this.colorBg = 0xffffff;
    this._lastTime = Date.now();
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
    console.log("CanvasBackground unmount");
  }

  init() {
    console.log("CanvasBackground init");

    this.w = this.mount.clientWidth;
    this.h = this.mount.clientHeight;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      stencil: false,
      antialias: true,
    });
    this.renderer.setSize(this.w, this.h);
    this.renderer.setClearColor(this.colorBg);
    this.mount.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      _CAM_FOV,
      this.w / this.h,
      0.01,
      100
    );

    this.initScene();

    this.start();
  }

  update() {
    const dt = this.calcDeltaTime();
    this.updateScene(dt);
    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(this.update);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.update);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  initScene() {
    this.camera.position.z = _CAM_Z;

    // init bbox
    this.bbox = new THREE.Box3(
      _BBOX_HSIZE.negate().clone(),
      _BBOX_HSIZE.negate().clone()
    );

    // fog
    const totalDepth = _CAM_Z + _BBOX_HSIZE.z;
    const fogNear = -0.8 * totalDepth;
    const fogFar = 1.0 * totalDepth;
    this.scene.fog = new THREE.Fog(this.colorBg, fogNear, fogFar);

    // light
    const light = new THREE.DirectionalLight(0xffffff, 1.0);
    light.position.set(1, 2, 1);
    this.scene.add(light);
    this.scene.add(new THREE.AmbientLight(0x888888));

    // materials
    const matLine = new THREE.MeshBasicMaterial({
      color: this.colorMain,
      wireframe: true,
    });
    const matFill = new THREE.MeshLambertMaterial({
      color: this.colorBg,
      polygonOffset: true,
      polygonOffsetFactor: 1.0,
    });

    // debug box
    this.bboxMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), matLine);
    this.bbox.getCenter(this.bboxMesh.position);
    this.bbox.getSize(this.bboxMesh.scale);
    this.scene.add(this.bboxMesh);

    // load meshes
    this.meshes = [];
    const loader = new THREE.JSONLoader();
    loader.load(_GEO_URL, (geo) => {
      for (let i = 0; i < _MESH_COUNT; i += 1) {
        const meshLine = new THREE.Mesh(geo, matLine);
        const meshFill = new THREE.Mesh(geo, matFill);

        const size = this.bbox.getSize(new THREE.Vector3());
        const randPos = new THREE.Vector3(
          size.x * Math.random() + this.bbox.min.x,
          size.y * Math.random() + this.bbox.min.y,
          size.z * Math.random() + this.bbox.min.z
        );
        meshLine.position.copy(randPos);
        meshFill.position.copy(randPos);

        const randAVel = [
          _AVEL_RANGE * Math.random() - _AVEL_RANGE / 2.0,
          _AVEL_RANGE * Math.random() - _AVEL_RANGE / 2.0,
          _AVEL_RANGE * Math.random() - _AVEL_RANGE / 2.0,
        ];
        meshLine.avel = randAVel;
        meshFill.avel = randAVel;

        const randVel = [
          _VEL_RANGE * Math.random() - _VEL_RANGE / 2.0,
          _VEL_RANGE * Math.random() - _VEL_RANGE / 2.0,
          _VEL_RANGE * Math.random() - _VEL_RANGE / 2.0,
        ];
        meshLine.vel = randVel;
        meshFill.vel = randVel;

        this.meshes.push(meshLine);
        this.meshes.push(meshFill);
        this.scene.add(meshLine);
        this.scene.add(meshFill);
      }
    });
  }

  updateScene(dt) {
    const { meshes, bbox } = this;

    // update meshes anim
    for (let i = 0; i < meshes.length; i += 1) {
      meshes[i].rotation.x += meshes[i].avel[0] * dt;
      meshes[i].rotation.y += meshes[i].avel[1] * dt;
      meshes[i].rotation.z += meshes[i].avel[2] * dt;

      meshes[i].position.x += meshes[i].vel[0] * dt;
      meshes[i].position.y += meshes[i].vel[1] * dt;
      meshes[i].position.z += meshes[i].vel[2] * dt;
    }

    // check mesh wrap
    for (let i = 0; i < meshes.length; i += 2) {
      if (!bbox.containsPoint(meshes[i].position)) {
        const mesh1 = meshes[i];
        const mesh2 = meshes[i + 1];

        if (mesh1.position.x > bbox.max.x)
          mesh1.position.x = mesh2.position.x = bbox.min.x;
        else if (mesh1.position.x < bbox.min.x)
          mesh1.position.x = mesh2.position.x = bbox.max.x;
        if (mesh1.position.y > bbox.max.y)
          mesh1.position.y = mesh2.position.y = bbox.min.y;
        else if (mesh1.position.y < bbox.min.y)
          mesh1.position.y = mesh2.position.y = bbox.max.y;
        if (mesh1.position.z > bbox.max.z)
          mesh1.position.z = mesh2.position.z = bbox.min.z;
        else if (mesh1.position.z < bbox.min.z)
          mesh1.position.z = mesh2.position.z = bbox.max.z;
      }
    }

    // calc scroll
    const currY = window.pageYOffset;
    if (this._lastPageY === undefined) {
      this._lastPageY = currY;
    }
    const dy = _SCROLL_SPEED * (currY - this._lastPageY);
    this._lastPageY = currY;

    this.camera.position.y -= dy;
    bbox.min.y -= dy;
    bbox.max.y -= dy;
    if (this.bboxMesh) {
      this.bbox.getCenter(this.bboxMesh.position);
      this.bbox.getSize(this.bboxMesh.scale);
    }
  }

  calcDeltaTime() {
    const currTime = Date.now();
    const dt = 0.001 * (currTime - this._lastTime);
    this._lastTime = currTime;
    return dt;
  }

  render() {
    return (
      <div
        id="canvas-wrap"
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default CanvasBackground;
