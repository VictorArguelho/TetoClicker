import { useContext } from "react";

import effectStyles from "@styles/Effects.module.css";

import styles from "@components/MainZone/Clicker/Clicker.module.css";
import tetoImage from "@assets/teto.jpg";
import PointsContext from "@context/PointsContext";

export default function Clicker() {
  const gameState = useContext(PointsContext);

  function clickHandle() {
    gameState.earnPoints(1);
  }

  return (
    <div
      className={`${styles.clicker} ${effectStyles.bob} ${effectStyles.sway}`}
    >
      <button className={styles.clickerButton} onClick={clickHandle}>
        <img className={styles.clickerImage} src={tetoImage} alt="teto" />
      </button>
    </div>
  );
}
