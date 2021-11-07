import video from "./first-goal.mp4";
import { useRef, forwardRef, useImperativeHandle } from "react";

function Video(progs, ref) {
  const videoRef = useRef();

  // useImperativeHandle(ref, callback => giá trị mà ref.current sẽ nhận)
  useImperativeHandle(ref, () => ({
    play: function () {
      videoRef.current.play();
    },
    pause: function () {
      videoRef.current.pause();
    }
  }));

  return (
    <video
      // Tránh đưa DOM element của thẻ video ra bên ngoài (thông qua ref nhận ở đối số)
      ref={videoRef}
      src={video}
      width={800}
    ></video>
  );
}

/* forwardRef (HOC): là 1 tham chiếu, giúp truyền
prog ref (forwardRef) từ function component cha xuống component con */

/* forwardRef nhận ref từ component Content, xử lí gọi component Video
và đưa ref đó làm đối số thứ 2 của component Video sau progs */
export default forwardRef(Video);
