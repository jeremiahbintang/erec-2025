import Footer from "../_footer/page";
import Header from "../_header/page";
import MenuSidebar from "../_menuSidebar/page";
import Content from "./content";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={styles.page}>
        <Header />

        <div className={styles.heroPage}>
          <div className={styles.mainContainer}>
            <Content />
          </div>

          <MenuSidebar />
        </div>

        <Footer />
      </div>
    </>
  );
}