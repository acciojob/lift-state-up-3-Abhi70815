import React from 'react';

const ChildComponent2 = ({ option }) => {
  return (
    <div style={{width:"90%", height:"100px",backgroundColor:"yellow",margin:"auto"}}>
      <h1>Child Component 2</h1>
      <button onClick={() => option('Option 2')}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;