import React from 'react';
import '../styles/Loader.css';

function Loader() {
  return (
    <div className="loader">
      <div className="plane">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Loader;