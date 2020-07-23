let container;
let scene;
let camera;
let renderer;
const fov = 40;
const near = 0.1;
const far = 20000000;
let flyingSaucer;
let zVel = 0;
let yRot = 0;
let braking = false;
let roll = 0;
let nullRoll = false;
let events = {};

async function init() {
  container = document.querySelector('#container');
  
  scene = new THREE.Scene();
  
  skybox = createSkybox('red_complex', 16, 1000000);
  skybox.position.set(0, 0, 0);
  scene.add(skybox);
  
  loadModel('../assets/models/flying_saucer/flying_saucer.glb', 'flyingSaucer', 0, 0, 0, 1);
  loadModel('../assets/models/asteroid/asteroid.glb', 'asteroids', 0, 0, 0, 2);
  
  createGui();
  createCamera(fov, container.clientWidth, container.clientHeight, near, far, 40, 10, 10);
  createControls();
  createLighting();
  createRenderer(true, window.devicePixelRatio);
  
  console.log(scene);
  window.addEventListener('keydown', onkeydown, false);
  window.addEventListener('keyup', onkeyup, false);
  
  renderer.setAnimationLoop(() => {
    update();
    render();
  });
}

function update() {
  if(scene.getObjectByName('flyingSaucer', true)) {
    scene.getObjectByName('flyingSaucer', true).translateZ(zVel);
    
    if(events['w'] && zVel > -0.2) {
      zVel -= 0.001;
    }

    if(events['s'] && zVel < 0.2) {
      zVel += 0.001;
    }

    if(!events['w'] && !events['s'] && zVel !== 0) {
      if(zVel > 0) {
        zVel -= 0.001;
      } else if(zVel < 0) {
        zVel += 0.001;
      }
    }

    scene.getObjectByName('flyingSaucer', true).rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), yRot);
    scene.getObjectByName('flyingSaucer', true).rotateZ(roll);

    if(events['a'] && yRot < 0.02) {
      yRot += 0.0002;
    }
     
    if(events['d'] && yRot > -0.02) {
      yRot -= 0.0002;
    }

    if(!events['d'] && !events['a'] && yRot !== 0) {
      if(yRot > 0) {
        yRot -= 0.0002;
      } else if(yRot < 0) {
        yRot += 0.0002;
      }
    }
  }
  
  if(scene.getObjectByName('asteroids', true)) {
    
    for(let i = 0; i < 32; i++ ) {
      scene.getObjectByName('asteroids', true).children[i].rotateX(0.0005 + (i * 0.0001));
      scene.getObjectByName('asteroids', true).children[i].rotateY(0.0005 - (i * 0.0001));
    }
  }
}


/*************************/
/******* CONTROLS ****** */

onkeydown = onkeyup = (event) => {
  events[event.key] = event.type == 'keydown';
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
  const star = new THREE.DirectionalLight(0xFFE7BB, 2);
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

    console.log(gltf.scene);
    scene.add(gltf.scene);
  });
}


/****************************/
/*********** Main ***********/

window.addEventListener('resize', onWindowResize);
init();
