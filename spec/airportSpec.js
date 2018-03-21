describe('Airport', function() {
  var airport;
  var weather;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = new Weather();
  });

  it('creates an empty airport', function(){
    expect(airport.hangar).toEqual([]);
  });

  describe('landed', function(){
    it('returns the array of planes in hangar', function(){
      expect(airport.hangar).toEqual([]);
    });
  });

  describe('_clearToLand', function(){
    it('returns true to plane for landing', function(){
      spyOn(Math, "random").and.returnValue(0.3);
      expect(airport._clearToLand(plane)).toEqual(true);
    });

    it('alert if weather too stormy for landing', function(){
      spyOn(Math, "random").and.returnValue(0.9);
      spyOn(window, 'alert');
      airport._clearToLand(plane);
      expect(window.alert).toHaveBeenCalledWith('Weather is too stormy to land');
    });
  });

  describe('_clearToTakeoff', function() {
    it('returns true for plane to takeoff', function() {
      spyOn(Math, "random").and.returnValue(0.3);
      expect(airport._clearToTakeoff(plane)).toEqual(true);
    });

    it('alert if weather is too stotmy to takeoff', function() {
      spyOn(Math, "random").and.returnValue(0.9);
      spyOn(window, 'alert');
      airport._clearToTakeoff(plane);
      expect(window.alert).toHaveBeenCalledWith("Weather is too stormy to takeoff");
    });
  });
});


// var outerSpace = diamond.outerSpace.bind(diamond, 'D', 'C');
//     expect(outerSpace).toThrow('Invalid combination of arguments');
