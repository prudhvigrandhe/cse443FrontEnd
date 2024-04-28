import React, { useRef, useEffect } from 'react';

function Newtest() {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };

    const openCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    };

    openCamera();

    return () => {
      // Cleanup: release camera stream
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  // Function to capture a frame from the video and send it to the backend
  const captureFrame = async () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;

    if (!video) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const frameData = canvas.toDataURL('image/jpeg');

    const formData = new FormData();
    formData.append('frame', frameData);

    try {
      const response = await fetch('https://prudhvirajgrandhe28.pythonanywhere.com/send_frame', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Frame sent successfully!');
      } else {
        console.error('Failed to send frame.');
      }
    } catch (error) {
      console.error('Error sending frame:', error);
    }
  };

  return (
    <div>
      <h1>Camera Feed</h1>
      <video ref={videoRef} width="640" height="480" autoPlay></video>
      <button onClick={captureFrame}>Capture Frame</button>
    </div>
  );
}

export default Newtest;
