"use client";
import styles from "./devotion.module.css";
import { Tabs } from "@mantine/core";
import { useEffect, useState } from "react";
import { day1, day1EN, day2, day2EN } from "./devotionContent";

export default function Content() {
  const [activeTab, setActiveTab] = useState<string | null>("1 (Mar 30)");
  const [english, setEnglish] = useState(false);

  const tab = (day: string) => {
    const tabStyle = {
      borderColor: activeTab === day ? "#2a4385" : "#d0ddff",
    };

    return (
      <Tabs.Tab value={day} style={tabStyle}>
        {day}
      </Tabs.Tab>
    );
  };

  const handleChangeLanguage = () => {
    setEnglish(!english);
  };

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          {/* Title */}
          {!english ? (
            <div className={styles.devotionTitle}>RENUNGAN</div>
          ) : (
            <div className={styles.devotionTitle}>DEVOTION</div>
          )}

          {!english ? (
            <div
              className={styles.changeLanguage}
              onClick={handleChangeLanguage}
            >
              Read in English
            </div>
          ) : (
            <div
              className={styles.changeLanguage}
              onClick={handleChangeLanguage}
            >
              Read in Indonesian
            </div>
          )}

          {/* Days Tab */}
          <div className={styles.daysTab}>
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
                  {tab("1 (Mar 30)")}
                  {tab("2 (Apr 1)")}
                </div>
              </Tabs.List>

              <Tabs.Panel value="1 (Mar 30)">
                {!english ? day1() : day1EN()}
              </Tabs.Panel>

              <Tabs.Panel value="2 (Apr 1)">
                {!english ? day2() : day2EN()}
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>

        <div className={styles.noContent}>
          Devotion only available on Mobile
        </div>
      </div>
    </>
  );
}
