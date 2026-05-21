import { useContext } from 'react';

import '@components/ShopClicker/Clicker/Clicker.css';
import tetoImage from '@assets/teto.jpg';
import PointsContext from '@context/PointsContext';

export default function Clicker() {
  const gameState = useContext(PointsContext);

  function clickHandle() {
    gameState.earnPoints(1);
  }

  return (
    <div className="clicker">
      <button className="clicker-button" onClick={clickHandle}>
        <img className="clicker-image" src={tetoImage} alt="teto" />
      </button>
    </div>
  );
}
