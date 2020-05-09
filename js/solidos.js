var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#3E5880");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create the shape
var geometry = new THREE.BoxGeometry(1, 1, 1);

// create a material, colour or image texture
var quant = 50;
var material = new THREE.MeshBasicMaterial({color: 0x78AEFF, wireframe: false});
var figures = [new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material),
               new THREE.Mesh(geometry, material)];

for (i = 0; i < quant; i++) {
    figures[i].position.x = (Math.random() - 0.5) * 10;
    figures[i].position.y = (Math.random() - 0.5) * 10;
    figures[i].position.z = (Math.random() - 0.5) * 10;
    scene.add(figures[i]);
}

camera.position.z = 3;

var light = new THREE.PointLight(0x000000, 10, 100); // Color, Intensity, Distance
light.position.set(0, 0, 25); // X, Y, Z
scene.add(light);

// logic
var update = () => {
    for (i = 0 ; i < quant; i++) {
        figures[i].rotation.x += 0.0001 * i;
        figures[i].rotation.y += 0.0001 * i;
    }
};

// draw scene
var render = () => {
    renderer.render(scene, camera);
};

// run game loop (udpate, render, repeat)
var GameLoop = () => {
    requestAnimationFrame(GameLoop);
    update();
    render();
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
});

GameLoop();