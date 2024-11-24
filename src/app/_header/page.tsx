import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import MenuBurger from "../_menuBurger/page";

export default function Header() {
  return (
    <>
      <div className={styles.headerMobileContainer}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <Link href="/">
              <Image
                width={280}
                height={55}
                className={styles.headerIcon}
                alt="European Reformed Evangelical Convention 2024"
                src="/logo.svg"
                priority={true}
              />
            </Link>
          </div>
          <div className={styles.burgerContainer}>
            <MenuBurger />
          </div>
        </div>
      </div>
    </>
  );
}
