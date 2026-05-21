import { useContext } from 'react';

import '@components/PointsDisplay/PointsDisplay.css';
import PointsContext from '@context/PointsContext';

export default function PointsDisplay() {
  const gameState = useContext(PointsContext);

  return (
    <div>
      <p className="display-counter text-outline">{gameState.getPoints()}</p>
    </div>
  );
}
