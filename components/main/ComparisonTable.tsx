import React from "react";
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  DollarSign,
  Clock,
  CreditCard,
  Truck,
  ShieldCheck,
  Award,
  MapPin,
  Building2,
  Globe,
} from "lucide-react";
import Image from "next/image";

const brandColors = {
  primary: "#f5d7cc",
  secondary: "#413332",
  text: "#606060",
};
const ComparisonTable = () => {
  const comparisonData = [
    {
      id: 1,
      criteria: "السعر",
      icon: <DollarSign className="w-5 h-5" />,
      company: "تقييم احترافي وشفاف",
      street: "بخس الأسعار والمساومة",
      online: "يعتمد على المشتري",
    },
    {
      id: 2,
      criteria: "سرعة الاستجابة",
      icon: <Clock className="w-5 h-5" />,
      company: "5-10 دقائق",
      street: "فوري لكن بدون التزام",
      online: "أيام أو أسابيع",
    },
    {
      id: 3,
      criteria: "الدفع",
      icon: <CreditCard className="w-5 h-5" />,
      company: "فوري: نقد أو تحويل أو شيك",
      street: "نقد فقط وغالباً أقل",
      online: "بعد إيجاد مشتري",
    },
    {
      id: 4,
      criteria: "الفك والنقل",
      icon: <Truck className="w-5 h-5" />,
      company: "مجاني واحترافي",
      street: "على حسابك غالباً",
      online: "على حسابك",
    },
    {
      id: 5,
      criteria: "الضمان",
      icon: <ShieldCheck className="w-5 h-5" />,
      company: "ضمان وسياسة إرجاع",
      street: "لا يوجد",
      online: "لا يوجد",
    },
    {
      id: 6,
      criteria: "المصداقية",
      icon: <Award className="w-5 h-5" />,
      company: "مقر ثابت + 10 سنوات",
      street: "بدون ضمانات",
      online: "متفاوتة",
    },
  ];

  return (
    <div className="  px-4 sm:px-6 lg:px-8 mt-36">
      {/* Font Import for Arabic Support */}

      <div className="max-w-6xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: brandColors.secondary }}
          >
            مقارنة سريعة: نحن مقابل البدائل الأخرى
          </h2>
          <p className="text-lg" style={{ color: brandColors.text }}>
            لماذا يختار العملاء شركة شراء اثاث مستعمل ؟
          </p>
        </div>

        {/* Desktop & Tablet Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-white">
          <div className="grid grid-cols-4">
            {/* Table Headers */}
            <div
              className="col-span-1 p-6 text-white font-bold text-lg flex items-center justify-center rounded-tr-xl"
              style={{ backgroundColor: brandColors.secondary }}
            >
              المعيار
            </div>
            {/* Highlighted "Us" Header */}
            <div
              className="col-span-1 p-6 font-bold text-lg flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundColor: brandColors.primary,
                color: brandColors.secondary,
              }}
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-white/30"></div>
              <span className="relative z-10 text-center">
                شركة شراء اثاث مستعمل (نحن)
              </span>
            </div>
            <div
              className="col-span-1 p-6 text-white font-bold text-lg flex items-center justify-center"
              style={{ backgroundColor: brandColors.secondary }}
            >
              تجار الشوارع
            </div>
            <div
              className="col-span-1 p-6 text-white font-bold text-lg flex items-center justify-center rounded-tl-xl"
              style={{ backgroundColor: brandColors.secondary }}
            >
              المنصات الإلكترونية
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={row.id}>
                {/* Criteria Column */}
                <div
                  className={`col-span-1 p-5 flex items-center gap-3 font-semibold border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  style={{ color: brandColors.secondary }}
                >
                  <span className="p-2 rounded-full bg-gray-100 text-gray-600">
                    {row.icon}
                  </span>
                  {row.criteria}
                </div>

                {/* Our Company Column (Highlighted) */}
                <div
                  className="col-span-1 p-5 flex items-center justify-center text-center font-bold border-b border-white/50 relative"
                  style={{
                    backgroundColor: `${brandColors.primary}40`,
                    color: brandColors.secondary,
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 ml-2 text-green-600 flex-shrink-0" />
                  {row.company}
                </div>

                {/* Street Dealers Column */}
                <div
                  className={`col-span-1 p-5 flex items-center justify-center text-center text-gray-600 border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  {row.street === "لا يوجد" ? (
                    <XCircle className="w-5 h-5 ml-2 text-red-400 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 ml-2 text-orange-400 flex-shrink-0" />
                  )}
                  {row.street}
                </div>

                {/* Online Platforms Column */}
                <div
                  className={`col-span-1 p-5 flex items-center justify-center text-center text-gray-600 border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  {row.online === "لا يوجد" ? (
                    <XCircle className="w-5 h-5 ml-2 text-red-400 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 ml-2 text-orange-400 flex-shrink-0" />
                  )}
                  {row.online}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Card View (Stacked) */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row) => (
            <div
              key={row.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Card Header (Criteria) */}
              <div
                className="p-4 flex items-center justify-between"
                style={{ backgroundColor: brandColors.secondary }}
              >
                <div className="flex items-center gap-2 text-white font-bold">
                  {row.icon}
                  <span>{row.criteria}</span>
                </div>
              </div>

              {/* Us Section */}
              <div
                className="p-4 border-b border-gray-100"
                style={{ backgroundColor: `${brandColors.primary}30` }}
              >
                <div className="text-xs font-bold uppercase mb-1 tracking-wider text-gray-500">
                  نحن (ركن العروبة)
                </div>
                <div
                  className="flex items-start gap-2 font-bold"
                  style={{ color: brandColors.secondary }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>{row.company}</span>
                </div>
              </div>

              {/* Others Section */}
              <div className="grid grid-cols-2 divide-x divide-x-reverse divide-gray-100">
                <div className="p-4">
                  <div className="text-xs font-bold uppercase mb-2 text-gray-400">
                    تجار الشوارع
                  </div>
                  <p className="text-sm text-gray-600 leading-tight">
                    {row.street}
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold uppercase mb-2 text-gray-400">
                    المنصات الإلكترونية
                  </div>
                  <p className="text-sm text-gray-600 leading-tight">
                    {row.online}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Locations = () => {
  return (
    <section className="relative mt-36 max-w-6xl mx-auto md:px-0 px-3">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span
          className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-2"
          style={{
            backgroundColor: `${brandColors.primary}40`,
            color: brandColors.secondary,
          }}
        >
          مناطق الخدمة
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: brandColors.secondary }}
        >
          مناطق خدمتنا: اثاث مستعمل الشارقة ودبي وكل الإمارات
        </h2>
        <p
          className="md:text-lg max-w-2xl mx-auto"
          style={{ color: brandColors.text }}
        >
          مقرنا في الشارقة، لكن خدمتنا ما تقف عند حدود المدينة. نغطي مناطق واسعة
          ونوصل لكل مكان تقريباً في الإمارات.
        </p>
      </div>

      {/* Main Headquarters Card */}
      <div className="bg-white rounded-3xl  overflow-hidden mb-12 border border-gray-100">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <h3
                className="text-2xl font-bold"
                style={{ color: brandColors.secondary }}
              >
                مقرنا الرئيسي
              </h3>
            </div>

            <p
              className="md:text-lg leading-relaxed mb-6"
              style={{ color: brandColors.text }}
            >
              لو تبحث عن محلات اثاث مستعمل في الشارقة بالقرب منك، مقرنا في{" "}
              <span className="font-medium text-secondary">
                شارع الاستقلال بأبو شغارة
              </span>
              . وهذا يعني إننا في قلب المنطقة الأكثر نشاطاً في سوق الأثاث
              المستعمل بالشارقة.
            </p>

            <div
              className="p-4  border-r-4"
              style={{
                backgroundColor: `${brandColors.primary}20`,
                borderColor: brandColors.primary,
              }}
            >
              <p className="font-semibold text-gray-800">
                الشارقة، أبو شغارة، حي القاسمية
              </p>
            </div>
          </div>

          {/* Image Placeholder 1: Map/Storefront */}
          <div className="relative h-72 bg-gray-200 flex items-center justify-center overflow-hidden group md:h-96">
            <Image
              src={"/loc/store-img.jpg"}
              alt="store image"
              fill
              className="object-cover object-center group-hover:scale-110 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Service Areas Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Sharjah Area Card */}
        <div className="bg-white rounded-3xl  p-8 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow flex flex-col">
          <div
            className="absolute top-0 right-0 w-32 h-32 -mr-10 -mt-10 rounded-full opacity-20"
            style={{ backgroundColor: brandColors.primary }}
          ></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2 rounded-lg bg-gray-100">
              <Building2
                className="w-6 h-6"
                style={{ color: brandColors.secondary }}
              />
            </div>
            <h3
              className="text-xl font-bold"
              style={{ color: brandColors.secondary }}
            >
              شراء اثاث مستعمل في مناطق الشارقة
            </h3>
          </div>

          <div className="flex-grow">
            <p className="mb-6 leading-relaxed text-gray-600">
              نخدم جميع مناطق الشارقة بدون استثناء. من أبو شغارة والنهدة
              والمويلح إلى المجاز والرولة والتعاون والقاسمية والند والخان. وحتى
              المنطقة الصناعية ومويلح التجارية والشارقة القديمة. أينما كنت في
              الشارقة، فريقنا يوصلك.
            </p>
          </div>
        </div>

        {/* Dubai & UAE Card */}
        <div className="bg-white rounded-3xl  p-8 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow flex flex-col">
          <div
            className="absolute top-0 left-0 w-32 h-32 -ml-10 -mt-10 rounded-full opacity-10"
            style={{ backgroundColor: brandColors.secondary }}
          ></div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2 rounded-lg bg-gray-100">
              <Globe
                className="w-6 h-6"
                style={{ color: brandColors.secondary }}
              />
            </div>
            <h3
              className="text-xl font-bold"
              style={{ color: brandColors.secondary }}
            >
              خدمة شراء اثاث مستعمل دبي والإمارات
            </h3>
          </div>

          <div className="flex-grow">
            <p className="mb-6 leading-relaxed text-gray-600">
              خدمة اثاث مستعمل دبي الشارقة متكاملة عندنا. نوصل لمناطق دبي
              الرئيسية: دبي مارينا، نخلة جميرا، الأبراج السكنية في الخليج
              التجاري، وغيرها. ونمتد لعجمان وأبوظبي والإمارات الشمالية. لو عندك
              أثاث في أي إمارة، تواصل معنا وبنرتب لك زيارة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ComparisonTable };
