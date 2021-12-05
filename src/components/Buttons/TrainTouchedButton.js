import { useState } from "react";
import { TOUCHED_LABEL } from "../Content/constants";

function TrainTouchedButton({ onClick, progessPercent }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      {!isButtonClicked ? (
        <div>
          <h5 className="mt-2">Bước 2: Quay video đưa tay gần lên mặt!</h5>
          <button
            className="btn btn-primary btn-control"
            onClick={() => {
              setIsButtonClicked(true);
              onClick(TOUCHED_LABEL);
            }}
          >
            Thực hiện
          </button>
        </div>
      ) : (
        <h5 className="mt-2">
          Giữ tay luôn trong tầm nhìn của camera cho đến khi hoàn thành.
          <br />
          Máy đang học {progessPercent}%
        </h5>
      )}
    </>
  );
}

export default TrainTouchedButton;
