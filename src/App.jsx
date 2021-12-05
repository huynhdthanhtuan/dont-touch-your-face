import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import "@tensorflow/tfjs-backend-cpu";
import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";

const DONT_TOUCH_LABEL = "DONT_TOUCH";
const TOUCHED_LABEL = "TOUCHED";
const TRAINING_TIMES = 50;

const sound = new Howl({
  src: ["assests/audio/botayxuong.mp3"],
});

function App() {
  const videoRef = useRef();
  const mobilenetModel = useRef();
  const classifierModel = useRef();
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabledTrain2, setIsEnabledTrain2] = useState(true);
  const [isEnabledRun, setIsEnabledRun] = useState(true);

  const init = async () => {
    console.log("Init...");

    await turnOnCamera();

    console.log("Setup camera done...");

    mobilenetModel.current = await mobilenet.load();
    classifierModel.current = knnClassifier.create();

    console.log("Setup done, click Train 1 and Train 2...");
    setIsEnabled(false);
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

    // Train 1 xong -> enabled button Train2
    if (label === DONT_TOUCH_LABEL) {
      setIsEnabledTrain2(false);
    }
    // Train 2 xong -> enabled button Run
    else {
      setIsEnabledRun(false);
    }
  };

  const training = (label) => {
    return new Promise(async (resolve) => {
      // train luồng ảnh hiện tại
      const embedding = mobilenetModel.current.infer(videoRef.current, true);
      // máy học luồng ảnh hiện tại
      classifierModel.current.addExample(embedding, label);

      await sleep(100);
      resolve();
    });
  };

  const run = async () => {
    // train luồng ảnh hiện tại
    const embedding = mobilenetModel.current.infer(videoRef.current, true);

    // so sánh luồng ảnh hiện tại với dữ liệu đã train trước đó
    const result = await classifierModel.current.predictClass(embedding);

    if (
      result.label === TOUCHED_LABEL &&
      result.confidences[TOUCHED_LABEL] === 1
    ) {
      sound.play();
    } else {
    }

    await sleep(200);
    run();
  };

  const sleep = (milisec) => {
    return new Promise((resolve) => setTimeout(resolve, milisec));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="main">
      <h4 className="title">DON'T TOUCH YOUR FACE</h4>

      <video ref={videoRef} width="700px" height="500px" autoPlay />

      <div className="control">
        <button
          disabled={isEnabled}
          className="btn btn-primary btn-control"
          onClick={() => train(DONT_TOUCH_LABEL)}
        >
          TRAIN 1
        </button>
        <button
          disabled={isEnabledTrain2}
          className="btn btn-primary btn-control"
          onClick={() => train(TOUCHED_LABEL)}
        >
          TRAIN 2
        </button>
        <button
          disabled={isEnabledRun}
          className="btn btn-success btn-control"
          onClick={() => run()}
        >
          RUN
        </button>
      </div>
    </div>
  );
}

export default App;
