describe('Plane', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane('Dave');
    airport = new Airport();
    // airport = jasmine.createSpy('airport'); learn how to stub an object and its properties and methods to isolate tests.
  });

  it('checks a new plane has a name property', function() {
    expect(plane.name).toEqual('Dave');
  });

  it('checks a new plane has a planeAction property', function() {
    expect(plane.planeAction).toEqual("");
  });

  it('checks a new plane has a planeStatus property', function() {
    expect(plane.planeStatus).toEqual("flying");
  });

  describe('land', function() {
    it('should set planeStatus to landed', function() {
      plane.land(airport);
      expect(plane.planeStatus).toEqual("landed");
    });

    it('should reset planeAction to empty string', function() {
      plane.land(airport);
      expect(plane.planeAction).toEqual("");
    });

    it('should add the plane to the airport hangar', function() {
      plane.land(airport);
      expect(airport.hangar).toEqual([plane]);
    });
  });

  describe('takeoff', function() {
    it('should set the planeStatus to flying', function() {
      plane.takeoff(airport);
      expect(plane.planeStatus).toEqual("flying");
    });

    it('should set the planeAction to empty string', function() {
      plane.takeoff(airport);
      expect(plane.planeAction).toEqual("");
    });

    it('should remove the plane from the airport hangar on takeoff', function() {
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.hangar).toEqual([]);
    });
  });
});
