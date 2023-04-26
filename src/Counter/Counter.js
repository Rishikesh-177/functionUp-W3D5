

import { useState } from 'react';

const Counter = () => {
    const [count, setCount] =useState(0);

    function incrementData() {
       
 setCount (count+1);
        
    }

    function decrementData (){
       count!== 0 ? setCount(count-1) : setCount(0); 

        
        
    };

  return (
    <div> 
      <button onClick={incrementData}> Increment Data</button>
<p> Count increment = {count} </p>
<button onClick = {decrementData}> Decrement Data </button>
    </div>
    
  );
};

export default Counter
