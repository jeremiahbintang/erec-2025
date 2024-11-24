"use client";
import Link from "next/link";
import styles from "./venue.module.css";
import Image from "next/image";
import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Content() {
  const [activeTab, setActiveTab] = useState<string | null>("leipzig airport");

  const tab = (city: string) => {
    const tabStyle = {
      borderColor: activeTab === city ? "#2a4385" : "#d0ddff",
    };

    return (
      <Tabs.Tab value={city} style={tabStyle}>
        {city}
      </Tabs.Tab>
    );
  };

  const ImageContainer = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      "/venue-images/venue-1.png",
      "/venue-images/venue-2.png",
      "/venue-images/venue-3.png",
      "/venue-images/venue-4.png",
      "/venue-images/venue-5.png",
      "/venue-images/venue-6.png",
      "/venue-images/venue-7.png",
      "/venue-images/venue-8.png",
    ];

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(intervalId); // Cleanup the interval on unmount
    }, []);

    return (
      <Image
        width={770}
        height={400}
        className={styles.image}
        alt={`Image ${currentImageIndex + 1}`}
        src={images[currentImageIndex]}
      />
    );
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          {/* Venue Description */}
          <div className={styles.venueDescription}>
            <div className={styles.venueDescription1}>
              <div className={styles.venueTitle}>VENUE</div>
              <div className={styles.venueTitleDescription}>
                This year our convention is taking place in Halle, close to
                Leipzig which has rich history with Christianity, a major center
                of the Reformation in the 16th century.
              </div>
            </div>

            <div className={styles.venueDescription2}>
              <div className={styles.imagesContainer}>
                <ImageContainer />
              </div>

              <a
                href="https://www.jugendherberge.de/en/youth-hostels/halle/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.venueLocationText1}
              >
                DJH Jugendherberge Halle
              </a>

              <p className={styles.venueLocationText2}>Große Steinstraße 60,</p>
              <div className={styles.germanyTextWithIconContainer}>
                <p className={styles.venueLocationText2}>
                  06108 Halle (Saale), Germany
                </p>
                <a
                  href="https://maps.app.goo.gl/wYPuEUDwLiPHKh4S7"
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
            </div>

            <div className={styles.venueDescription3}>
              <p className={styles.roomHeader}>Rooms & placement</p>
              <p className={styles.roomDescriptionText}>
                Most rooms fit 2 or 5 people. Rooms are with ensuit bathrooms.
                Families are prioritized to be placed in the same room.
              </p>
            </div>
          </div>

          {/* Venue Transportation */}
          <div className={styles.venueTransportation}>
            <div className={styles.transportationHeader}>How to get there</div>

            <div className={styles.transportationDetailsHeader}>
              Halle (Saale) Hbf (Main train station) to DJH Jugendherberge Halle
            </div>

            {/* Detail 1 - Desktop */}
            <div className={styles.transportationDetailsDesktop}>
              <div className={styles.transportationDetailsOptionsContainer}>
                <Image
                  width={40}
                  height={40}
                  className={styles.optionsIcon}
                  alt="Walk"
                  src="/icons/walk.svg"
                />
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsHeader}>
                    On foot
                  </p>
                  <p className={styles.transportationDetailsOptionsText}>
                    The distance is around 1.5 km (Around 20 mins).
                  </p>
                </div>
              </div>

              <div className={styles.transportationDetailsOptionsContainer}>
                <Image
                  width={40}
                  height={40}
                  className={styles.optionsIcon}
                  alt="Tram"
                  src="/icons/tram.svg"
                />
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsHeader}>
                    By tram
                  </p>
                  <p className={styles.transportationDetailsOptionsText}>
                    Tram 12 (Trotha), 5 (Berliner Bruckë), 2 (Kröllwitz). Get
                    off at{" "}
                    <a
                      href="https://maps.app.goo.gl/aNMjUpnTZW51uCVG7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Am Steintor
                    </a>{" "}
                    stop. Walk around 6 mins. <br />
                    NB: Ticket can be purchased with cash or credit card.
                  </p>
                </div>
              </div>

              <div className={styles.transportationDetailsOptionsContainer}>
                <Image
                  width={40}
                  height={40}
                  className={styles.optionsIcon}
                  alt="Bus"
                  src="/icons/bus.svg"
                />
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsHeader}>
                    By bus
                  </p>
                  <p className={styles.transportationDetailsOptionsText}>
                    Bus 350 (Markt), 301 (Wettin), 345 (Halle-Center). Get off
                    at{" "}
                    <a
                      href="https://maps.app.goo.gl/aNMjUpnTZW51uCVG7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Am Steintor
                    </a>{" "}
                    stop. Walk around 6 mins. <br /> NB: Ticket can be purchased
                    with cash or credit card.
                  </p>
                </div>
              </div>
            </div>

            {/* Detail 1 - Mobile */}
            <div className={styles.transportationDetailsMobile}>
              <div className={styles.transportationDetailsOptionsContainer}>
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsText}>
                    On foot: The distance is around 1.5 km (Around 20 mins).
                  </p>
                </div>
              </div>

              <div className={styles.transportationDetailsOptionsContainer}>
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsText}>
                    By tram: Tram 12 (Trotha), 5 (Berliner Bruckë), 2
                    (Kröllwitz). Get off at{" "}
                    <a
                      href="https://maps.app.goo.gl/aNMjUpnTZW51uCVG7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Am Steintor
                    </a>{" "}
                    stop. Walk around 6 mins. <br />
                    NB: Ticket can be purchased with cash or credit card.
                  </p>
                </div>
              </div>

              <div className={styles.transportationDetailsOptionsContainer}>
                <div className={styles.transportationDetailsOptions}>
                  <p className={styles.transportationDetailsOptionsText}>
                    By bus: Bus 350 (Markt), 301 (Wettin), 345 (Halle-Center).
                    Get off at{" "}
                    <a
                      href="https://maps.app.goo.gl/aNMjUpnTZW51uCVG7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Am Steintor
                    </a>{" "}
                    stop. Walk around 6 mins. <br />
                    NB: Ticket can be purchased with cash or credit card.
                  </p>
                </div>
              </div>
            </div>

            {/* Detail 2 */}
            <Tabs
              value={activeTab}
              onChange={setActiveTab}
              classNames={{
                root: styles.tabsRoot,
                list: styles.tabList,
                tab: styles.tab,
                tabLabel: styles.tabLabel,
              }}
              // color="#2a4385"
            >
              <Tabs.List>
                <div className={styles.tabContainer}>
                  {tab("leipzig airport")}
                  {tab("berlin")}
                  {tab("hamburg")}
                  {tab("munich")}
                  {tab("bern")}
                  {tab("stockholm")}
                </div>
              </Tabs.List>

              <Tabs.Panel value="leipzig airport">
                <ul className={styles.transportationDirectionContainer}>
                  <li className={styles.transportationDirectionText}>
                    By train: ~10 mins (€5-26)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By bus: ~30 mins (€5-8)
                  </li>
                </ul>
              </Tabs.Panel>

              <Tabs.Panel value="berlin">
                <ul className={styles.transportationDirectionContainer}>
                  <li className={styles.transportationDirectionText}>
                    By car: 168 km ~2 hours
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By train: ~1 hour 12 mins (€19-45)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By bus: ~2 hours (€14-21)
                  </li>
                </ul>
              </Tabs.Panel>

              <Tabs.Panel value="hamburg">
                <ul className={styles.transportationDirectionContainer}>
                  <li className={styles.transportationDirectionText}>
                    By car: 365 km ~3 hours
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By train: ~3 hours (€55-80)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    Bybus: ~6 hours (€30-65)
                  </li>
                </ul>
              </Tabs.Panel>

              <Tabs.Panel value="munich">
                <ul className={styles.transportationDirectionContainer}>
                  <li className={styles.transportationDirectionText}>
                    By car: 435 km ~4 hours
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By train: ~3 hours (€55-80)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    Bybus: ~7 hours (€35-56)
                  </li>
                </ul>
              </Tabs.Panel>

              <Tabs.Panel value="bern">
                <ul className={styles.transportationDirectionContainer}>
                  <li className={styles.transportationDirectionText}>
                    By car: 790 km ~7 hours
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By train: ~7 hours (€85-120)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By bus (2 connecting buses): ~12 hours (€65-93)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    By train to Zurich, fly to Leipzig, train to Halle ~6 hours
                    (€161-367)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    Cheapest and most convenient routes (checked on October
                    28th) total round trip flight price €242:
                    <ul>
                      <li>
                        Depart March 28th, 9:25 AM - 12:20 PM (2 hours 55 mins):
                        <br /> Zurich (ZRH) - Munich (MUC) - Leipzig (LEJ) by
                        flight Leipzig to Halle by train
                      </li>
                      <li>
                        Return April 2nd, 9:45 AM - 12:40 PM (2 hours 55 mins):
                        <br /> Halle to Leipzig by train Leipzig (LEJ) - Munich
                        (MUC) - Zurich (ZRH) by flight
                      </li>
                    </ul>
                  </li>
                </ul>
              </Tabs.Panel>

              <Tabs.Panel value="stockholm">
                <ul className={styles.transportationDirectionContainer}>
                  <li className={styles.transportationDirectionText}>
                    Fly to Leipzig, train to Halle, fastest routes ~7 hours
                    (€117-533)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    Fly to Berlin, train to Halle, fastest routes ~8 hours
                    (€83-369)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    Fly to Hamburg, train to Halle, fastest routes ~9 hours
                    (€125-381)
                  </li>
                  <li className={styles.transportationDirectionText}>
                    Cheapest and most convenient routes (checked on October
                    28th) total round trip flight price €153:
                    <ul>
                      <li>
                        Depart March 28th, 3:10 PM - 9:35 PM (6 hours 25 mins):
                        <br />
                        Stockholm (ARN) - Munich (MUC) - Leipzig (LEJ) by flight
                        Leipzig to Halle by train
                      </li>
                      <li>
                        Return April 2nd, 12:50 AM - 4:45 PM (3 hours 55 mins):
                        <br />
                        Halle to Leipzig by train Leipzig (LEJ) - Munich (MUC) -
                        Stockholm (ARN) by flight
                      </li>
                    </ul>
                  </li>
                </ul>
              </Tabs.Panel>
            </Tabs>

            {/* Detail 3 */}
            <div className={styles.otherInformationContainer}>
              <div>
                <p className={styles.otherInformationHeader}>
                  Other useful information
                </p>
              </div>
              <ol className={styles.otherInformationTextContainer}>
                <li className={styles.otherInformationText}>
                  The closest airport is Leipzig/Halle airport (LEJ)
                </li>
                <li className={styles.otherInformationText}>
                  The closest destination is at Halle (Saale) Hbf (Main train
                  station)
                </li>
                <li className={styles.otherInformationText}>
                  You can use following platforms to check the route:{` `}
                  <a
                    href="https://www.omio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Omio
                  </a>
                  {`, `}
                  <a
                    href="https://www.rome2rio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Rome2Rio
                  </a>
                  {`, `}
                  <a
                    href="https://int.bahn.de/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Deutsche Bahn AG
                  </a>
                  {`, or `}
                  <a
                    href="https://www.google.com/travel/flights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Google Flights
                  </a>
                </li>
              </ol>
            </div>
          </div>

          {/* Link to Schedule Page */}
          {/* <div className={styles.linkContainer}>
            <div>
              <p className={styles.text}>
                Wonder how your days would be like throughout the convention?
              </p>
            </div>

            <Link href="/schedule" className={styles.linkToScheduleContainer}>
              <p className={styles.linkToSchedule}>VIEW SCHEDULE</p>
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleRightIcon}
                alt="Arrow Circle Right"
                src="/icons/arrowCircleRight.svg"
              />
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
