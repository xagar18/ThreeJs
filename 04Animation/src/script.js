import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

let time = Date.now();

const clock = new THREE.Clock();

//gsap
// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
// gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 });

//Animation
const tick = () => {
  //Update objects moving
  // mesh.position.x -= 0.01
  // mesh.position.y += 0.01

  //time
  const currTime = Date.now();
  const deltaTime = currTime - time;
  //console.log(deltaTime);

  //clock
  const elapsedTime = clock.getElapsedTime();
  //  console.log(elapsedTime); //starts with 0

  time = currTime;

  //rotating
  //mesh.rotation.x += 0.01; //rotating acc to framerates
  //mesh.rotation.y += 0.001 * deltaTime; //acording to time it will rotate
  // mesh.rotation.y = elapsedTime;
  // mesh.rotation.y = elapsedTime * Math.PI *2;
  // mesh.position.y = elapsedTime;

  //moving
  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = Math.cos(elapsedTime);

  //moving camera
  // camera.position.y = Math.sin(elapsedTime); //camera is moving
  //camera.position.x = Math.cos(elapsedTime);
  //camera.lookAt(mesh.position);

  //Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
