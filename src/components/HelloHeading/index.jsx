import React from "react";
import clsx from "clsx";
import styles from "./HelloHeading.module.scss";

// Nhận các prog boolean từ component cha
function HelloHeading(progs) {
  
  // Xử lí ẩn/hiện class tương ứng từ giá trị boolean của prog tương ứng
  const classes = clsx(styles.btn, {
    [styles.redBackground]: progs.redBackground,
    [styles.yellowBackground]: progs.yellowBackground,
  });

  return (
    <React.Fragment>
      <button className={classes}>Color</button>

      {/* <h1
        // clsx nhận nhiều đối số -> 1 chuỗi ở định dạng class
        // "displayFlex" là 1 class bình thường
        // [styles.displayFlex]: là chuỗi "displayFlex", nhưng là 1 class dạng css module
        // [styles.displayFlex]: true (có class đó) / false (ko có class đó)
        className={clsx(styles.helloHeading, "displayFlex", {
          [styles.displayFlex]: false,
        })}
      >
        HELLO ANH EM
      </h1> */}
    </React.Fragment>
  );
}

export default HelloHeading;
