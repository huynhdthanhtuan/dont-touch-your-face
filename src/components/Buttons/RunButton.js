import { useState } from "react";

function RunButton({ onClick }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      {!isButtonClicked ? (
        <div>
          <h5 className="mt-2">
            Bước 3: Máy AI đã sẵn sàng, hãy bấm Khởi động!
          </h5>
          <button
            className="btn btn-success btn-control"
            onClick={() => {
              setIsButtonClicked(true);
              onClick();
            }}
          >
            Khởi động!
          </button>
        </div>
      ) : (
        <h5 className="mt-2">Máy AI đang theo dõi cử chỉ tay của bạn...</h5>
      )}
    </>
  );
}

export default RunButton;
