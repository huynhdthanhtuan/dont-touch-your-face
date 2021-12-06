import { useState } from "react";
import { TOUCHED_LABEL } from "../Content/constants";

function TrainTouchedButton({ onClick, progessPercent }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      {!isButtonClicked ? (
        <div>
          <h5 className="mt-2 guide-text">
            Bước 2: Quay video đưa tay lên mặt. Đưa tay lên trước khi bấm Thực
            hiện
          </h5>
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
        <h5 className="mt-2 guide-text">
          Giữ tay luôn gần mặt cho đến khi hoàn thành!
          <br />
          Máy đang học {progessPercent}%
        </h5>
      )}
    </>
  );
}

export default TrainTouchedButton;
