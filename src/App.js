import React, { useState } from "react";
import axios from "axios";
import './App.css';


const App = () => {
  const [states, setState] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    axios
    .get('http://cdn-api.co-vin.in/api/v2/admin/location/states')
    .then((response) => {
      const filtreStates = response.data.states.filter((state) =>
      state.state_name.toLowerCase().startsWith(value.toLowerCase())
      );
      setState(filtreStates);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <input
       type="text" value="" 
       placeholder="Search"
        onChange={handleChange}
         />
      <ul>
        {states.map((state) => (
          <li key={state.state_id}>{state.state_name}</li>
        ))}
      </ul>
      </div>
  );
};

export default App;
