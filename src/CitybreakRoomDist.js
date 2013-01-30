function CitybreakRoomDist(people, rooms) {
  "use strict";

  /* Helpers */
  function isInt(value) { 
    return !isNaN(parseInt(value,10)) && (parseFloat(value,10) === parseInt(value,10)); 
  }

  /* Library-specific Exceptions */
  function MissingArgumentException (msg) { 
    return { name: 'MissingArgumentException', message: msg }; 
  }
  function WrongTypeException (msg) { 
    return { name: 'WrongTypeException', message: msg }; 
  }


  people = people || 0;
  rooms = rooms || 0;

  if(people === 0) {
    throw new MissingArgumentException('People is missing');
  }
  if(rooms === 0) {
    throw new MissingArgumentException('There is no rooms picked');
  }      
  if(!isInt(people)) {
    throw new WrongTypeException('People is not an integer');
  }      
  if(!isInt(rooms)) {
    throw new WrongTypeException('Rooms is not an integer');
  }
    

  this.execute = function() 
  {
    var i, string, perRoom, roomList = [];
    
    for(i = 1; i <= rooms; i++) {
      roomList.push(0);
    }

    while(people > 0)
    {
      for(i = 0; i <= (roomList.length - 1); i++)
      {
        roomList[i] += 1;
        people--;

        if(people <= 0) {
          break;
        }
      } 
    }


    string = roomList[0];
    for(i = 1; i <= (roomList.length - 1); i++) {
      string += 'r'+ roomList[i];
    }
      

    return string;
  };

}