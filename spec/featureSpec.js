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

});
