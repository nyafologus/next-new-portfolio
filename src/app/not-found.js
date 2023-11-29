import Link from "next/link";

export default function NotFound() {
  return (
    <section
      id="fourOhFour"
      className="animate-gradient m-0 bg-gradient-to-r from-teal-500 to-lime-500 bg-cover bg-no-repeat p-0 text-white "
    >
      <div className="min-h-screen-35 mx-auto flex h-[60vh] w-full flex-col gap-10 px-8 py-80 pb-20 pt-48 text-center md:max-w-6xl ">
        <div role="img" aria-label="emoji" className="text-3xl md:text-5xl">
          👻
        </div>
        <h1 className="text-2xl  md:text-3xl ">
          Sorry, this path does not exist
        </h1>

        <Link href="/">Return Home</Link>
      </div>
      <svg viewBox="0 0 1440 319" className="mb-[-1]">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L34.3,101.3C68.6,139,137,213,206,224C274.3,235,343,181,411,165.3C480,149,549,171,617,160C685.7,149,754,107,823,80C891.4,53,960,43,1029,74.7C1097.1,107,1166,181,1234,192C1302.9,203,1371,149,1406,122.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        />
      </svg>
    </section>
  );
}
