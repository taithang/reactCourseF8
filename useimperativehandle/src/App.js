import { useRef } from "react";
import Video from "./Video";

function App() {
  const videoRef = useRef();

  function handlePlay() {
    videoRef.current.play();
  }

  function handlePause() {
    videoRef.current.pause();
  }

  return (
    <div className="App">
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
