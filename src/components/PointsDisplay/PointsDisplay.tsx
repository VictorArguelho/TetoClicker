import { useContext } from 'react';

import '@components/PointsDisplay/PointsDisplay.css';
import PointsContext from '@context/PointsContext';

export default function PointsDisplay() {
  const gameState = useContext(PointsContext);

  return (
    <div>
      <h1 className="display-counter">{gameState.getPoints()}</h1>
    </div>
  );
}
