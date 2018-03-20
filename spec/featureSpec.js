describe("Dave's Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane('Dave');
  });

  it("checks Dave's three point turn in the hangar", function() {
    airport.land('Dave');
    expect(airport.landed()).toContain('Dave');
  });

  it("checks that the plane is no longer in the hanger after taking off", function(){
    airport.land('Dave');
    airport.takeoff('Dave');
    expect(airport.landed()).toEqual([]);
  });

});
