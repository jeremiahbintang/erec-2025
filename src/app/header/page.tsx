import Image from "next/image";
import styles from "../page.module.css";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <Image
          width={280}
          height={55}
          className={styles.headerIcon}
          alt="European Reformed Evangelical Convention 2024"
          src="/logo.svg"
        />
      </div>
    </>
  );
}

export default Header;