import * as THREE from "three";
import { Mesh, Vector3 } from "three";
const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(1, 1, 1);

// const material = new THREE.MeshBasicMaterial({
//   color: "#f33f34",
// });

// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);
const sizes = {
  height: 600,
  width: 800,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);
// camera.lookAt(mesh.position);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas,
});

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// mesh.position.set(0.7, -0.6, 1);

// Axes Helper

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 1;
// mesh.scale.x = 2;
// mesh.scale.set(2, 0.5, 0.5);

// // Rotation
// mesh.rotation.y = Math.PI / 2;
// mesh.rotation.x = 0.3;

// Grouping objects

const group = new THREE.Group();
scene.add(group);
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "gold" })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
group.add(cube1);
group.add(cube2);
group.add(cube3);
cube2.position.x = -1;
cube3.position.x = 1;

// console.log(mesh.position.distanceTo(camera.position));
// mesh.position.normalize();
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Animations
const clock = new THREE.Clock();

const tick = () => {
  // use Normal clock
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   time = currentTime;
  // Update Objects
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
  group.rotation.y = (elapsedTime * Math.PI) / 4;
  group.position.x = Math.sin(elapsedTime);
  group.position.y = Math.cos(elapsedTime);
  group.position.z = Math.tan(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.lookAt(group.position);

  // Renderer
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};
tick();
