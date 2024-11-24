import Image from "next/image";
import styles from "./comingSoon.module.css";

export default function Details() {
  return (
    <div className={styles.detailsContainer}>
        <div className={styles.label}>
        Date
        </div>
        <div className={styles.text}>
        18-21 April 2025
        </div>
        <div className={styles.label}>
        Venue
        </div>
        <div className={styles.text}>
        DJH Jugendherberge Halle, <br/>
        Große Steinstraße 60, <br/>
        06108 Halle (Saale), <br/>
        Germany                   
        <a href="https://maps.app.goo.gl/R1rfbYq1dNcG7WoS7" target="_blank" >
        <Image
            width={40}
            height={40}
            className={styles.arrowCircleRightIcon}
            alt="Arrow Circle Right"
            src="/erec-2025/icons/arrowCircleRight.svg"
        />
        </a>
        </div>
        <hr style={{
            marginBottom: "40px",
        }}/>
        <div className={styles.label}>
            CONTACT
        </div>
        <div className={styles.contact}>
            Jeremiah <a className={styles.link} href="https://wa.me/+4915236823900" target="_blank">+49 152 36823900</a>
        </div>
    </div>
  );
}
