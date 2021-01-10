import React from 'react';
import { House } from './House';
import { housesAPI } from '../rest/HousesAPI.jsx';

export class HousesList extends React.Component {
  state = {
    houses: []
  };

  componentDidMount() {
    this.fetchHouses();
  }
  
  fetchHouses = async () => {
    const houses = await housesAPI.get();
    this.setState({ houses });
  };
  
  updateHouse = async (updatedHouse) => {
    await housesAPI.put(updatedHouse);
    this.fetchHouses();
  };
  
  render() {
    return(
      <div className="house-list">
        {this.state.houses.map((house) => (
          <House 
            house={house}
            key={house._id}
            updateHouse={this.updateHouse}
          />
        ))}
      </div>
    )
  }
}