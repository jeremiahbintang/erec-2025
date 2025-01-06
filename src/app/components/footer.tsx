import Image from "next/image";

export default function Footer() {
  return (
    <div className="hidden lg:flex bg-transparent p-10 w-full flex-row justify-between">
      <div className="font-sans flex flex-row gap-2 items-end leading-6">
        <div className="text-orange font-medium text-2xl">Contact</div>
        <div className="text-white text-xl">
          Evan{" "}
          <a
            href="https://wa.me/+4915147058172"
            target="_blank"
            className="underline"
          >
            +49 1514 7058 172
          </a>
        </div>
      </div>
      <div className="font-sans flex flex-row gap-2 items-end leading-6">
        <div className="text-orange font-medium text-2xl">Organizer</div>
        <div className="text-white text-xl">
          <a
            href="https://www.irec-europe.org/"
            target="_blank"
            className="underline"
          >
            IREC in Europe
          </a>
        </div>
      </div>
    </div>
  );
}
