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
  title = "شراء جميع ماركات الأثاث",
  subtitle = "نشترينشتري IKEA، Danube، Home Centre، Pan Emirates، Royal Furniture، Marina Home - وأي براند ثاني.",
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
          <h2 className="md:text-4xl text-3xl text-secondary   font-bold">
            {title}
          </h2>
          <p className="mt-5 text-muted-foreground">{subtitle}</p>
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:gap-12"
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
