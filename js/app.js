let container;
let scene;
let camera;
let renderer;
const fov = 40;
const near = 0.1;
const far = 20000000;
let flyingSaucer;

async function init() {
  container = document.querySelector('#container');
  
  scene = new THREE.Scene();
  
  skybox = createSkybox('red_complex', 16, 1000000);
  skybox.position.set(0, 0, 0);
  scene.add(skybox);
  
  loadModel('../assets/models/flying_saucer/flying_saucer.glb', 'flyingSaucer', 0, 0, 0, 1);
  
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid01', 20,   -25,   20, 2);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid02', -20,    0,   30, 5);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid03', -25,   -5,  -30, 1);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid04', 0,     10,  -40, 1);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid05', 60,   -10, -50, 3);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid06', 20,     5, -60, 6);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid07', -40,    5,  10, 2);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroid08', -100, -17,  0,  9);


  
  createGui();
  createCamera(fov, container.clientWidth, container.clientHeight, near, far, 0, 20, 50);
  createControls();
  createLighting();
  createRenderer(true, window.devicePixelRatio);
  
  console.log(scene);

  renderer.setAnimationLoop(() => {
    update();
    render();
  });
  
}

function update() {
  // skybox.rotation.y += 0.0001;
  // if (scene.getObjectByName('flyingSaucer', true)) {
  //   const flyingSaucer = scene.getObjectByName('flyingSaucer', true);
  //   flyingSaucer.rotation.x += 0.0002;
  //   flyingSaucer.rotation.y += 0.0002;
  // }
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

function createSkybox(textureName, aa, size) {
  const textureLoader = new THREE.TextureLoader();
  
  const sides = ['back', 'front', 'top', 'bottom', 'left', 'right'];
  const materialArray = sides.map(side => {
    return new THREE.MeshBasicMaterial({
      map: textureLoader.load('../assets/textures/' + textureName + '/' + textureName + '_' + side + '.png', aa),
      side: THREE.BackSide });
  });
  
  return new THREE.Mesh(
    new THREE.BoxBufferGeometry(size, size, size),
    materialArray,
  );
}

function createCamera(fov, width, height, near, far, x, y, z) {
  camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
  camera.position.set(x, y, z);
}

function createLighting() {
  const star = new THREE.DirectionalLight(0xfcff8a, 2);
  star.position.set(-300, 0, 0);
  scene.add(star);

  const backlight = new THREE.DirectionalLight(0xed81c2, 1);
  backlight.position.set(300000, 0, 0);
  scene.add(backlight);

  const aLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(aLight);
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

function loadModel(modelUrl, name, x, y, z, scale) {
  const loader = new THREE.GLTFLoader();
  loader.load(modelUrl, (gltf) => {
    
    gltf.scene.position.x = x;
    gltf.scene.position.y = y;
    gltf.scene.position.z = z;
    gltf.scene.scale.x = scale;
    gltf.scene.scale.y = scale;
    gltf.scene.scale.z = scale;
    gltf.scene.name = name;

    scene.add(gltf.scene);
  });
}


/****************************/
/*********** Main ***********/

window.addEventListener('resize', onWindowResize);
init();
