import { useState } from "react";
import { NOT_WEAR_LABEL } from "../constants";

function TrainNotWearMaskButton({ onClick, progessPercent }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      {!isButtonClicked ? (
        <div>
          <h5 className="mt-2 guide-text">
            Bước 1: Quay video không đeo khẩu trang!
          </h5>
          <button
            className="btn btn-primary btn-control"
            onClick={() => {
              setIsButtonClicked(true);
              onClick(NOT_WEAR_LABEL);
            }}
          >
            Thực hiện
          </button>
        </div>
      ) : (
        <h5 className="mt-2 guide-text">
          Không đeo khẩu trang cho đến khi hoàn thành!
          <br />
          Máy đang học {progessPercent}%
        </h5>
      )}
    </>
  );
}

export default TrainNotWearMaskButton;
