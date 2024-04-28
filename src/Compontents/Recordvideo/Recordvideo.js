import React, { useEffect } from 'react';
import "./Recordvideo.css"
const Recordvideo = () => {
  useEffect(() => {
    // Event listener for key presses
    document.addEventListener('keydown', event => {

      fetch('http://127.0.0.1:5000/save', {
        method: 'POST'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save image');
        }
        console.log('Image saved successfully');
      })
      .catch(error => {
        console.error('Error saving image:', error);
      });
    });
  }, []);


  return (
    <div>
      <h1>Live Video Stream</h1>
      <img src="http://127.0.0.1:5000/video" alt="Live video" />
    </div>
  );
};

export default Recordvideo;
