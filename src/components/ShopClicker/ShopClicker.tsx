import '@components/ShopClicker/ShopClicker.css';
import Clicker from '@components/ShopClicker/Clicker/Clicker';
import Shop from '@components/ShopClicker/Shop/Shop';

export default function ShopClicker() {
  return (
    <div className="shop-click">
      <Clicker />
      <Shop />
    </div>
  );
}
