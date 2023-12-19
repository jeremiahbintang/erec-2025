import styles from "./homePage.module.css";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContainer1}>
          <div>
            <p className={styles.dateHeroHeader}>MAR 29</p>
            <p className={styles.dateHeroHeader}>- Apr 1</p>
          </div>

          <div>
            <p className={styles.venueText}>DJH Jugendherberge Halle</p>
            <p className={styles.venueSmallText}>Große Steinstraße 60,</p>
            <p className={styles.venueSmallText}>
              06108 Halle (Saale), Germany
            </p>
          </div>
        </div>

        <div className={styles.heroContainer2}>
          <p className={styles.heroText}>
            EREC is a yearly convention where congregation from IREC Europe
            churches and beyond gather to learn of God&rsquo;s word and have a
            fellowship as one body of Christ.
          </p>

          <div className={styles.linkToThemeContainer}>
            <p className={styles.linkToTheme}>LEARN OUR THEME THIS YEAR</p>

            {/* change link later to redirect to Theme Page */}
            <a
              href="https://www.jugendherberge.de/en/youth-hostels/halle/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: "28px" }}
            >
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleRightIcon}
                alt="Arrow Circle Right"
                src="/arrowCircleRight.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
