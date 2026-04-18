const viewer = document.getElementById("viewer");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
600/400,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(600,400);

viewer.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(1,1,1);
scene.add(light);

const loader = new THREE.STLLoader();

let currentMesh;
let volume = 0;

document.getElementById("file").addEventListener("change",loadModel);

function loadModel(e){

const file = e.target.files[0];

const url = URL.createObjectURL(file);

loader.load(url,function(geometry){

if(currentMesh) scene.remove(currentMesh);

geometry.computeVertexNormals();

const material = new THREE.MeshStandardMaterial({
color:0x3b82f6
});

const mesh = new THREE.Mesh(geometry,material);

currentMesh = mesh;

scene.add(mesh);

camera.position.z = 100;

calculateVolume(geometry);

animate();

});

}

function animate(){

requestAnimationFrame(animate);

if(currentMesh) currentMesh.rotation.y += 0.01;

renderer.render(scene,camera);

}

function calculateVolume(geometry){

const positions = geometry.attributes.position.array;

let sum = 0;

for(let i=0;i<positions.length;i+=9){

const ax = positions[i];
const ay = positions[i+1];
const az = positions[i+2];

const bx = positions[i+3];
const by = positions[i+4];
const bz = positions[i+5];

const cx = positions[i+6];
const cy = positions[i+7];
const cz = positions[i+8];

sum += signedVolume(ax,ay,az,bx,by,bz,cx,cy,cz);

}

volume = Math.abs(sum)/1000;

document.getElementById("volume").innerText =
volume.toFixed(2);

updatePrice();

}

function signedVolume(ax,ay,az,bx,by,bz,cx,cy,cz){

return (
ax*by*cz +
ay*bz*cx +
az*bx*cy -
az*by*cx -
ay*bx*cz -
ax*bz*cy
)/6;

}

function updatePrice(){

const material = document.getElementById("material").value;

const density = {
pla:1.24,
petg:1.27,
abs:1.04
};

const cost = {
pla:8,
petg:10,
abs:12
};

const weight = volume * density[material];

const price = weight * cost[material];

document.getElementById("weight").innerText =
weight.toFixed(1);

document.getElementById("price").innerText =
price.toFixed(0);

}

document.getElementById("material")
.addEventListener("change",updatePrice);

function addToCart(){

const cart = JSON.parse(localStorage.getItem("cart") || "[]");

cart.push({

volume:volume,
weight:document.getElementById("weight").innerText,
price:document.getElementById("price").innerText

});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}