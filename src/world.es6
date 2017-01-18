class World {
  constructor() {
    this.worldObject = this.getWorldObject();
    this.lights = this.getLights();
    this.skybox = this.getSkybox();
    this.scene = this.getScene();
  }

  /*
  * 'Public' methods
  */

  update() {
    this.worldObject.rotation.x += 0.01;
    this.worldObject.rotation.z += 0.01;
  }

  /*
   * 'Private' methods
   */

  /*
   *  'Init' methods
   */

  getLights() {
    const lights = [];
    let l;

    l = new THREE.PointLight( 0xffff00, 2, 0 );
    l.position.set( 0, 0, 10 );
    lights.push(l);

    return lights;
  }

  getSkybox() {
    const imagePrefix = "/assets/skybox/images/";
    const directions = ["WEST", "EAST", "TOP", "BOTTOM", "SOUTH", "NORTH"];
    const imageSuffix = ".jpg";

    const skyGeometry = new THREE.BoxGeometry(100, 100, 100);

    const skyMaterialArray = [];
    for (var i = 0; i < 6; i++) {
        skyMaterialArray.push(new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture(imagePrefix + directions[i] + imageSuffix),
            side: THREE.BackSide,
        }));
    }
    const skyMaterial = new THREE.MeshFaceMaterial(skyMaterialArray);

    return new THREE.Mesh(skyGeometry, skyMaterial);
  }

  getScene() {
    const scene = new THREE.Scene();

    this.lights.forEach( l => {
      scene.add(l);
    })

    scene.add(this.skybox);
    scene.add(this.worldObject);

    return scene;
  }

  getWorldObject() {
    return new THREE.Mesh(
      new THREE.BoxGeometry( 1, 1, 1 ),
      new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
    );
  }
}

module.exports = World;
