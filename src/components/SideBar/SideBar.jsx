import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.logo}></div>
      <div className={styles.linksBox}>
        <a href="#">لینک اول</a>
        <a href="#">لینک دوم</a>
        <a href="#">لینک سوم</a>
        <a href="#">لینک چهارم</a>
      </div>
    </div>
  );
}

export default SideBar;
