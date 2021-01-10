import React, { useState } from 'react';

export const NewRoomForm = (props) => {
  const [name, setName] = useState('');
  const [area, setArea] = useState(undefined);

  const handleAreaInput = (e) => {
    const int = parseInt(e.target.value, 10);
    setArea(int >= 0 ? int : "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && area) {
      props.addNewRoom({name, area});
      setName('');
      setArea('');
    } else {
      console.log('invalid input');
    }
  };

  return(
    <div class="container-md gx-5 text-white">
      <h4>Add a new room</h4>
      <form onSubmit={onSubmit}>
        <input 
          class="form-control mt-2 text-black"
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input 
          class="form-control mt-2 text-black"
          type="text"
          placeholder="Enter Area"
          onChange={handleAreaInput}
          value={area}
        />
        <button type="submit" class="btn btn-primary shadow mt-2">Add Room</button>
      </form>
    </div>
  )
}