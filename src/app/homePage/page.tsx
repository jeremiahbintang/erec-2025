"use client";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";
import styles from "./homePage.module.css";
import { useState } from "react";
const customTheme: CustomFlowbiteTheme["carousel"] = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none lg:rounded-lg",
    snap: "snap-x",
  },
};
function RegisterButton() {
  return (
    <a
      href="https://bit.ly/EREC2025"
      target="_blank"
      className="w-fit text-xs lg:text-xl bg-orange px-6 lg:px-10 h-10 lg:h-16 uppercase text-white font-sans font-bold tracking-widest rounded-full flex justify-center items-center"
    >
      Register Now
    </a>
  );
}
export default function HomePage() {
  const [speaker, SetSpeaker] = useState("billy");
  const speakerDescriptions = {
    billy: `Teaches systematic theology at the International Reformed Evangelical Seminary Jakarta and serves on the World Reformed Fellowship's theological commission. With 24 years of pastoral experience, he's authored "Ajarlah Kami Bertumbuh" and "Sola Dei Gloria." His research spans soteriology, anthropology, spirituality, John Calvin's theology, and J.S. Bach. Find his sermons on the "Sola Dei Gloria" YouTube channel.`,
    jack: `Rev. Jack David Kawira is a pastor at the Reformed Evangelical Church of Indonesia (GRII) and a lecturer at the International Reformed Evangelical Seminary (STTRII) in Jakarta. He holds an S.E. from Institut Bisnis dan Informatika Indonesia, an M.Th. from STTRII Jakarta, and an M.A. from Theologische Universiteit Kampen, Netherlands, and is currently pursuing his Ph.D. at Vrije Universiteit Amsterdam.`,
    leo: `First came to GRII in 2003 while taking his Design Bachelor's Degree at UPH Karawaci. From then on, with the growing urge and calling to serve God as His servant, he continued to serve in youth ministry of GRII Karawaci up until 2012 when he entered STTRII Jakarta. He received his Master of Theology in 2015, and has since served as an assistant pastor; from 2015-2018 in GRII Bintaro, and in 2018-2021 in both GRII Solo and GRII Yogyakarta. At the moment, he is continuing his doctoral study in Theologische Universiteit Apeldoorn, Netherlands.`,
  };
  const speakerNames = {
    billy: `Rev. Billy Kristanto, Ph.D`,
    jack: `Rev. Jack Kawira`,
    leo: `Vic. Leonardo Chandra`,
  };
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
              <RegisterButton />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-8xl px-10 pb-10 lg:pb-32 w-full">
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
          <div className="mb-10 md:mb-20 mx-[-2.5rem] lg:mx-0 relative rounded-none w-screen lg:w-full h-80 lg:h-140">
            <Carousel theme={customTheme}>
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
        <div className="max-w-8xl bg-white px-10 py-10 lg:py-32 w-full flex items-center flex-col">
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
                Reformed Evangelical Convention (EREC). The theme for this year
                is The Gift of Perseverance. Perseverance means maintaining the
                fire of faith in every season. This retreat is not just about a
                temporary boost; it&apos;s about fostering a lasting commitment
                to your spiritual journey. Come and discover how to keep your
                inner fire burning brightly, ensuring that your faith remains
                strong and impactful in your everyday life. Join us and register
                now!
              </div>
              <RegisterButton />
            </div>
          </div>
          <div className="bg-dark-slate-blue rounded-2xl w-full px-5 lg:px-28 pt-10 lg:py-20 lg:flex lg:flex-row lg:items-center lg:justify-between">
            <div className="text-white w-full lg:w-105">
              <div className="font-medium text-3xl lg:text-6xl leading-tight mb-8">
                Get to know
                <br />
                some of
                <br />
                the speakers
              </div>
              <div className="h-128 font-sans lg:hidden">
                <Carousel>
                  <div className="h-full">
                    <Image
                      className="object-cover w-30 h-30 rounded-full  mb-4"
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
                      className="object-cover w-30 h-30 rounded-full mb-4"
                      src="/speakers/jack.png"
                      alt="group photo"
                      width={1920}
                      height={1080}
                    />
                    <div className="font-medium">{speakerNames.jack}</div>
                    <div className="text-xs">{speakerDescriptions.jack}</div>
                  </div>
                  <div className="h-full">
                    <Image
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
                    speaker == "jack" && "opacity-40 ring-10 ring-white"
                  }`}
                  onClick={() => SetSpeaker("jack")}
                >
                  <Image
                    src="/speakers/jack.png"
                    className={`rounded-full object-cover scale-150`}
                    alt="jack"
                    fill
                  />
                  {speaker != "jack" && (
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
            <div className="relative hidden lg:block">
              <div className="relative w-120 h-160 bg-white rounded-2xl z-10 text-dark-slate-blue p-10">
                <div className="w-50 h-50 relative rounded-full overflow-hidden mb-10">
                  <Image
                    src={`/speakers/${speaker}.png`}
                    className="object-cover rounded-full scale-125 translate-y-3"
                    fill
                    alt={speaker}
                  />
                </div>
                <div className="font-medium text-3xl mb-2">
                  {speaker == "billy"
                    ? speakerNames.billy
                    : speaker == "jack"
                    ? speakerNames.jack
                    : speakerNames.leo}
                </div>
                <div>
                  {speaker == "billy"
                    ? speakerDescriptions.billy
                    : speaker == "jack"
                    ? speakerDescriptions.jack
                    : speakerDescriptions.leo}
                </div>
              </div>
              <div className="absolute top-3 left-12 w-120 h-154 bg-light-gray rounded-2xl z-0"></div>
            </div>
          </div>
          <div className="hidden">
            <div>Pricing</div>
            <div>
              The prices below include accommodation and meals. Towels are
              available for an additional EUR 1.50.
            </div>
            <div>
              <div>
                <div>
                  <div>Adult</div>
                  <div>Early bird (Until 31 Jan 2025)</div>
                </div>
                <div>
                  <div>EUR</div>
                  <div>190</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Adult</div>
                </div>
                <div>
                  <div>EUR</div>
                  <div>215</div>
                </div>
              </div>
              <div>
                <div>
                  <div>11-17</div>
                  <div>Years Old</div>
                </div>
                <div>
                  <div>EUR</div>
                  <div>130</div>
                </div>
              </div>
              <div>
                <div>
                  <div>3-10</div>
                  <div>Years Old</div>
                </div>
                <div>
                  <div>EUR</div>
                  <div>105</div>
                </div>
              </div>
              <div>
                <div>
                  <div>0-2</div>
                  <div>Years Old</div>
                </div>
                <div>
                  <div>EUR</div>
                  <div>60</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
