describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('creates an empty airport', function() {
    expect(airport.landed()).toEqual([]);
  });

});
