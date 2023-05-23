import React, { useState } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [states, setState] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    axios
    .get(`http://cdn-api.co-vin.in/api/v2/admin/location/states?q=${value}`)
    .then((response) => {
      setState(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <input type="type" value="" placeholder="Search" onChange={handleChange} />
      <ul>
        {states.map((state) => (
          <li key={state.name}>{state.name}</li>
        ))}
      </ul>
      </div>
  );
};

export default App;
