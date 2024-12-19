import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

// Scene
const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 1;
scene.add(camera);

// Renderer
const canvaelem = document.querySelector(".xyz");
const renderer = new THREE.WebGLRenderer({
  canvas: canvaelem,
});
renderer.setSize(sizes.width, sizes.height);

// Render the scene once
renderer.render(scene, camera);
