"use client";
import React from "react";
import Image from "next/image";
import { projectsData as projects } from "@/app/data/data";
import localFont from "next/font/local";
import MouseContext from "../context/mouse-context";
import { WavyText } from "@/app/ui/wavyText";

const winkFont = localFont({
  src: "../../../public/wink-script-regular.woff2",
  display: "swap",
});

interface FancyLinkProps {
  url: string;
}

function FancyLink({ url }: FancyLinkProps) {
  const contextState = React.useContext(MouseContext);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseLeave={contextState.mouseExitEvent}
      onMouseEnter={contextState.mouseEnterEvent}
      className="z-1 group relative z-10 p-4 px-6 transition-all duration-300 ease-in-out"
    >
      <WavyText text="Visit Live Site" />

      <div className="mt-1 h-2 w-full origin-right scale-x-0 bg-gradient-to-r from-teal-400 to-lime-400 transition duration-500 ease-in-out group-hover:origin-left group-hover:scale-x-100"></div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-0 h-full border-t-0 bg-white text-gray-800"
    >
      <div className="mt-n24 mx-auto mb-32 w-full max-w-screen-xl px-10 pb-6 pt-20 md:mb-60 md:max-w-6xl md:px-12 md:pb-10 md:pt-32">
        <h2
          className={`mb-16 pb-6 text-[10vmin] font-extrabold leading-6 tracking-wide  sm:text-[7vmin] md:mb-32 md:pb-12 md:text-[6vmin] ${winkFont.className}`}
        >
          <span className="swsh tracking-tight">P</span>rojects
        </h2>

        <div className="mb-0 md:mb-60">
          {projects.map((project) => {
            const { title, info, info2, url, img, id } = project;

            return (
              <section key={id} className="project">
                <div>
                  <div className="mb-16 md:mb-10">
                    <h3 className="mb-7 text-2xl font-bold md:text-3xl ">
                      {title || "Project Title"}
                    </h3>
                    <div>
                      {info && <p className="mb-4 md:mb-7">{info}</p>}
                      {info2 && <p className="mb-4 md:mb-7">{info2}</p>}
                    </div>

                    {url && (
                      <>
                        <span className="d-flex inline-block font-bold leading-4 tracking-wider">
                          <FancyLink url={url} />
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {img && (
                  <div>
                    <div>
                      <a
                        href={url}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <div>
                          <Image
                            className="mx-auto my-12 block object-cover object-center transition-all duration-150 ease-in-out hover:drop-shadow-[0_0_1rem_#666] hover:filter md:my-24 "
                            src={`/${img}`}
                            width={1500}
                            height={1500}
                            style={{
                              width: "90%",
                              height: "auto",
                            }}
                            alt="Project preview on different viewports"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
