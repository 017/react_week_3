import React, { Component } from 'react';
import { HousesList } from './Components/HousesList'
document.body.classList.add('bg-darker');

class App extends Component {
  render() {
    return(
      <div>
        <HousesList />
      </div>
    )
  }
}
export default App;