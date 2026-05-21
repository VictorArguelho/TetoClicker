import './App.css';
import Clicker from '@components/Clicker/Clicker';
import PointsDisplay from '@components/PointsDisplay/PointsDisplay';

export default function App() {
  return (
    <>
      <PointsDisplay />
      <Clicker />
    </>
  );
}
