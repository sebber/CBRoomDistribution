describe('Citybreak Room Distribution Simple Test Suite', function() {

  it('CitybreakRoomDist "class"-function should be defined', function() {
    expect(CitybreakRoomDist).toBeDefined();
  });

  describe('New instance', function() {

    it('should demand number of people and rooms', function() {
      var instanceWithoutParams = function()        { new CitybreakRoomDist()       };
      var instanceWithOnlyPeopleParam = function()  { new CitybreakRoomDist(1);     };
      var instanceWithBothParams = function()       { new CitybreakRoomDist(1, 1);  };

      expect(instanceWithoutParams).toThrow();
      expect(instanceWithOnlyPeopleParam).toThrow();
      expect(instanceWithBothParams).not.toThrow();
    });

    it('should demand integer arguments', function() {
      var instanceWithPeopleParamAsString = function()    { new CitybreakRoomDist('wrong', 1) };
      var instanceWithPeopleParamHasDecimal = function()  { new CitybreakRoomDist(1.5, 1)     };
      var instanceWithRoomsParamAsString = function()     { new CitybreakRoomDist(1, 'wrong') };
      

      expect(instanceWithPeopleParamAsString).toThrow();
      expect(instanceWithPeopleParamHasDecimal).toThrow();
      expect(instanceWithRoomsParamAsString).toThrow();
    });

  });

  describe('Excecution of Citybreak Room Distribution', function() {

    it('should expect parameters', function() {
      var instanceWithoutParams = function()        { new CitybreakRoomDist() };
      expect(instanceWithoutParams).toThrow();

      var instanceWithParams = function()        { new CitybreakRoomDist(1, 1) };
      expect(instanceWithParams).not.toThrow();
    });

    it('should return "1" when given 1 people and 1 room', function() {
      expect(new CitybreakRoomDist(1, 1).execute()).toMatch('1');
    });

    it('should just return the same number of people when given "n"-number of people and 1 room', function() {
      for(var i = 1; i >= 10; i++)
        expect(new CitybreakRoomDist(i, 1).execute()).toMatch(i);
    });

    it('should return "2r1" when given 3 people and 2 rooms', function() {
      expect(new CitybreakRoomDist(3, 2).execute()).toMatch('2r1');
    });

    it('should return "2r2" when given 4 people and 2 rooms', function() {
      expect(new CitybreakRoomDist(4, 2).execute()).toMatch('2r2');
    });

    it('should return "2r2r1" when given 5 people and 3 rooms', function() {
      expect(new CitybreakRoomDist(5, 3).execute()).toMatch('2r2r1');
    });

    it('should return "3r3r2" when given 8 people and 3 rooms', function() {
      expect(new CitybreakRoomDist(8, 3).execute()).toMatch('3r3r2');
    });

    it('should return "2r1r1r1r1r1" when given 7 people and 6 rooms', function() {
      expect(new CitybreakRoomDist(7, 6).execute()).toMatch('2r1r1r1r1r1');
    });

    it('should return "4r4r4" when given 12 people and 3 rooms', function() {
      expect(new CitybreakRoomDist(12, 3).execute()).toMatch('4r4r4');
    });

  });

});