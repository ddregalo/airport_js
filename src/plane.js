function Plane(name) {
  this.name = name;
  this.planeAction = ""
  this.planeStatus = "flying"
};

Plane.prototype.land = function(airport) {
  this.planeStatus = "landed"
};
