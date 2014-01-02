var $__Object = Object, $__getOwnPropertyNames = $__Object.getOwnPropertyNames, $__getOwnPropertyDescriptor = $__Object.getOwnPropertyDescriptor, $__getDescriptors = function(object) {
  var descriptors = {}, name, names = $__getOwnPropertyNames(object);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    descriptors[name] = $__getOwnPropertyDescriptor(object, name);
  }
  return descriptors;
}, $__createClassNoExtends = function(object, staticObject) {
  var ctor = object.constructor;
  Object.defineProperty(object, 'constructor', {enumerable: false});
  ctor.prototype = object;
  Object.defineProperties(ctor, $__getDescriptors(staticObject));
  return ctor;
};
var Application = function() {
  'use strict';
  var $Application = ($__createClassNoExtends)({
    constructor: function() {
      this.app = require("express")();
      this.port = 8181;
    },
    run: function() {
      console.log("Running application... - Port: " + this.port);
      this.initialize_routes();
      this.app.listen(8181);
    },
    initialize_routes: function() {
      this.app.get("/", HomeController.Hello);
    }
  }, {});
  return $Application;
}();
var HomeController = function() {
  'use strict';
  var $HomeController = ($__createClassNoExtends)({constructor: function() {}}, {Hello: function(req, res, next) {
      console.log("Hello World!");
      res.status(200);
      if (req.query.name != null) {
        res.send("Howdy, welcome to the future - " + req.query.name + "!");
      } else {
        res.send("Howdy, welcome to the future!");
      }
      return res.end();
    }});
  return $HomeController;
}();
var app = new Application();
app.run();
