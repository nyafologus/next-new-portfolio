import React, { useContext } from "react";
import { contactData } from "@/app/data/data";
import localFont from "next/font/local";

const winkFont = localFont({
  src: "../../../public/wink-script-regular.woff2",
  display: "swap",
});

const Contact = () => {
  const { cta, btn, site } = contactData;

  return (
    <section
      id="contact"
      className="mt-[-5rem] bg-gradient-to-r from-teal-400 to-lime-400 p-0 text-white sm:mt-[-10rem] md:mt-[-30rem]"
    >
      <svg
        viewBox="0 0 1440 319"
        className="mt-n1 scale-x-[-1] scale-y-[-1] transform"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,165.3C480,149,549,171,617,160C685.7,149,754,107,823,80C891.4,53,960,43,1029,74.7C1097.1,107,1166,181,1234,192C1302.9,203,1371,149,1406,122.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>

      <div id="container" className="mx-auto w-full px-5 py-20 md:max-w-6xl ">
        <h2
          className={`py-6 text-[10vmin] font-extrabold leading-6 tracking-wide text-white sm:text-[7vmin] md:py-12 md:text-[6vmin] xl:pb-24 ${winkFont.className}`}
        >
          <span className="swsh tracking-tight">C</span>
          ontact
        </h2>

        {cta && (
          <p className="text-md flex flex-col gap-2 py-8 md:flex-1 md:text-lg">
            {cta}
          </p>
        )}

        {site && btn && (
          <span className="d-flex mt-10 inline-block font-bold leading-4 tracking-wider">
            <a
              target="_blank"
              rel="noreferrer"
              className="z-1 relative border-2 border-white p-3  transition-all duration-300  ease-in-out before:absolute before:inset-0 before:bottom-0 before:left-0 before:z-[-1] before:block before:h-full before:w-0 before:bg-white hover:before:w-[100%] before:hover:opacity-20"
              href={site}
            >
              {btn}
            </a>
          </span>
        )}
      </div>
    </section>
  );
};

export default Contact;
