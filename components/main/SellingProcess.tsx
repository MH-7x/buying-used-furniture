import {
  Phone,
  Calculator,
  CheckCircle2,
  Truck,
  MessageCircle,
  Banknote,
  HandCoins,
} from "lucide-react";
import { ReactNode } from "react";

const SellProcessSection = ({
  title,
  description,
  details,
}: {
  title?: string;
  description?: string;
  details?: { title: string; desc: ReactNode }[];
}) => {
  // Brand Colors Configuration
  const colors = {
    primary: "#f5d7cc", // Light Peach
    secondary: "#413332", // Dark Brown
    white: "#ffffff",
  };

  const steps = [
    {
      id: 1,
      title: "كلمنا",
      icon: <MessageCircle className="w-8 h-8" />,
      description: "تواصل سريع ومباشر",
      details: [
        "اتصل أو راسل واتساب",
        "أرسل صور للأثاث",
        "نرد عليك خلال دقائق",
      ],
    },
    {
      id: 2,
      title: "نعطيك سعر",
      icon: <Calculator className="w-8 h-8" />,
      description: "تقييم عادل بناءً على السوق",
      details: [
        "تقييم بناءً على الحالة والبراند",
        "مراعاة عمر القطعة وسعر السوق",
        "بدون مساومة عشوائية",
      ],
    },
    {
      id: 3,
      title: "نتفق وندفع",
      icon: <Banknote className="w-8 h-8" />,
      description: "سهولة في التعامل",
      details: [
        "نحدد موعد يناسبك",
        "نفك الأثاث مجاناً",
        "دفع فوري (نقد، تحويل، شيك)",
      ],
    },
    {
      id: 4,
      title: "ننقل بشكل آمن",
      icon: <Truck className="w-8 h-8" />,
      description: "فريق مدرب ومحترف",
      details: [
        "فك احترافي بدون تكسير",
        "حماية كاملة للأرضيات والجدران",
        "ضمان عدم وجود أي خراب",
      ],
    },
  ];

  return (
    <section
      className="mt-36 px-4 md:px-8 relative overflow-hidden "
      dir="rtl"
      style={{ color: colors.secondary }}
    >
      <div
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        style={{ backgroundColor: colors.primary }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-secondary">
            {title ? title : " بيع أثاثك في 4 خطوات بسيطة وسريعة"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description
              ? description
              : "  عملية بسيطة، سريعة، وآمنة. حول أثاثك المستعمل إلى كاش في 4 خطوات فقط."}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
          {details
            ? details.map((step, index) => (
                <div key={index} className="group relative">
                  {/* Connector Line (Desktop Only) */}
                  {index !== steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-12 right-1/2 w-full h-[2px] -z-10"
                      style={{
                        background: `linear-gradient(to left, ${colors.primary} 50%, transparent 50%)`,
                        backgroundSize: "20px 100%",
                      }}
                    />
                  )}

                  {/* Card */}
                  <div
                    className="h-full bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    style={{ borderColor: `${colors.primary}40` }} // 40 is opacity hex
                  >
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.secondary,
                        }}
                      >
                        {index === 4 ? (
                          <HandCoins className="w-8 h-8" />
                        ) : (
                          steps[index].icon
                        )}
                      </div>
                      {/* Step Number Badge */}
                      <div
                        className="absolute top-4 right-8 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm"
                        style={{
                          backgroundColor: colors.secondary,
                          color: colors.primary,
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <div className="text-sm font-medium opacity-70 mb-1 text-start mt-6">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : steps.map((step, index) => (
                <div key={step.id} className="group relative">
                  {/* Connector Line (Desktop Only) */}
                  {index !== steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-12 right-1/2 w-full h-[2px] -z-10"
                      style={{
                        background: `linear-gradient(to left, ${colors.primary} 50%, transparent 50%)`,
                        backgroundSize: "20px 100%",
                      }}
                    />
                  )}

                  {/* Card */}
                  <div
                    className="h-full bg-white border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    style={{ borderColor: `${colors.primary}40` }} // 40 is opacity hex
                  >
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-sm"
                        style={{
                          backgroundColor: colors.primary,
                          color: colors.secondary,
                        }}
                      >
                        {step.icon}
                      </div>
                      {/* Step Number Badge */}
                      <div
                        className="absolute top-4 right-8 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm"
                        style={{
                          backgroundColor: colors.secondary,
                          color: colors.primary,
                        }}
                      >
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-sm font-medium opacity-70 mb-6">
                        {step.description}
                      </p>

                      {/* List Items */}
                      <ul className="text-right space-y-3">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm"
                          >
                            <span className="mt-1 flex-shrink-0">
                              <CheckCircle2
                                size={16}
                                style={{ color: colors.secondary }}
                                className="opacity-60"
                              />
                            </span>
                            <span className="opacity-90 leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Call to Action Banner */}
        <div
          className="mt-20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-lg"
          style={{ backgroundColor: colors.secondary, color: colors.primary }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              جاهز تبيع أثاثك؟
            </h3>
            <p className="mb-8 text-white/80 max-w-xl">
              لا تضيع وقتك في المساومات العشوائية. تواصل معنا الآن واحصل على
              أفضل عرض سعر في السوق.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                className="px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.secondary,
                }}
              >
                <MessageCircle size={20} />
                تواصل واتساب
              </button>
              <button
                className="px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 border-2 flex items-center justify-center gap-2"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                <Phone size={20} />
                اتصل بنا
              </button>
            </div>
          </div>

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SellProcessSection;
