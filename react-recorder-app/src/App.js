

import React from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import './App.css';

const RecordView = () => {
 

  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    screen: true,
    audio: true,
    blobPropertyBag: {
      type: 'video/webm', 
    },
    mediaRecorderOptions: {
      mimeType: 'video/webm', 
    },
  });

  return (
    <div className="record-view">
     
      <button onClick={startRecording} disabled={status === 'recording'}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={status !== 'recording'}>
        Stop Recording
      </button>
      {status === 'recording' && <p>Recording...</p>}
      <div className="video-container">
        <video src={mediaBlobUrl} controls autoPlay  />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RecordView />
    </div>
  );
}

export default App;

