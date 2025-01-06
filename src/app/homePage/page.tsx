import { Carousel } from "flowbite-react";

import styles from "./homePage.module.css";

export default function HomePage() {
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
              <a
                href="https://bit.ly/EREC2025"
                target="_blank"
                className="text-xs lg:text-xl bg-orange px-6 lg:px-10 h-10 lg:h-16 uppercase text-white font-sans font-bold tracking-widest rounded-full flex justify-center items-center"
              >
                Register Now
              </a>
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
          <div className="mb-10 md:mb-20 mx-[-2.5rem] lg:mx-0 relative w-screen lg:w-full h-80 lg:h-140">
            <Carousel>
              <img
                className="object-cover w-auto h-full"
                src="/event-images/event1.png"
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
        {/* <div className="max-w-8xl bg-white pt-32 w-full flex items-center flex-col">
          <div className="text-dark-slate-blue max-w-2xl text-center">
            <div className="text-5xl leading-none font-semibold font-serif uppercase">
              About
            </div>
            <div className="text-7xl leading-none font-semibold font-serif uppercase mb-6">
              The Theme
            </div>
            <div className="text-base font-sans leading-loose">
              During special occasions like Christmas or retreats, we often
              experience spiritual highs that ignite a passion to serve God in
              our daily lives. However, this fervor can sometimes fade over
              time.
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div>
              <div>The question then arises:</div>
              <div>
                How do we sustain that spiritual momentum? How do we persevere
                in faith through all seasons?
              </div>
            </div>
            <div>
              <div>
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
              <div>Register Now</div>
            </div>
          </div>
          <div>
            <div>Get to know some of the speakers</div>
            <div>
              <div>Rev. Jack Kawira</div>
              <div>About Jack Kawira</div>
            </div>
          </div>
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
        </div> */}
      </div>
    </>
  );
}
