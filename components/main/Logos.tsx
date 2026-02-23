import Image from "next/image";

interface Logo {
  name: string;
  logo: string;
}

interface Logos8Props {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
  className?: string;
}

const Logos8 = ({
  title = "نتعامل مع أفضل العلامات التجارية — ايكيا، هوم سنتر، دانوب والمزيد",
  subtitle = "نشتري أثاث جميع العلامات التجارية المعروفة في الإمارات، ونعرف قيمة كل علامة في سوق الأثاث المستعمل. هذه أبرز العلامات التي نتعامل معها يومياً:",
  logos = [
    {
      name: "Ikea",
      logo: "/logos/Ikea-Logo.jpg",
    },
    {
      name: "Danube",
      logo: "/logos/Danube.jpg",
    },
    {
      name: "Home Centre",
      logo: "/logos/Home-Centre.jpg",
    },
    {
      name: "Royal Furniture",
      logo: "/logos/logo-royal.jpg",
    },
    {
      name: "Marina Home",
      logo: "/logos/Marina-Home.png",
    },
    {
      name: "Pan Emirates",
      logo: "/logos/pan-home.jpg",
    },
  ],
}: Logos8Props) => {
  return (
    <section className={"mt-32 md:px-0 px-4"}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="md:text-4xl text-3xl text-secondary max-w-xl mx-auto  font-bold">
            {title}
          </h2>
          <p className="mt-5 text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12"
            dir="ltr"
          >
            {logos.map((logo, index) => (
              <div className="w-24 h-12 relative" key={index}>
                <Image
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  fill
                  className={`absolute object-contain `}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos8 };
