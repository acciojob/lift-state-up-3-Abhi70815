import React from 'react';

const ChildComponent1 = ({ option }) => {
  return (
    <div style={{width:"90%", height:"100px",backgroundColor:"red",margin:"auto"}}>
      <h1>Child Component 1</h1>
      <button onClick={() => option('value 1')}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;