import { useEffect, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import { Howl } from "howler";
import "./App.css";

var sound = new Howl({
  src: ["assests/audio/back.mp3"],
});

function App() {
  const videoRef = useRef();

  const init = async () => {
    await turnOnCamera();
  };

  const turnOnCamera = () => {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mzGetUserMedia ||
        navigator.msGetUserMedia;

      if (navigator.getUserMedia) {
        navigator.getUserMedia(
          { video: "true" },
          (stream) => {
            videoRef.current.srcObject = stream;
            videoRef.current.addEventListener("loadeddata", resolve);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject();
      }
    });
  };

  const stop = async () => {
    await turnOffCamera();
  };

  const turnOffCamera = () => {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mzGetUserMedia ||
        navigator.msGetUserMedia;

      if (navigator.getUserMedia) {
        navigator.getUserMedia(
          { video: "false" },
          (stream) => {
            videoRef.current.srcObject = null;
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject();
      }
    });
  };

  const playSound = () => {
    sound.play();
  };

  // useEffect(() => {
  //   init();
  // }, []);

  return (
    <div className="main">
      <h3 className="title">DON'T TOUCH YOUR FACE</h3>

      <video ref={videoRef} width="700px" height="480px" autoPlay />

      <div className="control">
        <button className="btn btn-control" onClick={init}>
          ON
        </button>
        <button className="btn btn-control" onClick={stop}>
          OFF
        </button>
        <button className="btn btn-control" onClick={playSound}>
          WARNING
        </button>
      </div>
    </div>
  );
}

export default App;
