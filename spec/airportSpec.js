  describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('creates an empty airport', function() {
    expect(airport.hangar).toEqual([]);
  });
});
