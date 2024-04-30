import React, { useEffect } from 'react';
import "./Recordvideo.css"
const Recordvideo = () => {
  // useEffect(() => {
  //   // Event listener for key presses
  //   document.addEventListener('keydown', event => {

  //     fetch('http://127.0.0.1:5000/save', {
  //       method: 'POST'
  //     })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to save image');
  //       }
  //       console.log('Image saved successfully');
  //     })
  //     .catch(error => {
  //       console.error('Error saving image:', error);
  //     });
  //   });
  // }, []);


  return (
    <div>
      <iframe
          src="https://chat.openai.com/c/62cc455e-8d94-4079-9f69-90bb3f74868b"
          title="Embedded Webpage"
          width="100%"
          height="500px"
          frameBorder="0"
          scrolling="auto"
        ></iframe>

    </div>
  );
};

export default Recordvideo;
