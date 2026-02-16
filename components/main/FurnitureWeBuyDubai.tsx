import React from "react";
import {
  BedDouble,
  Sofa,
  Utensils,
  Tv,
  Briefcase,
  CheckCircle2,
  Info,
} from "lucide-react";
import Image from "next/image";

const FurnitureBuyingSection = () => {
  const sections = [
    {
      id: 1,
      title: "أثاث غرف النوم",
      icon: <BedDouble className="w-6 h-6" />,
      image: "/loc/أثاث-غرف-النوم.jpg",
      items: [
        "غرف نوم كاملة",
        "قطع منفصلة",
        "الأسرّة بجميع المقاسات (مفردة، مزدوجة، كينج، كوين)",
        "الدواليب والخزائن",
        "الكوميدينات",
        "طاولات الزينة",
        "غرف الأطفال",
      ],
      note: "الماركات المعروفة مثل IKEA وHome Centre وPan Emirates عادة تكون أسعارها أفضل، لكن نشتري أي ماركة لو الحالة جيدة.",
    },
    {
      id: 2,
      title: "طقم الصوفا والمجالس",
      description:
        "الصوفات والكنب من أكثر القطع طلباً في سوق الاثاث المستعمل دبي.",
      icon: <Sofa className="w-6 h-6" />,
      image: "/loc/طقم-الصوفا-والمجالس.jpg",
      items: [
        "أطقم الصوفا (3+2+1 أو أي تشكيلة)",
        "الكنب الأمريكي والأوروبي",
        "المجالس العربية والخليجية",
        "الكنب الزاوية (L-shape)",
      ],
      highlight:
        "كل القطع المنجدة نعقمها وننظفها بشكل احترافي قبل ما نبيعها، فهذا شيء نهتم فيه كثير.",
    },

    {
      id: 4,
      title: "الأجهزة المنزلية",
      description:
        "نشتري الأجهزة الكهربائية والإلكترونيات بشرط أنها تعمل بشكل جيد.",
      icon: <Tv className="w-6 h-6" />,
      image: "/loc/الأجهزة-المنزلية.jpg",
      items: [
        "الثلاجات (جميع الأحجام)",
        "الغسالات (عادية أو أوتوماتيك)",
        "المكيفات",
        "الشاشات",
        "أجهزة المطبخ",
      ],
      note: "نفحص الجهاز قبل الشراء للتأكد أنه يعمل بكفاءة.",
    },
    {
      id: 5,
      title: "الأثاث المكتبي",
      description: "نشتري اثاث مكتبي مستعمل في دبي للشركات والمؤسسات.",
      icon: <Briefcase className="w-6 h-6" />,
      image: "/loc/الأثاث-المكتبي.jpg",
      items: [
        "المكاتب",
        "الكراسي",
        "محطات العمل",
        "الخزائن",
        "طاولات الاجتماعات",
      ],
      highlight: "لو عندك كمية كبيرة من الأثاث المكتبي، نعطيك سعراً خاصاً.",
    },
    {
      id: 3,
      title: "طاولات الطعام والكراسي",
      icon: <Utensils className="w-6 h-6" />,
      image: "/loc/طاولات-الطعام-والكراسي.jpg",
      items: [
        "طاولات الطعام الخشبية عليها طلب دائماً",
        "طاولة صغيرة لأربعة أشخاص",
        "طاولة كبيرة لثمانية أو أكثر",
        "الكراسي نشتريها معها أو منفصلة",
      ],
    },
  ];

  return (
    <section id="furniture-we-buy" className="mt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            أنواع الأثاث الذي نشتريه في دبي
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            نشتري معظم أنواع الأثاث المنزلي والمكتبي.
            <br className="hidden sm:block" />
            الشرط الأساسي أن القطعة تكون في حالة معقولة يمكن إعادة بيعها.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col group"
            >
              {/* Image Placeholder with Overlay */}
              <div className="relative md:h-80 h-72 overflow-hidden bg-muted ">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur-sm p-2 rounded-lg shadow-sm text-primary ">
                  {section.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium text-secondary mb-3">
                  شراء {section.title} في دبي
                </h3>

                {section.description && (
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {section.description}
                  </p>
                )}

                <ul className="space-y-3 mb-6 flex-1">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-muted-foreground text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary ml-2 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Special Notes/Highlights */}
                {(section.note || section.highlight) && (
                  <div
                    className={`mt-auto p-4  text-sm leading-relaxed flex gap-3 bg-primary/50 text-secondary border-r-4 border-primary`}
                  >
                    <Info className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>{section.highlight || section.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FurnitureBuyingSection;
