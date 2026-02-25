import { ArrowUpRight } from "lucide-react";
import heropic from "@/public/شراء-الاثاث-المستعمل.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="main"
      className="flex min-h-screen items-center justify-center overflow-hidden "
    >
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-12 px-4 py-12 lg:grid-cols-2 lg:py-0">
        <div className="my-auto">
          <h1 className="mt-6 font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] md:text-5xl ">
            شركة شراء أثاث مستعمل في الإمارات - بيع وشراء أثاث
          </h1>
          <p className="mt-6 max-w-[60ch] text-foreground/80 text-lg">
            هل تبحث عن شركة موثوقة في شراء اثاث مستعمل في الإمارات؟ نحن في شركة
            شراء اثاث مستعمل نشتري{" "}
            <Link href={"/شراء-الأثاث-المنزلي"}>جميع أنواع الأثاث المنزلي</Link>{" "}
            <Link href={"/شراء-الاثاث-المكتبي-المستعمل"}>والمكتبي</Link>{" "}
            <Link href={"/شراء-الالكترونيات-المستعملة"}>
              والأجهزة الكهربائية
            </Link>{" "}
            بأعلى الأسعار في السوق.
          </p>
          <p className="mt-2 max-w-[60ch] text-foreground/80 text-lg">
            مقرنا في <Link href={"/شراء-اثاث-مستعمل-دبي"}>دبي</Link>، ونصل إلى
            جميع الإمارات — <Link href="/شراء-اثاث-مستعمل-دبي">دبي</Link>،{" "}
            <Link href={"/شراء-اثاث-مستعمل-ابوظبي"}>أبوظبي</Link>،{" "}
            <Link href={"/شراء-اثاث-مستعمل-عجمان"}>عجمان</Link>،{" "}
            <Link href={"/شراء-اثاث-مستعمل-العين"}>العين</Link>،
            <Link href={"/شراء-اثاث-مستعمل-راس-الخيمة"}>رأس الخيمة</Link>،
            والفجيرة.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button whatsapp className="rounded-full text-base" size="lg">
              أرسل صور أثاثك على واتساب لتقييم{" "}
              <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </div>
        </div>
        <div className=" w-full rounded-xl bg-primary/50 lg:h-[650px] h-96 lg:w-[650px] overflow-hidden  lg:rounded-none relative">
          <Image
            src={heropic}
            placeholder="blur"
            loading="eager"
            fill
            className="object-scale-down absolute"
            alt="شراء-الاثاث-المستعمل"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
