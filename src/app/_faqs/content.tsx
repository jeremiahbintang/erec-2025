"use client";
import Link from "next/link";
import styles from "./faqs.module.css";
import Image from "next/image";
import { Accordion, Tabs } from "@mantine/core";
import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import {
  generalQuestions,
  registrationQuestions,
  accommodationQuestions,
  transportationQuestions,
} from "./questionsContent.js";

export default function Content() {
  const [activeTab, setActiveTab] = useState<string | null>("general");
  const [openedAccordion, setOpenedAccordion] = useState<string | null>(
    "general"
  );

  const tab = (category: string) => {
    const tabStyle = {
      borderColor: activeTab === category ? "#2a4385" : "#d0ddff",
    };

    return (
      <Tabs.Tab value={category} style={tabStyle}>
        {category}
      </Tabs.Tab>
    );
  };

  const general = generalQuestions.map((question) => (
    <Accordion.Item key={question.value} value={question.value}>
      <Accordion.Control
        chevron={
          question.value === openedAccordion ? <IconMinus /> : <IconPlus />
        }
      >
        {question.question}
      </Accordion.Control>
      <Accordion.Panel>{question.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  const registration = registrationQuestions.map((question) => (
    <Accordion.Item key={question.value} value={question.value}>
      <Accordion.Control
        chevron={
          question.value === openedAccordion ? <IconMinus /> : <IconPlus />
        }
      >
        {question.question}
      </Accordion.Control>
      <Accordion.Panel>{question.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  const accomodation = accommodationQuestions.map((question) => (
    <Accordion.Item key={question.value} value={question.value}>
      <Accordion.Control
        chevron={
          question.value === openedAccordion ? <IconMinus /> : <IconPlus />
        }
      >
        {question.question}
      </Accordion.Control>
      <Accordion.Panel>{question.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  const transportation = transportationQuestions.map((question) => (
    <Accordion.Item key={question.value} value={question.value}>
      <Accordion.Control
        chevron={
          question.value === openedAccordion ? <IconMinus /> : <IconPlus />
        }
      >
        {question.question}
      </Accordion.Control>
      <Accordion.Panel>{question.answer}</Accordion.Panel>
    </Accordion.Item>
  ));

  const handler = (value: string | null) => {
    setOpenedAccordion(null);
    setActiveTab(value);
  };

  return (
    <>
      <div className={styles.heroContainer}>
        {/*  */}
        <div className={styles.content}>
          {/* Header */}
          <div>
            <p className={styles.pageHeader}>FAQs</p>
          </div>

          {/* Questions Content*/}
          <Tabs
            value={activeTab}
            onChange={handler}
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
                {tab("general")}
                {tab("registration")}
                {tab("accomodation")}
                {tab("transportation")}
              </div>
            </Tabs.List>

            <Tabs.Panel value="general">
              <Accordion
                value={openedAccordion}
                onChange={setOpenedAccordion}
                chevronPosition="left"
                classNames={{
                  item: styles.accordionItem,
                  control: styles.accordionControl,
                  label: styles.accordionLabel,
                  content: styles.accordionContent,
                  chevron: styles.accordionChevron,
                }}
              >
                {general}
              </Accordion>
            </Tabs.Panel>
            <Tabs.Panel value="registration">
              <Accordion
                value={openedAccordion}
                onChange={setOpenedAccordion}
                chevronPosition="left"
                classNames={{
                  item: styles.accordionItem,
                  control: styles.accordionControl,
                  label: styles.accordionLabel,
                  content: styles.accordionContent,
                  chevron: styles.accordionChevron,
                }}
              >
                {registration}
              </Accordion>
            </Tabs.Panel>
            <Tabs.Panel value="accomodation">
              <Accordion
                value={openedAccordion}
                onChange={setOpenedAccordion}
                chevronPosition="left"
                classNames={{
                  item: styles.accordionItem,
                  control: styles.accordionControl,
                  label: styles.accordionLabel,
                  content: styles.accordionContent,
                  chevron: styles.accordionChevron,
                }}
              >
                {accomodation}
              </Accordion>
            </Tabs.Panel>
            <Tabs.Panel value="transportation">
              <Accordion
                value={openedAccordion}
                onChange={setOpenedAccordion}
                chevronPosition="left"
                classNames={{
                  item: styles.accordionItem,
                  control: styles.accordionControl,
                  label: styles.accordionLabel,
                  content: styles.accordionContent,
                  chevron: styles.accordionChevron,
                }}
              >
                {transportation}
              </Accordion>
            </Tabs.Panel>
          </Tabs>

          {/* Link to Contact Page */}
          <div className={styles.linkContainer}>
            <div>
              <p className={styles.text}>
                Can&rsquo;t find answers to your questions?
              </p>
            </div>

            <Link href="/contact" className={styles.linkToContactUsContainer}>
              <p className={styles.linkToContactUs}>CONTACT US</p>
              <Image
                width={28}
                height={28}
                className={styles.arrowCircleRightIcon}
                alt="Arrow Circle Right"
                src="/icons/arrowCircleRight.svg"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
