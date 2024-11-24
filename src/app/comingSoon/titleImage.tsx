import Image from "next/image";
import styles from "./comingSoon.module.css";

export default function TitleImage() {
  return (
    <div className={styles.titleImageContainer}>
      <picture>
        <source srcSet="/erec-2025/hero.svg" media="(min-width: 1287px)" />
        <Image
          src="/erec-2025/hero-mobile.svg"
          alt="The Gift of Perseverance"
          fill
          className={styles.heroImage}
        />
      </picture>
    </div>
  );
}
