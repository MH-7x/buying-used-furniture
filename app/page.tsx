import Content from "@/components/main/Content";
import CTA from "@/components/main/CTA";
import FAQs from "@/components/main/FAQs";
import Features from "@/components/main/Feature";
import HeroSection from "@/components/main/HeroSection";
import Locations from "@/components/main/Locations";
import { Logos8 } from "@/components/main/Logos";
import SellProcessSection from "@/components/main/SellingProcess";
import Services from "@/components/main/Services";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { HomePageFAQs } from "@/lib/faqsList";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "شراء اثاث مستعمل في الإمارات | نشتري ونبيع بأفضل الأسعار",
      desc: "شركة رائدة في شراء اثاث مستعمل في الشارقة، دبي، وأبوظبي. نشتري الأثاث المنزلي والمكتبي والأجهزة الكهربائية. تقييم عادل، تعقيم شامل، ونقل مجاني. تواصل معنا الآن",
    },
    image: {
      path: "/شراء-الاثاث-المستعمل.jpg",
      alt: "شراء اثاث مستعمل في الإمارات ",
    },
    path: "",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(HomePageFAQs));

export default function Hero() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="mt-28 overflow-hidden">
        <HeroSection />
        <section className={" mt-36"}>
          <div className="max-w-6xl mx-auto md:px-0 px-3">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-2 md:order-2 order-1">
                <h2 className="md:text-4xl text-3xl leading-tight font-bold mb-5">
                  حوّل أثاثك القديم إلى كاش <br />
                  فوري في 10 دقيقة
                </h2>
                <p className="md:text-lg text-base text-muted-foreground">
                  نحن نشتري أثاثك المستعمل، ونمنحك سعراً عادلاً بناءً على حالة
                  القطعة ونوعها، وندفع لك نقداً وبشكل فوري
                </p>
                <p className="md:text-lg text-base text-muted-foreground">
                  سواء كنت في دبي، الشارقة، عجمان، أو أبوظبي، فريقنا جاهز للوصول
                  إليك، تقييم الأثاث، ونقله في نفس اليوم
                </p>
                <p className="md:text-lg text-base text-muted-foreground">
                  نشتري ونبيع في جميع الإمارات الرئيسية، بما في ذلك
                </p>
                <div className="flex items-center gap-x-3 mt-5">
                  <Button size={"lg"}>واتساب لنا</Button>
                  <Button size={"lg"} variant={"secondary"}>
                    اتصل بنا مباشرة
                  </Button>
                </div>
              </div>
              <div className="rounded-4xl md:order-1 order-2 relative md:h-100 h-[300px] bg-primary/50 overflow-hidden">
                <Image
                  src={"/بيع-الأثاث-المستعمل-فوراً.jpg"}
                  alt="بيع الأثاث المستعمل فوراً"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <Features />
        <Services />
        <Logos8 />
        <SellProcessSection />
        <Locations />
        <Content />
        <FAQs faqs={HomePageFAQs} />
        <CTA />
      </main>
    </>
  );
}
