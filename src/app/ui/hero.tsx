import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen justify-center items-center overflow-hidden relative font-normal text-gray-300 mb-0 flex py-16 px-0"
    >
      <p className="text-2xl font-bold text-center">Hero page</p>
      <Image
        className="w-full h-full min-h-screen absolute z-[-1] object-cover"
        src="/horsegirl-r.jpg"
        width={1500}
        height={1500}
        alt="Hero image"
      />
    </section>
  );
}
