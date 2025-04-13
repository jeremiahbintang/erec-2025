"use client";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import FAQs from "./faqs";

const customEventCarouselTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    leftControl: "hidden",
    rightControl: "hidden",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden !overflow-x-scroll !scroll-smooth rounded-none lg:rounded-lg",
    snap: "snap-x",
  },
  indicators: {
    wrapper:
      "absolute bottom-5 left-1/2 -translate-x-1/2 lg:transform-none lg:right-5 lg:left-auto flex space-x-3",
    active: {
      off: "bg-white/50 hover:bg-white",
      on: "bg-white",
    },
  },
};

const customSpeakersCarouselTheme: CustomFlowbiteTheme["carousel"] = {
  root: {
    leftControl: "hidden",
    rightControl: "hidden",
  },
  indicators: {
    wrapper: "absolute top-5 left-1/2 flex -translate-x-1/2 space-x-3",
    active: {
      off: "bg-white/50 hover:bg-white",
      on: "bg-white",
    },
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden !overflow-x-scroll !scroll-smooth rounded-none absolute top-14 w-full",
  },
};

function RegisterButton({
  center,
  color,
}: {
  center?: boolean;
  color?: string;
}) {
  return (
    <div className={center ? "flex-col flex justify-center items-center" : ""}>
      <a
        id="register-button"
        href="javascript: void(0)"
        target="_blank"
        className="w-fit text-xs lg:text-xl bg-orange px-6 lg:px-10 h-10 lg:h-16 uppercase text-white font-sans font-bold tracking-widest rounded-full flex justify-center items-center"
      >
        Registration Closed
      </a>
      <div className={`${color} ${center && "text-center"} font-sans`}>
        We have closed our registration.
        <br /> Please look forward for EREC 2026 :)
      </div>
    </div>
  );
}

function Time({ hour, minute }: { hour: string; minute: string }) {
  return (
    <div className="flex text-5xl lg:text-6xl gap-2 font-medium">
      <div className="w-12 lg:w-16 h-20 lg:h-25 bg-very-light-gray rounded-md flex justify-center items-center">
        {hour[0]}
      </div>
      <div className="w-12 lg:w-16 h-20 lg:h-25 bg-very-light-gray rounded-md flex justify-center items-center">
        {hour[1]}
      </div>
      <div>:</div>
      <div className="w-12 lg:w-16 h-20 lg:h-25 bg-very-light-gray rounded-md flex justify-center items-center">
        {minute[0]}
      </div>
      <div className="w-12 lg:w-16 h-20 lg:h-25 bg-very-light-gray rounded-md flex justify-center items-center">
        {minute[1]}
      </div>
    </div>
  );
}

function DateAndDescription({
  date,
  description,
}: {
  date: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="text-2xl lg:text-3xl font-medium">{date}</div>
      <div className="text-left leading-8">{description}</div>
    </div>
  );
}

export default function HomePage() {
  const [speaker, SetSpeaker] = useState("billy");
  const speakerDescriptions = {
    billy: `Teaches systematic theology at the International Reformed Evangelical Seminary Jakarta and serves on the World Reformed Fellowship's theological commission. His research spans soteriology, anthropology, spirituality, John Calvin's theology, and J.S. Bach. He is also running a Youtube channel called "Sola Dei Gloria".`,
    edward: `Rev. Edward Oei is the senior pastor of IREC Medan, a member of IREC Synod Development Board, Secretariat of IREC Central, pastor of Fellowship of Indonesian Reformed Evangelical Students (FIRES), editor in chief of PILLAR (bulletin for Indonesian Reformed Evangelical Church Youth). He holds a Diplom Ingenieur from Technische Universität Berlin and an M.C.S. from International Reformed Evangelical Seminary, Jakarta.`,
    sutjipto: `Rev. Sutjipto Subeno earned his theological degrees from the International Reformed Evangelical Seminary Jakarta and he is currently working on his Ph.D dissertation in the same institution. He is the pastor GRII Bintaro and MRII Kupang, the Head of Admission and lecturer at the International Reformed Evangelical Seminary Jakarta.`,
    leo: `First came to GRII in 2003 while taking his Design Bachelor's Degree at UPH Karawaci. He received his Master of Theology in 2015, and has since served as an assistant pastor; from 2015-2018 in GRII Bintaro, and in 2018-2021 in both GRII Solo and GRII Yogyakarta. At the moment, he is continuing his doctoral study in Theologische Universiteit Apeldoorn, Netherlands.`,
  };
  const speakerNames = {
    billy: `Rev. Billy Kristanto`,
    edward: `Rev. Edward Oei`,
    sutjipto: `Rev. Sutjipto Subeno`,
    leo: `Vic. Leonardo Chandra`,
  };
  const pricingOptions = [
    // {
    //   key: "adult-early",
    //   bgColor: "orange",
    //   color: "white",
    //   title: "Adult",
    //   subtitle: "Early bird (Until 31 Jan 2025)",
    //   mobileSubtitle: "Early bird",
    //   subtitleClass: "font-sans normal-case",
    //   price: "195",
    // },
    {
      key: "adult",
      bgColor: "dark-slate-blue",
      color: "white",
      title: "Adult",
      subtitle: "",
      price: "215",
    },
    {
      key: "teen",
      bgColor: "dark-slate-blue",
      color: "white",
      title: "11 - 17",
      subtitle: "Years Old",
      price: "130",
    },
    {
      key: "kid",
      bgColor: "dark-slate-blue",
      color: "white",
      title: "3 - 10",
      subtitle: "Years Old",
      price: "105",
    },
    {
      key: "baby",
      bgColor: "dark-slate-blue",
      color: "white",
      title: "0 - 2",
      subtitle: "Years Old",
      price: "60",
    },
  ];

  const schedules = [
    { key: "day1", src: "/schedule-images/schedule-day1.png" },
    { key: "day2", src: "/schedule-images/schedule-day2.png" },
    { key: "day3", src: "/schedule-images/schedule-day3.png" },
    { key: "day4", src: "/schedule-images/schedule-day4.png" },
  ];
  return (
    <>
      <div className="w-full flex flex-col items-center">
        {/* Section 1 */}
        <div className="h-screen w-full grid mb-20 self-center block">
          <div className="bg-[url('/hero-no-text.svg')] bg-no-repeat bg-cover bg-bottom w-full md:w-9/12 lg:min-w-[650px] lg:w-5/12 h-full self-center justify-self-center">
            <div className="flex flex-col justify-between gap-60 h-full items-center pt-36 pb-24">
              <div className="font-serif text-white uppercase leading-none text-center font-semibold">
                <div className="text-xl lg:text-5xl">The Gift of</div>
                <div className="text-3xl lg:text-7xl">Perseverance</div>
              </div>
              <RegisterButton center color="text-white" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-8xl px-5 lg:px-10 pb-10 lg:pb-32 w-full">
          <div className="mb-8 md:mb-10">
            <div className="font-sans text-white text-2xl md:text-4xl font-medium leading-none">
              European Reformed <br />
              Evangelical Convention
            </div>
            <div className="font-sans text-white text-xs md:text-2xl pt-4 max-w-2xl">
              EREC is a yearly convention where congregation from IREC Europe
              churches and beyond gather to learn of God&apos;s word and have a
              fellowship as one body of Christ.
            </div>
          </div>
          <div className="mb-10 md:mb-20 -mx-5 lg:mx-0 relative rounded-none w-screen lg:w-full h-80 lg:h-140">
            <Carousel theme={customEventCarouselTheme} slide>
              <Image
                className="object-cover w-auto h-full lg:h-auto lg:w-full rounded-none"
                src="/event-images/event1.png"
                alt="seminar"
                width={1920}
                height={1080}
              />
              <Image
                className="object-cover w-auto h-full lg:h-auto lg:w-full"
                src="/event-images/event2.png"
                alt="group photo"
                width={1920}
                height={1080}
              />
              <Image
                className="object-cover w-auto h-full lg:h-auto lg:w-full"
                src="/event-images/event3.png"
                alt="kids"
                width={1920}
                height={1080}
              />
              <Image
                className="object-cover w-auto h-full lg:h-auto lg:w-full"
                src="/event-images/event4.png"
                alt="sunday school"
                width={1920}
                height={1080}
              />
              <Image
                className="object-cover w-auto h-full lg:h-auto lg:w-full"
                src="/event-images/event5.png"
                alt="choir"
                width={1920}
                height={1080}
              />
            </Carousel>
          </div>
          <div>
            <div className="font-serif uppercase text-orange font-bold size-2xl">
              When and where
            </div>
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="font-sans mb-5 lg:mb-auto text-white">
                <div className="text-3xl md:text-6xl font-medium">
                  18 to 21 April, 2025
                </div>
                <div className="text-base md:text-3xl font-medium leading-normal">
                  DJH Jugendherberge Halle,
                  <br />
                  Große Steinstraße 60,
                  <br />
                  06108 Halle (Saale), Germany
                </div>
              </div>
              <div className="relative w-full lg:w-auto">
                <img className="rounded-2xl w-full lg:w-auto" src="/map.png" />
                <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <a
                    href="https://maps.app.goo.gl/yQFEPraEG2cXXwiy6"
                    className="text-xs lg:text-base px-4 h-10 w-max uppercase text-dark-slate-blue border-dark-slate-blue border-2 font-sans font-bold tracking-widest rounded-full flex justify-center items-center"
                    target="_blank"
                  >
                    <p className="lg:hidden">Google Maps</p>
                    <p className="hidden lg:block">View on Google Maps</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div
          id="about"
          className="bg-white w-screen flex items-center flex-col"
        >
          <div className="max-w-8xl w-screen px-5 lg:px-10 pt-10 pb-16 lg:py-32 flex items-center flex-col">
            <div className="text-dark-slate-blue max-w-2xl text-center mb-16 lg:mb-40">
              <div className="text-2xl lg:text-5xl leading-none font-bold lg:font-semibold font-serif uppercase">
                About
              </div>
              <div className="text-2xl lg:text-7xl leading-none font-bold lg:font-semibold font-serif uppercase mb-6">
                The Theme
              </div>
              <div className="text-base font-sans leading-loose">
                During special occasions like Christmas or retreats, we often
                experience spiritual highs that ignite a passion to serve God in
                our daily lives. However, this fervor can sometimes fade over
                time.
              </div>
            </div>
            <div className="flex flex-col w-full font-sans lg:flex-row text-dark-slate-blue gap-6 lg:gap-24 mb-12">
              <div className="font-medium lg:basis-1/2">
                <div className="text-base lg:text-3xl">
                  The question then arises:
                </div>
                <div className="text-3xl lg:text-6xl leading-tight">
                  How do we sustain that spiritual momentum? How do we persevere
                  in faith through all seasons?
                </div>
              </div>
              <div className="lg:basis-1/2">
                <div className="text-base lg:text-2xl leading-relaxed mb-6">
                  These questions will be addressed at this year&apos;s European
                  Reformed Evangelical Convention (EREC). The theme for this
                  year is The Gift of Perseverance. Perseverance means
                  maintaining the fire of faith in every season. This retreat is
                  not just about a temporary boost; it&apos;s about fostering a
                  lasting commitment to your spiritual journey. Come and
                  discover how to keep your inner fire burning brightly,
                  ensuring that your faith remains strong and impactful in your
                  everyday life. Join us and register now!
                </div>
                <RegisterButton color="text-slate-blue" />
              </div>
            </div>
            <div className="bg-dark-slate-blue rounded-2xl w-full px-5 lg:px-28 pt-10 lg:py-20 lg:flex lg:flex-col lg:gap-20 xl:gap-0 xl:flex-row lg:items-start xl:items-center lg:justify-between mb-12 lg:mb-30">
              <div className="text-white w-full lg:w-105">
                <div className="font-medium font-sans text-3xl lg:text-6xl leading-none mb-4 lg:mb-8">
                  Get to know some of
                  <span className="inline-block">the speakers</span>
                </div>
                <div className="h-128 font-sans lg:hidden">
                  <Carousel theme={customSpeakersCarouselTheme}>
                    <div className="h-full">
                      <Image
                        quality={75}
                        className="object-cover w-30 h-30 rounded-full mb-4"
                        src="/speakers/billy.png"
                        alt="seminar"
                        width={1920}
                        height={1080}
                      />
                      <div className="font-medium">{speakerNames.billy}</div>
                      <div className="text-xs">{speakerDescriptions.billy}</div>
                    </div>
                    <div className="h-full">
                      <Image
                        quality={75}
                        className="object-cover w-30 h-30 rounded-full mb-4"
                        src="/speakers/edward.png"
                        alt="group photo"
                        width={1920}
                        height={1080}
                      />
                      <div className="font-medium">{speakerNames.edward}</div>
                      <div className="text-xs">
                        {speakerDescriptions.edward}
                      </div>
                    </div>

                    <div className="h-full">
                      <Image
                        quality={75}
                        className="object-cover w-30 h-30 rounded-full mb-4"
                        src="/speakers/sutjipto.png"
                        alt="group photo"
                        width={1920}
                        height={1080}
                      />
                      <div className="font-medium">{speakerNames.sutjipto}</div>
                      <div className="text-xs">
                        {speakerDescriptions.sutjipto}
                      </div>
                    </div>
                    <div className="h-full">
                      <Image
                        quality={75}
                        className="object-cover w-30 h-30 rounded-full mb-4"
                        src="/speakers/leo.png"
                        alt="kids"
                        width={1920}
                        height={1080}
                      />
                      <div className="font-medium">{speakerNames.leo}</div>
                      <div className="text-xs">{speakerDescriptions.leo}</div>
                    </div>
                  </Carousel>
                </div>
                <div className="flex-row gap-5 hidden lg:flex">
                  <div
                    className={`group overflow-hidden relative w-30 h-30 rounded-full ${
                      speaker == "billy" && "opacity-40 ring-10 ring-white"
                    }`}
                    onClick={() => SetSpeaker("billy")}
                  >
                    <Image
                      quality={75}
                      src="/speakers/billy.png"
                      className={`rounded-full object-cover scale-125 translate-y-3`}
                      alt="billy"
                      fill
                    />
                    {speaker != "billy" && (
                      <div
                        className={`absolute rounded-full inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                      />
                    )}
                  </div>

                  <div
                    className={`group overflow-hidden relative w-30 h-30 rounded-full ${
                      speaker == "edward" && "opacity-40 ring-10 ring-white"
                    }`}
                    onClick={() => SetSpeaker("edward")}
                  >
                    <Image
                      quality={75}
                      src="/speakers/edward.png"
                      className={`rounded-full object-cover scale-150`}
                      alt="edward"
                      fill
                    />
                    {speaker != "edward" && (
                      <div
                        className={`absolute rounded-full inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                      />
                    )}
                  </div>

                  <div
                    className={`group overflow-hidden relative w-30 h-30 rounded-full ${
                      speaker == "sutjipto" && "opacity-40 ring-10 ring-white"
                    }`}
                    onClick={() => SetSpeaker("sutjipto")}
                  >
                    <Image
                      quality={75}
                      src="/speakers/sutjipto.png"
                      className={`rounded-full object-cover scale-100`}
                      alt="sutjipto"
                      fill
                    />
                    {speaker != "sutjipto" && (
                      <div
                        className={`absolute rounded-full inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                      />
                    )}
                  </div>
                  <div
                    className={`group overflow-hidden relative w-30 h-30 rounded-full ${
                      speaker == "leo" && "opacity-40 ring-10 ring-white"
                    }`}
                    onClick={() => SetSpeaker("leo")}
                  >
                    <Image
                      quality={75}
                      src="/speakers/leo.png"
                      className={`rounded-full object-cover scale-125`}
                      alt="leo"
                      fill
                    />
                    {speaker != "leo" && (
                      <div
                        className={`absolute rounded-full inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block font-sans">
                <div className="relative w-120 h-160 bg-white rounded-2xl z-10 text-dark-slate-blue p-10">
                  <div className="w-50 h-50 relative rounded-full overflow-hidden mb-10">
                    <Image
                      quality={75}
                      src={`/speakers/${speaker}.png`}
                      className="object-cover rounded-full scale-100 translate-y-3"
                      fill
                      alt={speaker}
                    />
                  </div>
                  <div className="font-medium text-3xl mb-2">
                    {speaker == "billy"
                      ? speakerNames.billy
                      : speaker == "edward"
                      ? speakerNames.edward
                      : speaker == "sutjipto"
                      ? speakerNames.sutjipto
                      : speakerNames.leo}
                  </div>
                  <div className="leading-[1.875]">
                    {speaker == "billy"
                      ? speakerDescriptions.billy
                      : speaker == "edward"
                      ? speakerDescriptions.edward
                      : speaker == "sutjipto"
                      ? speakerDescriptions.sutjipto
                      : speakerDescriptions.leo}
                  </div>
                </div>
                <div className="absolute top-3 left-12 w-120 h-154 bg-light-gray rounded-2xl z-0"></div>
              </div>
            </div>
            <div className="text-dark-slate-blue w-full mb-18 lg:mb-40">
              <div className="text-3xl lg:text-4xl font-medium font-sans mb-2">
                Pricing
              </div>
              <div className="text-base lg:text-xl font-sans mb-6 lg:mb-10 max-w-120 leading-loose">
                The prices below include accommodation and meals. Towels are
                available for an additional{" "}
                <span className="inline-block">EUR 1.50</span>.
              </div>
              <div className="flex flex-row w-[calc(100%+20px)] lg:w-[calc(100%+40px)] flex-nowrap overflow-x-scroll gap-5 text-white">
                {pricingOptions.map((option) => (
                  <div
                    key={option.key}
                    className={`flex flex-col justify-between py-8 px-5 shrink-0 w-50 h-50 lg:w-120 lg:h-80 bg-${option.bgColor} text-${option.color} rounded-2xl`}
                  >
                    <div>
                      <div>
                        <div className="uppercase text-2xl lg:text-4xl font-semibold font-serif leading-none">
                          {option.title}
                        </div>
                        <div
                          className={`${"font-serif uppercase"} text-base lg:text-2xl font-normal lg:font-medium leading-none`}
                        >
                          <div className="hidden lg:block">
                            {option.subtitle}
                          </div>
                          <div className="lg:hidden">{option.subtitle}</div>
                        </div>
                      </div>
                    </div>
                    <div className="self-end leading-none">
                      <span className="text-2.5xl lg:text-3xl font-medium ">
                        EUR
                      </span>
                      <span className="text-5xl lg:text-6xl font-medium ">
                        {option.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center text-dark-slate-blue font-sans">
              <div className="text-3xl lg:text-6xl font-medium lg:leading-tight mb-2">
                All set for the trip?
              </div>
              <div className="lg:text-2xl mb-16 lg:mb-30 lg:leading-10">
                Here are the important timings
                <br />
                you will need to know to book your trip.
              </div>
              <div className="flex flex-col lg:flex-row lg:max-w-4xl gap-4 lg:gap-12 mb-10 lg:mb-20">
                <Time hour="12" minute="30" />
                <DateAndDescription
                  date="Fri, 18 April"
                  description="The first session begins. Spare enough time to complete your check-in upon arrival. No lunch provided, we recommend having lunch before arriving, such as at the station. Most restaurants outside are closed on this date."
                />
              </div>
              <div className="flex flex-col lg:flex-row lg:max-w-4xl gap-4 lg:gap-12 mb-20">
                <Time hour="11" minute="30" />
                <DateAndDescription
                  date="Mon, 21 April"
                  description="The last session estimated to end. Lunch is provided until
                    13:00 before your departure. Make sure you have your bags
                    ready before this last session."
                />
              </div>
            </div>
          </div>
          {/* Section 3 */}
          <div
            id="schedule"
            className="bg-dark-slate-blue/40 w-screen flex items-center flex-col"
          >
            <div className="max-w-8xl w-screen px-5 lg:px-10 pt-10 pb-16 lg:py-32 flex items-center flex-col">
              <div className="text-dark-slate-blue font-medium text-3xl lg:text-4xl mb-8 lg:mb-10">
                The schedule
              </div>
              <div className="self-start flex flex-row w-[calc(100%+20px)] lg:w-[calc(100%+40px)] flex-nowrap overflow-x-scroll gap-5 text-white">
                {schedules.map((option) => (
                  <div
                    key={option.key}
                    className={`w-67.5 h-120 lg:w-135 lg:h-240 shrink-0`}
                  >
                    <Image
                      src={option.src}
                      className="w-full h-full"
                      width={450}
                      height={800}
                      alt={option.key}
                    ></Image>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Section 4 */}
          <div
            id="faq"
            className="bg-dark-slate-blue w-screen flex items-center flex-col"
          >
            <div className="max-w-8xl w-screen px-5 lg:px-10 pt-10 pb-16 lg:py-32 flex items-center flex-col">
              <div className="text-white font-medium text-3xl lg:text-4xl mb-8 lg:mb-30">
                Frequently asked questions
              </div>
              <FAQs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
