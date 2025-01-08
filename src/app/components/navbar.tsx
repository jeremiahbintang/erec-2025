import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-transparent p-5 lg:p-10 absolute top-0 left-0 z-10">
      <div className="relative h-10 lg:h-20 w-52 lg:w-[26rem]">
        <Image
          src="/logo.svg"
          alt="EREC 2025 Logo"
          sizes="300px"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}
