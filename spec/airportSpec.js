describe('Airport', function() {

  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('creates an empty airport', function(){
    expect(airport.hangar).toEqual([]);
  });

  describe('landed', function(){
    it('returns the array of planes in hangar', function(){

    });
  });

  describe('_clearToLand', function(){
    it('returns true to plane', function(){
      expect(airport._clearToLand()).toEqual(true)
    });
  });

});
