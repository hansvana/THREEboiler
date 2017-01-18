const View = require('./view.es6');
const World = require('./world.es6');

class Controller {
    constructor(a, b) {
        this.view = new View();
        this.world = new World();

        this.mainLoop();
    }

    mainLoop() {
      window.requestAnimationFrame(() => {
       this.mainLoop();
      });

      this.world.update();
      this.view.render(this.world.scene);
    }
}

document.addEventListener("DOMContentLoaded", e => {
    let c = new Controller();
});
