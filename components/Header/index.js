import styles from './Header.module.css'

const Header = ({ open, setOpen }) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Brand.</div>
      <div className={styles.cart} onClick={setOpen}>
        {!open ? "Cart." : "Close."}
      </div>
    </div>
  );
};

export default Header
