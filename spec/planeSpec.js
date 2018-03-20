describe('', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane('Dave');
  });

  it('checks a new plane is a plane', function() {
    expect(plane.name).toEqual('Dave');
  });

});
