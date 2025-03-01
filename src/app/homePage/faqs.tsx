"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion } from "@mantine/core";
import styles from "./faqs.module.css";
import WalkIcon from "@/icons/walk.svg";
import TramIcon from "@/icons/tram.svg";
import BusIcon from "@/icons/bus.svg";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import {
  generalQuestions,
  registrationQuestions,
  accommodationQuestions,
  transportationQuestions,
} from "./questionsContent";

function GeneralFAQ({
  openedAccordion,
  openedMultipleAccordion,
}: {
  openedAccordion: string | null | undefined;
  openedMultipleAccordion?: string[] | undefined;
}) {
  return generalQuestions.map((question) => (
    <Accordion.Item key={question.value} value={question.value}>
      <Accordion.Control
        chevron={
          question.value === openedAccordion ||
          openedMultipleAccordion?.includes(question.value) ? (
            <IconMinus />
          ) : (
            <IconPlus />
          )
        }
      >
        <div>{question.question}</div>
      </Accordion.Control>
      <Accordion.Panel>
        <div>{question.answer}</div>
      </Accordion.Panel>
    </Accordion.Item>
  ));
}
function RegistrationFAQ({
  openedAccordion,
  openedMultipleAccordion,
}: {
  openedAccordion: string | null | undefined;
  openedMultipleAccordion?: string[] | undefined;
}) {
  return registrationQuestions.map((question) => (
    <Accordion.Item key={question.value} value={question.value}>
      <Accordion.Control
        chevron={
          question.value === openedAccordion ||
          openedMultipleAccordion?.includes(question.value) ? (
            <IconMinus />
          ) : (
            <IconPlus />
          )
        }
      >
        <div>{question.question}</div>
      </Accordion.Control>
      <Accordion.Panel>
        <div dangerouslySetInnerHTML={{ __html: question.answer }} />
      </Accordion.Panel>
    </Accordion.Item>
  ));
}

function AccommodationFAQ({
  openedAccordion,
  openedMultipleAccordion,
}: {
  openedAccordion?: string | null | undefined;
  openedMultipleAccordion?: string[] | undefined;
}) {
  return accommodationQuestions.map((question) => (
    <Accordion.Item key={question.value} value={question.value}>
      <Accordion.Control
        chevron={
          question.value === openedAccordion ||
          openedMultipleAccordion?.includes(question.value) ? (
            <IconMinus />
          ) : (
            <IconPlus />
          )
        }
      >
        <div>{question.question}</div>
      </Accordion.Control>
      <Accordion.Panel>
        <div dangerouslySetInnerHTML={{ __html: question.answer }} />
      </Accordion.Panel>
    </Accordion.Item>
  ));
}

function TransportationFAQ({
  openedAccordion,
  openedMultipleAccordion,
}: {
  openedAccordion?: string | null | undefined;
  openedMultipleAccordion?: string[] | undefined;
}) {
  const transports = [
    {
      key: "walk",
      icon: <WalkIcon style={{ fill: "white" }} />,
      header: "On foot",
      text: "The distance is around 1.5 km (Around 20 mins).",
    },
    {
      key: "tram",
      icon: <TramIcon style={{ fill: "white" }} />,
      header: "By tram",
      text: "12 (Trotha), 5 (Berliner Bruckë), 2 (Kröllwitz). Get off at Am Steintor stop. Walk around 6 mins.",
    },
    {
      key: "bus",
      icon: <BusIcon style={{ fill: "white" }} />,
      header: "By bus",
      text: "350 (Markt), 301 (Wettin), 345 (Halle-Center). Get off at Am Steintor stop. Walk around 6 mins.",
    },
  ];
  console.log({ openedMultipleAccordion });
  return (
    <Accordion.Item key="question-1" value="question-1">
      <Accordion.Control
        chevron={
          openedAccordion === "question-1" ||
          openedMultipleAccordion?.includes("question-1") ? (
            <IconMinus />
          ) : (
            <IconPlus />
          )
        }
      >
        How to get there?
      </Accordion.Control>
      <Accordion.Panel>
        <div className="mb-3 lg:mb-5">
          Halle (Saale) Hbf (Main train station) to DJH Jugendherberge Halle
        </div>
        <div className="flex flex-col gap-3 lg:gap-6 mb-6 lg:mb-12">
          {transports.map((t) => (
            <div key={t.key} className="flex gap-2 lg:gap-4">
              <div>{t.icon}</div>
              <div>
                <div className="font-medium lg:text-2xl">{t.header}</div>
                <div>{t.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-medium lg:text-2xl mb-2 lg:mb-5">
          Other useful information
        </div>
        <div>
          <ol className="list-decimal list-outside ml-3 lg:ml-5">
            <li>The closest airport is Leipzig/Halle airport (LEJ)</li>
            <li>
              The closest destination is at Halle (Saale) Hbf (Main train
              station)
            </li>
            <li>
              You can use following platforms to check the route:{" "}
              <a
                href="https://www.omio.com/"
                className="underline"
                target="_blank"
              >
                Omio
              </a>
              ,{" "}
              <a
                href="https://www.rome2rio.com/"
                className="underline"
                target="_blank"
              >
                Rome2Rio
              </a>
              ,{" "}
              <a
                href="https://int.bahn.de/en"
                className="underline"
                target="_blank"
              >
                Deutsche Bahn AG
              </a>
              , or{" "}
              <a
                href="https://www.google.com/travel/flights"
                className="underline"
                target="_blank"
              >
                Google Flights
              </a>
            </li>
          </ol>
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default function Content() {
  const [activeTab, setActivateTab] = useState("general");
  const [openedAccordion, setOpenedAccordion] = useState<string | null>();
  const [openedMultipleAccordion, setOpenedMultipleAccordion] =
    useState<string[]>();
  const tabs = [
    {
      key: "general",
      text: "general",
      onClick: () => setActivateTab("general"),
      faqs: (
        <GeneralFAQ
          openedAccordion={openedAccordion}
          openedMultipleAccordion={openedMultipleAccordion}
        />
      ),
    },
    {
      key: "registration",
      text: "registration",
      onClick: () => setActivateTab("registration"),
      faqs: (
        <RegistrationFAQ
          openedAccordion={openedAccordion}
          openedMultipleAccordion={openedMultipleAccordion}
        />
      ),
    },
    {
      key: "accommodation",
      text: "accommodation",
      onClick: () => setActivateTab("accommodation"),
      faqs: (
        <AccommodationFAQ
          openedAccordion={openedAccordion}
          openedMultipleAccordion={openedMultipleAccordion}
        />
      ),
    },
    {
      key: "transportation",
      text: "transportation",
      onClick: () => setActivateTab("transportation"),
      faqs: (
        <TransportationFAQ
          openedAccordion={openedAccordion}
          openedMultipleAccordion={openedMultipleAccordion}
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:max-w-210 w-full gap-10 lg:gap-22.5 justify-start">
      <div className="flex lg:flex-col gap-6 overflow-x-scroll lg:overflow-visible">
        {tabs.map(({ key, text, onClick }) => (
          <div
            key={key}
            className="uppercase cursor-pointer text-xl font-sans font-medium text-white"
            onClick={onClick}
          >
            <div
              className={`${
                activeTab == key && "border-b-4 border-orange py-0 box-border"
              } h-12 w-fit flex items-center tracking-[0.18rem]"`}
            >
              {text}
            </div>
          </div>
        ))}
      </div>
      <div className="grow lg:w-max">
        <Accordion
          className="hidden lg:block"
          value={openedMultipleAccordion}
          onChange={setOpenedMultipleAccordion}
          multiple={true}
          chevronPosition="left"
          classNames={{
            item: styles.accordionItem,
            control: styles.accordionControl,
            label: styles.accordionLabel,
            content: styles.accordionContent,
            chevron: styles.accordionChevron,
          }}
        >
          {tabs.find(({ key }) => key == activeTab)?.faqs}
        </Accordion>
        <Accordion
          className="block lg:hidden"
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
          {tabs.find(({ key }) => key == activeTab)?.faqs}
        </Accordion>
      </div>
    </div>
  );
}
