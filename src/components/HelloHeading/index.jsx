import styles from "./HelloHeading.module.css";

function HelloHeading() {
  return (
    <h1 className={styles.helloHeading + " " + styles.displayFlex}>
      HELLO ANH EM
    </h1>
  );
}

export default HelloHeading;
