import Image, { StaticImageData } from "next/image";

import { Button } from "../ui/button";
import WhatsAppSvg from "../ui/WhatsAppSvg";
const LocHeroSection = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: { src: StaticImageData; alt: string };
}) => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <Image
        alt={img.alt}
        src={img.src}
        placeholder="blur"
        loading="eager"
        className="object-cover object-center h-full w-full"
        priority
      />

      <div className="bg-black/60 absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col md:px-0 px-4">
        <h1 className="md:text-5xl text-3xl text-white max-w-2xl text-center leading-tight font-bold mt-5">
          {title}{" "}
        </h1>
        <p className="mt-5 md:text-lg text-gray-200 max-w-3xl text-center">
          {desc}
        </p>
        <Button className="mt-7" size="lg">
          <WhatsAppSvg fill="#413332" />
          تواصل معنا عبر واتساب
        </Button>
      </div>
    </section>
  );
};

export default LocHeroSection;
