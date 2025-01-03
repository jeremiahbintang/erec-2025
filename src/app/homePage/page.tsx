import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <>
      <div>
        {/* Section 1 */}
        <div className="h-screen w-screen grid">
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
        <div>
          <div>
            European Reformed <br />
            Evangelical Convention
          </div>
          <div>
            EREC is a yearly convention where congregation from IREC Europe
            churches and beyond gather to learn of God's word and have a
            fellowship as one body of Christ.
          </div>
        </div>
        <div>
          <img src="/event-images/event1.png" />
        </div>
        <div>
          <div>When and where</div>
          <div>18 to 21 April, 2025</div>
          <div>
            DJH Jugendherberge Halle,
            <br />
            Große Steinstraße 60,
            <br />
            06108 Halle (Saale), Germany
          </div>
          <div>
            <img src="/map.png" />
            <button>View on Google Maps</button>
          </div>
        </div>
        <div>
          <div>About</div>
          <div>The Theme</div>
          <div>
            During special occasions like Christmas or retreats, we often
            experience spiritual highs that ignite a passion to serve God in our
            daily lives. However, this fervor can sometimes fade over time.
          </div>
          <div>
            <div>The question then arises:</div>
            <div>
              How do we sustain that spiritual momentum? How do we persevere in
              faith through all seasons?
            </div>
          </div>
          <div>
            <div>
              These questions will be addressed at this year's European Reformed
              Evangelical Convention (EREC). The theme for this year is The Gift
              of Perseverance. Perseverance means maintaining the fire of faith
              in every season. This retreat is not just about a temporary boost;
              it's about fostering a lasting commitment to your spiritual
              journey. Come and discover how to keep your inner fire burning
              brightly, ensuring that your faith remains strong and impactful in
              your everyday life. Join us and register now!
            </div>
            <div>Register Now</div>
          </div>
        </div>
      </div>
    </>
  );
}
