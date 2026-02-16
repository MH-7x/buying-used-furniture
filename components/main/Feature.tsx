import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Store, BadgeCheck, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Store, // Better represents a physical shop location
    title: "مقر حقيقي يمكنك زيارته",
    description:
      "أغلب اللي يشتغلون في شراء اثاث مستعمل ما عندهم محل. بس رقم واتساب وترى واحد جاي بشاحنة صغيرة يساومك ويروح",
    src: "/متجر-شركة-شراء-الأثاث-المستعمل.jpg",
  },
  {
    icon: BadgeCheck, // Represents trust, verification & fairness
    title: "تقييم عادل وشفاف",
    description:
      "لا نبخس الناس أشياءهم. نقيم أثاثك بناءً على العلامة التجارية (مثل ايكيا، هوم سنتر، رويال) وحالته الفعلية. نعرف قيمة ما تملك",
    src: "/تقييم-عادل-وشفاف.jpg",
  },
  {
    icon: ShieldCheck, // Perfect for safety & hygiene guarantee
    title: "نظافة وأمان",
    description:
      "أكبر مخاوف شراء المستعمل هي النظافة. نحن نطبق بروتوكول تعقيم ارم. أي قطعة تدخل معرضنا تخضع للتنظيف العميق والتعقيم لضمان خلوها تماماً من أي حشرات أو آفات، لتشتري وأنت مطمئن",
    src: "/نظافة-وسلامة-الأثاث.jpg",
  },
  {
    icon: Zap, // Represents speed and fast service
    title: "سرعة في التنفيذ",
    description:
      "نعلم أنك مشغول. نرد على استفسارات الواتساب خلال 5 إلى 10 دقائق، ونتمم عملية النقل في الوقت الذي يناسبك",
    src: "/اشترِ-أثاثًا-مستعملًا-في-10-دقائق.jpg",
  },
];

const Features = () => {
  return (
    <section className="flex mt-32 items-center justify-center">
      <div className="w-full max-w-6xl md:px-6 px-3 py-10">
        <h2 className="font-bold text-4xl  sm:max-w-xl md:text-[2.5rem] md:leading-[1.2]">
          لماذا تختار شركة شراء اثاث مستعمل؟
        </h2>
        <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
          سوق الأثاث المستعمل مليء بالأرقام المجهولة والشركات التي لا تملك مقراً
          حقيقياً. نحن مختلفون
        </p>
        <div className="mx-auto mt-12 grid w-full gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              className="flex flex-col overflow-hidden rounded-xl border pb-0 shadow-none"
              key={feature.title}
            >
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <feature.icon className="text-secondary" />
                </div>
                <h3 className="mt-3! font-semibold text-xl tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="ml-6 h-40 rounded-tl-xl bg-muted relative overflow-hidden">
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    fill
                    className="absolute object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
