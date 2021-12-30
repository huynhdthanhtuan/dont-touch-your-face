import { useState } from "react";
import { WEARED_LABEL } from "../constants";

function TrainWearedMaskButton({ onClick, progessPercent }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      {!isButtonClicked ? (
        <div>
          <h5 className="mt-2 guide-text">
            Bước 2: Quay video đeo khẩu trang. Hãy đeo khẩu trang trước khi bấm
            Thực hiện
          </h5>
          <button
            className="btn btn-primary btn-control"
            onClick={() => {
              setIsButtonClicked(true);
              onClick(WEARED_LABEL);
            }}
          >
            Thực hiện
          </button>
        </div>
      ) : (
        <h5 className="mt-2 guide-text">
          Luôn đeo khẩu trang cho đến khi hoàn thành!
          <br />
          Máy đang học {progessPercent}%
        </h5>
      )}
    </>
  );
}

export default TrainWearedMaskButton;
