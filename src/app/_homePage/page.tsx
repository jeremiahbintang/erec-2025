import styles from "./homePage.module.css";
import TitleImage from "./titleImage";
import Content from "./content";
import MenuSidebar from "../_menuSidebar/page";
import Header from "../_header/page";
import Footer from "../_footer/page";

export default function HomePage() {
  return (
    <>
      <div className={styles.page}>
        <Header />

        <div className={styles.heroPage}>
          <div className={styles.mainContainer}>
            <TitleImage />
            <Content />
          </div>

          <MenuSidebar />
        </div>

        <Footer />
      </div>

      {/* Location & Info */}
      {/* <div className={styles.info}>
        <div className={styles.date}>
          <p className={styles.pageHeader}>DATE</p>
          <p className={styles.dateText}>March 29</p>
          <p className={styles.dateText}>to April 1</p>
          <p className={styles.dateText}>2024</p>
        </div>
        <div className={styles.venue}>
          <p className={styles.pageHeader}>VENUE</p>
          <p className={styles.venueText}>DJH Jugendherberge Halle</p>
          <p className={styles.venueText}>Große Steinstraße 60,</p>
          <div className={styles.germanyTextWithIconContainer}>
            <p className={styles.venueText}>06108 Halle (Saale), Germany</p>
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
                src="/icons/arrowCircleRight.svg"
              />
            </a>
          </div>
        </div> */}
    </>
  );
}
