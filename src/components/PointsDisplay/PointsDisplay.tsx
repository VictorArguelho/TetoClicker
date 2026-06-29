import { useContext } from "react";

import textStyles from "@styles/Text.module.css";
import effectStyles from "@styles/Effects.module.css";

import styles from "@components/PointsDisplay/PointsDisplay.module.css";
import PointsContext from "@context/PointsContext";

export default function PointsDisplay() {
  const gameState = useContext(PointsContext);

  return (
    <p className={`${styles.displayCounter} ${textStyles.textOutline} ${effectStyles.sway}`}>
      {gameState.getPoints()}
    </p>
  );
}
