import React, { Component } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export class PetTexture extends Component {
    
    constructor(props){
		super(props);
        this.uuid = uuidv4();
	}

    render() {

        console.log("Render");

        if(this.props.file){
            this.loadSkin(this.props.file);
        }

        return (
            <div
                className="pettexture"
            >
                <div
                    id={this.uuid}
                    className="render"
                />
            </div>
        )
    }

    async loadSkin(file){
        let skinTexture = await this.loadTexture(file);
        skinTexture.magFilter = THREE.NearestFilter;
        skinTexture.minFilter = THREE.NearestMipMapNearestFilter;

        const material = new THREE.MeshBasicMaterial({
                map: skinTexture,
                side: THREE.FrontSide
            });
        const material2 = new THREE.MeshBasicMaterial({
            map: skinTexture,
            transparent: true,
            opacity: 1,
            alphaTest: 0.5,
            side: THREE.DoubleSide
        });

        if(this.headMesh)
            this.headMesh.traverse(function(node){
                node.material = [material2, material];
            });
    }

    async loadTexture(file){
        return new Promise(resolve => {
            let imageElement = document.createElement("img");
            let texture;
            imageElement.onload = function(e){
                console.log("Skin loaded!");
                texture = new THREE.Texture(this);
                texture.needsUpdate = true;
                resolve(texture);
            }
            getBase64(file, (result) => {
                imageElement.src = result;
            });
        });
    }

    componentDidMount() {
        const resizeFunction = this.resizeCanvasToDisplaySize;

        let renderer = this.renderer;
        let camera = this.camera;

        let element = document.getElementById(this.uuid);

        let width = element.clientWidth;
        let height = width;

        var scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000 );
        camera.position.z = 5;
        renderer = new THREE.WebGLRenderer({alpha: true});
        renderer.setSize(width, height);
        renderer.setPixelRatio( window.devicePixelRatio );
        element.appendChild( renderer.domElement );

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enableKeys = false;
        controls.enablePan = false;

        const setHeadMesh = (object) => {
            this.headMesh = object;
        }

        const loadSkin = () => this.loadSkin(this.textureLink);

        var loader = new OBJLoader();
        loader.load("model/MinecraftHead.obj", function(object){
            object.rotation.y = -2;
            loadSkin();
            setHeadMesh(object);
            scene.add(object);
        });

        var animate = function () {
            requestAnimationFrame( animate );
            resizeFunction(renderer, camera);
            controls.update();
            renderer.render( scene, camera );
        };
        animate();

    }
    resizeCanvasToDisplaySize(renderer, camera) {
        if(!renderer || !camera)
            return;
        const canvas = renderer.domElement;
        const parent = canvas.parentElement;
        const width = parent.clientWidth;
        const height = width;

        if (canvas.width !== width) {
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    }
}

function getBase64(file, cb) {
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default PetTexture

