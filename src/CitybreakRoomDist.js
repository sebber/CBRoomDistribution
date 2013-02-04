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
    

  var i, roomList;

  this.execute = function() 
  {
    resetAllRoomsToZero();
    calculatePeoplePerRoom();

    return roomListArrayToString();
  };

  function resetAllRoomsToZero()
  {
    roomList = [];
    for(i = 1; i <= rooms; i++) {
      roomList.push(0);
    }
  }

  function calculatePeoplePerRoom()
  {
    while(thereIsPeopleLeft())
    {
      for(i = 0; i <= maxRoomIndex(); i++)
      {
        distributePersonToRoom(i);

        if(! thereIsPeopleLeft()) {
          break;
        }
      } 
    }
  }

  function distributePersonToRoom(index)
  {
    roomList[index] += 1;
    people--;
  }

  function roomListArrayToString()
  {
    return roomList.join('r');
  }

  function thereIsPeopleLeft()
  {
    return people > 0; 
  }

  function maxRoomIndex()
  {
    return roomList.length - 1
  }

}
