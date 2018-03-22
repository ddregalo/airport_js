function Plane(name) {
  this.name = name;
  this.planeAction = ""
  this.planeStatus = "flying"
};

Plane.prototype.land = function(airport) {
  this.planeStatus = "landed";
  this.planeAction = "";
  airport.hangar.push(this)
};

Plane.prototype.takeoff = function(airport) {
  this.planeStatus = "flying";
  this.planeAction = "";
  var index = airport.hangar.indexOf(this);
  airport.hangar.splice(index, 1)
};
