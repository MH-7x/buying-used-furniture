import React from "react";
import {
  BedDouble,
  Sofa,
  Utensils,
  Snowflake,
  Waves,
  Briefcase,
  Info,
  Camera,
  Banknote,
  Landmark,
  ScrollText,
  CalendarClock,
} from "lucide-react";

export default function PricingRange() {
  // Brand Colors
  const colors = {
    primary: "#f5d7cc",
    secondary: "#413332",
    text: "#606060",
  };

  const priceData = [
    {
      id: 1,
      item: "غرفة نوم كاملة",
      price: "500 - 3,000",
      notes: "حسب الماركة وعدد القطع",
      icon: BedDouble,
    },
    {
      id: 2,
      item: "طقم كنب أو مجلس",
      price: "300 - 2,500",
      notes: "حسب الحجم ونوع القماش",
      icon: Sofa,
    },
    {
      id: 3,
      item: "طاولة طعام مع كراسي",
      price: "200 - 1,500",
      notes: "حسب عدد الكراسي والخامة",
      icon: Utensils,
    },
    {
      id: 4,
      item: "ثلاجة مستعملة",
      price: "150 - 1,000",
      notes: "حسب الحجم والماركة",
      icon: Snowflake,
    },
    {
      id: 5,
      item: "غسالة مستعملة",
      price: "100 - 800",
      notes: "حسب النوع والحالة",
      icon: Waves,
    },
    {
      id: 6,
      item: "مكيف مستعمل",
      price: "100 - 600",
      notes: "حسب الحجم والكفاءة",
      icon: Snowflake,
    },
    {
      id: 7,
      item: "أثاث مكتبي (مكتب + كرسي)",
      price: "150 - 1,200",
      notes: "حسب الجودة والماركة",
      icon: Briefcase,
    },
  ];

  const paymentMethods = [
    {
      id: 1,
      title: "نقد فوري",
      desc: "الدفع نقداً فور الاستلام.",
      icon: Banknote,
    },
    {
      id: 2,
      title: "تحويل بنكي",
      desc: "تحويل بنكي فوري على حسابك.",
      icon: Landmark,
    },
    {
      id: 3,
      title: "شيك بنكي",
      desc: "نقبل الدفع عبر الشيكات البنكية لو تفضل.",
      icon: ScrollText,
    },
    {
      id: 4,
      title: "تقسيط مريح",
      desc: "نعمل حالياً على إضافة خيار التقسيط لمساعدة العائلات.",
      icon: CalendarClock,
      isNew: true,
    },
  ];

  return (
    <>
      <div dir="rtl" className=" mt-36  p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: colors.secondary }}
            >
              نطاقات أسعار تقريبية
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: colors.text }}
            >
              الأسعار تتغير حسب الحالة والماركة، لكن هذا الجدول يعطيك فكرة عامة
              لأسعارنا:
            </p>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr
                    style={{
                      backgroundColor: colors.primary,
                      color: colors.secondary,
                    }}
                  >
                    <th className="py-5 px-6 font-bold text-lg whitespace-nowrap">
                      نوع الأثاث
                    </th>
                    <th className="py-5 px-6 font-bold text-lg whitespace-nowrap">
                      نطاق السعر (درهم)
                    </th>
                    <th className="py-5 px-6 font-bold text-lg whitespace-nowrap">
                      ملاحظات
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: colors.text }}>
                  {priceData.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`
                        transition-colors duration-200 hover:bg-[#f5d7cc]/10
                        ${index !== priceData.length - 1 ? "border-b border-gray-100" : ""}
                      `}
                    >
                      <td className="py-4 px-6 font-medium flex items-center gap-3 whitespace-nowrap">
                        <div
                          className="p-2 rounded-lg"
                          style={{
                            backgroundColor: `${colors.primary}40`,
                            color: colors.secondary,
                          }}
                        >
                          <row.icon size={20} />
                        </div>
                        {row.item}
                      </td>
                      <td
                        className="py-4 px-6 font-bold"
                        style={{ color: colors.secondary }}
                      >
                        {row.price}
                      </td>
                      <td className="py-4 px-6 text-sm md:text-base">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimer / Call to Action Alert */}
          <div
            className=" p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden"
            style={{
              backgroundColor: `${colors.primary}30`,
              borderRight: `3px solid ${colors.secondary}`,
            }}
          >
            {/* Background pattern element */}
            <div className="absolute left-0 top-0 opacity-10 transform -translate-x-1/4 -translate-y-1/4">
              <Camera size={150} style={{ color: colors.secondary }} />
            </div>

            <div
              className="p-3 rounded-full flex-shrink-0 relative z-10"
              style={{
                backgroundColor: colors.secondary,
                color: colors.primary,
              }}
            >
              <Info size={28} />
            </div>
            <div className="relative z-10">
              <p
                className="text-lg leading-relaxed font-medium"
                style={{ color: colors.secondary }}
              >
                هذه أسعار تقريبية وتتغير حسب حالة كل قطعة.
                <span
                  className="block mt-1 font-normal"
                  style={{ color: colors.text }}
                >
                  للحصول على تقييم دقيق لأثاثك، تواصل معنا مباشرة وأرسل الصور.
                </span>
              </p>
            </div>
            <button
              className="mt-4 md:mt-0 md:mr-auto px-8 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1 active:translate-y-0 relative z-10 flex items-center gap-2 shadow-lg"
              style={{
                backgroundColor: colors.secondary,
                color: colors.primary,
              }}
            >
              <Camera size={20} />
              أرسل الصور الآن
            </button>
          </div>

          {/* Payment Methods Section */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
              <h2
                className="text-3xl font-bold"
                style={{ color: colors.secondary }}
              >
                طرق الدفع المتاحة
              </h2>
              <p className="text-lg" style={{ color: colors.text }}>
                نوفر مرونة في الدفع تناسب الجميع في شراء الأثاث المستعمل.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                >
                  {/* Decorative background hover effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${colors.primary}15)`,
                    }}
                  />

                  {method.isNew && (
                    <span
                      className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: colors.primary,
                        color: colors.secondary,
                      }}
                    >
                      قريباً
                    </span>
                  )}

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                    style={{
                      backgroundColor: `${colors.primary}`,
                      color: colors.secondary,
                    }}
                  >
                    <method.icon size={28} />
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 relative z-10"
                    style={{ color: colors.secondary }}
                  >
                    {method.title}
                  </h3>

                  <p
                    className="leading-relaxed relative z-10"
                    style={{ color: colors.text }}
                  >
                    {method.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
