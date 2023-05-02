import React, { useState, useEffect } from 'react';


function RandomDogImage() {
  const [dogImageUrl, setDogImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImageUrl(data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={dogImageUrl} alt="Random dog image" />
    </div>
  );
}

export default RandomDogImage;