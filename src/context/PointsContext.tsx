import { createContext, useState } from 'react';

type PointsContextType = {
  getPoints() : number;
  earnPoints(amount : number) : void;
  spendPoints(amount : number) : boolean;
};

const PointsContext = createContext<PointsContextType>({
  getPoints: () => 0,
  earnPoints: () => {},
  spendPoints: () => false
});

export function PointsProvider({ children }: { children: React.ReactNode }) {
  const [points, setPoints] = useState(0);
  
  function getPoints() {
    return points;
  }

  function earnPoints(amount : number) {
    if(amount < 0)
        return;
    setPoints(prev => prev + amount)
  }

  function spendPoints(amount : number) {
    if(amount < 0 || points < amount)
        return false;
    setPoints(prev => prev - amount)
    return true;
  }

  return (
    <PointsContext.Provider
      value={{
        getPoints: getPoints,
        earnPoints: earnPoints,
        spendPoints: spendPoints
      }}
    >
      {children}
    </PointsContext.Provider>
  );
}

export default PointsContext;
