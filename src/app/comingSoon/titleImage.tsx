import Image from "next/image";
import styles from "./comingSoon.module.css";

export default function TitleImage() {
  return (
    <div className={styles.titleImageContainer}>
      <picture>
        <source srcSet="/hero.svg" media="(min-width: 1287px)" />
        <Image
          src="/hero-mobile.svg"
          alt="The Gift of Perseverance"
          fill
          className={styles.heroImage}
        />
      </picture>
    </div>
  );
}
