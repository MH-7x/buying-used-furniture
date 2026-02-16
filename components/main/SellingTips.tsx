import React from "react";
import {
  Sparkles,
  Layers,
  Tag,
  Scale,
  Clock,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

export const SellingTips = () => {
  const tips = [
    {
      id: 1,
      title: "نظّف القطع",
      content:
        "الأثاث النظيف سعره أفضل. لو تقدر تنظف القطع قبل المعاينة، راح يساعد في التقييم.",
      icon: <Sparkles className="w-6 h-6 text-secondary" />,
    },
    {
      id: 2,
      title: "جمّع القطع الكاملة",
      content:
        "لو عندك طقم كامل (مثل غرفة نوم أو طقم صوفا)، حاول تبيعه كامل. الأطقم الكاملة سعرها أعلى من القطع المفرقة.",
      icon: <Layers className="w-6 h-6 text-secondary" />,
    },
    {
      id: 3,
      title: "اذكر الماركة",
      content: "لو تعرف ماركة الأثاث، أخبرنا. الماركات المعروفة سعرها أفضل.",
      icon: <Tag className="w-6 h-6 text-secondary" />,
    },
    {
      id: 4,
      title: "كن واقعياً",
      content:
        "الأثاث المستعمل ما يباع بنفس سعر الجديد. تذكر أن السعر راح يكون نسبة من السعر الأصلي حسب الحالة والعمر.",
      icon: <Scale className="w-6 h-6 text-secondary" />,
    },
    {
      id: 5,
      title: "اختار الوقت المناسب",
      content:
        "لو ممكن، لا تنتظر لآخر يوم قبل السفر. هذا يعطيك فرصة أفضل للتفاوض والترتيب.",
      icon: <Clock className="w-6 h-6 text-secondary" />,
    },
  ];

  return (
    <section className="mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/50 text-secondary text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span>دليل شركة شراء اثاث مستعمل</span>
          </div>
          <h2 className="md:text-4xl text-3xl font-bold text-secondary leading-tight mb-6">
            نصائح ذهبية قبل بيع أثاثك
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            لأننا نهتم بحصولك على أفضل قيمة، جمعنا لك هذه الخطوات البسيطة لتجهيز
            أثاثك للبيع بأفضل سعر ممكن.
          </p>
        </div>

        {/* Main Content: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Right Column: Tips List (Order 2 on Mobile, Order 1 on Desktop) */}
          <div className="space-y-8 order-2 lg:order-1">
            {tips.map((tip, index) => (
              <div key={tip.id} className="flex gap-4 sm:gap-6 group">
                {/* Icon Column */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}
                  >
                    {tip.icon}
                  </div>
                  {/* Vertical Line Connector */}
                  {index !== tips.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-100 my-2 group-hover:bg-slate-200 transition-colors"></div>
                  )}
                </div>

                {/* Text Column */}
                <div className="pt-1 pb-8">
                  <h3 className="text-xl font-medium text-secondary mb-2 ">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Left Column: Single Image (Order 1 on Mobile, Order 2 on Desktop) */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-8">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-100 border-2 border-slate-100 shadow-2xl">
              <Image
                src={"/loc/نصائح-ذهبية-قبل-بيع-أثاثك.jpg"}
                alt="نصائح ذهبية قبل بيع أثاثك"
                fill
                className="object-cover object-center"
              />
              {/* Decorative Gradient Overlay (Keep this even with real image for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-lg ">
                <p className="font-bold text-secondary text-lg">
                  نشتري جميع أنواع الأثاث
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  خدمة سريعة وموثوقة في الشارقة والإمارات
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
