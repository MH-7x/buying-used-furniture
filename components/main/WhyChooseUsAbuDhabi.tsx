import {
  ShieldCheck,
  Truck,
  Scale,
  Search,
  Sparkles,
  CheckCircle2,
  History,
  Gem,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const WhyChooseUsAbuDhabi = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-secondary to-secondary/90 text-white py-16 px-4 mt-36 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            لماذا نحن أفضل شركة <br />
            شراء اثاث مستعمل في ابوظبي؟
          </h1>
          <div className="w-40 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Intro & Core Value Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder 1 */}
          <div className="relative h-80 md:h-full w-full rounded-2xl overflow-hidden group order-2 lg:order-1">
            <Image
              src={"/loc/شركة-شراء-اثاث-مستعمل.jpg"}
              alt="الاثاث المستعمل في ابوظبي"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className=" p-6 border-b-2 border-primary">
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <Search className="w-6 h-6 text-secondary" />
                واقع السوق
              </h3>
              <p className="text-muted-foreground leading-relaxed ">
                سوق الاثاث المستعمل في ابوظبي فيه خيارات كثيرة. في تجار على
                الشارع، وفي إعلانات مبوبة، وفي شركات نقل تشتري الأثاث كخدمة
                جانبية. لكن المشكلة دائماً واحدة: كيف تعرف أنك حصلت على سعر
                عادل؟ وكيف تضمن أن المعاملة تكون محترمة من أولها لآخرها؟
              </p>
            </div>

            <div className=" p-6 border-b-2 border-primary">
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                الصراحة في التعامل
              </h3>
              <p className="text-muted-foreground leading-relaxed ">
                في شركة شراء اثاث مستعمل، بنينا سمعتنا على أساس بسيط – الصراحة
                في التعامل. ما نقوله على الهاتف هو نفسه ما يحصل عند الباب. لا
                مفاجآت ولا تغيير في السعر بعد المعاينة. وهذا الشيء تعلمناه من 10
                سنوات خبرة في السوق الإماراتي، مع آلاف العملاء في الشارقة ودبي
                وابوظبي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5-Step System Section */}
      <section className=" py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary font-medium bg-primary/50 py-2 px-4 rounded-2xl tracking-wider uppercase text-sm">
              الجودة مضمونة
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-4">
              نظام فحص من 5 خطوات
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
              كل قطعة أثاث نشتريها تمر بفحص احترافي يشمل تقييم الحالة العامة،
              وفحص الهيكل والأخشاب، وتقدير العمر المتبقي للاستخدام، ثم الإصلاح
              والتلميع إذا لزم الأمر، وأخيراً التعقيم الكامل للمفروشات القماشية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="bg-primary/30 p-5 rounded-2xl text-center  flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mb-4">
                <Search size={24} />
              </div>
              <h4 className="font-medium text-secondary">
                تقييم الحالة العامة
              </h4>
            </div>

            {/* Step 2 */}
            <div className="bg-primary/30 p-5 rounded-2xl text-center  flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mb-4">
                <Gem size={24} />
              </div>
              <h4 className="font-medium text-secondary">
                فحص الهيكل والأخشاب
              </h4>
            </div>

            {/* Step 3 */}
            <div className="bg-primary/30 p-5 rounded-2xl text-center  flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mb-4">
                <History size={24} />
              </div>
              <h4 className="font-medium text-secondary">
                تقدير العمر المتبقي للاستخدام
              </h4>
            </div>

            {/* Step 4 */}
            <div className="bg-primary/30 p-5 rounded-2xl text-center  flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h4 className="font-medium text-secondary">
                الإصلاح والتلميع إذا لزم الأمر
              </h4>
            </div>

            {/* Step 5 */}
            <div className="bg-primary/30 p-5 rounded-2xl text-center  flex flex-col items-center">
              <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-medium text-secondary">
                التعقيم الكامل للمفروشات القماشية
              </h4>
            </div>
          </div>

          <div className="mt-10 text-center bg-primary/30 p-6 rounded-2xl border border-primary max-w-4xl mx-auto">
            <p className="text-secondary font-medium text-lg">
              هذا النظام يعني أن البائع يحصل على سعر يعكس القيمة الحقيقية،
              والمشتري يحصل على قطعة يثق فيها.
            </p>
          </div>
        </div>
      </section>

      {/* The USP (Warranty) Section */}
      <section className="py-16 bg-primary  relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-10 h-10 text-secondary" />
              <h3 className="text-3xl font-bold text-secondary">
                الضمان وسياسة الإرجاع
              </h3>
            </div>
            <p className="text-secondary/90 text-lg leading-relaxed mb-6 mt-5">
              وأهم ما يميزنا عن أي شركة شراء اثاث مستعمل في ابوظبي هو أننا نقدم
              ضمان وسياسة إرجاع على كل قطعة نبيعها. هذا ليس كلام تسويقي – هذه
              سياسة فعلية تحمي المشتري وتعطيه راحة بال حقيقية. لا يوجد منافس
              واحد في السوق يقدم هذا الالتزام.
            </p>
          </div>

          {/* Image Placeholder 2 */}

          <div
            className="w-full relative md:h-96 h-80 bg-muted
               rounded-2xl "
          >
            <Image
              src={"/loc/أفضل-شركة-لشراء-الأثاث-المستعمل.jpg"}
              alt=" أفضل شركة لشراء الأثاث المستعمل"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 right-8 bg-secondary/50 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg">
              <span className="block font-bold text-xl">ضمان</span>
              <span className="text-sm">حقيقي 100%</span>
            </div>
          </div>
          {/* Badge */}
        </div>
      </section>

      {/* Transport & Expertise Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Transport Card */}
          <div className="bg-white p-8 rounded-2xl ">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-secondary">
              <Truck size={32} />
            </div>
            <h3 className="text-2xl font-medium text-secondary mb-4">
              خدمة النقل الآمن المعتمد
            </h3>
            <p className="text-gray-600 leading-relaxed">
              يعني فريقنا يحمي الممرات والمصاعد والأبواب أثناء نقل الأثاث. شركات
              النقل الصغيرة قد تسبب خدوش وأضرار للعقار، لكن مع فريقنا، هذا لا
              يحصل. نتعامل مع أثاثك وعقارك باحترام كامل.
            </p>
          </div>

          {/* Specialization Card */}
          <div className="bg-white p-8 rounded-2xl ">
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6 text-secondary">
              <Scale size={32} />
            </div>
            <h3 className="text-2xl font-medium text-secondary mb-4">
              تخصص، وليس خدمة جانبية
            </h3>
            <p className="text-gray-600 leading-relaxed">
              نقطة أخيرة مهمة: نحن لسنا شركة نقل تشتري أثاث كخدمة جانبية. نحن
              شركة متخصصة في تجارة الأثاث المستعمل. هذا معناه أننا نفهم القيمة
              السوقية لكل قطعة. ما نبخسك حقك كبائع، وما نبالغ في السعر على
              المشتري.
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-2xl font-light text-secondary">
            &quot;هذا التوازن هو اللي خلى آلاف العملاء يثقون فينا على مدار
            السنوات.&quot;
          </p>
          <div className="mt-8">
            <Button variant={"secondary"} size={"lg"}>
              تواصل معنا الآن
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUsAbuDhabi;
