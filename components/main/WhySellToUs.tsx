import {
  Clock,
  ShieldCheck,
  Truck,
  HandCoins,
  Users,
  MapPin,
  CheckCircle2,
  XCircle,
  Store,
} from "lucide-react";
import Link from "next/link";

export default function WhySellToUs() {
  const features = [
    {
      id: 1,
      title: "السرعة والاستجابة",
      icon: <Clock className="w-6 h-6" />,
      us: "نرد خلال 5-10 دقائق ونصل في نفس اليوم.",
      them: "قد تنتظر أسابيع للحصول على رد أو موعد.",
    },
    {
      id: 2,
      title: "راحة البال والأمان",
      icon: <ShieldCheck className="w-6 h-6" />,
      us: "شركة مرخصة، عنواننا معروف في الشارقة.",
      them: "أنت لا تعرف من سيأتي لبيتك (مجهول الهوية).",
    },
    {
      id: 3,
      title: "التفكيك والنقل",
      icon: <Truck className="w-6 h-6" />,
      us: "نتولاه نحن مجاناً بفريق محترف.",
      them: "تتحمل أنت التكلفة والجهد.",
    },
    {
      id: 4,
      title: "السعر والمساومة",
      icon: <HandCoins className="w-6 h-6" />,
      us: "سعر محدد وواضح بدون مساومات متعبة.",
      them: "مفاوضات طويلة ومرهقة.",
    },
    {
      id: 5,
      title: "المعاينات والخصوصية",
      icon: <Users className="w-6 h-6" />,
      us: "معاينة واحدة فقط وننتهي.",
      them: "تستقبل عشرات الغرباء في منزلك.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-36" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
            لماذا يختار العملاء <Link href="/">شركة شراء اثاث مستعمل</Link> ؟
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            الفرق الجوهري بين خدمتنا الاحترافية وبين عشوائية الإعلانات المبوبة
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl  hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-primary/50 p-6 border-b border-slate-100 flex items-center gap-3">
                <div className="p-3 bg-white/50 rounded-xl text-secondary ">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  {feature.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col gap-6">
                {/* Us (Positive) */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                      معنا
                    </span>
                    <p className="text-slate-700 font-medium leading-relaxed">
                      {feature.us}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 w-full" />

                {/* Them (Negative) */}
                <div className="flex gap-4 items-start opacity-75">
                  <div className="mt-1 flex-shrink-0">
                    <XCircle className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
                      الإعلانات المبوبة
                    </span>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {feature.them}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Summary Card / CTA */}
          <div className="from-secondary to-secondary/80 bg-linear-to-br rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden text-white flex flex-col justify-center relative group">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="p-8 relative z-10 flex flex-col h-full justify-between items-center text-center space-y-6">
              <div className="p-4 bg-primary/50 rounded-full inline-flex">
                <Store className="w-10 h-10 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">الأهم من كل هذا:</h3>
                <p className="text-emerald-50 text-lg leading-relaxed">
                  أنت تعرف مع من تتعامل. نحن موجودون ولنا مقر واضح.
                </p>
              </div>

              <div className="w-full pt-6 border-t border-primary/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">الشارقة - أبو شغارة</span>
                </div>
                <p className="text-sm text-slate-100">
                  شارع الاستقلال - لدينا فريق وأسطول نقل كامل
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Trust Badge */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-slate-600 text-lg">
            نحن في{" "}
            <Link href="/" className="font-medium text-secondary">
              شركة شراء اثاث مستعمل
            </Link>{" "}
            نضمن لك تجربة بيع وشراء آمنة وسريعة ومريحة، بعيداً عن مفاجآت التعامل
            مع الغرباء.
          </p>
        </div>
      </div>
    </section>
  );
}
