describe('', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane('Dave');
    airport = jasmine.createSpy('airport');
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
  });
});
