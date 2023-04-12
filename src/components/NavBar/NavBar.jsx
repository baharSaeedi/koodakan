import styles from "./NavBar.module.css";
import { useState } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.navBar}>
      <div className={styles.userBox}>
        <div className={styles.profile}></div>
        <div className={styles.notifications}></div>
      </div>
      <div className={styles.logo}></div>
      <div className={styles.menuBox}>
        <div
          className={styles.menuBtn}
          onClick={() => setShowMenu((prevState) => !prevState)}
        ></div>
        {showMenu ? (
          <ul className={styles.menu}>
            <li>
              <a href="#">لینک اول</a>
            </li>
            <li>
              <a href="#">لینک دوم</a>
            </li>
            <li>
              <a href="#">لینک سوم</a>
            </li>
            <li>
              <a href="#">لینک چهارم</a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default NavBar;
