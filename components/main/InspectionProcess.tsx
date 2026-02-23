import React from "react";
import {
  Search,
  Wrench,
  Sparkles,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const InspectionProcess = () => {
  // تعريف البيانات والمحتوى
  const introText =
    "نحن لا نشتري الأثاث لنعيد بيعه كما هو. كل قطعة تمر بعملية فحص وتجديد متكاملة حتى تصل للمشتري النهائي بأفضل حال. هذا ما يميزنا عن شركات الأثاث المستعمل التي تنقل القطع من بيت لبيت بدون أي اهتمام بالجودة.";

  const phases = [
    {
      id: 1,
      title: "المرحلة 1: فحص أولي شامل",
      description:
        "عند استلام أي قطعة، يقوم فريق الفحص بتقييم الحالة الهيكلية: هل الخشب سليم؟ هل المفاصل متينة؟ هل الأقمشة نظيفة؟ هل توجد علامات تلف أو حشرات؟ القطع التي لا تجتاز هذا الفحص لا ندخلها المعرض.",
      icon: Search,
    },
    {
      id: 2,
      title: "المرحلة 2: إصلاح وترميم",
      description:
        "القطع التي تحتاج إصلاحاً بسيطاً — مفصل مخلوع، درج لا يتحرك بسلاسة، خدش في السطح — نرممها في ورشتنا المتخصصة. نستبدل الأجزاء التالفة ونعيد القطعة لحالتها.",
      icon: Wrench,
    },
    {
      id: 3,
      title: "المرحلة 3: تلميع وتجميل",
      description:
        "بعد الإصلاح، تمر القطعة بعملية تلميع: معالجة الخشب، تنظيف المعادن، إعادة صبغ إذا لزم الأمر. الهدف أن يبدو الأثاث بأفضل حال ممكن.",
      icon: Sparkles,
    },
    {
      id: 4,
      title: "المرحلة 4: تعقيم شامل",
      description:
        "هذه المرحلة مهمة جداً وخصوصاً للمفروشات المنجدة مثل الكنب والمجالس والمراتب. نستخدم مواد تعقيم آمنة ومعتمدة للقضاء على أي بكتيريا أو حشرات. الأقمشة تنظف بالبخار، والأسطح الصلبة تعالج بمواد مطهرة. النتيجة: أثاث مستعمل خالٍ من أي مشاكل صحية.",
      icon: ShieldCheck,
    },
    {
      id: 5,
      title: "المرحلة 5: الموافقة النهائية",
      description:
        "قبل عرض أي قطعة في معرضنا أو بيعها لعميل، تمر بفحص نهائي. القطع التي تجتاز جميع المراحل تحصل على تصنيف جودة واضح (ممتاز — جيد) حتى يعرف المشتري حالة القطعة بالضبط قبل الشراء.",
      icon: BadgeCheck,
    },
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto md:px-0 px-4 mt-36">
        {/* قسم المقدمة (Header / Intro) */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#f5d7cc] rounded-full opacity-30 blur-2xl"></div>
          <h2 className="text-3xl font-extrabold text-[#413332] sm:text-4xl mb-6 relative z-10">
            رحلة التجديد والجودة
          </h2>
          <p className="text-lg leading-relaxed text-[#606060] relative z-10">
            {introText}
          </p>
        </div>

        {/* شبكة المراحل (Phases Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.id}
                className={`relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group overflow-hidden ${
                  // جعل العنصر الأخير يتوسط الشاشة في الشاشات الكبيرة إذا كان وحيداً في الصف
                  index === 4 ? "lg:col-start-2" : ""
                }`}
              >
                {/* زخرفة الزاوية بلون العلامة التجارية الأساسي */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#f5d7cc] rounded-bl-full flex justify-center items-start pt-3 pr-3 transition-transform group-hover:scale-110">
                  <span className="text-[#413332] font-bold text-xl">
                    {phase.id}
                  </span>
                </div>

                <div className="flex flex-col items-start mt-2">
                  {/* حاوية الأيقونة */}
                  <div className="w-14 h-14 rounded-2xl bg-[#f5d7cc]/30 flex items-center justify-center mb-6 text-[#413332] group-hover:bg-[#f5d7cc] transition-colors duration-300">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>

                  {/* العنوان */}
                  <h3 className="text-xl font-bold text-[#413332] mb-4">
                    {phase.title}
                  </h3>

                  {/* الوصف */}
                  <p className="text-[#606060] leading-relaxed text-sm md:text-base">
                    {phase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default InspectionProcess;
