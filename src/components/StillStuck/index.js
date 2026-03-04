import styles from './styles.module.css';

export default function StillStuck() {
  return (
    <div className={styles.stillStuck}>
      <span className={styles.stillStuckIcon}>✉️</span>
      Still stuck? <a href="https://support.wpbakery.com/support/" target="_blank" rel="noopener noreferrer">We are here to help.</a>
    </div>
  );
}
