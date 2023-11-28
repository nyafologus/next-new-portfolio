import Image from "next/image";
import { projectsData as projects } from "@/app/data/data";
import corps from "@/../../public/corps-transparent.png";
import pilbara from "@/../../public/prm-transparent.png";
import mms from "@/../../public/mms-transparent.png";
import rinnorris from "@/../../public/rinnoris-transparent.png";
import localFont from "next/font/local";

const monoItalicFont = localFont({
  src: "../../../public/operator-mono-xlight-italic.woff2",
  display: "swap",
});

const winkFont = localFont({
  src: "../../../public/wink-script-regular.woff2",
  display: "swap",
});

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-0 h-full border-t-0 bg-white text-gray-800"
    >
      <div
        id="container"
        className="mt-n24 mx-auto mb-32 w-full max-w-screen-xl px-10 pb-6 pt-20 md:mb-60 md:max-w-6xl md:px-12 md:pb-10 md:pt-32"
      >
        <h2
          className={` mb-16 pb-6 text-[10vmin] font-extrabold leading-6  sm:text-[7vmin] md:mb-32 md:pb-12 md:text-[6vmin] ${winkFont.className}`}
        >
          Projects
        </h2>

        <div className="project-wrapper mb-0 md:mb-60">
          {projects.map((project) => {
            const { title, info, info2, url, img, id } = project;

            return (
              <section key={id} className="project">
                <div>
                  <div className="project-wrapper__text mb-16 md:mb-10">
                    <h3 className="project-wrapper__text-title mb-7 text-2xl md:text-3xl md:font-bold ">
                      {title || "Project Title"}
                    </h3>
                    <div>
                      {info && <p className="mb-4 md:mb-7">{info}</p>}
                      {info2 && <p className="mb-4 md:mb-7">{info2}</p>}
                    </div>
                    {url && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={url}
                        className={`cta-btn cta-btn--hero italic ${monoItalicFont.className}`}
                      >
                        Visit Live Site
                      </a>
                    )}
                  </div>
                </div>
                {img && (
                  <div>
                    <div className="project-wrapper__image">
                      <a
                        href={url}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <div data-tilt className="thumbnail rounded">
                          <Image
                            className="mx-auto my-12 block object-cover object-center md:my-24 "
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
