import { useState, useRef, useEffect } from 'react';
import React from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const imageRef = useRef(null);

  const handleButtonClick = () => {
    const randomImageUrl = `https://picsum.photos/800/600/?random=${Math.floor (Math.random() * 1000
    )}`;
    setImageUrl(randomImageUrl);
  };

  // Update the image source when the imageUrl state changes
  useEffect(() => {
    if (imageUrl) {
      imageRef.current.src = imageUrl;
    }
  }, [imageUrl]);

  return (
    <div className="App">
      <img ref={imageRef} alt="random" />
      <button onClick={handleButtonClick}>Change Image</button>
    </div>
  );
}

export default App;
