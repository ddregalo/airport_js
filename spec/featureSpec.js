describe("Dave's Airport", function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane('Dave');
    weather = new Weather();
  });

  it("checks that plane action is equal to land on _clearToLand", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    airport._clearToLand(plane);
    expect(plane.planeAction).toEqual('land');
  });

  it("checks that plane action is equal to takeoff on _clearToTakoff", function() {
    spyOn(Math, "random").and.returnValue(0.3);
    airport._clearToTakeoff(plane);
    expect(plane.planeAction).toEqual('takeoff');
  });
  //
  // it("checks that the plane is no longer in the hanger after taking off", function(){
  //   airport.land('Dave');
  //   airport.takeoff('Dave');
  //   expect(airport.landed()).toEqual([]);
  // });

});
