import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'; // Import your Main component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main /> {/* Render your Main component */}
  </React.StrictMode>
);