describe('', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane('Dave');
  });

  it('checks a new plane has a name property', function() {
    expect(plane.name).toEqual('Dave');
  });

  it('checks a new plane has a planeAction property', function() {
    expect(plane.planeAction).toEqual("");
  });
});
