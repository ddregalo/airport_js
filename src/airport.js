function Airport() {
  this.hangar = [];
};

Airport.prototype.landed = function() {
  return this.hangar;
};

Airport.prototype._clearToLand = function(plane) {
  return true
};

Airport.prototype.takeoff = function(plane) {
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1)
};
