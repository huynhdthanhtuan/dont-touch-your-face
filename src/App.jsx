import "./App.css";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import { Howl } from "howler";

// var sound = new Howl({
//   src: ["assests/audio/back.mp3"],
// });
// sound.play();

function App() {
  return (
    <div className="main">
      <h4 className="title">DON'T TOUCH YOUR FACE</h4>

      <video src="" width="700px" height="480px" autoPlay></video>

      <div className="control">
        <button className="btn btn-control">Train 1</button>
        <button className="btn btn-control">Train 2</button>
        <button className="btn btn-control">Run</button>
      </div>
    </div>
  );
}

export default App;
