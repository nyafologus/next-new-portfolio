import Image from "next/image";
import localFont from "next/font/local";

const winkFont = localFont({
  src: "../../../public/wink-script-regular.woff2",
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mb-0 flex h-screen w-full items-center justify-center overflow-hidden px-0 py-16 font-normal text-gray-300 "
    >
      <h1 className="text-center text-2xl font-bold">
        <span className={`${winkFont.className} text-5xl`}>
          <span className="swsh">H</span>
          ey there,
        </span>{" "}
        this is{" "}
        <span className={`${winkFont.className} fancy-text pr-2 text-5xl`}>
          Sophie
        </span>
        <br />
        <span className="mt-4 inline-block">I am a Frontend Developer</span>
      </h1>

      <Image
        className="absolute z-[-1] h-full min-h-screen w-full object-cover"
        src="/horsegirl-r.jpg"
        width={1500}
        height={1500}
        alt="Hero image"
      />
    </section>
  );
}
