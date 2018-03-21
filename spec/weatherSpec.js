describe('Weather', function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe('isStormy', function(){
    it('returns true if stormy', function() {
      spyOn(Math, "random").and.returnValue(0.9);
      expect(weather.isStormy()).toEqual(true);
    });

    it('returns false if not stormy', function(){
      spyOn(Math, "random").and.returnValue(0.3);
      expect(weather.isStormy()).toEqual(false);
    });

  });

});
