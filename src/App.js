import { useRef } from 'react';
import './App.css'


function App() {
const fileInputRef = useRef(null);

const handleButtonClick = () => {
  fileInputRef.current.click();
};

  return (
    <div className='app'>
     <button onClick={handleButtonClick}>Pick a File</button>  
     <input type='file' style={{ display: 'none'}} ref={fileInputRef} />
 </div>
  );
}

export default App;
