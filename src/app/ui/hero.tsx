import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full h-screen justify-center items-center overflow-hidden relative font-normal text-gray-300 mb-0 flex py-16 px-0"
    >
      <h1 className="text-2xl font-bold text-center">
        Hey there, this is <span className="fancy-text">Sophie</span>
        <br />
        <span className="inline-block mt-4">I am a Frontend Developer</span>
      </h1>

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
