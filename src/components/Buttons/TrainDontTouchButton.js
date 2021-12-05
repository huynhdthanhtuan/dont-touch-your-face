import { useState } from "react";
import { DONT_TOUCH_LABEL } from "../Content/constants";

function TrainDontTouchButton({ onClick, progessPercent }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      {!isButtonClicked ? (
        <div>
          <h5 className="mt-2">Bước 1: Quay video không chạm tay lên mặt!</h5>
          <button
            className="btn btn-primary btn-control"
            onClick={() => {
              setIsButtonClicked(true);
              onClick(DONT_TOUCH_LABEL);
            }}
          >
            Thực hiện
          </button>
        </div>
      ) : (
        <h5 className="mt-2">
          Không chạm tay lên mặt cho đến khi hoàn thành.
          <br />
          Máy đang học {progessPercent}%
        </h5>
      )}
    </>
  );
}

export default TrainDontTouchButton;
