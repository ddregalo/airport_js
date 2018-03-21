function Weather() {};

Weather.prototype.isStormy = function() {
  if (Math.floor(Math.random() * 10) > 7) {
    return true;
  } else {
    return false;
  };
};
