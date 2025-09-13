import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const cubeGeometry = new THREE.BoxGeometry( 3, 3, 3 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xeb4034 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial);
cube.position.set( 0, 5, -7);
scene.add( cube );

const coneGeometry = new THREE.ConeGeometry( 5, 5, 32 );
const coneMaterial = new THREE.MeshBasicMaterial( {color: 0x8934eb} );
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set( 0, 0, -7);
scene.add( cone );

const cylinderGeometry = new THREE.CylinderGeometry( 2.5, 2.5, 10, 32 );
const cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xfc4eb4} );
const cylinder = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
scene.add( cylinder );
cylinder.position.set( -12, 0, -10);

const sphereGeometry = new THREE.SphereGeometry( 3, 32, 16 );
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x057320 } );
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add( sphere );
sphere.position.set( 12, -1, -10);

const ringGeometry = new THREE.TorusGeometry(2,0.5,16,100);
const ringMaterial = new THREE.MeshBasicMaterial( {color: 0x197564 } );
const ring = new THREE.Mesh( ringGeometry, ringMaterial);
scene.add( ring );
ring.position.set(0,-8,-10);


camera.position.z = 5;

var cylinderTargetPosition = -15;
var sphereTargetPosition = 10;

function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cone.rotation.y += 0.01;

    if(cylinder.position.z > cylinderTargetPosition) {
        cylinder.position.z -= 0.05;
    } else {
        cylinder.position.z = -10;
    }

    if(sphere.position.y < sphereTargetPosition) {
        sphere.position.y += 0.05;
    } else {
        sphere.position.y = -1;
    }

    ring.rotation.x += 0.01;

    renderer.render( scene, camera );

}