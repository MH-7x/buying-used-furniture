import React from "react";
import { CheckCircle, AlertCircle, TrendingUp, Tag } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const FurniturePriceGuide = () => {
  // Data from your table
  const pricingData = [
    {
      type: "طقم كنب / أرائك",
      condition: "جيدة إلى ممتازة",
      price: "300 – 700",
    },
    {
      type: "طقم غرفة نوم كاملة",
      condition: "جيدة إلى ممتازة",
      price: "500 – 1,200",
    },
    { type: "طاولة طعام مع كراسي", condition: "جيدة", price: "200 – 600" },
    { type: "غسالة ملابس", condition: "تعمل بكفاءة", price: "150 – 400" },
    { type: "ثلاجة", condition: "تعمل بكفاءة", price: "200 – 500" },
    { type: "مكيف هواء", condition: "يعمل بكفاءة", price: "100 – 350" },
    { type: "مكتب عمل أو كرسي مكتب", condition: "جيدة", price: "100 – 300" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="mt-36 grid md:grid-cols-2 grid-cols-1 items-center gap-16 max-w-6xl mx-auto md:px-0 px-4">
        <div>
          <h2 className="md:text-4xl text-3xl text-secondary leading-tight font-bold">
            دليل أسعار الاثاث المستعمل <br className="md:block hidden" />
            في ابوظبي
          </h2>
          <h3 className="mt-8 text-xl font-medium text-muted-foreground">
            كم يساوي اثاثك؟
          </h3>
          <p className="mt-5 md:text-lg text-muted-foreground">
            من أكثر الأسئلة اللي يسألها الناس: كم يساوي أثاثي المستعمل؟ الجواب
            يعتمد على عوامل كثيرة مثل الماركة والحالة وعمر القطعة والطلب في
            السوق. لكن كقاعدة عامة، الأثاث المستعمل بحالة جيدة يُقيّم عادةً
            بحوالي 30% إلى 60% من سعره الأصلي.
          </p>
        </div>
        <div className="bg-muted md:h-[400px] h-80 rounded-3xl relative overflow-hidden">
          <Image
            src={"/loc/دليل-أسعار-الاثاث-المستعمل.jpg"}
            alt="دليل أسعار الاثاث المستعمل
في ابوظبي"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Pricing Table Section */}
      <div className="mt-24 ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-secondary">
              جدول الأسعار التقريبي
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              هذا الجدول يعطيك فكرة تقريبية عن أسعار الاثاث المستعمل في ابوظبي
            </p>
          </div>

          <div className="bg-primary/20 shadow-xl rounded-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider"
                    >
                      نوع الأثاث
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider"
                    >
                      الحالة
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider"
                      dir="ltr"
                    >
                      النطاق السعري (درهم)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pricingData.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50 hover:bg-blue-50 transition-colors"
                      }
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/30 text-secondary">
                          {item.condition}
                        </span>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold text-left"
                        dir="ltr"
                      >
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-primary/30 border-t border-primary">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-600 ml-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-secondary">
                  <strong>ملاحظة هامة:</strong> هذه الأسعار تقريبية وتختلف حسب
                  الماركة والحالة الفعلية. الطريقة الأفضل لمعرفة القيمة الدقيقة
                  هي إرسال صور لنا عبر الواتساب والحصول على تقييم مجاني خلال
                  دقائق.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-secondary border border-gray-200 shadow-sm">
                  قطع ايكيا (IKEA)
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-secondary border border-gray-200 shadow-sm">
                  دانوب (Danube)
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-secondary border border-gray-200 shadow-sm">
                  هوم سنتر (Home Center)
                </span>
                <span className="mr-2 text-sm text-secondary font-medium self-center">
                  عادةً تحصل على تقييمات أعلى بسبب الطلب الكبير عليها.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Process Section */}
      <div className="mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-secondary mb-6">
                طريقتنا في تقييم الاثاث المستعمل
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                تعتمد طريقتنا على عدة عوامل لضمان السعر العادل لك وللمشتري
                القادم. نحن صريحين مع عملائنا في شرح كيف وصلنا للسعر المعروض.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary text-secondary">
                      <Tag className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium text-secondary">
                      الماركة الأصلية وسمعتها
                    </h4>
                    <p className="mt-2 text-base text-muted-foreground">
                      العلامات التجارية المعروفة تحتفظ بقيمتها بشكل أفضل في
                      السوق.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary text-secondary">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium text-secondary">
                      الحالة الفعلية
                    </h4>
                    <p className="mt-2 text-base text-muted-foreground">
                      نقوم بفحص القطعة بحثاً عن خدوش، كسور، أو بقع. النظافة
                      والمتانة أساس التقييم.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-primary text-secondary">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mr-4">
                    <h4 className="text-lg font-medium text-secondary">
                      عمر القطعة والطلب في السوق
                    </h4>
                    <p className="mt-2 text-base text-muted-foreground">
                      كلما كان التصميم حديثاً ومطلوباً، ارتفع السعر. العوامل
                      مجتمعة تحدد السعر العادل.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Letter Placeholder */}
            <div className="mt-10 lg:mt-0 relative">
              <div className="absolute inset-0 bg-primary/50 transform translate-x-4 translate-y-4 rounded-2xl"></div>
              <div className="relative overflow-hidden bg-white border border-gray-200 p-8 rounded-2xl shadow-lg md:min-h-[400px] h-80">
                <Image
                  src={"/loc/طريقتنا-في-تقييم-الاثاث-المستعمل.jpg"}
                  alt="طريقتنا في تقييم الاثاث المستعمل"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion / CTA */}
      <div className="bg-secondary mt-24 max-w-6xl rounded-3xl mx-auto">
        <div className=" py-16 px-4  lg:p-16 ">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">نقدر نقول لك بصراحة:</span>
            </h2>
            <p className="mt-4 md:text-lg text-gray-300 max-w-3xl">
              لو أثاثك من ماركة معروفة وبحالة ممتازة ومع أوراقه الأصلية، راح
              تحصل على أفضل سعر ممكن. أما لو القطعة قديمة ومتضررة، السعر بيكون
              أقل – لكن في كل الأحوال نعطيك عرض عادل ومبني على أسس واضحة.
            </p>
          </div>
          <div className="md:mt-8 mt-16 flex gap-5 flex-wrap ">
            <Button whatsapp size={"lg"}>
              تواصل عبر الواتساب للتقييم
            </Button>
            <Button
              call
              size={"lg"}
              variant={"ghost"}
              className="text-primary hover:text-secondary underline underline-offset-4 "
            >
              احسب قيمة أثاثك
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FurniturePriceGuide;
