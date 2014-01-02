class Application {

  constructor() {
    this.app = require("express")();
    this.port = 8181;
  }

  run() {
    console.log("Running application... - Port: " + this.port);

    this.initialize_routes();
    this.app.listen(8181);
  }

  initialize_routes() {
    this.app.get("/", HomeController.Hello);
  }
}

class HomeController {

  static Hello(req, res, next) {
      console.log("Hello World!");
      res.status(200);

      if(req.query.name != null){
        res.send("Howdy, welcome to the future - " + req.query.name);
      }
      else {
        res.send("Howdy, welcome to the future!");
      }
      
      return res.end();
  }
}


let app = new Application();
app.run();