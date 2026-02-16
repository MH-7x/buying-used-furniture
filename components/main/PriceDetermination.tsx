import {
  Clock,
  ShieldCheck,
  Sparkles,
  Tag,
  TrendingUp,
  Truck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const PriceDetermination = () => {
  return (
    <div className="mt-36 rounded-3xl shadow-xl bg-white overflow-hidden max-w-6xl mx-auto">
      <div className="">
        {/* Content Side */}
        <div className="py-12 px-4 p-8 md:p-12 order-2 lg:order-1">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-secondary mb-3">
              كيف نحدد سعر الأثاث؟
            </h2>

            <p className="text-lg font-medium text-slate-800 mb-4 mt-8">
              هذا سؤال يطرحه الجميع.
            </p>
            <p className="text-slate-600">التسعير يعتمد على عدة عوامل:</p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {/* Brand */}
            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                <Tag className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">الماركة</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ماركات مثل IKEA وDanube وHome Centre معروفة وعليها طلب.
                  الماركات الأوروبية والأمريكية الفاخرة سعرها أعلى.
                </p>
              </div>
            </div>

            {/* Condition */}
            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">الحالة</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  هل القطعة نظيفة؟ فيها خدوش أو كسور؟ الأقمشة سليمة؟ كل هذا يؤثر
                  على السعر.
                </p>
              </div>
            </div>

            {/* Age */}
            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">العمر</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  أثاث عمره سنة أو سنتين سعره أفضل من أثاث عمره خمس سنوات أو
                  أكثر.
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
                  بعض القطع عليها طلب عالي وبعضها أقل. مثلاً، غرف النوم الكاملة
                  وأطقم الصوفا الكبيرة عليها طلب دائماً.
                </p>
              </div>
            </div>

            {/* Size/Weight */}
            <div className="flex gap-4">
              <div className="bg-primary p-3 rounded-xl h-fit text-secondary shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">الحجم والوزن</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  القطع الكبيرة والثقيلة تكلفة نقلها أعلى، وهذا يدخل في حساب
                  السعر.
                </p>
              </div>
            </div>
          </div>

          {/* Trust/Fairness Quote */}
          <div className="mt-10 bg-primary/50 border border-primary rounded-xl p-5 flex gap-4">
            <ShieldCheck className="w-8 h-8 text-secondary shrink-0" />
            <p className="text-slate-700 text-sm leading-relaxed italic">
              &quot;نحن ما نحاول نغشك أو نقلل السعر بشكل غير عادل. نعطيك تقييماً
              واقعياً بناءً على ما نعرفه عن السوق. ولو شعرت أن السعر منخفض، نشرح
              لك الأسباب بكل وضوح.&quot;
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

export default PriceDetermination;
