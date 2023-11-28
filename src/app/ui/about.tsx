import Image from "next/image";
import avatar from "@/../../public/avatar.png";
import localFont from "next/font/local";
import { aboutData } from "@/app/data/data";

const monoItalicFont = localFont({
  src: "../../../public/operator-mono-xlight-italic.woff2",
  display: "swap",
});

export default function About() {
  const {
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    paragraphFour,
    separator,
    resume,
  } = aboutData;

  return (
    <section
      id="about"
      className="mb-0 h-full border-t-0 bg-gradient-to-r from-teal-500 to-lime-500 p-0 text-white"
    >
      <div
        id="container"
        className="mx-auto w-full px-10 pb-6 pt-20 md:max-w-6xl md:px-12 md:pb-10 md:pt-32"
      >
        <h2
          className={`pb-6 text-3xl font-extrabold italic leading-6 text-white md:pb-12 md:text-4xl ${monoItalicFont.className}`}
        >
          Experience
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:text-start">
          <div className="flex h-full flex-col items-center justify-center py-6 md:flex-1">
            <Image
              className="left-0 top-0 hidden object-cover object-center md:block"
              src={avatar}
              style={{
                width: "70%",
                height: "auto",
              }}
              alt="Pixel art of girl"
            />
            <Image
              className="left-0 top-0 block object-cover object-center md:hidden"
              src={avatar}
              style={{
                width: "50%",
                height: "auto",
              }}
              alt="Pixel art of girl"
            />
          </div>

          <div className="about-info text-md flex flex-col gap-2 py-8 md:flex-1 md:text-lg">
            <p>{paragraphOne}</p>
            <p>{separator}</p>
            <p>{paragraphTwo}</p>
            <p>{paragraphThree}</p>
            <p>{separator}</p>
            <p>{paragraphFour}</p>
          </div>
        </div>
      </div>

      <svg viewBox="0 0 1440 319">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,165.3C480,149,549,171,617,160C685.7,149,754,107,823,80C891.4,53,960,43,1029,74.7C1097.1,107,1166,181,1234,192C1302.9,203,1371,149,1406,122.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>
    </section>
  );
}
