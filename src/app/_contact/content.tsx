import Link from "next/link";
import styles from "./contact.module.css";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          {/* Top Content */}
          <div>
            <div className={styles.pageHeaderContainer}>
              <p className={styles.pageHeader}>ANY QUESTION?</p>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                Any specific need or question regarding the convention? Ask
                away. WhatsApp or call works.
              </p>
            </div>
            <div>
              <p className={styles.contactText}>
                {`Tiffany `}
                <span className={styles.span}>+49 176 56841250</span>
              </p>
              <p className={styles.contactText}>
                {`Kenwyn `}
                <span className={styles.span}>+49 176 32626673</span>
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className={styles.bottomContent}>
            <div>
              <Image
                width={300}
                height={480}
                alt=""
                src="/dandelion.png"
                className={styles.dandelionImage}
              />
            </div>
            <div>
              <p className={styles.text2}>
                Are you in any of our IREC Europe church or looking for a local
                church to attend?
              </p>
              <p className={styles.text3}>
                Here are persons you can get in touch with in our local branches
                for questions about the convention or the church.
              </p>
              <div className={styles.irecBranch}>
                <div>
                  <div className={styles.linkContainer}>
                    <p className={styles.irecBranchName}>IREC BERLIN</p>
                    <Link
                      href="https://irec-berlin.org/"
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
                    </Link>
                  </div>
                  <p className={styles.contactPersonDetails}>
                    Linda +49 176 7011 3244
                  </p>
                </div>
                <div>
                  <div className={styles.linkContainer}>
                    <p className={styles.irecBranchName}>IREC HAMBURG</p>
                    <Link
                      href="https://www.grii-hamburg.org/en-gb"
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
                    </Link>
                  </div>
                  <p className={styles.contactPersonDetails}>
                    Kenwyn +49 176 3262 6673
                  </p>
                </div>
                <div>
                  <div className={styles.linkContainer}>
                    <p className={styles.irecBranchName}>IREC MUNICH</p>
                    <Link
                      href="http://grii-munich.org"
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
                    </Link>
                  </div>
                  <p className={styles.contactPersonDetails}>
                    Laura +49 159 0639 0891
                  </p>
                </div>
                <div>
                  <div className={styles.linkContainer}>
                    <p className={styles.irecBranchName}>IREC STOCKHOLM</p>
                    <Link
                      href="https://grii-stockholm.org/en/"
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
                    </Link>
                  </div>
                  <p className={styles.contactPersonDetails}>
                    Ela +46 79 022 4013
                  </p>
                </div>
                <div>
                  <div className={styles.linkContainer}>
                    <p className={styles.irecBranchName}>IREC SWISS</p>
                    <Link
                      href="https://grii-bern.org/en/"
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
                    </Link>
                  </div>
                  <p className={styles.contactPersonDetails}>
                    Ester +41 78 761 6224
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
