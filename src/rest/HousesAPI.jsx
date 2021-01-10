const endpoint = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesAPI {
  async get() {
    try {
      const resp = await fetch(endpoint);
      const data = await resp.json();
      return data;
    } catch(e) {
      console.log('fetchHouses failed.', e)
    }
  }

  async put(house) {
    try {
      const resp = await fetch(`${endpoint}/${house._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(house)
      });
      return await resp.json();
    } catch(e) {
      console.log('Updating houses failed.', e)
    }

  }

}

export const housesAPI = new HousesAPI();