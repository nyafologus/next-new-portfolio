import { footerData as footer } from "@/app/data/data";

const Footer = () => {
  const { socials } = footer;

  return (
    <footer className="footer navbar-static-bottom bg-[#333] text-white">
      <div
        id="container"
        className="mx-auto flex w-full flex-col items-center gap-5 py-20 md:max-w-6xl"
      >
        <div className="social-links max-[540px] flex flex-row justify-center">
          {socials &&
            socials.map((link) => {
              const { id, name, url } = link;
              return (
                <a
                  key={id}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                  className="w-16 text-3xl text-white transition-all duration-200 ease-in-out md:w-20 md:text-4xl"
                >
                  <i
                    aria-hidden="true"
                    className={`fa fa-${name}  translate-y-2 transform`}
                  />
                  <span className="fa-sr-only hidden">{`link to ${name} account`}</span>
                </a>
              );
            })}
        </div>

        <hr className="mb-4 mt-14 inline-block w-4/5 border-0 border-t-2 border-white border-opacity-10 sm:w-2/3 md:w-1/2" />

        <p className="text-[#666] ">
          © {new Date().getFullYear()} -{" "}
          <a
            href="https://github.com/nyafologus?tab=overview&from=2020-11-28&to=2021-11-28"
            target="_blank"
            rel="noopener noreferrer"
            className="fancy-footer-link"
          >
            nyafologus
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
