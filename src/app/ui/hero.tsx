import Image from "next/image";
import { Link } from "react-scroll";
import localFont from "next/font/local";

const winkFont = localFont({
  src: "../../../public/wink-script-regular.woff2",
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mb-0 flex h-[95vh] w-full flex-col items-center justify-center overflow-hidden py-16 font-normal text-gray-300 "
    >
      <h1 className="mt-10 text-center text-[9vmin] font-bold leading-3 drop-shadow-md sm:text-[6vmin] md:text-[5vmin] lg:pb-4">
        <span
          className={`text-[11vmin] sm:text-[7vmin] ${winkFont.className} `}
        >
          <span className="swsh">H</span>
          ey there,
          <br className="block md:hidden" />
        </span>{" "}
        this is{" "}
        <a
          href="https://github.com/nyafologus?tab=overview&from=2020-11-28&to=2021-11-28"
          target="_blank"
        >
          <span
            className={`${winkFont.className} fancy-text inline-block pb-12 pr-4 pt-16 text-[11vmin] sm:text-[7vmin] md:text-[8vmin]`}
          >
            <span className="ss01">S</span>
            ophie!
          </span>
        </a>
      </h1>

      <Link to="about" smooth duration={800}>
        <div className="scroll-link">
          <svg width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </Link>

      <Image
        className="absolute z-[-1] hidden h-full min-h-screen w-full object-cover md:block"
        src="/horsegirl-r.jpg"
        width={1500}
        height={1500}
        alt="Hero image"
        priority={true}
      />
      <Image
        className="absolute z-[-1] block h-full min-h-screen w-full object-cover md:hidden"
        src="/horsegirl-r-sm.jpg"
        width={1500}
        height={1500}
        alt="Hero image"
      />
    </section>
  );
}
