import "./App.css";
import { useEffect, useRef } from "react";
import { Howl } from "howler";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-cpu";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";

const DONT_TOUCH_LABEL = "DONT_TOUCH";
const TOUCHED_LABEL = "TOUCHED";
const TRAINING_TIMES = 50;

const sound = new Howl({
  src: ["assests/audio/back.mp3"],
});

function App() {
  const videoRef = useRef();
  const mobilenetModel = useRef();
  const classifierModel = useRef();

  const init = async () => {
    console.log("Init...");

    await turnOnCamera();

    console.log("Setup camera done...");

    mobilenetModel.current = await mobilenet.load();
    classifierModel.current = knnClassifier.create();

    console.log("Setup done, click Train 1 and Train 2...");
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

  const train = async (label) => {
    console.log("--> Train " + label);

    for (let i = 0; i < TRAINING_TIMES; i++) {
      console.log(
        `Progress ` + parseInt(((i + 1) / TRAINING_TIMES) * 100) + `%`
      );
      await training(label);
    }
  };

  const training = (label) => {
    return new Promise(async (resolve) => {
      // train ảnh
      const embedding = mobilenetModel.current.infer(videoRef.current, true);
      // máy học
      classifierModel.current.addExample(embedding, label);

      await sleep(100);
      resolve();
    });
  };

  const sleep = (milisec) => {
    return new Promise((resolve) => {
      setTimeout(resolve, milisec);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="main">
      <h3 className="title">DON'T TOUCH YOUR FACE</h3>

      <video ref={videoRef} width="700px" height="480px" autoPlay />

      <div className="control">
        <button
          className="btn btn-control"
          onClick={() => train(DONT_TOUCH_LABEL)}
        >
          TRAIN 1
        </button>
        <button
          className="btn btn-control"
          onClick={() => train(TOUCHED_LABEL)}
        >
          TRAIN 2
        </button>
        <button className="btn btn-control" onClick={() => {}}>
          RUN
        </button>
      </div>
    </div>
  );
}

export default App;
