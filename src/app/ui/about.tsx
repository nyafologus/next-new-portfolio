import Image from "next/image";

import localFont from "next/font/local";

const monoItalicFont = localFont({
  src: "../../../public/operator-mono-xlight-italic.woff2",
  display: "swap",
});

export default function About() {
  return (
    <section
      id="about"
      className="mb-0 h-full border-t-0 bg-gradient-to-r from-teal-500 to-lime-500 p-0 text-white"
    >
      <div id="container" className="mx-auto w-full px-8 pb-8 pt-32">
        <h2
          className={`mb-18 text-4xl font-extrabold italic leading-6 text-white  ${monoItalicFont.className}`}
        >
          Experience
        </h2>

        <div className="flex h-full items-center justify-center py-8">
          <Image
            className="left-0 top-0 object-cover object-center"
            src="/avatar.png"
            width={250}
            height={250}
            alt="About image"
          />
        </div>

        <div className="about-info flex flex-col gap-2 py-8 text-lg ">
          <p>
            Working as a contractor for a Perth-based digital agency for the
            past couple of years in collaboration with their talented team to
            build beautiful custom designed websites for their clients
          </p>
          <p>✨</p>
          <p>Confident in the following technologies:</p>
          <p>
            HTML5, CSS3, SASS, Flexbox, Grid, JavaScript, React.js, Gatsby.js,
            GraphQL, and Wordpress CMS
          </p>
          <p>✨</p>
          <p>
            Recently been working with Next.js 14, TypeScript, Tailwind, and
            Framer Motion
          </p>
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
