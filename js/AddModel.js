import { GLTFLoader } from '../modules/GLTFLoader.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// camera.position.z = 5;
// camera.position.y = 10;
// camera.position.x = 10;

const animate = function () {
requestAnimationFrame( animate );
// camera.rotation.z += 1;
renderer.render( scene, camera );
};
const loader = new GLTFLoader();

loader.load( 'j.glb', function ( gltf ) {

scene.add( gltf.scene );

}, undefined, function ( error ) {

console.error( error );

} );
animate();