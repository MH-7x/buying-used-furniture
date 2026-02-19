import {
  Clock,
  ShieldCheck,
  Sparkles,
  Tag,
  TrendingUp,
  Truck,
} from "lucide-react";
import Image from "next/image";

const PriceDeterminationAbuDhabi = () => {
  return (
    <div className="mt-36 rounded-3xl shadow-xl bg-white overflow-hidden max-w-6xl mx-auto">
      <div className="lg:grid mg:grid-cols-2 grid-cols-1">
        {/* Content Side */}
        <div className="py-12 px-6 md:px-12">
          <div>
            <h3 className="md:text-4xl text-3xl font-bold text-secondary mb-4">
              أسعار الاثاث المستعمل في الشارقة - كيف نقيّم أثاثك؟
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              من أكثر الأسئلة اللي توصلنا: كم سعر أثاثي المستعمل؟ الجواب يعتمد
              على عدة عوامل، ونحن نشرحها لك بكل شفافية:
            </p>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-10">
              {/* Brand */}
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                  <Tag className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">
                    العلامة التجارية
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    أثاث IKEA مثلاً يختلف سعره عن أثاث Home Centre أو Royal
                    Furniture. الماركات المعروفة بجودتها تحتفظ بقيمة أعلى في
                    السوق.
                  </p>
                </div>
              </div>

              {/* Age */}
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">عمر الأثاث</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    طبيعي، كل ما كان الأثاث أحدث كل ما كان سعره أعلى. لكن بعض
                    القطع الكلاسيكية ممكن تحتفظ بقيمتها لفترة طويلة لو كانت
                    بحالة ممتازة.
                  </p>
                </div>
              </div>

              {/* Condition */}
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">
                    الحالة الفعلية
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    هل في خدوش؟ كسور؟ بقع؟ كل ما كانت القطعة نظيفة وسليمة، كل ما
                    ارتفع سعرها. ونصيحة: نظف أثاثك وأصلح الأشياء البسيطة قبل ما
                    تتواصل معنا — هذا ممكن يرفع السعر بشكل ملحوظ.
                  </p>
                </div>
              </div>

              {/* Demand */}
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">
                    الطلب في السوق
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    بعض القطع عليها طلب أكثر من غيرها. مثلاً، الكنب والمجالس
                    والأسرّة دائماً مطلوبة. بينما بعض القطع المتخصصة ممكن يكون
                    طلبها أقل.
                  </p>
                </div>
              </div>

              {/* Size/Weight (optional) */}
              <div className="flex gap-4">
                <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">
                    الحجم والوزن
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    القطع الكبيرة والثقيلة تكلفة نقلها أعلى، وهذا يدخل في حساب
                    السعر أحياناً خاصةً إذا كانت التفكيك أو النقل معقد.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust / company difference */}
            <div className="mt-8 bg-primary/50 border border-primary rounded-xl p-5 flex gap-4 items-start">
              <ShieldCheck className="w-8 h-8 text-secondary shrink-0" />
              <div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  نحن نعمل بمعايير واضحة: كل قطعة تمر بفحص احترافي وتعقيم
                  وتجديد، ونقدم ضمان وإمكانية إرجاع ضمن سياستنا. هذا يمنحك راحة
                  بال ما تلاقيه بسهولة عند محلات البيع التقليدية.
                </p>
              </div>
            </div>

            <p className="text-slate-600 mt-6 leading-relaxed">
              لو تبي تقييم سريع: أرسل لنا صور القطع على الواتساب مع تفاصيل قصيرة
              عن العلامة والعمر والحالة، ونرد عليك بعرض واضح وسريع.
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="aspect-video bg-muted overflow-hidden relative">
          <Image
            src={"/loc/عملية-تسعير-الأثاث-المستعمل.jpg"}
            alt="عملية تسعير الأثاث المستعمل"
            fill
            className="object-center object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceDeterminationAbuDhabi;
