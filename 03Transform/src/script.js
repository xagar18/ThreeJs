import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector(".webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);

const group = new THREE.Group();
// group.position.y = -1;
group.scale.y = 2;
// group.rotation.x = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "orange" })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "yellow" })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
cube3.position.x = 2;
group.add(cube3);

//position

// mesh.position.x = 0.7; //right
// mesh.position.y = -2; //down
// mesh.position.z = 1; //closer to camera
// scene.add(mesh);

// mesh.position.set(0.7, -2, 1); //alternate method (x,y,z)

// mesh.position.normalize(); //reset lenght to 1 move to 1

// console.log(mesh.position.length());

//Scale
// mesh.scale.x = 0.6;
// mesh.scale.y = 1.2;
// mesh.scale.z = 0.5;
// mesh.scale.set(0.6, 1.2, 0.5);

//axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

//Rotation(y,x,z)
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x = Math.PI * 0.3
// mesh.rotation.y = Math.PI
// mesh.rotation.z = Math.PI * 0.3

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
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

//camera look
//camera.lookAt(new THREE.Vector3(3,0,0)) //camera is lokking in x direction 3 units
// camera.lookAt(mesh.position) //camera lokking at mesh object

// console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
