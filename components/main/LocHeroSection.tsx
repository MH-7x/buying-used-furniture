import Image from "next/image";

import imgSrc from "@/public/loc/شراء-اثاث-مستعمل-دبي.jpg";
import { Button } from "../ui/button";
import WhatsAppSvg from "../ui/WhatsAppSvg";
const LocHeroSection = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <Image
        alt="شراء اثاث مستعمل دبي"
        src={imgSrc}
        placeholder="blur"
        loading="eager"
        className="object-cover object-center h-full w-full"
        priority
      />

      <div className="bg-black/60 absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col md:px-0 px-4">
        <h1 className="md:text-5xl text-3xl text-white max-w-2xl text-center leading-tight font-bold mt-5">
          شراء اثاث مستعمل دبي - أفضل الأسعار والخدمة السريعة{" "}
        </h1>
        <p className="mt-5 md:text-lg text-gray-200 max-w-3xl text-center">
          هل تبحث عن شراء اثاث مستعمل دبي بسعر عادل وخدمة موثوقة؟ نحن شركة شراء
          اثاث مستعمل متخصصة في شراء وبيع الأثاث والأجهزة المنزلية في دبي منذ
          أكثر من عشر سنوات.
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
