import { ArrowUpRight } from "lucide-react";
import heropic from "@/public/شراء-الاثاث-المستعمل.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="main"
      className="flex min-h-screen items-center justify-center overflow-hidden "
    >
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-12 px-4 py-12 lg:grid-cols-2 lg:py-0">
        <div className="my-auto">
          <h1 className="mt-6 max-w-[17ch] font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            شركة شراء أثاث مستعمل في الإمارات - نقد فوري
          </h1>
          <p className="mt-6 max-w-[60ch] text-foreground/80 text-lg">
            هل تفكر في تجديد منزلك أو الانتقال لبيت جديد؟ بيع الأثاث المستعمل لا
            يجب أن يكون عملية معقدة أو مقلقة. في شركة شراء اثاث مستعمل، نحن لا
            نضيع وقتك بمفاوضات طويلة وغير مجدية
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button className="rounded-full text-base" size="lg">
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
