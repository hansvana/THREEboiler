class View {
  constructor() {
      this.camera = this.getCamera();
      this.renderer = this.getRenderer();

      window.addEventListener('resize', e => {
        this.resizeHandler(e.target.innerWidth, e.target.innerHeight);
      });
  }

  /*
   * 'Public' methods
   */

  render(scene) {
    this.renderer.render(scene, this.camera);
  }

  /*
   * 'Private' methods
   */

  resizeHandler(w, h) {
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.camera.useQuaternions = true;
    this.renderer.setSize(w, h);
  }

  /*
   *  'Init' methods
   */

  getCamera() {
    const cam = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    cam.position.z = 5;

    return cam
  }

  getRenderer() {
    const r = new THREE.WebGLRenderer();
    r.setClearColor(0x000000, 1);
    r.setSize(window.innerWidth, window.innerHeight);
    r.shadowMap.enabled = true;
    document.body.appendChild(r.domElement);
    return r;
  }
}

module.exports = View;
