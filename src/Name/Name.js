import React, { useState } from 'react'


const NameUpdate = () => {
    const [name, setName] = useState('');

const handleSubmit = (event) => {
    event.default();
    const input = event.target.name.value;
    setName(input);
    event.target.name.value= '';
}
const namehide= name ? '*'.repeat(name.length): '**';

  return (
    <div className='container'>
        <h1> Hey, My name is, {namehide}</h1>
        <form onSubmit={handleSubmit} > 
        <label htmlFor='name'> Enter your name:</label>
        <input type='text' id='name' name='name' placeholder='Your Name' required />
        <button type='submit' > Submit </button>
        
        
        </form>
      
    </div>
  );
}

export default NameUpdate;
