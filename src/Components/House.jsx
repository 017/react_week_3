import React from 'react';
import { NewRoomForm } from './NewRoomForm';

export const House = (props) => {
  const { house, updateHouse } = props;
  const deleteRoom = (roomID_search) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter(rm => rm._id !== roomID_search)
    };
    updateHouse(updatedHouse)
  }

  const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]});

  const rooms = () => (
    <ul class="list-group">
      {house.rooms.map((room, index) => (
        <li key={index} class="bg-dark text-white border-secondary border-2 list-group-item px-4 mb-3 mt-3 shadow-sm">
          <label class="form-label">{`${room.name} Area: ${room.area}`}</label>
          <button class="btn btn-danger shadow form-control" onClick={(e) => deleteRoom(room._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  return(
    <div class="container px-4 p-3 bg-dark border border-secondary rounded m-2 ml-auto mr-auto shadow-lg">
      <h1 class="text-white bg-darker border border-secondary rounded p-2 mt-2 shadow-sm">{house.name}</h1>
      {
        rooms({ rooms, houseID: house._id, deleteRoom})
      }
      <NewRoomForm addNewRoom={addNewRoom} />
    </div>
  )
}