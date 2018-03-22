function Airport() {
  this.hangar = [];
};


Airport.prototype.landed = function() {
  return this.hangar;
};

Airport.prototype._clearToLand = function(plane) {
  var weather = new Weather();
  if (weather.isStormy() == true) {
    alert("Weather is too stormy to land");
  } else {
    plane.planeAction = "land"
    return true
  };
};

Airport.prototype._clearToTakeoff = function(plane) {
  var weather = new Weather();
  if (weather.isStormy() == true) {
    alert("Weather is too stormy to takeoff");
  } else {
    plane.planeAction = "takeoff"
    return true
  };
};
