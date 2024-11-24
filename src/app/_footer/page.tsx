import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.socialMedia}>
          <div>
            <Link
              href="https://www.instagram.com/irec.europe/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
              <Image
                width={32}
                height={32}
                className={styles.instagramIcon}
                alt="Instagram"
                src="/icons/instagram.svg"
              />
              <span className={styles.instagramLink}>IREC.EUROPE</span>
            </Link>
          </div>

          <div>
            <Link
              href="https://www.youtube.com/@irecineurope"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.youtube}
            >
              <Image
                width={32}
                height={22.5}
                className={styles.youtubeIcon}
                alt="Youtube"
                src="/icons/youtube.svg"
              />
              <span className={styles.youtubeLink}>IREC in Europe</span>
            </Link>
          </div>
        </div>
        <div>
          <Link
            href="https://www.irec-europe.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.learnAboutIRECLink}
          >
            Learn about IREC in Europe
          </Link>
        </div>
      </div>
    </>
  );
}
