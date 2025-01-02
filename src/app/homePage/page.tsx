import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className="h-screen w-screen grid">
        <div className="bg-[url('/hero-no-text.svg')] bg-no-repeat lg:bg-cover bg-bottom w-full max-w-md lg:max-w-none lg:w-5/12 h-full self-center justify-self-center">
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
    </>
  );
}
