"use client";
import Link from "next/link";
import styles from "./speakers.module.css";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Content() {
  const [showFullContent, setShowFullContent] = useState(false);
  const [mainContent, setMainContent] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);

  const cloudFrontDomain = "https://d1lp121c60gp91.cloudfront.net";

  const handleReadMoreClick = () => {
    setShowFullContent(!showFullContent);
  };

  const handleChangeContent = () => {
    setMainContent(!mainContent);
  };

  const getImageSrc = () => {
    return mainContent
      ? `${cloudFrontDomain}/pak-billy.png`
      : `${cloudFrontDomain}/pak-leo.png`;
  };

  // later, if we add more speakers, we need to pack it into an array and map it, and access it using index/key

  // if TRUE show contentBilly
  const contentBilly = (
    <p style={{ margin: 0 }}>
      Billy Kristanto (Dr. phil., Dr. theol., Universität Heidelberg) is
      lecturer of systematic theology at International Reformed Evangelical
      Seminary Jakarta and member of theological commission of World Reformed
      Fellowship. For 24 years, he serves as pastor of International Reformed
      Evangelical Church. He is the author of Ajarlah Kami Bertumbuh and Sola
      Dei Gloria. His research interests include topics in soteriology,
      anthropology, spirituality, the theology of J. Calvin, and J. S. Bach. His
      sermons can be found in the youtube channel Sola Dei Gloria.
    </p>
  );

  // if FALSE show contentLeonardo
  const contentLeonardo = (
    <>
      <p style={{ margin: 0 }}>
        Vic. Leonardo Chandra first came to GRII in 2003 while taking his Design
        Bachelor&rsquo;s Degree at UPH Karawaci. From then on, with the growing
        urge and calling to serve God as His servant, he continued to serve in
        youth ministry of GRII Karawaci up until 2012 when he entered STTRII
        Jakarta. He received his Master of Theology in 2015, and has since
        served as an assistant pastor; from 2015-2018 in GRII Bintaro, and in
        2018-2021 in both GRII Solo and GRII Yogyakarta. At the moment, he is
        continuing his doctoral study in Theologische Universiteit Apeldoorn,
        Netherlands.
      </p>
    </>
  );

  // const videoUrl = `${cloudFrontDomain}/pak-billy-recording.mp4`;

  const getvideoUrl = () => {
    return mainContent
      ? `${cloudFrontDomain}/pak-billy-recording.mp4`
      : `${cloudFrontDomain}/pak-leo-recording.mp4`;
  };

  const VideoPlayer = () => {
    return (
      <div className={styles.videoContainer}>
        <video
          // controls
          autoPlay
          className={styles.video}
        >
          <source src={getvideoUrl()} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Image
          width={28}
          height={28}
          className={styles.closeButton}
          alt="Close Button"
          src="/icons/close.svg"
          onClick={close}
        />
      </div>
    );
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.container1}>
          <div>
            <p className={styles.pageHeader}>GET TO KNOW OUR SPEAKERS</p>
          </div>
          <div>
            <p className={styles.smallText}>
              In this convention, you will learn the theme from various aspects
              and perspectives brought by various speakers.
            </p>
          </div>
        </div>

        <div className={styles.container2}>
          {/* Container for Image/Tap to open video */}
          <div className={styles.speakerImageContainer}>
            <Modal
              transitionProps={{ duration: 450 }}
              size="auto"
              opened={opened}
              onClose={close}
              withCloseButton={false}
              classNames={{
                content: styles.modalContent,
                body: styles.modalBody,
              }}
              overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
              }}
            >
              {opened && <VideoPlayer />}
            </Modal>

            <div onClick={open} className={styles.videoImageContainer}>
              <Image
                width={400}
                height={533}
                alt="Speaker Image"
                src={getImageSrc()}
                /*later change back style to only "speakerImage", if all speakers already have video */
                className={
                  mainContent ? styles.pakBillyImage : styles.pakLeoImage
                }
              />

              <Image
                width={64}
                height={64}
                alt=""
                src={"/icons/play-button.svg"}
                className={styles.buttonPlay}
              />
            </div>
          </div>

          <div>
            <div className={styles.arrowIconContainer}>
              <div>
                <Image
                  width={28}
                  height={28}
                  className={styles.arrowCircleLeftIcon}
                  alt="Arrow Circle Right"
                  src="/icons/arrowCircleRight.svg"
                  onClick={handleChangeContent}
                />
              </div>

              <div>
                <Image
                  width={28}
                  height={28}
                  className={styles.arrowCircleRightIcon}
                  alt="Arrow Circle Right"
                  src="/icons/arrowCircleRight.svg"
                  onClick={handleChangeContent}
                />
              </div>
            </div>
            <div>
              <div className={styles.speakerName}>
                {mainContent
                  ? "Rev. Dr. Billy  Kristanto, Ph.D., Th.D."
                  : "Vic. Leonardo Chandra, M.Th."}
              </div>
              <div
                className={
                  showFullContent
                    ? styles.speakerDescriptionFull
                    : styles.speakerDescriptionShort
                }
              >
                {mainContent ? contentBilly : contentLeonardo}
              </div>

              {showFullContent ? (
                <div
                  onClick={handleReadMoreClick}
                  className={styles.readMoreButton}
                >
                  View Less
                </div>
              ) : (
                <div
                  onClick={handleReadMoreClick}
                  className={styles.readMoreButton}
                >
                  READ MORE
                </div>
              )}
            </div>
          </div>

          {/* change link later to redirect to EREC Page */}
          {/* <Link href="/erec" className={styles.linkToSpeakerContainer}>
            <p className={styles.linkToSpeaker}>
              WONDER ABOUT THE EREC?
            </p>
            <Image
              width={28}
              height={28}
              className={styles.arrowCircleRightIcon}
              alt="Arrow Circle Right"
              src="/icons/arrowCircleRight.svg"
            />
          </Link> */}
        </div>

        <div className={styles.container3}>
          <div>
            <p className={styles.otherSpeakersHeader}>AND MORE SPEAKERS</p>
          </div>

          <div className={styles.otherSpeakersContainer}>
            <div className={styles.otherSpeakersText}>
              Rev. Dr. Jimmy Pardede, M.A., M.Th.
            </div>
            <div className={styles.otherSpeakersText}>
              Rev. Agus Marjanto, M.Div., M.Th.
            </div>
            <div className={styles.otherSpeakersText}>
              Rev. Dr. Ivan Kristiono, M.Div., M.Hum.
            </div>
            <div className={styles.otherSpeakersText}>
              Elder Daniel Indra Cahyadi
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
