let container;
let scene;
let camera;
let renderer;
const fov = 40;
let aspect;
const near = 0.1;
const far = 20000000;
let gui;
let cube0;
let cube1;
let controls;
let p38;

function init() {
  container = document.querySelector('#container');
  
  scene = new THREE.Scene();

  let textureLoader = new THREE.TextureLoader();
  const ft = textureLoader.load("../assets/textures/purple_space_skybox/purple_space_front5.png", 16);
  const bk = textureLoader.load("../assets/textures/purple_space_skybox/purple_space_back6.png", 16);
  const up = textureLoader.load("../assets/textures/purple_space_skybox/purple_space_top3.png", 16);
  const dn = textureLoader.load("../assets/textures/purple_space_skybox/purple_space_bottom4.png", 16);
  const rt = textureLoader.load("../assets/textures/purple_space_skybox/purple_space_right1.png", 16);
  const lf = textureLoader.load("../assets/textures/purple_space_skybox/purple_space_left2.png", 16);
  
  let materialArray = [
    new THREE.MeshBasicMaterial({map: rt, side: THREE.BackSide}),
    new THREE.MeshBasicMaterial({map: lf, side: THREE.BackSide}),
    new THREE.MeshBasicMaterial({map: up, side: THREE.BackSide}),
    new THREE.MeshBasicMaterial({map: dn, side: THREE.BackSide}),
    new THREE.MeshBasicMaterial({map: ft, side: THREE.BackSide}),
    new THREE.MeshBasicMaterial({map: bk, side: THREE.BackSide}),
  ];

  skybox = new createMesh(
    new THREE.BoxBufferGeometry(10000000, 10000000, 10000000),
    materialArray,
    5, 1, 0
  );

  loadModel(
    '../assets/models/p38Lightning/completeP38.glb'  
  );
  
  createGui();
  createCamera(fov, container.clientWidth, container.clientHeight, near, far, 0, 20, 50);
  createControls();
  createLights(5, 5, 5, 3);
  createRenderer(true, window.devicePixelRatio);
    
  renderer.setAnimationLoop(() => {
    update();
    render();
  });
}

function update() {
  
}

function render() {
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function stop() {
  renderer.setAnimationLoop(null);
}

/* CREATOR FUNCTIONS */
/*********************/

function createCamera(fov, width, height, near, far, x, y, z) {
  camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
  camera.position.set(x, y, z);
}

function createLights(x, y, z, intensity) {
  const dLight = new THREE.DirectionalLight(0xffffff, intensity);
  dLight.position.set(x, y, z);
  // const aLight = new THREE.HemisphereLight(0xddeeff, 0x202020, intensity);

  const aLight = new THREE.AmbientLight(0xffffff, intensity);
  
  scene.add(aLight);
  scene.add(dLight);
}

function createRenderer(aa, ratio) {
  renderer = new THREE.WebGLRenderer({antialias: aa});
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(ratio);
  renderer.physicallyCorrectLights = true;
  container.appendChild(renderer.domElement);
}

function createControls() {
  controls = new THREE.OrbitControls(camera, container);
}

function createGui() {
  gui = new dat.GUI();
}
  

/* MESH OBJECTS */
/****************/

function loadTexture(texUrl, AF) {
  const loader = new THREE.TextureLoader();
  const texture = loader.load(texUrl);
  texture.encoding = THREE.sRGBEncoding;
  texture.anisotropy = AF;

  return texture;
}

function createMesh(geometry, material, x, y, z) {
  const mesh = new THREE.Mesh(geometry, material);
  
  mesh.position.x = x;
  mesh.position.y = y;
  mesh.position.z = z;
  
  scene.add(mesh);
  
  return mesh;
}

function loadModel(modelUrl, vector3) {
  const loader = new THREE.GLTFLoader();
  loader.load(modelUrl, (gltf) => {
    console.log(gltf);

    p38 = gltf.scene.children;

    scene.add(gltf.scene);
  });
}


/****************************/
/*********** Main ***********/

window.addEventListener('resize', onWindowResize);
init();
