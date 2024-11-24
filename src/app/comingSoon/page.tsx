import styles from "./comingSoon.module.css";
import TitleImage from "./titleImage";
import Details from "./details";
import Banner from "./banner";
// import TitleImage from "./titleImage";
// import Content from "./content";
// import MenuSidebar from "../menuSidebar/page";
// import Header from "../header/page";
// import Footer from "../footer/page";

export default function ComingSoon() {
  return (
    <>
      <Banner />
      <div className={styles.page}>
        <div className={styles.heroContainer}>
          <TitleImage />
          <Details />
        </div>
      </div>
    </>
  );
}
