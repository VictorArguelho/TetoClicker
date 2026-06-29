import styles from '@components/MainZone/MainZone.module.css';
import Clicker from '@components/MainZone/Clicker/Clicker';
import Shop from '@components/MainZone/Shop/Shop';

export default function ShopClicker() {
  return (
    <div className={styles.shopClick}>
      <Clicker />
      <Shop />
    </div>
  );
}
